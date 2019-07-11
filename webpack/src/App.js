import React,{Component} from "react";
// class Child extends PureComponent{
//    render(){
//      console.log("Child render");
//      return (
//        <div>
//          <h1>我是Child组件</h1>
//          <p>我的名字是爸爸取得：{this.props.name}</p>
//          <button
//          onClick={() => {
//            this.props.onFn1("王二小");
//          }}
//          >调用父亲给我的onFn1玩一下
//          </button>
//        </div>
//      );
//    }
// }
// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:"张三",
//       childName:"张小三"
//     };
//   }
//   render(){
//     console.log("App render");
//     return(
//       <div>
//         <h1>
//           我是App组件
//         </h1>
//         <p>
//           我的中文名字是{this.state.name}
//         </p>
//         <button onClick={this.clicks.bind(this)}>
//           点我修改name
//         </button>
//         <hr/>
//         <Child name={this.state.childName} onFn1={this.handleFn1}/>
//       </div>
//     );
//   }
//   clicks(){
//     this.setState({
//       name:"李四"
//     });
//   }
//   handleFn1 = name => {
//     this.setState({
//       name
//     });
//     console.log("handleFn1")
//   };
// }
// 父组件render，那么子组件一定会render

// PureComponent 在组件内部,通过计算,如果上一次的props数据跟这一次的props数据一样，
// 那么它会组织 这个组件 render

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:"张三"
//     };
//     console.log("constructor");
//   }
//   render(){
//     console.log("render");
//     return(
//       <div>
//         <h1>我是App{this.state.fullName}</h1>
//         {this.state.name}
//       </div>
//     );
//   }
//   static getDerivedStateFromProps(props,state){
//     console.log("getDerivedStateFromProps");
//     console.log(props);
//     console.log(state);
//     return{
//       // name:"李四",
//       age:18,
//       fullName:props.firstName+" "+props.lastName
//     }
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
// }
// export default App;

class Child extends Component{
  state ={
    age:18
  }
  render(){
    console.log("Child render");
    return(
      <div>
        <h1>我是Child组件</h1>
        <p>我的名字是爸爸取得：{this.props.name}</p>
        <p>我的年龄是{this.state.age}</p>

        <button
        onClick={() => {
          this.props.onFn1("王二小");
        }}
        >
          调用父亲给我的方法
        </button>
        <button
        onClick={() => {
          this.state.age=20;
          this.forceUpdate();//强制更新
        }}
        >
          修改我自己的 age state
        </button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate')
    if(nextProps.name===this.props.name && nextProps.onFn1===this.props.onFn1){
      return false;
    }
    return true;
  }
}
export default class App extends Component{
  constructor(){
    super();
    this.state={
      name:"张三",
      childName:"张小三"
    }
  }
  render(){
    console.log("App render");
    return(
      <div>
        <h1>我是App组件</h1>
        <p>我的中文名字是{this.state.name}</p>
        <button onClick={this.handleClick.bind(this)}>点我修改</button>
      <Child name={this.state.childName} onFn1={this.handleFn1}/>
      </div>
    )
  }
  handleClick(){
    this.setState({
      name:"李四"
    });
  }
  handleFn1= name => {
    this.setState({
      name
    })
    console.log("handleFn1")
  }
}
