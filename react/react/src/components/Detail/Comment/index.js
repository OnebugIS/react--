/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss"
import {connect} from "react-redux";
import axios from "axios";



class Comment extends Component{
	constructor(){
		super();
		this.state={
			count:1,
			datalist:[],
		}
	}
	componentWillMount() {
		console.log(this.props.detailId)
		axios.get(`/v3/comment/list_by_product_id?product_id=${this.props.detailId}&curr_page=${this.state.count}&num_per_page=20&limit=20&show=1`).then(res=>{
			console.log(res.data.data);
			this.setState({
				datalist:res.data.data
			})
		})

	}
	componentDidMount(){
		window.onscroll = function () {
           // 变量t就是滚动条滚动时，到顶部的距离
           const t = document.documentElement.scrollTop || document.body.scrollTop;
           const top_view = document.getElementById('top_view');
           if (top_view !== null) {
               top_view.style.display = t >= 100 ? 'block' : 'none';
           }
		 };
	}

	render(){

		return (
			<div>
				<div id="commenthead">
					欢迎来到吐槽大会
				</div>

				<div id="commentCon">
					<ul>
						{

							this.state.datalist.length!=0?this.state.datalist.map(item=>
								<li key={item.id}>
									<div className="comment1">
										<img src={item.userface}/>
										<h4>{item.user_name}</h4>
										<p>{item.time}</p>

									</div>
									<div className="comment2">
										<p>
											<span>口感{item.star_eat}</span>
											<span>颜值{item.star_show}</span>
										</p>
									</div>
									<p>
										{item.content}
									</p>
								</li>
								):<p>加载数据中，请等待......</p>
						}
					</ul>
				</div>

				<div id="nextpage" onClick={this.handelMore.bind(this)}>
					<p>点击看更多</p>
				</div>

			</div>
			)
	}
	handelMore(){
		var numPage=this.state.count+1;		
		axios.get(`/v3/comment/list_by_product_id?product_id=${this.props.detailId}&curr_page=${numPage}&num_per_page=20&limit=20&show=1`).then(res=>{			
			this.setState({
				datalist:res.data.data
			})
		})
		window.scrollTo(0, 0);
	}
}

export default connect(
		(state)=>{
			return {
				detailId:state.detailId,
			}
		},
		null
	)(Comment);









