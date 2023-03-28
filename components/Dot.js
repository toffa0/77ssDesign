import { useEffect } from "react";
import { useState } from "react";
  


// {const DotColor ="#FF6B6B"}
const Dot = ({x,y,DotColor})=>{
  
 
 
  
    // console.log('Dot component')
    return (
        <canvas
          width={10}
          height={10}
          className="feedbackhover"
          style={{
            position: 'absolute',
            left: x+50 ,
            top: y  -50 ,
            backgroundColor: DotColor,
            borderRadius: '50%',
          }}
          
      ></canvas>
      );
    }

export default Dot;