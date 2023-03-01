import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Image from 'next/image'
import { Link, Router, Routes } from "react-router-dom";
import Footer2 from "@/components/footer2";
import {Contacts, designerLevel, industries, Languages, lastActivity, listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"
import Designerswork from "@/components/designerswork";

const Designers = ()=>{
    const listnew= [
        
           { id:1,text:"1"},
            {id:2,text:"2"},
           { id:3,text:"3"},
            {id:4,text:"4"},
            {id:5,text:"5"},
        
    ]
    return(
        <div>
               <div className="home_section mainscr">
        <Navbar/>
        
            
        <div className="p-40-20">
        <div className="p-33">
            <h1 >Designers</h1>
        </div>
        <form className="sr-div" id="w-40">
                <input type="text" name='' placeholder="Search keywords " id="desginform" />
                <input type="submit" name=''  value=" " /> 
        </form>
        </div>
        </div>
            <div className="mainscr ">
                <div className="fl p-33">
                    
                
            <div className="fl-all4 w-30 fl-gap58 pos">
            <div class="dropdown">
                <Image src="catlogo1.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
                        ))}
                </ul>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo2.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems2.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
                        ))}
                </ul>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo3.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems3.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
                        ))}
                </ul>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo4.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems4.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
                        ))}
                </ul>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo5.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems5.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
                        ))}
                </ul>
                </div>
            </div>
            {/* 1 filter box               */}
            <div className="filter-box">
                <h3>industries</h3>
                <ul>
                              
                    {industries.map((item) => (
                        <li key={item.id} className="cat-menu-links">
                            <input type="checkbox" id={item.id} name="filters"/>
                            <label htmlFor={item.id}>{item.text}</label>
                        </li>
                    ))}
                </ul> 
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