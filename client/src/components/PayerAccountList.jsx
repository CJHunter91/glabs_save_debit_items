import React from 'react';

const PayerAccountList = (props) => {

  const payerList = Object.keys(props.payerAccount).map((attrKey, index) => {
  return(
      <li key={index}>{attrKey}: {props.payerAccount[attrKey]}</li>
    )
  })

  return(
    <article id="payer-account">
    <h5>Payer Account</h5>
    <ul>
    {payerList} 
    </ul>
    </article>
    )
}


export default PayerAccountList;
