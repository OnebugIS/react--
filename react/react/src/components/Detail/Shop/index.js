/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss"
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';
import "@/assets/iconfont/iconfont.css";
import _ from "lodash";


class Shop extends Component{
	constructor(){
		super();
		this.state={
			shop:[],
			comment:[],
		}
	}
	componentWillMount() {

		axios.get(`/v3/product/detail?store_id_list=2&product_id=26914&store_id=2&delivery_code=9`).then(res=>{
			
			this.setState({
				shop:res.data.data.templatePhoto,
			})
		})
		
		axios.get(`/v3/comment/rate_and_comment?product_id=26914`)

	}
	render(){

			if(this.props.banner === null){
				return null;
			}else{
				var mybanner=this.props.banner.templatePhoto
			}



		return (
			<div>
				<div id="shopbanner">
					<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000}} key={this.props.banner.templatePhoto.length}>
					    {	
					    	this.props.banner.templatePhoto.map(item=>
				    			<div key={item.id}>
				    				<img src={item.image}/>
				    			</div>
					    	)
					    }  
					</ReactSwipe>
				</div>

				<div id="productIntro">
					<h3>{this.props.banner.productInfo.product_name
}</h3>
					<p>{this.props.banner.productInfo.product_desc}</p>
					<div className="price">
						￥<span>{this.props.banner.productInfo.price}</span>
					</div>
					<h4>{this.props.banner.sendTimeMsg}</h4>
					<h5>{this.props.banner.productInfo.op_weight}</h5>
				</div>


				<div id="address">
					<p><span>送至</span>九堡镇</p>
				</div>

				<div id="comment">
					<ul>
					{
						this.props.comment.length!=0?this.props.comment.map(item=>
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
							)
							
						:null
					}
					</ul>
				</div>

				<div id="foots">
					<p className="foot1" onClick={this.handelCart.bind(this)}>
						<i className="iconfont icon-gouwuche"></i>
					</p>
					<p className="foot2" onClick={this.handelClick.bind(this)}>加入购物车</p>
				</div>
			</div>
			)
	}

	handelCart(){
		this.props.history.push(`/cart`);
	}

	handelClick(){

		var produceIntro=this.props.banner;
		var productName=produceIntro.productInfo.product_name;
		var productImg=produceIntro.templatePhoto[0].image;
		var productPrice=produceIntro.productInfo.price;
		var newCart=this.props.cart;
		var myIndex=_.findIndex(newCart,{name:productName});
		
		if(myIndex!=-1){
			newCart[myIndex].num=newCart[myIndex].num+1;
		}else{
			newCart.push({name:productName,img:productImg,price:productPrice,num:1});
		}
		
		this.props.Cart(newCart);

	}

}

export default connect(

	(state)=>{
		
		return {
			cart:state.cart,
			banner:state.myshop,
			comment:state.comment,
		}
	}
	,
	{
		Cart:(obj)=>{
			return {
				type:"cart",
				payload:obj
			}
		}
	}
	)(Shop);





