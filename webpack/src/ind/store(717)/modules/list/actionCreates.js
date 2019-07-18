import * as component from "./constants";
const mutations ={
 setInputVal:value => ({
   type:ConstantSourceNode.CHANGE_INPUT,
   value
 }),
 setTodos: value => {
   //value 如果传递过来是数组，那么就是initTodo的操作
   //否则就是 新增的操作
   if(value instanceof Array){
     return:{
       type:constanst.INIT_TODO,
       list:value
     };
   } else {
     return{
      type:ConstantSourceNode.TODO_ADD,
      todo:value
     }
   }
 }
}
const actions ={
  setInputVal: value => {
    return (dispatch,getState) => {
      dispatch(mutations.setInputVal(value))
    }
  },
  setTodoAdd: () => {
    return(dispatch,getState) => {
      fetch("http://localhost:3000/todos",{
      method:"POST",
      body:JSON.stringify({
        name:getState().todoInputVal
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        // store.dispatch(InitListAct(res));
        //派发一个同步的动作
        dispatch(mutations.setTodos(res));
        // dispatch(createTodoAddAct(res));
      })
    }
  },
  //获取初始化的 todolist 数据
  getTodoList: () => {
    return (dispatch,getState) => {
      fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(res => {
        //store.dispatch(createInitTodoAct(res));
        //派发普通动作，执行 reducer
        dispatch(mutations.setTodos(res))
      })
    }
  }
}
export default actions;
