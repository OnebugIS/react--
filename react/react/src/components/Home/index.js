/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import ReactSwipe from 'react-swipe';
import axios from "axios";

import {connect} from "react-redux";
//首先引入Navlink, 


import "./index.scss"
import "@/assets/iconfont/iconfont.css";

// 引入静态资源
import logo from "@/assets/logo.png"
import rice1 from "@/assets/rice1.jpg"
import rice2 from "@/assets/rice2.jpg"
import rice3 from "@/assets/rice3.jpg"

class Home extends Component{
	constructor(){
		super();
		this.state={
			shuiguoTitle:"",
			shuiguo:[],
			shengxianTitle:"",
			shengxian:[],
			xinpinTitle:"",
			tianxin:[],
			xinpin:[],
			jingxuanTitle:"",
			huoguoImg:"",
			huoguo:[],
			zishuImg:"",
			zishu:[],
			renqiTitle:"",
		}
	}
	componentWillMount() {	
		console.log(1111)
		console.log(this.props.history);
		axios.get(`/v3/ad/homepage?connect_id=lv49uua38utd49j6lrhcpejko2&type=0&lonlat=120.26445%2C30.3054&ad_code=330104&tab_id=`).then(res=>{
			
			this.setState({
				shuiguoTitle:res.data.data.banner.mainBanners[6].content[0].title,
				shuiguo:res.data.data.banner.mainBanners[8].content,
				shengxianTitle:res.data.data.banner.mainBanners[9].content[0].title,
				shengxian:res.data.data.banner.mainBanners[10].content,
				xinpinTitle:res.data.data.banner.mainBanners[11].content[0].title,
				tianxin:res.data.data.banner.mainBanners[12].content,
				xinpin:res.data.data.banner.mainBanners[13].content,
				jingxuanTitle:res.data.data.banner.mainBanners[15].content[0].title,
				huoguoImg:res.data.data.banner.mainBanners[16].content[0].image,
				huoguo:res.data.data.banner.mainBanners[17].content,
				zishuImg:res.data.data.banner.mainBanners[25].content[0].image,
				zishu:res.data.data.banner.mainBanners[26].content,
				renqiTitle:res.data.data.banner.mainBanners[30].content[0].title,
			})
		})

		this.props.Imgsrc();
		this.props.Intro();
		this.props.Winter();
		
		if(this.props.renqilist.length==0){
			this.props.renqiList();
		}
		
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
		 
		 window.scrollTo(0, 0);
	}

	SeachClick(){
		this.props.history.push(`/list`);
	}

	render(){
		return (
			<div>
				
				<div id="heads">
					<ul>
						<li className="p1"><img src={logo} /><span>九堡镇</span></li>
						<li onClick={this.SeachClick.bind(this)}><i className="iconfont icon-search"></i></li>
					</ul>
				</div>

				<div id="banner">
					<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:3000}} key={this.props.imgsrc.length}>
					    {	
					    	this.props.imgsrc.length!=0?this.props.imgsrc.map(item=>
					    		<div key={item.banner_ad_id}>
					    			<img src={item.image}/>
					    		</div>
					    	):null
					    }  
					</ReactSwipe>
				</div>

				<div id="intro"> 
					<img src={this.props.intro}/>
				</div>

				<div id="winter">
					<img src={this.props.winter}/>
				</div>

				<div id="shuiguo">
					<h3>{this.state.shuiguoTitle}</h3>
				</div>
				<div id="shuiguoIntro">
					<ul>
						{
							this.state.shuiguo.map(item=>
								<li key={item.banner_ad_id}>
									<div className="div1">
										<img src={item.image}/>
									</div>
									<p>{item.title}</p>
									<div className="div2">
										<span>￥{item.price}/{item.volume}</span>
										<i className="iconfont icon-jiahao"></i>
									</div>
								</li>
								)
						}
					</ul>
				</div>

				<div id="shengxian">
					<h3>{this.state.shengxianTitle}</h3>
				</div>

				<div id="shengxianIntro">
					<ul>
						{
							this.state.shengxian.map(item=>
								<li key={item.banner_ad_id}>
									<div className="div1">
										<img src={item.image}/>
									</div>
									<p>{item.title}</p>
									<div className="div2">
										<span>￥{item.price}/{item.volume}</span>
										<i className="iconfont icon-jiahao"></i>
									</div>
								</li>
								)
						}
					</ul>
				</div>

				<div id="xinpin">
					<h3>{this.state.xinpinTitle}</h3>
				</div>

				<div id="tianxin">
					{
						this.state.tianxin.map(item=>

								<div key={item.banner_ad_id} className="tianchl">
									<div className="left">
										<img src={item.image}/>
									</div>
									<div className="right">
										<h3>{item.title}</h3>
										<p className="p1">￥{item.subtitle}</p>
										<p className="p2">
											<span>{item.price}/{item.volume}</span>
											<i className="iconfont icon-jiahao"></i>
										</p>
									</div>
								</div>
							)
					}
				</div>

				<div id="xinpinIntro">
					<ul>
						{
							this.state.xinpin.map(item=>
								<li key={item.banner_ad_id}>
									<div className="div1">
										<img src={item.image}/>
									</div>
									<p>{item.title}</p>
									<div className="div2">
										<span>￥{item.price}/{item.volume}</span>
										<i className="iconfont icon-jiahao"></i>
									</div>
								</li>
								)
						}
					</ul>
				</div>

				<div id="rice">
					<div className="left1">
						<img src={rice1}/>
					</div>
					<div className="right1">
						<img src={rice2}/>
						<img src={rice3}/>
					</div>
				</div>

				<div id="jingxuan">
					<h3>{this.state.jingxuanTitle}</h3>
				</div>	

				<div id="huoguoImg">
					<img src={this.state.huoguoImg}/>
				</div>
				<div id="huoguoIntro">
					<ul>
						{
							this.state.huoguo.map(item=>
								<li key={item.banner_ad_id}>
									<div className="div1">
										<img src={item.image}/>
									</div>
									<p>{item.title}</p>
									<div className="div2">
										<span>￥{item.price}/{item.volume}</span>
										<i className="iconfont icon-jiahao"></i>
									</div>
								</li>
								)
						}
					</ul>
				</div>

				<div id="zishuImg">
					<img src={this.state.zishuImg}/>
				</div>

				<div id="zishuIntro">
					<ul>
						{
							this.state.zishu.map(item=>
								<li key={item.banner_ad_id}>
									<div className="div1">
										<img src={item.image}/>
									</div>
									<p>{item.title}</p>
									<div className="div2">
										<span>￥{item.price}/{item.volume}</span>
										<i className="iconfont icon-jiahao"></i>
									</div>
								</li>
								)
						}
					</ul>
				</div>

				<div id="renqi">
					<h3>{this.state.renqiTitle}</h3>
				</div>

				{
					//人气列表
				}

				<div id="renqiList">
					<ul key={this.props.renqilist.length}>
						{
							this.props.renqilist.length !=0 ? this.props.renqilist.map(item=>
								<li key={item.banner_ad_id} onClick={this.handelClick.bind(this,item.target_id)}>
									<div className="rendiv1">
										<img src={item.image}/>
									</div>
									<div className="rendiv2">
										<h3>{item.title}</h3>
										<p className="renp1">{item.subtitle}</p>
										<p className="renp2">
											<span>￥{item.price}/{item.volume}</span>
											<i className="iconfont icon-jiahao"></i>
										</p>
									</div>
								</li>
							):null
						}
					</ul>
				</div>
			</div>
			)
	}

	handelClick(id){
		this.props.DetailId(id)
		this.props.history.push(`/detail/${id}`);


	}

}

export default connect(
	(state)=>{
		return {
			imgsrc:state.imgsrc,
			intro:state.intro,
			winter:state.winter,
			renqilist:state.renqilist,
		}
	}
	,
	{
		Imgsrc:()=>{
			return axios.get(`/v3/ad/homepage?connect_id=lv49uua38utd49j6lrhcpejko2&type=0&lonlat=120.26445%2C30.3054&ad_code=330104&tab_id=`).then(res=>{
		    	return {
		    		type:"imgsrc",
		    		payload:res.data.data.banner.mainBanners[0].content
		    	}
			})
		},
		Intro:()=>{
			return axios.get(`/v3/ad/homepage?connect_id=lv49uua38utd49j6lrhcpejko2&type=0&lonlat=120.26445%2C30.3054&ad_code=330104&tab_id=`).then(res=>{
		    	return {
		    		type:"intro",
		    		payload:res.data.data.banner.mainBanners[1].content[0].image,
		    	}
			})
		},
		Winter:()=>{
			return axios.get(`/v3/ad/homepage?connect_id=lv49uua38utd49j6lrhcpejko2&type=0&lonlat=120.26445%2C30.3054&ad_code=330104&tab_id=`).then(res=>{
		    	return {
		    		type:"winter",
		    		payload:res.data.data.banner.mainBanners[5].content[0].image,
		    	}
			})
		},
		renqiList:()=>{
			return axios.get(`/v3/ad/homepage?connect_id=lv49uua38utd49j6lrhcpejko2&type=0&lonlat=120.26445%2C30.3054&ad_code=330104&tab_id=`).then(res=>{
		    	
		    	return {
		    		type:"renqilist",
		    		payload:res.data.data.banner.mainBanners[30].content,
		    	}
			})
		},
		DetailId:(id)=>{
			return {
				type:"detailId",
				payload:id,
			}
		}
	}

	)(Home);









