import React from 'react'
import "./AboutSection.css"

const AboutSection = () => {
  return (
    <section className='about__section'> 
        <div className='container d-flex gap-5 align=items-center mb-5'>
        <div>
        <img   src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
       </div>

       <div className='about__section__right d-flex flex-column justify-content-center gap-5'>
        <div className='d-flex flex-column gap-2'>
        <span>ABOUT TASTY</span>
            <h3>Our chef cooks the most <br /> delicious food for you</h3>
        </div>
        <div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
       </div>
        </div>
      
    </section>
  )
}

export default AboutSection
