import Image from "next/image";
import {Logoidentity,Webdesign,ClothingMerchandise,ArtIllustration,Businessadvertising, industriesMenu,AllCategoriesItems} from "../consts"
import React, { useState } from 'react';


const Aboutbusiness= ()=>{

    const [AllCategories, setAllCategories] = useState("All Categories");
    const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
    function CategoryClick(item){
      setAllCategories(item);
      setAllCategoriesOpen(!AllCategoriesisOpen)
      
    }
    return(
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Language:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Your industry:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Your website and/or social media:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Project name:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Type of design:</label>
                {/* <select id="catsele" placeholder='All categories'>
                    <option value="" >All Categories</option>
                    <option value="Logo-brand">Logo-brand identity</option>
                    <option value="Business-Advertising">Business-Advertising</option>
                    <option value="Web-App">Web-App design</option>
                    <option value="Clothing">Clothing-Merchandise</option>
                    <option value="Illustration">Illustration-Graphics</option>
                </select> */}
                <div  className="BreifSelect"  onClick={()=>{setAllCategoriesOpen(!AllCategoriesisOpen)}}>
                  <p id="catsele">{AllCategories}</p>
                  <div   className='BreifSelectMenu' id={AllCategoriesisOpen?"":"DN"} onClick={()=>setAllCategoriesOpen(true)}>
                    <ul>
                    <button className='CatH4' onClick={()=>CategoryClick("Logo & identity")}>Logo & identity</button>
                      {
                      Logoidentity.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                      }

                    <button className='CatH4' onClick={()=>CategoryClick("Web - UI/UX design")}>Web - UI/UX design</button>
                    {
                      Webdesign.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }
        
                    {/* <h4 className='CatH4'>Clothing & Merchandise</h4> */}
                    <button className='CatH4' onClick={()=>CategoryClick("Clothing & Merchandise")}>Clothing & Merchandise</button>
                    {
                      ClothingMerchandise.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }
           

                    <button className='CatH4' onClick={()=>CategoryClick("Art & Illustration")}>Art & Illustration</button>
                    { 
                    ArtIllustration.map((item) => (
                      <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                    ))
                    }
        

                    <button className='CatH4' onClick={()=>CategoryClick("Business & advertising")}>Business & advertising</button>
                    {
                      Businessadvertising.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.text)}>{item.text}</button>
                      ))
                    }

                    </ul>
                  </div>
                </div>
            </div>
            <div className="fl fl-gap47">
                <label>Describe your project:</label>
                <textarea />
            </div>
            <div className="fl fl-gap47">
                <label>Design will be used:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Other requirements:</label>
                <textarea />
            </div>
            <div className="fl fl-gap47">
                <label>Link of Reference and/or sketch: </label>
                <input />
            </div>
            <div className="fl fl-gap47 ">
                <label>Attach your logo</label>
                <div className="fl fl-gap10 w-80">

                
                <div className="plusabout ">
                    <Image src="+.svg" alt="" width={27} height={27} />
                    <p>Please attach</p>
                </div>
                <div className="plusabout">
                    <Image src="+.svg" alt="" width={27} height={27} />
                </div>
                <div className="plusabout">
                    <Image src="+.svg" alt="" width={27} height={27} />
                </div>
                </div>
            </div>
            <div className="fl fl-gap47">
                <div className="fl fl-gap10 w-46">
                    <input type="checkbox" id="yes" />
                    <label>No logo</label>
                </div>
                <div className="w-74">
                    <p>Start a logo contest first</p>
                </div>
            </div>
            <div className="mt-159 mb-350">
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Aboutbusiness;