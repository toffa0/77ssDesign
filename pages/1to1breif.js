import React, { useState } from "react";
import Image from 'next/image'
import Aboutbusiness from "@/components/1to1breif/Aboutbusiness";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Time from "@/components/1to1breif/Time";
import Size from "@/components/1to1breif/size";
import Brand from "@/components/1to1breif/Brand";
import Colors from "@/components/1to1breif/Colors";
import Checkout from "@/components/1to1breif/Checkout";


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

<div className="fl-all4 work-sidefilter2 fl-gap3 mb-190 ">
     
     <button id={`${
     activeside === "About" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('About')}>About business & brand</button>


      <button id={`${
     activeside === "Time" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Time')}>Time & budget</button>

   
     <button id={`${
     activeside === "Size" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Size')}>Size, Text & Images</button>

       <button id={`${
     activeside === "Brand" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Brand')}>Brand’s style / Target audience</button>

        <button id={`${
     activeside === "Colors" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Colors')}>Preferred colors</button>

        <button id={`${
     activeside === "Checkout" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Checkout')}>Checkout</button>

    </div>


<div className="mywork-ex">
   {activeside === "About" && <Aboutbusiness/>}
   {activeside === "Time" && <Time/>}
   {activeside === "Size" && <Size/>}
   {activeside === "Brand" && <Brand/>}
   {activeside === "Colors" && <Colors/>}
   {activeside === "Checkout" && <Checkout/>}
 </div>

 </div>

 </div>

 <Footer/>
 </div>     
 
    )
}
export default Oneto1breif;