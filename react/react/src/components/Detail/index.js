/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss";
// 首先引入react-redux这个文件
import {connect} from "react-redux";

import {NavLink} from "react-router-dom";
import axios from "axios";


class Detail extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	componentWillMount() {
		var shopid=this.props.children._owner._currentElement.props.computedMatch
.params.leleid;
		
		console.log(shopid)
		this.props.Shop(shopid);
		this.props.ShopComment(shopid);
	}
	render(){
		return (
			<div>
				<div id="head">
					<div className="headsChild">
						<p>
							<i className="iconfont icon-jiantou-left"></i>
						</p>
						<ul>
							<li>
								<NavLink to="/detail/shop" className="nav" activeClassName="actives">
									商品
								</NavLink>
							</li>
							<li>
								<NavLink to="/detail/xiangqing" className="nav" activeClassName="actives">
									详情
								</NavLink>
							</li>
							<li>
								<NavLink to="/detail/comment" className="nav" activeClassName="actives">
									评论
								</NavLink>
							</li>
						</ul>
						<p>
							<i className="iconfont icon-sangedian"></i>
						</p>
					</div>
				</div>


				{this.props.children}

				
			</div>
			)
	}
}

export default connect(
	null
	,
	{
		Shop:(shopid)=>{
			console.log(shopid)
			return axios.get(`/v3/product/detail?store_id_list=2&product_id=${shopid}&store_id=2&delivery_code=9`).then(res=>{
				return {
					type:"myshop",
					payload:res.data.data
				}
			})
		},
		ShopComment:(shopid)=>{
			return axios.get(`/v3/comment/rate_and_comment?product_id=${shopid}`).then(res=>{
				
				return {
					type:"comment",
					payload:res.data.data.data,
				}
			})
		}
	}

	)(Detail);









