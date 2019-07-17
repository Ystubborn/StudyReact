// import React from "react";
// import ReactDOM from "react-dom";
// import {Provider} from "react-redux";
// import TodoList from "./components/TodoList";
// // ReactDOM.render(<TodoList/>,document.getElementById("app"))
// ReactDOM.render(
//   <Provider store={store}>
//   <TodoList/>
//   </Provider>,
//   document.getElementById("app")
// )

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink,Switch } from "react-router-dom";
import "./index.css"
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>首页</h1>
      </div>
    );
  }
}

//列表页
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>列表页</h1>
        <ul>
          {["apple", "banana", "orange"].map(item => {
            return (
              <li key={item}>
                <NavLink
                  to={{
                    pathname: `/detail/${item}`
                  }}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
//关于页
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>关于页</h1>
        <button onClick={() =>{
          // this.props.history.push("/index/home")
          this.props.history.replace("/index/home")
        }}>点击去首页</button>
      </div>
    );
  }
}
//大首页 - 1级
class Index extends React.Component {
  render() {
    return (
      <div>
        <NavLink activeClassName="z-act" to="/index/home">首页</NavLink >
        <NavLink activeClassName="z-act" to={{ pathname: "/index/list" }}>列表页</NavLink >
        <NavLink activeClassName="z-act" to="/index/about" replace>关于页</NavLink >
        <hr />
        <Route path="/index/home" component={Home} />
        <Route path="/index/list" component={List} />
        <Route path="/index/about" component={About} />
      </div>
    )
  }
}
//详情页 - 1级
class Detail extends React.Component {
  render() {
    let { match: {
      params: { id }
    } 
  }=this.props;
    return (
      <div>
        <h1>详情页</h1>
        <p>水果的名字：{id}</p>
      </div>
    );
  }
}
ReactDOM.render(
  <Router>
    <div>

      {/* 有坑
    Route 组件就是坑，path是规则，component使用哪个组件 渲染哪个坑
    */}
      {/* <Route exact path="/" render={() => {
        return <div>我的天</div>
      }}/> */}
      <Switch>
      <Route path="/index" component={Index} />
      <Route path="/detail/:id" component={Detail} />
      </Switch>    
    </div>
  </Router>,
  document.getElementById("app")
)
