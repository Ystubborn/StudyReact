import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
  //ui组件
  export default class Card extends Component {
  render() {
      return (
        <div>
          <h1>我是 Card</h1>
        </div>
      );
    } 
  }
// class Card extends Component {
//   render() {
//     console.log(this.props.userInfo);
//     if (this.props.userInfo) {
//       return (
//         <div>
//           <h1>我是 Card</h1>
//         </div>
//       );
//     } else {
//       // 跳转
//       return <Redirect to='/login?redirect=/card' />;
//     }
//   }
// }
//   //容器组件
// export default connect(
//   state => {
//     return {
//       userInfo:state.userInfo
//     };
//   }, 
//  null)(Card)
