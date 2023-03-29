import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import {Logoidentity,Webdesign,ClothingMerchandise,ArtIllustration,Businessadvertising, industriesMenu} from "../components/consts"

const Discover = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [ActiveCat, setActiveCat] = useState('');
    const [listItems, setListItems] = useState([
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 2, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 3, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},        
        { id: 4, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 5, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 6, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 7, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
      ]);
      function handle(e){
        setActiveCat(e)
        console.log(ActiveCat)
      }
  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className='max mt-175'>


   
        { 
        <div className='w-101 '>
            <div className='pd-1 disc-head'>
             <h1>Discover design ideas & inspiration</h1>
            </div>

            <div className='pd-1 disc-fil'>
                <div className='fl fl-gap32'>
                <select className="filter filter-contin" id="filter" placeholder='All categories' onChange={(e)=>handle(e.currentTarget.value)}>
                    <option value="" >All Categories</option>
                    <option value="Logo-brand">Logo-brand identity</option>
                    <option value="Business-Advertising">Business-Advertising</option>
                    <option value="Web-App">Web-App design</option>
                    <option value="Clothing">Clothing-Merchandise</option>
                    <option value="Illustration">Illustration-Graphics</option>
                </select>
                <select className="filter filter-contin" id="filter2">
                {ActiveCat===""?<option value="Subcategories">All Subcategories</option>
                :<option value="Subcategories" disabled >All Subcategories</option>}
                  {ActiveCat==="Logo-brand"&&
                  Logoidentity.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))
                  
                  
                 
                  }
                  {ActiveCat==="Business-Advertising"&&
                  Businessadvertising.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))

                  }
                  {ActiveCat==="Web-App"&&
                  Webdesign.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))

                  }
                  {ActiveCat==="Clothing"&&
                  ClothingMerchandise.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))
                  }
                  {ActiveCat==="Illustration" &&
                  ArtIllustration.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))
                  }
                </select>

                </div>
                <input  value="Search" className='filterSearch'/>
               
            </div>

        <div className='fl-all2  '> 
        <div>
            <div className='disc-card-cont'>
            
            
          {listItems.map((item) => (
            <div key={item.id} className='disc-card'><a href='#'>
                
               <Image src={item.img} id='ds-img' alt="" width={400} height={400}/>
                <div className='ds-text'>
                  <div className='fl-all5'>
                  <Image src={item.pp} alt="" width={40} height={40}/>
                   <span>{item.name}</span>
                  </div>
                   
                   <div className='fl-all5'>
                   <FaThumbsUp />
                    <span>18</span>
                   </div>
                </div>
            
            
            </a></div>
          ))}
        
            </div>
        </div>


    
        </div>
                  
    </div>
      }






</div>

       
      </div>

      <Footer2/>
      <Footer/>
    </div>
  );
}

export default Discover;




