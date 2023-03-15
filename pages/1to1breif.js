import React, { useState } from "react";
import Image from 'next/image'
import Aboutbusiness from "@/components/1to1breif/Aboutbusiness";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Time from "@/components/1to1breif/Time";


const Oneto1breif = ()=>{
    const [activeside, setActiveside] = useState("About");
    return(

<div>
    
         <div className="home_section p-15">
            <div className="max">
                <Navbar/>
                <div className="my-workkk mt-125">
                    <h2>1 to 1</h2>
                    <h1>Brief details</h1>
                </div>
            </div>
      
 
        </div>
        <div className="mywork-conten max">
        <div className="h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190 ">
     
     <button id={`${
     activeside === "About" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('About')}>About business & brand</button>


      <button id={`${
     activeside === "Time" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Time')}>Time & budget</button>

   
     <button id={`${
     activeside === "Finished" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Finished')}>Size, Text & Images</button>

       <button id={`${
     activeside === "Qualifying" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Qualifying')}>Brand’s style / Target audience</button>

        <button id={`${
     activeside === "Final" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Final')}>Preferred colors</button>

        <button id={`${
     activeside === "Eliminated" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Eliminated')}>Checkout</button>

    </div>


<div className="mywork-ex">
   {activeside === "About" && <Aboutbusiness/>}
   {activeside === "Time" && <Time/>}
 </div>

 </div>

 </div>

 <Footer/>
 </div>     
 
    )
}
export default Oneto1breif;