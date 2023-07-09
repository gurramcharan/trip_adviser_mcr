import React from 'react'
import {MdLocationOn} from "react-icons/md"

export const CardComponent = ({item}) => {
  return (
    <div>
        <div>
            <img src={item.image} alt={item.id} width="300px" />
        </div>
        <div>
            <p><MdLocationOn /> {item.name}</p>
        </div>
    </div>
  )
}
