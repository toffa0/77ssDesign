import React, { useState } from "react";
import Image from 'next/image';


const Projects = ()=>{
    const [activeside, setActiveside] = useState("Active");
    return(
        <div className="mainscr h-60v fl">

<div className="fl-all4 work-sidefilter fl-gap3">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Active (0)</button>


      <button id={`${
     activeside === "Invited" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Invited')}> Invited (0)</button>

   
     <button id={`${
     activeside === "Finished" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Finished')}>Finished (0)</button>

       <button id={`${
     activeside === "Canceled" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Canceled')}>Canceled (0)</button>


    </div>



<div className="mywork-ex">
     <Image src="/ex1.png" alt="" />
 </div>

 </div>



       
     
 
    )
}
export default Projects;