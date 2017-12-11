/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 16:21:03
 * @version $Id$
 */
// 制作路由，首先引入，react和react-router-dom;
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";


// 引入我们定义的模块
import App from '../components/App';
import Home from '../components/Home';
import List from '../components/List';
import Cart from '../components/Cart';
import Myself from '../components/Myself';
import Detail from '../components/Detail';
import Comment from '../components/Detail/Comment';
import Xiangqing from '../components/Detail/Xiangqing';
import Shop from '../components/Detail/Shop';

import {Provider}  from "react-redux";
import store  from "../Redux/Store";



const router=(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/list" component={List}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/myself" component={Myself}/>
					<Route path="/detail/:leleid" render={()=>
						<Detail>
							<Switch>
								<Route path="/detail/comment" component={Comment}/>
								<Route path="/detail/xiangqing" component={Xiangqing}/>
								<Route path="/detail/shop" component={Shop}/>
								<Redirect from="/detail" to="/detail/shop"></Redirect>
							</Switch>
						</Detail>
					}/>
					<Redirect from="*" to="/home"></Redirect>
				</Switch>
			</App>
		</Router>
	</Provider>
	)


// 暴露我们定义的路由

export default router;


















