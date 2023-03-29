import { useEffect } from "react";
import { useState } from "react";
  


// {const DotColor ="#FF6B6B"}
const Dot = ({x,y,DotColor,DotID,setIsHoveringDot,setIsHoveringID})=>{
  
  function handleMouseEnterDot(id) {
    
    console.log("yo")
    setIsHoveringDot(true);
    setIsHoveringID(id)
    console.log(id)
    // console.log(IsHovering)
    // console.log(IsHoveringID)
  }

  function handleMouseLeaveDot() {
    setIsHoveringDot(false);
    
  }
 
  
    // console.log('Dot component')
    return (
        <canvas
          width={10}
          height={10}
          className="feedbackhover"
          style={{
            position: 'absolute',
            left: x +55,
            top: y  +15 ,
            backgroundColor: DotColor,
            borderRadius: '50%',
          }}
          onMouseEnter={()=>handleMouseEnterDot(DotID)}
          onMouseLeave={handleMouseLeaveDot}
      ></canvas>
      );
    }

export default Dot;


