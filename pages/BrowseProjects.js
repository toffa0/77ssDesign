import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';

const BrowseProjects = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [listItems, setListItems] = useState([
        { id: 1, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 2, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 3, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},        
        { id: 4, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 5, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 6, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
        { id: 7, name: "bayuRip" ,pp:'profileicon.png' , img:"DesignThinking.jpg"},
      ]);

  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-101 pv-55'>


   
        
        <div className=' '>
            <div>
            <div className='disc-head2'>
             <h1>Browse Projects</h1>
            </div>
            <div className='bgf5 fl'>
            <div className='header-w60'>
            <div className='pd-20 disc-fil2 firstline'>
                <div className='head-w'>
                <select className="filter2" id="filter" placeholder='All categories'>
                    <option value="volvo" >All Categories</option>
                    <option value="volvo">2</option>
                    <option value="saab">3</option>
                    <option value="opel">4</option>
                    <option value="audi">5</option>
                </select>
                <select className="filter2" id="filter2">
                <option value="volvo" >All Subcategories</option>
                    <option value="volvo">3</option>
                    <option value="saab">4</option>
                    <option value="opel">5</option>
                    <option value="audi">67</option>
                </select>
                <select className="filter2" id="filter3">
                <option value="volvo" >All industries</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select>
                </div>
                {/* <div>  <select className="filter2" id="filter4">
                <option value="volvo" >Search</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select></div> */}
               
            </div>
            <div className='secline fl fl-gap99 head-w'>
              <div>
                <p className='PL-p'>Project level</p>
                <div  className="fl fl-gap52 ">
                    <div className="fl fl-gap98 ">
                        <input type="radio" id="remember" name="accounttype"/>
                        <label htmlFor="remember">Entry</label>
                    </div>
                    <div className="fl fl-gap98">
                        <input type="radio" id="remember2" name="accounttype" />
                        <label htmlFor="remember2">Mid</label>
                    </div>
                    <div className="fl fl-gap98">
                        <input type="radio" id="remember3" name="accounttype" />
                        <label htmlFor="remember3">Advance</label>
                    </div>
                </div>
              </div>  
              <div>
                <p className='PL-p'>Price</p>
                <div  className="fl fl-gap99 prInp">
                    <div className="fl fl-gap98 ">
                        <input type="text" id="remember" name="accounttype" placeholder='Start from'/>
                        
                    </div>
                    <div className="fl fl-gap98">
                        <input type="text" id="remember2" name="accounttype" placeholder='Max' />
                    </div>
                  
                </div>
              </div> 
            </div>
            </div>
            <div className='header-w40 fl jst-SA'>
                <div className='headcol'>
                    <div className="fl fl-gap99 ">
                    <input type="checkbox" id="remember" name="accounttype"/>
                    <label htmlFor="remember"><Image src="vector2.svg" width={17.97} height={20} alt=""  /> NDA</label>
                    </div>
                    <div className="fl fl-gap99">
                    <input type="checkbox" id="remember2" name="accounttype" />
                    <label htmlFor="remember2"><Image src="vector.svg" width={17.97} height={20} alt=""  /> Guaranteed</label>
                    </div>
                    <div className="fl fl-gap99">
                    <input type="checkbox" id="remember3" name="accounttype" />
                    <label htmlFor="remember3"><Image src="vector.svg" width={17.97} height={20} alt=""  /> Urgent</label>
                    </div>
                </div>
                <div className='headcol p-15'>
                    <div className="fl fl-gap99 ">
                    <input type="text" id="proj-search" name="accounttype" placeholder='Search' className='filter2'/>
                    </div>
                    <select className="filter2" id="newestfilter">
                <option value="Newestfirst" >Newest first</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select>
               
                </div>
            </div>
            </div>
            </div>
            

        <div className=' p-t20 '> 
        <div>
            <div className='w-101'>
            
            
          {listItems.map((item) => (
            <Link href='#'>
                
            <div key={item.id} className='disc-card-Proj'>

            <Image src="ex5.svg" alt='' width={783} height={147}  />
            
            </div>
            </Link>
          ))}
        
            </div>
        </div>


    
        </div>
                  
    </div>
      






</div>

       
      </div>

      <Footer2/>
      <Footer/>
    </div>
  );
}

export default BrowseProjects;




