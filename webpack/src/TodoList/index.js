import React,{Component} from "react";

class TodoList extends Component{
  constructor(){
    super();
    this.state={
      todos:[],
      inputVal:"123"
    };
  }
  render(){
    let {todos,inputVal}=this.state;
    console.log(todos);
    return(
      <div>
        <div>
            {/* input的value与inputVal这个state绑定起来
            1.给input设置value属性,属性值使用inputVal这个state
            2.给input设置onChange属性,事件,值是一个事件处理函数,然后在事件处理函数中 主动修改inputVal这个state */}
            <input type="text" value={inputVal} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.add.bind(this)}>add</button>
        </div>
        
        <ul>
            {todos.map((item,index) => {
              return <li key={index}>{item}</li>;
            })}
      </ul>
      </div>
    );
  }
  /**
   *@param {Object} event 默认会自动传递过来的事件对象，合成对象
   * */
  handleChange(event){
    let value=event.target.value;
    this.setState({
      inputVal:value
    });
  }
  add(){
    //
    let newTodos=[...this.state.todos];
    newTodos.push(this.state.inputVal);
    this.setState({
      todos:newTodos
    });
  }
}
export default TodoList
