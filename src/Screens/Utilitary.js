import React, { useState } from 'react'
import Inventory from '../Components/Inventory';
import Selected from '../Components/Selected';

function Utilitary() {

  const select = ({
        'air_france': {
            'id': 123,
            'name': 'Air France',
            'weight': 9
        },
        'quatar': {
            'id': 124,
            'name': 'Quatar Airlines',
            'weight': 12
        },
				'klm': {
						'id': 125,
						'name': 'KLM Airlines',
						'weight': 3
				}
  })
  const [weight, setWeight] = useState(9)

  let result = []
  for (let key in select){
    let value = select[key];
    value.name = key
    result.push(value)
  }
  return (
    <div className="app_container">
      <select name="airlines" id="airlines" onChange={(e)=>{
        setWeight(e.target.value)
      }}>
        {result.map((airlines, key) => {
            return(
              <option key={key} value={airlines.weight}>{airlines.name}</option>
            )
        })}
      </select>
      <div className="app_content">
        <Inventory/>
        <Selected  weight={weight} />
      </div>
    </div>
  )
}

export default Utilitary
