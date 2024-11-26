import React from 'react'
import SellContainer from '../../Components/SellContainer/SellContainer'
import "./Sell.css"

const Sell = () => {
  return (
    <div className='sell-background-img'>
      <div className='sell-main-body'>
      <h1 className='sell-heading'>Properties to Sell</h1>
      <div>
      <SellContainer/>
      </div>
      </div>
    </div>
  )
}

export default Sell
