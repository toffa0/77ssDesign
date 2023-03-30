import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';
import { useEffect } from 'react';
import { BASE_URL ,API_VERSION } from '@/config';
import {Logoidentity,Webdesign,ClothingMerchandise,ArtIllustration,Businessadvertising, industriesMenu} from "../components/consts"

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

      
    useEffect(()=>{
        
        fetch(`${BASE_URL}/${API_VERSION}/project/`, {
      })
      .then(response => {return response.json()})
      .then(data => console.log(data))
      .catch(error => console.error(error));


        
    },[])


    const [ActiveCat, setActiveCat] = useState('');
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
        <div className=' w-101 pt-175 max'>


   
        
        <div className=' '>
           
        <div className='disc-head2 ' id='cyan'>
             <h1>Browse Projects</h1>
            </div>
            <div className=''>
            <div className='bgf5 fl h342 jst-SB'>
            <div className='w-80 fl-col fl-gap32'>
            <div className=' disc-fil2 firstline'>
                <div className='head-w'>
                <select className="filter2" id="filter2" placeholder='All categories' onChange={(e)=>handle(e.currentTarget.value)}>
                    <option value="" >All Categories</option>
                    <option value="Logo-brand">Logo-brand identity</option>
                    <option value="Business-Advertising">Business-Advertising</option>
                    <option value="Web-App">Web-App design</option>
                    <option value="Clothing">Clothing-Merchandise</option>
                    <option value="Illustration">Illustration-Graphics</option>
                </select>


                <select className="filter2" id="filter2" disabled={ActiveCat===""}>
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
                <select className="filter2" id="filter3">
                <option value="volvo" >All industries</option>
                {
                  industriesMenu.map((item) => (
                    <option key={item.id}>{item.text}</option>
                  ))
                  }
                </select>
                </div>

               
            </div>
            <div className='fl  mb-30'>

          
            <div className='secline fl fl-gap99 head-w2 BC'>
              <div className=''>
                <p className='cont-p2'>Contest level</p>
                <div  className="fl-col">
                    <div className="fl fl-gap10 ">
                        <input type="radio" id="remember" name="accounttype"/>
                        <label htmlFor="remember">Entry</label>
                    </div>
                    <div className="fl fl-gap10">
                        <input type="radio" id="remember2" name="accounttype" />
                        <label htmlFor="remember2">Mid</label>
                    </div>
                    <div className="fl fl-gap10">
                        <input type="radio" id="remember3" name="accounttype" />
                        <label htmlFor="remember3">Advance</label>
                    </div>
                </div>
              </div>  
    
            </div>
            <div className=''>
                <p className='cont-p '>
                Contest types
                </p>
            
            <div className='cont-types fl jst-SB p22'>
             
   

                    <div className="fl-col fl-gap99  jst">
                        <div className='fl fl-gap99 jst'>
                            <input type="checkbox" id="Guaranteed" name="accounttype" />
                            <Image src="dollar.svg" width={30.85} height={30.85} alt=""  />  
                        </div>
                 
                        <label htmlFor="Guaranteed">Guaranteed</label>
                    </div>
                    <div className="fl-col fl-gap99 jst">
                        <div className='fl fl-gap99 jst'>
                        <input type="checkbox" id="Urgent" name="accounttype" />
                        <Image src="clock.svg" width={26.31} height={33} alt=""  />
                        </div>
                   
                    <label htmlFor="Urgent"> Urgent</label>
                    </div>
                    <div className="fl-col fl-gap99 jst">
                        <div className='fl fl-gap99 jst'>
                            <input type="checkbox" id="NDA" name="accounttype"/>
                            <Image src="vector2.svg" width={25} height={30} alt=""  />
                        </div>
                    
                        <label htmlFor="NDA"> NDA</label>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className='header-w30 fl-col fl-gap32 gap15 ali-cen mb-30'>
                
            <div className='BC-search'>  
                <input placeholder='Search' />
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
                      <select>
                    <option>Newest first</option>
                    <option>oldest first</option>
                      </select>
                </div>



            </div>
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

export default BrowseProjects;




