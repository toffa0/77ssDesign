import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'


const Discover = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [listItems, setListItems] = useState([
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},        
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
      ]);

  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-100'>


   
        { 
        <div className=' '>
            <div className='pd-1 disc-head'>
             <h1>Discover design ideas & inspiration</h1>
            </div>

            <div className='pd-1 disc-fil'>
                <div>
                <select className="filter" id="filter" placeholder='All categories'>
                    <option value="volvo" disabled>All Categories</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <select className="filter" id="filter2">
                <option value="volvo" disabled>All Subcategories</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <select className="filter" id="filter3">
                <option value="volvo" disabled>All industries</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </div>
                <div>  <select className="filter" id="filter4">
                <option value="volvo" disabled>Search</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select></div>
               
            </div>

        <div className='fl-all2 p-t20 pd-t21'> 
        <div>
            <div className='disc-card-cont'>
            
            
          {listItems.map((item) => (
            <div key={item.id} className='disc-card'><a href='#'>
                
               <Image src={item.img} id='ds-img' alt=""/>
                <div className='ds-text'>
                   <Image src={item.pp} alt=""/>
                   <span>{item.name}</span>
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

    
      <Footer/>
    </div>
  );
}

export default Discover;




