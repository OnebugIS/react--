/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-28 14:20:45
 * @version $Id$
 */

// 在此处接受reducer过滤好的数据
// 首先引入redux模块其中创建store的方法,同时引入applyMiddleware来使用thunk
// 模块，处理兼容问题

import {createStore,combineReducers,applyMiddleware} from "redux";

// 引入reducer 计算好的数据,
// 接口暴露多少我们就要在此处接受多少个
import {imgsrc,intro,winter,renqilist,myshop,comment,cart,detailId} from "../Reducer";

import thunk from "redux-thunk";
import promise from "redux-promise";

import logger from 'redux-logger';


// 这个时候就会遇到一个新的问题，就是创建store的问题，只能创建一个，这个时候
// 就需要引入redux中的一个方法


const store = createStore(combineReducers({
  imgsrc:imgsrc,
  intro,
  winter,
  renqilist:renqilist,
  myshop,
  comment,
  cart,
  detailId,

}),applyMiddleware(thunk,promise,logger));


export default store;


