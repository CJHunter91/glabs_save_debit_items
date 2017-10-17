import React, { Component } from 'react'
import AjaxRequest from './services/AjaxRequest'
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

  renderDebitItems(){
    console.log(this.state.debitItems)
    if(this.state.debitItems){
      return this.state.debitItems.map((item, index)=>{
        return(
          <li></li>
          )
      })
    }
  }

  render() {
    return (
      <section className="debit-items">
      <article>
      {this.renderDebitItems()}
      </article>
      </section>
      );
  }
}

export default App;
