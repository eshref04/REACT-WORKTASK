import React from 'react'
import "./Cards.css"
import CardsItem from './../CardsItem/CardsItem';

const Cards = ({data}) => {
  return (
    <div>
      {
        data.map((item,index)=>{
          <CardsItem key={index} item={item} />
        })
      }
      
    </div>
  )
}

export default Cards
