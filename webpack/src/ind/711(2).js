import React,{Component} from 'react';
import ReactDOM from "react-dom";
import abc,{string,number} from "prop-types";
// import TodoList from "./TodoList";
import App from "./App.js";
// class Bar extends Component{

//  render(){
//    return(
//      <div>
//        <h1>我的地</h1>
//        <p>Bar</p>
//        <p>id:{this.props.id}</p>
//        <p>title:{this.props.title}</p>
//      </div>
//    )
//  }
// }
// ReactDOM.render(<Bar/>,document.getElementById("app"));
// //这里的propTypes是固定的
// Bar.propTypes={
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
// Foo.defaultProps={
//   name:"张三"
// };
// ReactDOM.render(
//   <div>
//     <Bar id={123} title="hello" />
//     <Foo age="123" name="李四" />
//   </div>,
//   document.getElementById("app")
// )

  //1.普通情况下只能在constructor 构造函数中初始化state
  //2.constructor构造函数 必须在函数第一行调用super()来调用父类的构造函数
  //3.通过this.state.xxx来使用某个状态
  //4.通过this.setState()来更新状态。
  //5.state或props的变化，会引起组件的重新render。
  //  a.对类组件来说，就是类的render函数的重新执行
  //  b.对函数式组件来说,这个函数重新执行

//   class App extends Component{
//     //构造函数
//     constructor(){
//       super();
//       this.state={
//         name:"张三",
//         age:18,
//         counter:0
//       };
//     }
//     render(){
//       console.log("render");
//       return(
//         <div>
//         <h1>我是App组件</h1>
//         <p>点击改变数量：{this.state.counter}</p>
//         <button onClick={this.add.bind(this)}>点击+5</button>
//         <button onClick={this.add1.bind(this)}>点击+5</button>
//         <p>我的名字是:{this.state.name}</p>
//         <p>我的年龄是:{this.state.age}</p>
//         <Hello name={this.state.name}/>

//         <button onClick={this.clicks.bind(this)}>修改name为李四</button>
//       </div>
//       ); 
//     }
//     add(){
//       //多少setstate会被合并成一次setstate 所以每次只能加一
//       for(let i=0;i<5;i++){
//         this.setState({
//           counter:this.state.counter+1
//         });
//       }
//     }
//     add1(){
//       //函数不会被合并
//       for(let i=0;i<5;i++){
//         this.setState((prevState,props) => ({
//           counter:prevState.counter+1
//         }));
//       }
//     }
//     clicks(){
//       console.log("我是app实例的 handleclick方法");
//       this.setState(
//         {
//           name:"李四"
//         },
//         () => {
//           console.log(this.state.name);
//         }
//       );
//       //在代码没有执行到 render的时候,那么多次的setState调用,会被react合并为一次。
//     }
//   }
// const Hello= props => {
//   console.log("Hello");
//   return <p>Hello - {props.name}</p>;
// };
// ReactDOM.render(<App/>,document.getElementById("app"));

// ReactDOM.render(<App/>,document.getElementById("app"))


// class Root extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       firstName: "张",
//       lastName: "三"
//     };
//   }
//   render(){
//     return(
//       <div>
//       <button
//       onClick={() => {
//         this.setState({
//           firstName: "李"
//         });
//       }}
//       >
//       点击修改姓名
//       </button>
//       <App firstName={this.state.firstName}  lastName={this.state.lastName}/>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Root/>,document.getElementById("app"));
ReactDOM.render(<App/>,document.getElementById("app"));
