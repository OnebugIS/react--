/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-27 15:20:12
 * @version $Id$
 */

// 项目第一步，首先引入react 和 reactdom 首先将我们写的的组件渲染到浏览器中

import React,{Component} from "react";
import ReactDom from "react-dom";

// 引入我们制定的路由
import router from "./router";


ReactDom.render(router,document.getElementById("box"));







