import React from 'react'
import "./CardsItem.css"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CardsItem = ({item}) => {
  
 

  return (
    <div className='d-flex justify-content-between p-4 align-items-center' style={{width:"600px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"} }>
       <div className='d-flex gap-3 align-items-center'>
        <div><img style={{borderRadius:"50%"}} width={"70px"} height={"70px"} src={item.image} alt="" /></div>
        <h4>{item.title}</h4>
        <p>{item.category}</p>
        
        <div className='d-flex gap-2'>
          <button onClick={()=>{
            addBasket(item._id)
          }} className='btn btn-warning'>Add</button>
         <Link className='text-decoration-none' style={{color:"white"}} to={`/detail/${item._id}`}><button className='btn btn-primary'>Detail</button></Link> 
        </div>
       </div>
       <span style={{fontSize:"18px"}} className='d-flex gap-2 align-items-center'><i class="fa-solid fa-star text-warning"></i>{item.price}</span>
        
       
    </div>
  )
}
 export default CardsItem

