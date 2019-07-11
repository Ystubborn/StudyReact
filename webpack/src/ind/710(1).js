import React,{Fragment,Component} from "react";
import ReactDOM from "react-dom";

//组件
import abc,{string,number} from "prop-types";

//关于引入暴露文件
import a,{name,age} from "./demo"

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

// class Foo extends Component{
//   render(){
//   return <div>我的天</div>;  
//   }
// }
// ReactDOM.render(<Foo/>,document.getElementById("app"));

// ReactDOM.render(
//   <div>
//     <Foo id="box" title="hello"/>
//     <Bar id="box" title="hello"/>
//   </div>,
//   document.getElementById("app")
// )

//props的校验
// 1.需要引入一个额外的模块 prop-types
// 2.设置组件的propTypes属性
// class Bar extends Component{
//   render(){
//     return(
//         <div>
//         <h1>我的地呀</h1>
//         <p>Bar</p>
//         <p>id:{this.props.id}</p>
//         <p>title:{this.props.title}</p>
//       </div>     
//     )
//   }
// }
// ReactDOM.render(<Bar/>,document.getElementById("app"));
// //这里的propTypes是固定的
// Bar.propTypes ={
//   id:string
// };
// const Foo=props => {
//   return (
//     <h1>
//       {props.age}-{props.name}
//     </h1>
//   );
// }
// Foo.propTypes={
//   age:number
// };
// Foo.defaultProps = {
//   name:"张三"
// };
// ReactDOM.render(
//   <div>
//     <Bar id={123} title="hello" />
//     <Foo age="123" name="李四" />
//   </div>,
//   document.getElementById("app")
// )

// react中插槽的使用，
// 1.react没有插槽
// 2.要在组件内不同位置渲染出不同的react元素 需要主动设置为prop的方式
// const Bar =({top,bootom}) => {
//   return (
//     <div>
//       {top}
//       我的天
//       {bottom}
//     </div>
//   );
// }
// //定义属于哪个元素的插槽
// ReactDOM.render(
//   <div>
//     <Bar top={<p>123</p>} bottom={<p>2323</p>}></Bar>
//   </div>,
//   document.getElementById("app")
// )

// console.log(name);
// console.log(age)

//条件渲染
// class App extends Component{
//   render(){
//     let btn=null;
//     if(this.props.isLogin){
//       btn=<button>登出</button>;
//     }else{
//       btn=<button>登录</button>
//     }
//     let p=null;
//     if(this.props.name){
//       p=<p>欢迎您 - {this.props.name}</p>
//     }
//     return(
//       <div>
//         {btn}
//       {this.props.name&&<p>欢迎您 - {this.props.name}</p>}
//       </div>
//     );
//   }
  
// }
// ReactDOM.render(
//   <App isLogin={true} name="abc"/>,
//   document.getElementById("app")
// )

//循环渲染
// class App extends Component{
//   render() {
//     let list=["apple","banana","orange"];
//     let result=[];
//     for(let i=0;i<list.length;i++){
//       result.push(<li>{list[i]}</li>)
//     }
//     return(
//       <div>
//         <h1>选择水果</h1>
//         <ul>
//           {/* {list.map((item,index) => {
//             return <li key={index}>{item}</li>
//           })} */}
//           {result}
//         </ul>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<App />,document.getElementById("app"))

// let list=[];

// const Add = () => {
//   let myInput=document.getElementById("myInput");
//   let value=myInput.value;
//   console.log(value);
//   list.push(value);
//   ReactDOM.render(<App/>,document.getElementById("app"));
// }
// const Del= () => {
//   list.splice(index,1);
//   ReactDOM.render(<App/>,document.getElementById("app"))
// }
// const App= () => {
//   return(
//     <div>
//       <input type="text" id="myInput"/>
//       <button onClick={Add}>
//           点我添加
//       </button>
//       <ul>
//         {list.map((item,index) => {
//           return (
//             <li key={index}>
//               {item}
//               <span
//               onClick={() => {
//                 Del(index);
//               }}
//               >删除</span>
//                </li>
//           );
//         })}      
//       </ul>
//     </div>
//   );
// }
// ReactDOM.render(<App />,document.getElementById("app"))

