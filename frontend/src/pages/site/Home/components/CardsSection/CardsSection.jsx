import React, { useContext } from 'react'
import "./CardsSection.css"
import Cards from './../../../../../components/site/Cards/Cards';
import MainContext from '../../../../../context/Context';

const CardsSection = () => {
  const {data} = useContext(MainContext)
  return (
    <section className='cards__section'>
        <div className="container">
            <div className='cards__section__heading d-flex flex-column align-items-center'>
                <span className='mb-2'>OUR MENU</span>
                <h2>Discover Our Exclusive Menu</h2>
            </div>

            <div className='cards__section__crds'>
              <Cards data={data}/>
            </div>
        </div>
    </section>
  )
}

export default CardsSection
