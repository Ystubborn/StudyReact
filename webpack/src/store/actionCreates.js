import * as constants from './constants';
/**
 * 
 * @param {*} event 
 */
export const handleInputAct = value => {
  return {
    type:constants.CHAGE_INPUT_VAL,
    value:value
  };
};
export const ListAddAct = () => {
  return {
    type
    :constants.ADD_LIST,
  };
}
  /**
   * 初始化仓库的数据
   * @param {Array} list
   */
  export const InitListAct = list => ({
    type:constants.INIT_LIST,
    list
});
//此函数经过redux-thunk处理 那么函数会接收两个参数，一个是dispatch 一个是getstate他们都是同store下的方法
export const getTodoList = (dispatch,getState) => {
  fetch("http://localhost:3000/list")
  .then(response => response.json())
  .then(res => {
    // store.dispatch(InitListAct(res));
    dispatch(InitListAct(res));
  })
}
