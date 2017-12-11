/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:22:41
 * @version $Id$
 */

import React,{Component} from "react"
import "./index.scss"
import {connect} from "react-redux";
import _ from "lodash";

class Cart extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}

	componentWillMount() {
		
	}
  
	render(){
		var self = this;

		var allprice=0;
		var arr=self.props.cart;
		for(var i=0;i<arr.length;i++){
			allprice+=arr[i].num * arr[i].price;
		}

		return (
			<div>
				<div id="carthead">
					<p>欢迎来到欲望之都</p>
				</div>
				<div id="cartlist">
					<ul>
						{
							self.props.cart.map((item,index)=>
								<li key={index}  >

									<div className="divleft">
										<img src={item.img}/>
									</div>
									<div className="divright">
										<h3 >{item.name}</h3>
										<p><span className="span1">￥<i>{item.price}</i></span><span className="span2">数量<i>{item.num}</i></span></p>
										<div className="divchl">
											<span onClick={(e)=>{
												var productName=e.target.parentNode.parentNode.children[0].innerHTML;
												var myLi=e.target.parentNode.parentNode.parentNode;
												
												 myLi.remove()
												var newCart=this.props.cart;
												var myIndex=_.findIndex(newCart,{name:productName});
												newCart.splice(myIndex,1);
												this.props.Cart(newCart);

											}}>删除</span>
											<span onClick={(e)=>{
												var productName=e.target.parentNode.parentNode.children[0].innerHTML;
												var pNum=e.target.parentNode.parentNode.children[1].children[1].children[0];
												if(pNum.innerHTML*1<=0){
													pNum.innerHTML==0
												}else{
													pNum.innerHTML=pNum.innerHTML*1-1;
												}
												var newCart=this.props.cart;
												var myIndex=_.findIndex(newCart,{name:productName});
												newCart[myIndex].num=newCart[myIndex].num-1;
												this.props.Cart(newCart);


											}}> - </span>
											<span onClick={(e)=>{
												var productName=e.target.parentNode.parentNode.children[0].innerHTML;

												var pNum=e.target.parentNode.parentNode.children[1].children[1].children[0];
												pNum.innerHTML=pNum.innerHTML*1+1;
												var newCart=this.props.cart;
												
												var myIndex=_.findIndex(newCart,{name:productName});
												newCart[myIndex].num=newCart[myIndex].num+1;
												this.props.Cart(newCart);

											}}> + </span>
										</div>
									</div>									
								</li>
							)
						}
					</ul>
				</div>

				{
				//	<div id="all">
					
				//	<p>总价 : <span>{allprice}</span>元</p>
									
				//</div>

			}

			</div>

			)
	}
}

export default connect(

	(state)=>{
		console.log(state.cart)
		return {
			cart:state.cart
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

	)(Cart);









