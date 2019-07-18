import * as constants from "./constans";
/**
 * 生成一个修改Name的动作函数
 * @param {String} value 修改的名字
 */
export const  createChageNameAct = value => {
  return {
    type:constants.CHANGE_NAME,
    value
  }
}
