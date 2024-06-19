import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super();
    this.state={
      count:{
        value:1
      }
    }
    //shouldcompoenetupdate say it not that'why is stops
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={
          ()=>this.setState({
          count:{value:1}})}
          >button</button>  
      </div>
    )
  }
}
