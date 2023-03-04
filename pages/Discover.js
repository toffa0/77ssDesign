import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';

const Discover = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [listItems, setListItems] = useState([
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},        
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
        { id: 1, name: "bayuRip" ,pp:'PI.svg' , img:"1549403924.svg"},
      ]);

  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-105 max mt-175'>


   
        { 
        <div className='w-101 '>
            <div className='pd-1 disc-head'>
             <h1>Discover design ideas & inspiration</h1>
            </div>

            <div className='pd-1 disc-fil'>
                <div>
                <select className="filter filter-contin" id="filter" placeholder='All categories'>
                    <option value="volvo" >All Categories</option>
                    <option value="volvo">2</option>
                    <option value="saab">3</option>
                    <option value="opel">4</option>
                    <option value="audi">5</option>
                </select>
                <select className="filter filter-contin" id="filter2">
                <option value="volvo" >All Subcategories</option>
                    <option value="volvo">3</option>
                    <option value="saab">4</option>
                    <option value="opel">5</option>
                    <option value="audi">67</option>
                </select>
                <select className="filter filter-contin" id="filter3">
                <option value="volvo" >All industries</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select>
                </div>
                <div>  <select className="filter filter-contin filter-txtcent" id="filter4">
                <option value="volvo" >Search</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select></div>
               
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




