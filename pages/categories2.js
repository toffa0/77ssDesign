import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Footer2 from "@/components/footer2";
import { BASE_URL ,API_VERSION } from '@/config';
import {listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"

const Categories2 = ()=>{

    const [ChooseCat, SetChooseCat] = useState("");


    useEffect(()=>{
        fetch(`${BASE_URL}/${API_VERSION}/core/categories/`, {
          
       
        })
        .then(response => {
          if(response.ok){
            console.log(response);
          } else {
            throw new Error('Something went wrong');
          }
        })

        .catch(error => console.error(error));
        
    },[])


    function handleclick(){
        
    }

    return(
        <div>
               <div className="home_section ">
        <div className=" max">
               <Navbar/>
        <div className="p-50 ">
        
        <div className="p-33">
            <h1 >Categories</h1>
        </div>
        <form className="sr-div2 fl jst" id='cat-search'>
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
                <select name="test">
                  <option value="CONTESTPROJECT">CONTEST </option>
                  <option value="CONTESTPROJECT">PROJECT</option>
                </select>
                <input type="submit" name=''  value="Start" /> 
            </form>
        </div>
        </div>
        </div>
            <div className=" cat2-bg">
                <div className="fl max">
                    
                
            <div className="fl-all4 w-30 fl-gap58 pos">
            <div class="dropdown">
                <Image src="catlogo1.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content">
                    <ul>
                        {listItems.map((item) => (
                            <li key={item.id} className="cat-menu-links"><a href='#' onClick={()=>{SetChooseCat(item.text);console.log(ChooseCat)}} >{item.text}</a></li>
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
                <Image src="cat2img.svg" alt="" width={678} height={1470}/>
            </div>
            </div>
            <div className="cat2-btns max">
                <Link href="Contestbreif" >Start contest</Link>
                <Link href="1to1breif" id="cyan">Hiring (1 to1)</Link>
            </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Categories2;