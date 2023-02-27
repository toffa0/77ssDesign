import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Image from 'next/image'
import { Link } from "react-router-dom";
import Footer2 from "@/components/footer2";
import {listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"

const Categories2 = ()=>{

    return(
        <div>
               <div className="home_section mainscr">
        <Navbar/>
        
            
        <div className="p-100">
        <div className="p-33">
            <h1 >Categories</h1>
        </div>
        <form className="sr-div2">
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
                <select name="test">
                  <option value="CONTESTPROJECT">CONTEST </option>
                  <option value="CONTESTPROJECT">PROJECT</option>
                </select>
                <input type="submit" name=''  value="Start" /> 
            </form>
        </div>
        </div>
            <div className="mainscr   cat2-bg">
                <div className="fl">
                    
                
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

            <button id="catbtn">Others</button>
            <div className="cat2-chatbox">
            <a href="#"> 
            <Image src="chatbox.svg" alt="" width={106} height={106} />
            </a>

            </div>
         
            </div>
            <div className="fl-all4 w-70 jst">
                <Image src="cat2.svg" alt="" width={678} height={1470}/>
            </div>
            </div>
            <div className="cat2-btns">
                <button>Start contest</button>
                <button id="cyan">Hiring (1 to1)</button>
            </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Categories2;