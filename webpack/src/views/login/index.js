import React, {Component} from "react";
import {connect} from "react-redux";
class Login extends Component{
  render(){
    return(
      <div>
        <h1>我是 Login</h1>
        <button onClick={this.props.handleLogin}>点击登录成功</button>
      </div>
    );
  }
}
export default connect(null,(dispatch,props) => {
  return {
    handleLogin:() => {
      //1. 派发动作,让仓库改变
      dispatch({
        type:"LOGIN"
      });
      //2. 跳转到首页或之前想要去的页面。
      let redirect =props.location.search;
      redirect=redirect.replace("?","");
      let arr=redirect.split("&");
      let obj={};
      arr.forEach(item => {
        //key==value
        let tmp=item.split("=");
        obj[tmp[0]]=tmp[1];
      });
      console.log(obj);
      redirect=obj.redirect||"/home";
      props.history.replace(redirect)

    }
  }
})(Login)
