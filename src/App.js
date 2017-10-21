import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';
var moment = require('moment');

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      interval: null
    }
    this.increaseTimer = this.increaseTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    
  

  }


  increaseTimer(){
    this.setState({ count: this.state.count +1 })
    /*this.setState(prev => {
      prev.count ++;
      return prev; 
    }*/
  }

  startTimer(){
    console.log('timer has started')
    
    let timer = setInterval(this.increaseTimer, 1);
    this.setState({interval: timer});

    /*this.setState(prev => {
      prev.interval = prev.interval === null ?
      setInterval(this.increaseTimer, 1000) : prev.interval;
      return prev
      });*/

  }

  pauseTimer(){
    console.log('PAUSE')

   let pause = clearInterval(this.state.interval);
   this.setState({pause});

   /*this.setState(prev => {
    clearInterval(prev.interval)
    prev.interval = null;
    return prev*/
  }

  resetTimer(){
    console.log('Timer STOPPED')

    let stop = 
    this.setState(
      {count: 0,
      interval: null
    })

    /*this.setState(prev => {
      clearInterval(prev.interval);
      prev.interval = null;
      prev.count = 0;
      return prev;
    });*/
  }

  render() {
    return (
      <div className="App">
     
       <Display count={this.state.count} />
        <Button click={this.startTimer}>Start</Button>    
        <Button click={this.pauseTimer}>Pause</Button>
        <Button click={this.resetTimer}>Stop</Button>
        <p>Render Something Here!</p>
      </div>
    );
  }
}

export default App;
