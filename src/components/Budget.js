import React from 'react';

class Budget extends React.Component {
    constructor() {
      super(Budget);
    }
    state = { counter:2000 }
    incrementCounter = ()=> {
      this.setState({counter:this.state.counter+10});
    }
    render() {
  
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" onChange={this.incrementCounter} value={this.state.counter}></input></span>
        </div>
    )};
};
export default Budget;
