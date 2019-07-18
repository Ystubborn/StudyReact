import {createStore} from 'redux';
const initState = {
  userInfo:null
};
export default createStore((state=initState,action) => {
if(action.type === "LOGIN"){
  return Object.assign({},state,{
    userInfo:"张三"
  });
}
return state;
})
