import * as constants from "./constants"
const initState={
 inputVal:'',
 list:[]
};

   export default (state=initState,action) => {
        console.log(state);
        console.log(action);
        if(action.type===constants.CHAGE_INPUT_VAL){
          return Object.assign({},state,{
            //添加action传递过来的value
            inputVal:action.value
          })
        }
        if(action.type===constants. ADD_LIST){
           //如此添加的是从input框中得到的字符串  应该添加为一个对象才对
            // list:[...state.list,state.inputVal]
            
          const ids=state.list.map(item => item.id);
          const maxId=Math.max(...ids);

          //获取list中最后一个元素的 id
            // let maxId=state.list[state.list.length-1].id; //方法一
           
            //apply 作用为 第二个参数可以传数组
            // let maxId=Math.max.apply(null,ids);
          return Object.assign({},state,{                    
            list:[...state.list,{id:maxId+1,name:state.inputVal}]
          })     
        }
        if(action.type===constants.INIT_LIST){
          return Object.assign({},state,{list:action.list})
        }
        return state;
    }
