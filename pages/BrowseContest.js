import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';
import {Logoidentity,Webdesign,ClothingMerchandise,ArtIllustration,Businessadvertising, industriesMenu,AllCategoriesItems } from "../components/consts"


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
      const [AllIndustries, setAllIndustries] = useState("All Industries");
      const [IndustriesisOpen, setIndustriesOpen] = useState(false);
      function IndustClick(item){
        setAllIndustries(item);
        setIndustriesOpen(!IndustriesisOpen)
      }
      const [ActiveCat, setActiveCat] = useState('');
      function handle(e){
        setActiveCat(e)
        console.log(ActiveCat)
      }
      const [AllCategories, setAllCategories] = useState("All Categories");
      const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
      function CategoryClick(item){
        setAllCategories(item);
        setAllCategoriesOpen(!AllCategoriesisOpen)
        
      }
      const [Allsubcategories, setAllsubcategories] = useState("All subcategories");
      const [AllsubcategoriesisOpen, setAllsubcategoriesOpen] = useState(false);
      function SubCategoryClick(item){
        setAllsubcategories(item);
        setAllsubcategoriesOpen(!AllCategoriesisOpen)
        
      }
      const industriesMenustrAscending = [...industriesMenu].sort((a, b) =>
      a.label > b.label ? 1 : -1,
    );

  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-101 pt-175 max'>


   
        
        <div className=' '>
           
            <div className='disc-head2 ' id='blue'>
             <h1>Browse contests</h1>
            </div>
            <div className=''>
            <div className='bgf5 fl h342 jst-SB'>
            <div className='w-80 fl-col fl-gap32'>
            <div className=' disc-fil2 firstline'>
                <div className='head-w'>

                <div style={{width:"320px"}}  className="filter2 prel" id="filter3" onClick={()=>{setAllCategoriesOpen(!AllCategoriesisOpen);setIndustriesOpen(false)}}>
                  <p>{AllCategories}</p>
                  <div  style={{width:"320px",height:"max-content"}}  className='SelectMenu' id={AllCategoriesisOpen?"":"DN"}>
                    <ul>
                    {
                      AllCategoriesItems.map((item) => (
                        <button key={item.id} onClick={()=>CategoryClick(item.Text)}>{item.Text}</button>
                      ))
                    }
                    </ul>
                  </div>
                </div>
                {/* //////////////////////////////////////////////// */}
                {/* Second Select */}
                {/* <button disabled={AllCategories==="All Categories"}  className="filter2 prel" id="filter3" onClick={()=>{setAllsubcategoriesOpen(!AllsubcategoriesisOpen);setIndustriesOpen(false)}}>
                  <p className='Selectp'>{Allsubcategories}</p>
                  <div  className='SelectMenu' id={AllsubcategoriesisOpen?"":"DN"}>
                    <ul>
                    {AllCategories==="Logo-brand identity"&&
                      Logoidentity.map((item) => (
                        <button key={item.id} onClick={()=>SubCategoryClick(item.text)}>{item.text}</button>
                      ))

                    }
                    {AllCategories==="Business-Advertising"&&
                      Businessadvertising.map((item) => (
                        <button key={item.id} onClick={()=>SubCategoryClick(item.text)}>{item.text}</button>
                      ))
                    }
                    {AllCategories==="Web-App design"&&
                      Webdesign.map((item) => (
                        <button key={item.id} onClick={()=>SubCategoryClick(item.text)}>{item.text}</button>
                      ))

                    }
                    {AllCategories==="Clothing-Merchandise"&&
                      ClothingMerchandise.map((item) => (
                        <button key={item.id} onClick={()=>SubCategoryClick(item.text)}>{item.text}</button>
                      ))
                    }
                    {AllCategories==="Illustration-Graphics" &&
                    ArtIllustration.map((item) => (
                      <button key={item.id} onClick={()=>SubCategoryClick(item.text)}>{item.text}</button>
                    ))
                    }
                    </ul>
                  </div>
                </button> */}
                <div style={{width:"320px"}} className="filter2 prel" id="filter3" onClick={()=>setIndustriesOpen(!IndustriesisOpen)}>
                  <p>{AllIndustries}</p>
                  <div style={{width:"320px"}} className='SelectMenu' id={IndustriesisOpen?"":"DN"}>
                    <ul>
                    {
                      industriesMenustrAscending.map((item) => (
                        <button key={item.id} onClick={()=>IndustClick(item.label)}>{item.label}</button>
                      ))
                    }
                    </ul>
                  </div>
                </div>
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
                            <input type="checkbox" id="Blind" name="accounttype" />
                            <Image htmlFor="Blind" src="blind.svg" width={28} height={22} alt=""  /> 
                        </div>
                 
                        <label htmlFor="Blind">Blind</label>
                    </div>

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
                
                <div className='dayscont'>
                    <div className='fl-col gap15'>

                    
                    <span>Days left</span>
                    <div className='bc-header-rigth'>
                    <button>&#60; 1</button>
                    <button>1-2</button>
                    <button>2-3</button>
                    <button>3+</button>
                    </div>
                    </div>
                </div>
    
                    
                <div className='w192'>
                    <p className='PL-p'>Price</p>
                <div  className="fl jst-SB prInp">
                    <div className="fl fl-gap98 ">
                        <input type="text" id="remember" name="accounttype" placeholder='Min'/>
                        
                    </div>
                    <div className="fl fl-gap98">
                        <input type="text" id="remember2" name="accounttype" placeholder='Max' />
                    </div>  </div>
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




