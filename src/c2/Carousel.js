import React, { useState, useRef } from 'react'
import Card from './Card'
import './Carousel.css'
const Carousel = ({ slides }) => {

    const cardsRef = useRef(null);

    function prevButton(){
        let curr = cardsRef.current;
        let newPos = curr.scrollLeft - 650;
        curr.scrollTo({
            left: newPos,
            behavior: 'smooth'
        })


    }
    function nextButton(){
        let curr = cardsRef.current;
        let newPos = curr.scrollLeft + 650;
        curr.scrollTo({
            left: newPos,
            behavior: 'smooth'
        })


    }
  return (
    <div className='main-carousel'>
      <button className='prev' onClick={prevButton}  ><p>❰</p></button>
      <button className='next' onClick={nextButton}  ><p>❱</p></button>
      <div ref={cardsRef} className='cards'>
        {slides.map((ele, index) => {
            console.log(ele)
            return <Card 
                key = {index}
                no = {index}
                url = {ele.url}
                
            
            />
        })}
        
      </div>
      <div className='dots'>
      {slides.map((ele, index) => {
            return <span className='ball'>●</span> 
        })}
      </div>

      
    </div>
  )
}

export default Carousel
