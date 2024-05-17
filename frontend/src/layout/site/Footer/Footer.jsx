import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
       <div className="container">
        <div className='footer__left'>
          <h2 className='mb-5'>Tasty</h2>
          <p>Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there <br /> live the blind texts.</p>

          <ul className='footer__left__icons d-flex gap-3 '>
            <li><div><i class="fa-brands fa-twitter"></i></div></li>
           <li><div><i class="fa-brands fa-facebook-f"></i></div></li>
           <li><div><i class="fa-brands fa-instagram"></i></div></li> 
          </ul>
        </div>
       </div>
    </footer>
  )
}

export default Footer
