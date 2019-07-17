import React from "react";
import {connect} from "react-redux";
const Todo = props => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
export default connect(
  //mapStateToProps
  (state) =>{
    return{
      name:state.Todo.name
    }
  }
  //mapDispatchToProps
  () =>{}
)(Todo)
