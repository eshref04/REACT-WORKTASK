import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (

    <section className='hero__section'>
      <div className='hero__section__overlay'></div>
      <header>
      <div className="container d-flex justify-content-between p-5">
      <Link className='header__logo' to="/">Tasty</Link>

        <ul className='header__menu d-flex gap-4 justify-content-between'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/admin">Admin</Link></li>
     <li><Link to="/basket">Basket</Link></li>
      </ul>

     
      </div>
      </header>
   
      <div style={{color:"white",marginTop:"160px"}} className="container d-flex flex-column align-items-center gap-4">
      <div className='d-flex align-items-center flex-column hero__section__head gap-4'>
        <h1 className='text-center'>Book a table for yourself at  a <br /> time convenient for you</h1>
        <Link to="/">Book a table</Link>
      </div>

      <form   action="#">
        <input type="text" placeholder='Name' />
        <input type="tel" placeholder='Phone' />
        <input type="date" placeholder='M/D/YYYY'  />
        <input type="text" placeholder='Time' />
        <select name="select" id="select__inp">
          <option value="person">Person</option>
          <option value="phone">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4+</option>
        </select>
        <button className='last__input' type="submit">Book a table</button>

      </form>
      </div>

      
     
    </section>
   
  )
}

export default Header
