import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from './components/swiper'
import './index.css'
// class List extends React.Component{
//   state={
//     list:[]
//   }
//   render(){
//     console.log('render')
//     return(
//       <ul id="box">
//       {
//         this.state.list.map((item,index) => {
//           return(
//             <li key={index}>
//               {item}
//             </li>
//           )
//         })
//       }
//       </ul>
//     )
//   }
//   setList(){
//     // this.setState({
//     //   list:[{address:{name:'北京'}},{address:{name:'深圳'}}]
//     // })
//     let i = 0;
//     setInterval(() => {
//       i++;
//       this.setState({
//         list:[...this.state.list,`第${i}条数据`]
//       })
//     },500)
//   }
//   componentDidMount(){
//     this.setList();
//   }
//   componentDidUpdate(prevProps,provState,snapshot){
//     let box = document.getElementById('box');
//     document.documentElement.scrollTop=box.scrollHeight- document.documentElement.clientHeight;
//   }
// }

// // getSnapshotBeforeUpdate(){
// //   console.log("BeforeUpdate")
// //   let box=document.getElementById('box');
// //   console.log(box.innerHTML);
// //   let scrollTop = document.documentElement.scrollTop;
// //    return scrollTop;
// // }

// ReactDOM.render(<List />, document.getElementById('app'))

// // 1. 数据更新，我希望要时刻让滚动条都处理底部。

// // 1. beforeUpdate 这个函数里面，得到更新之前的 scrollTop 。然后传递给 DidUpdate.
// // 2. 在 didupdate 里面，将 scrollTop 设置为 scrollTop + 新增的高度。


class App extends React.Component{
  state={
    bannerList:[]
  }
  render() {
    return (
      <div>
        <h1>测试 swiper</h1>

        <Swiper autoplay={true} slide={this.state.bannerList} />
      </div>
    )
  }
  getBannerList() {
    fetch('https://m.maizuo.com/gateway?type=2&cityId=440300&k=5227192', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15628121122422361555058"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(response => response.json()).then(res => {
      if (res.status === 0) {
        this.setState({
          bannerList: res.data.map(item => {
            return item.imgUrl
          })
        })
      } else {
        alert(res.msg);
      }
    })
  }

  componentDidMount(){
    this.getBannerList();
  }
}
ReactDOM.render(<App/>,document.getElementById("app"))
