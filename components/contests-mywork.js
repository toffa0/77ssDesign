import React, { useState } from "react";
import Image from 'next/image'



const Contests = ()=>{
    const [activeside, setActiveside] = useState("Active");
    return(
        <div className="h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Active (0)</button>


      <button id={`${
     activeside === "Locked" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Locked')}> Locked (0)</button>

   
     <button id={`${
     activeside === "Finished" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Finished')}>Finished (0)</button>

       <button id={`${
     activeside === "Qualifying" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Qualifying')}>Qualifying (0)</button>

        <button id={`${
     activeside === "Final" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Final')}>Final round (0)</button>

        <button id={`${
     activeside === "Eliminated" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Eliminated')}>Eliminated (0)</button>

        <button id={`${
     activeside === "Watching" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Watching')}>Watching (0)</button>
    </div>


<div className="mywork-ex">
     <Image src="/ex1.png" alt="" width={669} height={125}/>
     <div className="work-cont">
      <div className="work-w2">
      <Image src="/ex12.png" alt="" width={100} height={112}/>
      </div>
     
     <div className="work-w work-text">
      <h3>Mkoba-Design Eye</h3>
      <p>mkoba is mobile app mkoba is mobile app mkoba is mobile app mkoba is mobile app</p>
      <span>by xmokla</span>

        <div className="workflex">
        <span className="bord gold">Gold</span>
        <span className="bord red"> GUARANTEED</span>
        <span className="bord blackkkk">Logo & social media pack</span>
        <span className="bord blackkkk">Accounting & Financial</span>
        </div>
     </div>
     <div className="work-w3">
      <div><Image alt=""/> <span>3D designs</span></div>
      <div><Image alt=""/> <span>3 Days, 13 hours</span></div>
      <div><Image alt=""/> <span>7% feedback(1)</span></div>
      <div><button>Watch</button></div>
     </div>
     </div>
     
 </div>

 </div>



       
     
 
    )
}
export default Contests;