import React, {Component} from 'react';
import PayerAccountList from '../components/PayerAccountList'

class DebitItems extends Component{

  renderDebitItems(){
    console.log(this.props.debitItems)
    if(this.props.debitItems){
      return this.props.debitItems.map((item, index) => {
        console.log(item)
        return(
            <article key={index} id="debit-item">
            <ul id="debit-items-list">
            <h4 id="acc-ref" className="acc-ref">Account Ref: {item.ref}</h4>
            {Object.keys(item).map((attrKey, index) => {
              if(attrKey !== "PayerAccount" && attrKey !== "_id" && attrKey !== "ref")
              return(
                <li key={index}>{attrKey}: {item[attrKey]}</li>
                )
            })}
            </ul>
            <PayerAccountList payerAccount={item.PayerAccount}/>
            </article>
            )
      })
      
    }
  }


  render(){
    return(
      <section id="items">
      {this.renderDebitItems()}
      </section>
      )
  }


}

export default DebitItems;