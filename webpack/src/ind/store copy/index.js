import {createStore,applyMiddleware,compose} from "redux";
//日志中间件
import logger from 'redux-logger';
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  //加入使用中间键
  //中间件是有调用的顺序的logger需要最后调用
  composeEnhancers(applyMiddleware(thunk,logger))
  );
export default store;



