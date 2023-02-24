import React, { useState } from "react";



const Ndas = ()=>{
    const [activeside, setActiveside] = useState("Active");
    return(
        <div className="mainscr h-60v fl">

<div className="fl-all4 work-sidefilter fl-gap3">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Designer name</button>

    </div>



<div className="mywork-ex">
    <h2>Brief title</h2>
    <span>...</span>
 </div>

 </div>



       
     
 
    )
}
export default Ndas;