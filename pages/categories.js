import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';
import Footer2 from '@/components/footer2';
import Catmenu from '@/components/cat-menu';



const  Categories = () => {
    const [isOpen, setOpen] = useState(false);

  return (
    <div className="ProfilePage">
        <div className='mainscr home_section'>
        <Navbar/>
        <div className='pd-1 cat-fl'>
          <Image src='cat-img.svg' alt="" width={715} height={127} />
          <form className="sr-div2" id='cat-search'>
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
               
                <input type="submit" name=''  value="Start" /> 
          </form>
        </div>
        </div>
       
        <div className='mainscr  '>
          <div className='cat-header'>
          <h1>All Categories</h1>
          </div>
        
        <div className=' w-100'>

          
        <div className='cat-card'>
           <Image src='/images/cat1.png' alt="" width={96} height={51}/>
            <span>Custom Logo</span>
        </div>
        <div className='cat-card'>
           <Image src='cat2.png' alt="" width={96} height={51}/>
            <span>Label-packaging</span>
        </div>
        <div className='cat-card'>
           <Image src='/cat3.png' alt="" width={96} height={51}/>
            <span>Illustration-graphics</span>
        </div>
        <div className='cat-card'>
            <Image src='/cat4.png' alt="" width={96} height={51}/>
            <span>web - app design</span>
        </div>
        <div className='cat-card'>
          <Image src='/cat5.png' alt="" width={96} height={51}/>
           <span>Custom Logo</span>
        </div>
        <div className='cat-card'>
          <Image src='/cat6.png' alt="" width={96} height={51}/>
           <span>Label-packaging</span>
          </div>
        <div className='cat-card'>
          <Image src='/cat7.png' alt="" width={96} height={51}/>
           <span>Illustration-graphics</span>
        </div>
        <div className={`cat-card drop-down-menu ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
            {/* <Image source={require('./cat8.png') }alt="" width={96} height={51}/> */}
            <Image src='cat8.svg' alt="" width={96} height={51}/>
            <span>All Categories</span>
        </div>
        
      





</div>
{ isOpen &&
        <div className='cat-menu-bg p-30' id='cat-menu'>

        <Catmenu/>
    </div>
      }
    <div className='cat-btn'>
        <button>Get Started</button>
    </div>
       
      </div>

      <Footer2/>
      <Footer/>
    </div>
  );
}

export default Categories;




