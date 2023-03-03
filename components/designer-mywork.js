import React, { useState } from "react";



const Designer = ()=>{
    const [activeside, setActiveside] = useState("favorite");
    return(
        <div className=" h-60v fl">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "favorite" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('favorite')}>Favorite (0)</button>


      <button id={`${
     activeside === "Worked" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Worked')}> Worked together (0)</button>

   
     
    </div>



<div className="mywork-ex">
   <h2>Designer name</h2>
   <span>Brief title</span>
 </div>

 </div>



       
     
 
    )
}
export default Designer;