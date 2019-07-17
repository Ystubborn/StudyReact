import * as constants from "./constants";

const initState = {
  todoInputVal:"",
  todos:'',
}
export default (state=initState,action) => {
  if(action.type===constants.CHANGE_INPUT){
    return Object.assign({},state,{
      todoInputVal:action.value
    });
  }
  if(action.type===constants.TODO_ADD){
    return Object.assign({},state,{
      todos:[...state.todos,action.todo]
    })
  }
  if(action.type=== constants.INIT_TODO){
    return Object.assign({},state,{
      todos:action.list
    });
  }
  return state;
}
