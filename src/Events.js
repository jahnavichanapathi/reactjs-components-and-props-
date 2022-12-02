import React, { Component } from 'react'

export default class Events extends Component {
     state={
        username:""
     }
    handleClick=()=>{
      console.log(this.state.username)
      this.setState({
        username:""
      })
    }
    handleField=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }
  render() {
    return (
        <div>
            <p><input onChange={this.handleField}
            type="text"
            value={this.state.username}
            name="username"
            placeholder="user"/>
            </p>
            <p> <button onClick={this.handleClick}>submit</button></p>
        </div>
     
    )
  }
}






























