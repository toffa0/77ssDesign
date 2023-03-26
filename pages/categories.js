import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';
import Footer2 from '@/components/footer2';
import Catmenu from '@/components/cat-menu';
import Link from 'next/link';



const  Categories = () => {
    const [isOpen, setOpen] = useState(false);
    const [Categ, setCateg] = useState('');
  return (
    <div className="ProfilePage">
        <div className='mainscr home_section3'>
        <Navbar/>
        <div className='pd-1 cat-fl max'>
          <Image src='cat-img.svg' alt="" width={715} height={127} />
          <form className="sr-div3" >
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
               
                <input type="submit" name=''  value="Start" /> 
          </form>
        </div>
        </div>

        <div className='max'>
        
        <div className='cat-header2'>
          <h1 >All Categories</h1>
          </div>
        <div className=''>
      
        
        <div className=' w-105 mb-32'>

          
        <div className='cat-card'>
           <Image src='expLogo1.svg' alt="" width={96} height={51}/>
            <span>Custom Logo</span>
        </div>
        <div className='cat-card'>
           <Image src='expLogo2.svg' alt="" width={219.72} height={195}/>
            <span>Business - Advertising</span>
        </div>
        <div className='cat-card'>
           <Image src='expLogo5.svg' alt="" width={67.05} height={64.46}/>
            <span>Illustration -Graphics</span>
        </div>
        <div className='cat-card'>
            <Image src='expLogo3.svg' alt="" width={77.52} height={85.27}/>
            <span>Web-App design</span>
        </div>
 
        <div className='cat-card'>
          <Image src='expLogo4.svg' alt="" width={104.48} height={83.58}/>
           <span>Clothing -Merchandise</span>
          </div>

        <div className={`cat-card drop-down-menu ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
            {/* <Image source={require('./cat8.png') }alt="" width={96} height={51}/> */}
            <Image src='cat8.svg' alt="" width={36} height={73} id="cat8"/>
            <span>All Categories</span>
        </div>
        
      





</div>
{ isOpen &&
        <div className='cat-menu-bg p-30' id='cat-menu'>

        <Catmenu setCateg={setCateg} Categ={Categ} />
    </div>
      }
        <div className="cat2-btns max">
                <Link href="1to1breif" id="cyan">Start</Link>
            </div>
       
      </div>
      </div>
      <Footer2/>
      <Footer/>
    </div>
  );
}

export default Categories;




