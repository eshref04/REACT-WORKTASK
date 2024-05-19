import React from 'react'
import "./Cards.css"

import CardsItem from './../CardsItem/CardsItem';

const Cards = ({data}) => {
 
  return (
    <div className='d-flex flex-wrap mt-5 mb-5 gap-5'>
      {
        data.map((item,index)=>(
          <CardsItem key={index} item={item} />
        )
         
         
      )
      }
      
    </div>
  )
}

export default Cards
