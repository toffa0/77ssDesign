import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';



const  Categories = () => {
    const [isOpen, setOpen] = useState(false);
    const listItems = [
        { id: 1, text: "Logo design" },
        { id: 2, text: "Logo & brand identity pack" },
        { id: 3, text: "Logo & social media pack" },
        { id: 4, text: "Logo & website Design" },
        { id: 5, text: "Logo & business card" },
        { id: 6, text: "Brand guide" },
        { id: 7, text: "Business card" },
        { id: 8, text: "Stationery" },
        { id: 9, text: "Logo & brand guide" },
        { id: 10, text: "Logo & product packaging" },
        { id: 11, text: "Logo & animation" },
      ];
      const listItems2 = [
        { id: 1, text: "Web design" },
        { id: 2, text: "WordPress theme design" },
        { id: 3, text: "Landing page design" },
        { id: 4, text: "App design" },
        { id: 5, text: "Facebook cover" },
        { id: 6, text: "Social media page" },
        { id: 7, text: "Banner ad" },
        { id: 8, text: "Email" }
      ];
      const listItems3=[
        { id: 1, text: "T-shirt clothing / apparel" },
        { id: 2, text: "Merchandise" },
        { id: 3, text: "Cup / Mug" },
        { id: 4, text: "Sticker" },
      ];
      const listItems4=[
        { id: 1, text: "Product packaging" },
        { id: 2, text: "Product label" },
        { id: 3, text: "Book/Magazine over" },
        { id: 4, text: "Postcard/Flyer/Print Poster" },
        { id: 5, text: "Card / Invitation" },
        { id: 6, text: "Brochure" },
        { id: 7, text: "Pag" },
        { id: 8, text: "Car/truck/Van wrap" },
        { id: 9, text: "Signage" },
        { id: 10, text: "Power Point template" },
        { id: 11, text: "Menu/Album cover" },
      ];
      const listItems5 =[
        { id: 1, text: "Illustration / Graphics" },
        { id: 2, text: "Infographic" },
        { id: 3, text: "Character / Mascot" },
        { id: 4, text: "Icon / Botton" },
        { id: 5, text: "3D modeling / Animation" },
        { id: 6, text: "Animated GIFs" },
        { id: 7, text: "Store branding" },
      ];
  return (
    <div className="ProfilePage">
        <div className='mainscr home_section'>
        <Navbar/>
        <div className='pd-1 cat-fl'>
          <Image src='cat-img.svg' alt="" />
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
           <Image src='cat1.png' alt=""/>
            <span>Custom Logo</span>
           </div>
           <div className='cat-card'>
           <Image src='cat2.png' alt=""/>
            <span>Label-packaging</span>
           </div>
           <div className='cat-card'>
           <Image src='cat3.png' alt=""/>
            <span>Illustration-graphics</span>
           </div>
           <div className='cat-card'>
            <Image src='cat4.png' alt=""/>
            <span>web - app design</span>
           </div>
           <div className='cat-card'>
<Image src='cat5.png' alt=""/>
 <span>Custom Logo</span>
</div>
<div className='cat-card'>
<Image src='cat6.png' alt=""/>
 <span>Label-packaging</span>
</div>
<div className='cat-card'>
<Image src='cat7.png' alt=""/>
 <span>Illustration-graphics</span>
</div>
<div className={`cat-card drop-down-menu ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
 <Image src='cat8.png' alt=""/>
 <span>web - app design</span>
</div>
        
      





</div>
{ isOpen &&
        <div className='cat-menu-bg' id='cat-menu'>

        <div className='fl-all p-30'> 
        <div>
            <div>
            <h3 className='cat-menu-h'>Logo & identity</h3>
            <ul>
          {listItems.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Web - UI/UX design</h3>
            <ul>
          {listItems2.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Clothing & Merchandise</h3>
            <ul>
          {listItems3.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
          <h3 className='cat-menu-h'>Art & Illustration</h3>
             {listItems5.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Business & advertising</h3>
            <ul>
          {listItems4.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
     
     
        </div>
        <div className='cat-menu-btn'>
            <button>Others</button>
        </div> 
    </div>
      }
    <div className='cat-btn'>
        <button>Get Started</button>
    </div>
       
      </div>

    
      <Footer/>
    </div>
  );
}

export default Categories;




