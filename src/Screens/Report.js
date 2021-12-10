import React from 'react'
import { useSelector } from 'react-redux'

function Report() {
  const {backpack} = useSelector((state) => {return state})
  var total = backpack.reduce(( total , backpack) => total + backpack.weight,0)

  return (
    <div className="container_report">
      <h1 className="title">My Backpack</h1>
      <div className="content">
        {backpack.map((item, key) => {
          return(
            <div className="item" key={key}>
              <p className="item_color">{item.name}</p>
              <p>{item.weight}g</p>
            </div>
          )
        })}
      </div>
      <div className="total">
        <p className="item_color">Total <span>{total}g</span></p>
      </div>
    </div>
  )
}

export default Report
