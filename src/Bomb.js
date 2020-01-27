// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component{

  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    const timer = this.state.secondsLeft
      if (timer === 0){
        return ("Boom!")
      } else {
        return (`${timer} seconds left before I go boom!`)
      }
  }
  
}