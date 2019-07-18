//针对Route组件实现的高阶
import React, { Component } from 'react';
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";
 class AuthRoute extends Component {
  render() {
    let {path,component:Com,userInfo}=this.props;
    return (
      <Route path={path} 
      // component={this.props.component}
      
      render={props => {
        //判断userInfo 是否存在来做不同的处理
        if(userInfo){
          return <Com {...props}/>;
        }else{
          return <Redirect to={`/login?redirect=${path}`}/>;
        }
      }}
      />
    )
  };
}

export default connect(
  state => {
    return {
      userInfo: state.userInfo
    };
  },
  null
)(AuthRoute);
