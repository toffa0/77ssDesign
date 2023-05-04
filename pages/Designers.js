import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Image from 'next/image'
import { Link, Router, Routes } from "react-router-dom";
import Footer2 from "@/components/footer2";
import {Contacts, designerLevel, industries, Languages, lastActivity, Logoidentity,Businessadvertising,Webdesign,ClothingMerchandise,ArtIllustration} from "../components/consts"
import Designerswork from "@/components/designerswork";
import { useEffect } from "react";

const Designers = ()=>{

    const [Indst, setIndst] = useState(industries.slice(0,6));
    function handleShowMore(){
        setIndst(industries)
    }
    function handleShowLess(){
        setIndst(industries.slice(0,6))
    }

    const [GeneralCat, setGeneralCat] = useState('');
    const [FirstCat, setFirstCat] = useState('');
    const [FirstCatIsOpen, setFirstCatIsOpen] = useState(false); 
    const [SecondCat, setSecondCat] = useState('');
    const [SecondCatIsOpen, setSecondCatIsOpen] = useState(false); 
    const [ThirdCat, setThirdCat] = useState('');
    const [ThirdCatIsOpen, setThirdCatIsOpen] = useState(false);
    const [ForthCat, setForthCat] = useState('');
    const [ForthCatIsOpen, setForthCatIsOpen] = useState(false);
    const [FifthCat, setFifthCat] = useState('');
    const [FifthCatIsOpen, setFifthCatIsOpen] = useState(false);
    
    
    function handleFirstCat(e){
        setFirstCat(e)
        setGeneralCat(e)
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
        setFirstCatIsOpen(false)
    }
    function handleSecondCat(e){
        setSecondCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
        setSecondCatIsOpen(false)
    }

    function handleThirdCat(e){
        
        setThirdCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setForthCat('')
        setFifthCat('')
        setThirdCatIsOpen(false) 
    }

    function handleForthCat(e){
        setForthCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setFifthCat('')
        setForthCatIsOpen(false) 
    }

    function handleFifthCat(e){
        setFifthCat(e)
        setGeneralCat(e)
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCatIsOpen(false)
    }
    function handleCatClick(){
        setFirstCatIsOpen(false)
        setSecondCatIsOpen(false)
        setThirdCatIsOpen(false) 
        setForthCatIsOpen(false) 
        setFifthCatIsOpen(false)
    }


    const listnew= [
        
           { id:1,text:"1"},
            {id:2,text:"2"},
           { id:3,text:"3"},
            {id:4,text:"4"},
            {id:5,text:"5"},
        
    ]
    return(
        <div>
               <div className="home_section mainscr pb-64">
        <Navbar/>
        
            
        <div className="mt-133 max">
        <div className="mb-20">
            <h1 className='DiffTitle-' id="title" >Designers</h1>
        </div>
        <form className="sr-div" id="mxw-540">
                <input type="text" id="FM" name='' placeholder="Search keywords" />
                <button type="submit"><Image src="SearchLogo.svg" alt="" width={37} height={36} /></button> 
        </form>
        </div>
        </div>
            <div className="mainscr ">
                <div className="fl  pt-64 max">
                    
                
            <div className="fl-all4 w-30 gap60 pos">
            <div className="fl-col ">
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat Redbackground" onClick={()=>{handleCatClick();setFirstCatIsOpen(!FirstCatIsOpen)}}>
                    <Image src="DeLogo.svg" alt="" width={54.23} height={29.09}/>
                    <p>Logo-brand identity</p>
                    <Image src="DeArrow.svg" alt="" width={10} height={10} className="imgmargin"/>
                </div>
                <div class="dropdown-content" id={FirstCatIsOpen?"":"DN"}>
                    <ul>
                        {Logoidentity.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFirstCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>

            
                </div>
            </div>
                <div className="DeCat2 fl fl-gap5" id={FirstCat===""&&"DN"}>
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{FirstCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat bluebackground" onClick={()=>{handleCatClick();setSecondCatIsOpen(!SecondCatIsOpen)}}>
                    <Image src="Debuss.svg" alt="" width={48.04} height={34.21}/>
                    <p>Business-Advertising</p>
                    <Image src="DeArrow.svg" alt="" width={10} height={10} className="imgmargin"/>
                </div>
                <div class="dropdown-content" id={SecondCatIsOpen?"":"DN"}>
                    <ul>
                        {Businessadvertising.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleSecondCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5" id={SecondCat===""&&"DN"}>
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{SecondCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat cyanbackground"  onClick={()=>{handleCatClick();setThirdCatIsOpen(!ThirdCatIsOpen)}}>
                    <Image src="DeWeb.svg" alt="" width={38.76} height={42.64}/>
                    <p>Web-App design</p>
                    <Image src="DeArrow.svg" alt="" width={10} height={10} className="imgmargin"/>
                </div>
                <div class="dropdown-content" id={ThirdCatIsOpen?"":"DN"}>
                    <ul>
                        {Webdesign.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleThirdCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5" id={ThirdCat===""&&"DN"}>
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{ThirdCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat greybackground" onClick={()=>{handleCatClick();setForthCatIsOpen(!ForthCatIsOpen)}}>
                    <Image src="DeCloth.svg" alt="" width={55.13} height={44.1}/>
                    <p id="MR44">Clothing- <br/>Merchandise</p>
                    <Image src="DeArrow.svg" alt="" width={10} height={10} className="imgmargin"/>
                </div>
                <div class="dropdown-content" id={ForthCatIsOpen?"":"DN"}>
                    <ul>
                        {ClothingMerchandise.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleForthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5" id={ForthCat===""&&"DN"}>
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{ForthCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat blackbackground" onClick={()=>{handleCatClick();setFifthCatIsOpen(!FifthCatIsOpen)}}>
                    <Image src="DeGraphics.svg" alt="" width={38.89} height={37.39}/>
                    <p>Illustration-Graphics</p>
                    <Image src="DeArrow.svg" alt="" width={10} height={10} className="imgmargin"/>
                </div>
                <div class="dropdown-content" id={FifthCatIsOpen?"":"DN"}>
                    <ul>
                        {ArtIllustration.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFifthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5" id={FifthCat===""&&"DN"}>
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{FifthCat}</p>
                </div>
            </div>
            {/* 1 filter box               */}
            <div className="filter-box">
                <h3>Industries</h3>
                <ul>
                              
                    {Indst.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
                <button className="SHOWMORELESS" onClick={()=>{Indst.length === 6? handleShowMore() : handleShowLess()}}>{Indst.length === 6? "Show More" : "Show Less"}</button>
            </div>
            
            {/*//////////////////////   1 filter box end //////////////////////////////  */}
            {/* 2 filter box               */}
            <div className="filter-box">
                <h3>Last activity</h3>
                <ul>
                              
                    {lastActivity.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
            </div>
            {/*/////////////////////// 2 filter box end //////////////////////////////  */}
            {/* 3 filter box               */}
            <div className="filter-box">
                <h3>Designer level</h3>
                <ul>
                              
                    {designerLevel.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
            </div>
            {/*///////////////////////// 3 filter box end ////////////////////////////  */}
            {/* 4 filter box               */}
            <div className="filter-box">
                <h3>Languages</h3>
                <ul>
                              
                    {Languages.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
            </div>
            {/*///////////////////////// 4 filter box end ////////////////////////////  */}      
            {/* 5 filter box               */}
            <div className="filter-box">
                <h3>Contacts</h3>
                <ul>
                              
                    {Contacts.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
            </div>
            {/*///////////////////////// 5 filter box end ////////////////////////////  */}                
            </div>
            <div className="fl-all4 fl-gap3 w-70 ">
            {/* <Image src="/image8.svg" width={742} height={191} /> */}
            
            {listnew.map((item) => (
                    
                    <Designerswork key={item.id} />
                
                        ))} 
             
            </div>
            </div>
            <div className="design-page-btns">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
            </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Designers;