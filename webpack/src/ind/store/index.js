//拆分版
//combineReducers合并拆分
import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import todoReducer from "./modules/todo/reducer";
import helloReducer from "./modules/hello/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(combineReducers({
  todo:todoReducer,
  hello:helloReducer
}),
composeEnhancers(applyMiddleware(thunk))
)
//仓库的数据格式是 
