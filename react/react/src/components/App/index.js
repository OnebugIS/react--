/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom";
class App extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	render(){
		return (
			<div>
				{
					this.props.children
				}
				<div id="foot">
					<ul>
						<li>
							<NavLink to="/home" className="nav" activeClassName="active">
								<i className="iconfont icon-shouye"></i>
								<span>首页</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/list" className="nav" activeClassName="active">
								<i className="iconfont icon-fenlei-copy-copy"></i>
								<span>分类</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className="nav" activeClassName="active">
								<i className="iconfont icon-gouwuche"></i>
								<span>购物车</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/myself" className="nav" activeClassName="active">
								<i className="iconfont icon-wode"></i>
								<span>我的</span>
							</NavLink>
						</li>
					</ul>
				</div>

			</div>
			)
	}
}

export default App;









