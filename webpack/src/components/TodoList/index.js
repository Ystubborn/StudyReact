import store from "../../store";
import React from "react";
import {Input,Button,List,message} from "antd";
import {handleInputAct,ListAddAct,InitListAct,getTodoList} from "@/store/actionCreates";
import "antd/dist/antd.css";

//输出日志
let next = store.dispatch;
  store.dispatch= action =>{
    console.log("dispatching",action);
    next(action);
    console.log("next state",store.getState());
  }
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:store.getState().list,
      inputVal:store.getState().inputVal,
    },
    //得到数据的更新需要监听
    store.subscribe(() => {
      this.setState({
        inputVal:store.getState().inputVal,
        list:store.getState().list
      });
    });
  };
  
  render(){
    return (
      <div className="todo-list">
      <h1>TodoList</h1>
      <div className="todo-list__top">
        <Input style={{width:"300px", marginTop:"10px", marginLeft:"10px"}} value={this.state.inputVal} onChange={this.handleInput} placeholder="Basic usage" />
        <Button style={{marginLeft:"10px"}} onClick={this.handleAdd} type="primary">添加</Button>
      </div>
        <List
        style={{width:"370px",marginLeft:"10px"}}
          dataSource={this.state.list}
            renderItem={(item) => (
              <List.Item>
              {item.name}
              </List.Item>    
          )}
    />
      </div>     
    )
  };
  handleAdd= () => {
    //判断输入框是否为空， 如果为空，提示为空
    if(!this.state.inputVal){
      message.error("请输入内容!")
      return;
    }
    store.dispatch(ListAddAct());
  }
  handleInput(event){
    let value=event.target.value;
    console.log(value)
    //修改store中的数据 派发一个动作
    store.dispatch(handleInputAct(value))
  }
 
  componentDidMount(){
    //去掉括号将一个方法变为一个函数 redux-thunk支持将一个传递一个函数
    store.dispatch(getTodoList)
  }
  
};
export default TodoList;
