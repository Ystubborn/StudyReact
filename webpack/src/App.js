import React,{Component,PureComponent} from "react";
class Child extends PureComponent{
   render(){
     console.log("Child render");
     return (
       <div>
         <h1>我是Child组件</h1>
         <p>我的名字是爸爸取得：{this.props.name}</p>
         <button
         onClick={() => {
           this.props.onFn1("王二小");
         }}
         >调用父亲给我的onFn1玩一下
         </button>
       </div>
     );
   }
}
export default class App extends Component {
  constructor(){
    super();
    this.state={
      name:"张三",
      childName:"张小三"
    };
  }
  render(){
    console.log("App render");
    return(
      <div>
        <h1>
          我是App组件
        </h1>
        <p>
          我的中文名字是{this.state.name}
        </p>
        <button onClick={this.clicks.bind(this)}>
          点我修改name
        </button>
        <hr/>
        <Child name={this.state.childName} onFn1={this.handleFn1}/>
      </div>
    );
  }
  handleClick(){
    this.setState({
      name:"李四"
    });
  }
  handleFn1 = name => {
    this.setState({
      name
    });
    console.log("handleFn1")
  };
}
// 父组件render，那么子组件一定会render

// PureComponent 在组件内部,通过计算,如果上一次的props数据跟这一次的props数据一样，
// 那么它会组织 这个组件 render
