import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';

const BrowseContest = ()=>{
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
        <div className=' w-101 pt-175 max'>


   
        
        <div className=' '>
            <div>
            <div className='disc-head2 ' id='blue'>
             <h1>Browse contests</h1>
            </div>
            <div className='bgf5 fl'>
            <div className='header-w60'>
            <div className='pd-20 disc-fil2 firstline'>
                <div className='head-w'>
                <select className="filter2" id="filter" placeholder='All categories'>
                    <option value="AllCategories" >All Categories</option>
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

               
            </div>
            <div className='fl'>

          
            <div className='secline fl fl-gap99 head-w2 BC'>
              <div className=''>
                <p className='cont-p2'>Contest level</p>
                <div  className="fl-col">
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
    
            </div>
            <div className='ml-8'>
                <p className='cont-p '>
                Contest types
                </p>
            
            <div className='cont-types fl jst-SB p22'>
             
                    <div className="fl-col fl-gap99  jst">
                        <div className='fl fl-gap99 jst'>
                            <input type="checkbox" id="Blind" name="accounttype" />
                            <Image htmlFor="Blind" src="blind.svg" width={28} height={28} alt=""  /> 
                        </div>
                 
                        <label htmlFor="Blind">Blind</label>
                    </div>

                    <div className="fl-col fl-gap99  jst">
                        <div className='fl fl-gap99 jst'>
                            <input type="checkbox" id="Guaranteed" name="accounttype" />
                            <Image src="dollar.svg" width={28} height={28} alt=""  /> 
                        </div>
                 
                        <label htmlFor="Guaranteed">Guaranteed</label>
                    </div>
                    <div className="fl-col fl-gap99 jst">
                        <div className='fl fl-gap99 jst'>
                        <input type="checkbox" id="Urgent" name="accounttype" />
                        <Image src="clock.svg" width={28} height={28} alt=""  />
                        </div>
                   
                    <label htmlFor="Urgent"> Urgent</label>
                    </div>
                    <div className="fl-col fl-gap99 jst">
                        <div className='fl fl-gap99 jst'>
                            <input type="checkbox" id="NDA" name="accounttype"/>
                            <Image src="vector2.svg" width={28} height={28} alt=""  />
                        </div>
                    
                        <label htmlFor="NDA"> NDA</label>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className='header-w40 fl-col jst-SB gap15 ali-cen'>
                

                <div className='bc-header-rigth'>
                    <span>Days left</span>
                    <button>&#60; 1</button>
                    <button>1-2</button>
                    <button>2-3</button>
                    <button>3+</button>
                </div>
                
                <div className='w192'><p className='PL-p'>Price</p>
                <div  className="fl jst-SB prInp">
                    <div className="fl fl-gap98 ">
                        <input type="text" id="remember" name="accounttype" placeholder='Min'/>
                        
                    </div>
                    <div className="fl fl-gap98">
                        <input type="text" id="remember2" name="accounttype" placeholder='Max' />
                    </div>  </div></div>
                <div className='BC-search'>  
                <input placeholder='Search' />
                </div>                 
                
             



            </div>
            </div>
            </div>
            <div className='fl jst-SB status'>
                <div className='fl-col'>
                <p>Contest status</p>
                <div className='fl'>
                    <button>Open</button>
                    <button>Finished</button>
                </div>
                </div>
                <div>
                <select>
                    <option>Newest first</option>
                    <option>oldest first</option>
                </select>
                </div>
            </div>

        <div className=' p-t20 '> 
        <div>
            <div className='w-101'>
            
            
          {listItems.map((item) => (
            
                
            <div key={item.id} className='disc-card-Proj'><Link href='#'>

            <Image src="ex5.svg" alt='' width={783} height={147}  />
            </Link>
            </div>
           
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

export default BrowseContest;




