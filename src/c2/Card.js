import React,{ useState } from 'react'
import './Card.css'

const Card = (props) => {

  const [isOver, setIsOver] = useState(false);
  return (
    <div className='card'  onClick={() => {console.log(props.no)}} 
    // style={{backgroundImage: `url(${props.url})`}}
    onMouseOver={() => {
        //console.log("in");
        setIsOver(true)
        console.log(isOver);
    }}
    onMouseOut={() => {
        //console.log("out");
        setIsOver(false)
        console.log(isOver);
    }}
    style={{backgroundImage: isOver === true ? `url(${props.url})` : `none`,
            backgroundSize: `cover`,
            backgroundRepeat: `none`}}
    >
      {props.no}
      
    </div>
  )
}

export default Card
