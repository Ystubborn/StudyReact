import React from "react";
import ReactDOM from "react-dom";
import PubSub from "PubSub";
class BaseFrom extends React.Component {
  state = {
    username: "张三",
    password: "",
    sex: "1",
    cityId: "",
    cityList: [],
    isOk: false
  };
  render() {
    return (
      <div>
        <h1>注册</h1>
        <label>
          <span>用户名：</span>
          {/* onChange={this.handleChg}  */}
          <input type="text" name="username" value={this.state.username} onChange={this.handleChg} />
        </label>
        <label>
          <span>密码：</span>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChg} />男

        </label>
        <label>
          <span>选择性别：</span>
          <input type="radio" value="1" name="sex" checked={this.state.sex === "1"} onChange={this.handleChg} />男
          <input type="radio" value="0" name="sex" checked={this.state.sex === "0"} onChange={this.handleChg} />女
        </label>
        <label>
          <span>选择出生城市：</span>
          <select name="cityId" value={this.state.cityId} onChange={this.handleChg}>
            <option disabled value="">请选择</option>
            {this.state.cityList.map(item => {
              return (
                <option key={item.id} value={item.cityId}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
            <span>请同意我们的观点：</span>
            <input
              type="checkbox"
              name="isOk"
              checked={this.state.isOk}
              onChange={this.handleChg}
            />
          </label>
          <button disabled={this.isDisabled()} onClick={this.handleReg}>
            提交注册
          </button>
      </div>
    )
  }
  getCityList = () => {
    fetch("http://localhost:9090/cityList")
      .then(response => response.json())
      .then(res => {
        this.setState({
          cityList: res
        });
      });
  };
  isDisabled = () => {
    if (
      this.state.username &&
      this.state.password &&
      this.state.sex &&
      this.state.cityId &&
      this.state.isOk
    ) {
      return false;
    }
    return true;
  };
  

  handleChg = event => {

    let name = event.target.name;
    if (name === "isOk") {
      this.setState({
        isOk: !this.state.isOk
      })
    } else {
      this.setState({
        [name]: event.target.value
      })
    }
  }
  handleReg = () => {
    fetch("http://localhost:9090/users", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        // sex: this.state.sex === "男" ? 1 : 0,
        sex: parseInt(this.state.sex),
        city: this.state.cityId
      }),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json())
      .then(res => {
        console.log(res)
      })
  };
  componentDidMount(){
    this.getCityList()
  }
}
const bus=new PubSub();
class One extends React.Component {
  state={
    name:"张三"
  };
  render(){
    return(
      <div>
        <h1>组件1</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }
  componentDidMount(){
    bus.subscribe("abc",() => {
      this.setState({
        name:"李四"
      })
    })
  }
}
class Tow extends React.Component {
  render(){
    return(
      <div>
        <h1>组件2</h1>
        <button onClick={this.handleClick}>
        点击 修改 ONE name
        </button>
      </div>
    );
  }
  handleClick = () => {
    bus.publish("abc")
  }
}
ReactDOM.render(
  <React.Fragment>
   <BaseFrom />,
    <One/>,
    <Tow/>
  </React.Fragment>
 , document.getElementById("app"))
