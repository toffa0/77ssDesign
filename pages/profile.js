import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Portfolio from '@/components/portfolio';
import Reviews from '@/components/Reviews';
import Image from 'next/image';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('portfolio');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const [activeComponent, setActiveComponent] = useState("Portfolio");
  return (
    <div className="ProfilePage">
        <div className='mainscr'>
        <Navbar/>
        </div>
        <div className='mainscr prof fl fl-gap'>

        <div className='pos-prof fl fl-gap2'>
            <div>
            <Image src='profileicon.png'  className='prof-img' alt=""/>

            </div>
           
        
        <div className='prof-nav'>

        <div className='fl fl-gap2'> 
        <p>Full Name</p>
        <span>online 15 minutes ago</span>
        </div>
       
        <button>Pro Level</button>
        </div>
        </div>
        </div>
        <div className='mainscr'>
        <div className="fl fl-gap2 ">
        <button
          className={` ${activeComponent === "Portfolio" ? "active nav-btn" : "nav-btn"}`}
          onClick={() => setActiveComponent("Portfolio")}
        >
          Portfolio
        </button>
        
        <button
          className={` ${activeComponent === "Reviews" ? "active nav-btn" : "nav-btn"}`}
          onClick={() => setActiveComponent("Reviews")}
        >
          Reviews
        </button>
        </div>
        </div>
   
       
       {activeComponent === "Portfolio" && <Portfolio />}
       {activeComponent === "Reviews" && <Reviews />}
      <Footer/>
    </div>
  );
}

export default ProfilePage;




