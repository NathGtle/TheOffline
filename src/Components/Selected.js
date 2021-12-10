import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const Selected = ({weight}) => {
  const {backpack} = useSelector((state) => {return state})
  const dispatch = useDispatch()
  var total = backpack.reduce(( total , backpack) => total + backpack.weight,0)
  const [disable, setDisable] = useState(false)
  const totalWeight = total / 1000
 
  useEffect(() => {
    if(totalWeight > weight){
      setDisable(true)
    }else if(totalWeight < weight){
      setDisable(false)
    }
  }, [totalWeight, weight])
  
  return (
    <div className="container">
      <h1 className="title">Selected</h1>
      <div className="content">
        {backpack.map((item, key) => {
          return(
            <div className="item" key={key} onClick={(e) => {
              dispatch({type: 'ADD_ITEM_INVENTORY', item: item})
              dispatch({type: 'DEL_ITEM_SELECTED', key: key})}}>
              <p className="item_color">{item.name}</p>
              <p>{item.weight}g</p>
            </div>
          )
        })}
      </div>
      <div className="total">
        <p className="item_color">Total <span>{total}g</span></p>
      </div>
      
        <div className="button_container">
        <Link to="/report">
          <button disabled={disable} className="button">Voir résumé</button>
        </Link>
        </div>
    
    </div>
  )
}

export default Selected
