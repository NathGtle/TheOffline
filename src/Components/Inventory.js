import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../Styles/inventory.css"
import ReactLoading from 'react-loading';

const Inventory = () => {
  const {products} = useSelector((state) => {return state})
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    axios.get(`https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory`)
    .then(({data}) => {
      dispatch({type: 'SET_PRODUCTS', products: data.items})
      setLoading(false)
    })
  }, [dispatch])

  return (
    <div className="container">
      <h1 className="title">Inventory</h1>
      <div className="content">
        {loading ? 
        <div className="loader">
          <ReactLoading type="spin" color="#A4A4A4" />
        </div>
        : 
        <>
          {products.map((item, key) => {
            return(
              <div className="item" key={key} onClick={(e) => {
                dispatch({type: 'DEL_ITEM_INVENTORY', key: key})
                dispatch({type: 'ADD_ITEM_SELECTED', item: item})
              }}>
                <p className="item_color">{item.name}</p>
                <p>{item.weight}g</p>
              </div>
            )
          })}
        </>
        }
        
      </div>
    </div>
  )
}

export default Inventory
