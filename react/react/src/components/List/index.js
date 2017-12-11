/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss"
import axios from "axios";
import "@/assets/iconfont/iconfont.css";


class List extends Component{
	constructor(){
		super();
		this.state={
			searchlist:[],

		}
	}
	handelClick(event){
		var texts=encodeURI(event.target.value)

		axios.get(`/v3/search/product?keyword=${texts}&store_id_list=2&tms_region_type=1&page_size=50&curr_page=1`).then(res=>{
				console.log(res.data.data)
			this.setState({
				searchlist:res.data.data
			})
		})
	}
	render(){
		return (
			<div>
				<div id="search">
					<p>返回</p>
					<p>
						<input type="text" placeholder="请输入搜索内容" onChange={this.handelClick.bind(this)}/>
					</p>
					<p>搜索</p>
				</div>

				<div id="shoplist">
					<ul>
						{
							this.state.searchlist.length!=0?this.state.searchlist.map(item=>
								<li key={item.id}>
									<div className="listleft">
										<img src={item.photo}/>
									</div>
									<div className="listright">
										<h4>{item.product_name}</h4>
										<p className="intro">{item.product_desc}</p>
										<p className="jin">{item.volume}</p>
										<div className="listdiv">
											<p className="listp1">￥<span>{item.price}</span></p>
											<p className="listp2">明日达</p>
											<p className="listp3"><i className="iconfont icon-jiahao"></i></p>
										</div>
									</div>

								</li>
								):null
						}
					</ul>
				</div>

			</div>
			)
	}
}


export default List;









