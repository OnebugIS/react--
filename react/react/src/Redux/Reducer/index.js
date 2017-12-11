/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-28 14:20:31
 * @version $Id$
 */


const imgsrc = (state=[],info)=>{
	let {type ,payload} = info;
	switch(type){
		case "imgsrc":
			return [...payload];
		default :
			return state;
	}
	return state;
}



const intro = (state="",info)=>{
	let {type ,payload} = info;
	switch(type){
		case "intro":
			return payload;
		default :
			return state;
	}
	return state;
}
const winter = (state="",info)=>{
	let {type ,payload} = info;
	switch(type){
		case "winter":
			return payload;
		default :
			return state;
	}

}

const  renqilist= (state=[],info)=>{
	let {type ,payload} = info;
	switch(type){
		case "renqilist":
			return [...payload];
		default :
			return state;
	}

}


const  myshop= (state=null,info)=>{
	let {type ,payload} = info;
	switch(type){
		case "myshop":
			return payload;
		default :
			return state;
	}
}

const  comment= (state=[],info)=>{
	let {type ,payload} = info;
	switch(type){
		case "comment":
			return [...payload];
		default :
			return state;
	}

}


const  cart= (state=[],info)=>{
	let {type ,payload} = info;
	switch(type){
		case "cart":
			return payload;
		default :
			return state;
	}
}



const detailId = (state="",info)=>{
	let {type ,payload} = info;
	switch(type){
		case "detailId":
			console.log(payload);
			return payload;
		default :
			return state;
	}

}



export {imgsrc,intro,winter,renqilist,myshop,comment,cart,detailId};







