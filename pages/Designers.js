import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Image from 'next/image'

const Designers = ()=>{

    return(
        <div>
               <div className="home_section mainscr">
        <Navbar/>
        <div>
            <h1>Designers</h1>
        </div>
        <form className="sr-div">
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
                <input type="submit" name=''  value=" " /> 
            </form>
        </div>

            <div className="mainscr fl">
            <div className="fl-all4">
            <Image src="/component1.png" alt=""/>
            <Image src="/component2.png" alt=""/>

            <div class="dropdown">
                <Image src="/component3.png" alt=""/>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>



          
         
            <Image src="/component4.png" alt=""/>
            <Image src="/component5.png" alt=""/>
            </div>
            <div>
                <Image src="/ex2.png" alt=""/>
            </div>
            </div>
        </div>
    )
}
export default Designers;