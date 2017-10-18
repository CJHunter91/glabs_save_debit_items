import React, { Component } from 'react'
import AjaxRequest from './services/AjaxRequest'
import DebitItems from './containers/DebitItems'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      debitItems: []
    }
    this.setDebitItems =  this.setDebitItems.bind(this);
  }

  setDebitItems(data){
    console.log(data)
    this.setState({debitItems: data});
  }

  componentDidMount(){
    const ajaxRequest = new AjaxRequest('http://localhost:3001/');
    ajaxRequest.get(this.setDebitItems);
  }

  render() {
    return (
      <section className="debit-items">
      <header>
        <h1 id="title">Returned Debit Items</h1>
      </header>
      <DebitItems debitItems={this.state.debitItems} />
      </section>
      );
  }
}

export default App;
