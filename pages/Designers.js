import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Image from 'next/image'
import { Link, Router, Routes } from "react-router-dom";
import Footer2 from "@/components/footer2";
import {Contacts, designerLevel, industries, Languages, lastActivity, listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"
import Designerswork from "@/components/designerswork";
import { useEffect } from "react";

const Designers = ()=>{

    const [GeneralCat, setGeneralCat] = useState('');
    const [FirstCat, setFirstCat] = useState('');
    const [SecondCat, setSecondCat] = useState('');
    const [ThirdCat, setThirdCat] = useState('');
    const [ForthCat, setForthCat] = useState('');
    const [FifthCat, setFifthCat] = useState('');

    const [Indst, setIndst] = useState(industries.slice(0,6));
    
    function handleShowMore(){
        setIndst(industries)
    }
    function handleShowLess(){
        setIndst(industries.slice(0,6))
    }
    function handleFirstCat(e){
        setFirstCat(e)
        setGeneralCat(e)
        // 
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')

    }
    function handleSecondCat(e){
        setSecondCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
    }

    function handleThirdCat(e){
        
        setThirdCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setForthCat('')
        setFifthCat('')
    }

    function handleForthCat(e){
        setForthCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setFifthCat('')
    }

    function handleFifthCat(e){
        setFifthCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
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
               <div className="home_section3 mainscr pb-64">
        <Navbar/>
        
            
        <div className="mt-175 max">
        <div className="mb-50">
            <h1 >Designers</h1>
        </div>
        <form className="sr-div mb-0" id="w-40">
                <input type="text" name='' placeholder="Search keywords " id="desginform" />
                <input type="submit" name=''  value=" " /> 
        </form>
        </div>
        </div>
            <div className="mainscr ">
                <div className="fl  pt-64 max">
                    
                
            <div className="fl-all4 w-30 gap60 pos">
            <div className="fl-col gap19">
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat Redbackground">
                    <Image src="DeLogo.svg" alt="" width={54.23} height={29.09}/>
                    <p>Logo-brand identity</p>
                    <Image src="DeArrow.svg" alt="" width={17.12} height={10.56} className="imgmargin"/>
                </div>
                <div class="dropdown-content">
                    <ul>
                        {listItems.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFirstCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>

            
                </div>
            </div>
                <div className="DeCat2 fl fl-gap5">
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{FirstCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat bluebackground">
                    <Image src="Debuss.svg" alt="" width={48.04} height={34.21}/>
                    <p>Business-Advertising</p>
                    <Image src="DeArrow.svg" alt="" width={17.12} height={10.56} className="imgmargin"/>
                </div>
                <div class="dropdown-content">
                    <ul>
                        {listItems2.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleSecondCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5">
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{SecondCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat cyanbackground">
                    <Image src="DeWeb.svg" alt="" width={38.76} height={42.64}/>
                    <p>Web-App design</p>
                    <Image src="DeArrow.svg" alt="" width={17.12} height={10.56} className="imgmargin"/>
                </div>
                <div class="dropdown-content">
                    <ul>
                        {listItems3.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleThirdCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5">
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{ThirdCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat greybackground">
                    <Image src="DeCloth.svg" alt="" width={55.13} height={44.1}/>
                    <p>Clothing- <br/>Merchandise</p>
                    <Image src="DeArrow.svg" alt="" width={17.12} height={10.56} className="imgmargin"/>
                </div>
                <div class="dropdown-content">
                    <ul>
                        {listItems4.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleForthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5">
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{ForthCat}</p>
                </div>
            <div class="dropdown">
                <div className="fl jst jst-SB DeCat blackbackground">
                    <Image src="DeGraphics.svg" alt="" width={38.89} height={37.39}/>
                    <p>Illustration-Graphics</p>
                    <Image src="DeArrow.svg" alt="" width={17.12} height={10.56} className="imgmargin"/>
                </div>
                <div class="dropdown-content">
                    <ul>
                        {listItems5.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFifthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
            </div>
            <div className="DeCat2 fl fl-gap5">
                    <Image src="DeRectangle.svg" alt="" width={18.22} height={29.09}/> 
                    <p>{FifthCat}</p>
                </div>
            </div>
            {/* 1 filter box               */}
            <div className="filter-box">
                <h3>industries</h3>
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