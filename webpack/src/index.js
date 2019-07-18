import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import {HashRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import AuthRoute from "./components/Authrouter";
import Home from './views/home';
import About from './views/about';
import Card from './views/card';
import Login from './views/login';
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <NavLink to="/home">首页</NavLink>
    <NavLink to="/about">关于页</NavLink>
    <NavLink to="/card">卡片页</NavLink>
    <NavLink to="/login">登录页</NavLink>
    <hr/>
    <Switch>
      <Route path="/home" component={Home}></Route>
      <AuthRoute path="/about" component={About}></AuthRoute>
      <AuthRoute path="/card" component={Card}></AuthRoute>
      <Route path="/login" component={Login}></Route>
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("app")
)
