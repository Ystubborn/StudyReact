import React,{Fragment} from "react";
import ReactDOM from "react-dom";

//组件
import abc,{string,number} from "prop-types";
// import "./assets/base.css"
//Fragments可以让你聚合一个子元素列表，并且不在DOM中增加额外节点
//ReactDOM.render("1111111",document.getElementById("app"));

// const element=<h1 id="box" title="hello">hello,world</h1>;
// const element=React.createElement(
//   "h1",
//   {id："box",title:"hello"},
//   "Hello,world"
// );

// const element=React.createElement("h1",{ id:"box", title:"hello"},[
// React.createElement("span",null,"hello"),
// React.createElement("p",null,"world"),
// ])

// ReactDOM.render(
// <React.Fragment>
//     <h1>我的天</h1>
//     <button>点我</button>
//   </React.Fragment>,
//   document.getElementById("app")
// )

// ReactDOM.render(
//   <Fragment>
//     <div style={{color:'red'}}>box</div>
//   </Fragment>,
//     document.getElementById("app")
// )

// let name="张三";
// ReactDOM.render(
//   <Fragment>
//     <h1 className="box">我的天</h1>
//     <p style={{color:"green",fontSize:"20px"}}>哇大大大</p>
//     <button>点击{name}</button>
//     <br/>
//     <label htmlFor="abc">abc</label>
//     <input type="text" id="abc"/>
//   </Fragment>,
//   document.getElementById("app")
// )

// const name='<p>Josh Perez</p>';
// ReactDOM.render(
//   <Fragment>
//  <div dangerouslySetInnerHTML={{__html:name}}></div>
//  hello
//  <h1 className="box">我的天</h1>
//   </Fragment>,
//   document.getElementById("app")
// )


//原生js
// let box = document.getElementById("app");
// function tick() {
// let element=`
// <div> 
// <h1>hello,world</h1>
// <h2>it is${new Date().toLocaleTimeString()}.</h2>
// </div>
// `  ;
// box.innerHTML=element;
// }
// setInterval(tick,1000); 


//react实现
// function tick(){
//   const element = (
//     <div>
//     <h1>hello,world</h1>
//     <h2>it is {new Date().toLocaleDateString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById("app"));
// }
// setInterval(tick,1000)


//react组件没有全局注册和局部注册的情况
//函数式组件的定义 return 的内容是 组件的模板内容
// const Foo = () => {
//   return <div> 我是Foo组件</div>;
// }
// ReactDOM.render(
//   <Foo id="box">wo de dian a </Foo>,
  
//   // ReactDOM.createElement(Foo,{id:"box"},"wo de tian"),
// // document.getElementById("app")
// )

//类组件的定义
//1. 类组件必须要继承 React 基础组件
//2. 类组件必须要有render 方法 并且在render 方法中要有 return

class Foo extends Component{
  render(){
  return <div>我的天</div>;  
  }
}
ReactDOM.render(<Foo/>,document.getElementById("app"));
