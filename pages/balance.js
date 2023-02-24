import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
function balance() {
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="ProfilePage">
        <div className='mainscr home_section'>
        <Navbar/>
        <div className='pd-1'>
        <h1>Your Credits</h1>
        </div>
        </div>
       
        <div className='mainscr  fl'>
        <div className='home_section w-100'>
            <div className='box'> 
                <h3>Payment Accounts</h3>
                <button>Paypal Connected</button>
                <button>Payoneer Connected</button>
            </div>
            <div className='box'> 
                <div className='wh-box'>
                <p>Balance</p>
                <span>0.00$</span>
                </div>
                
                <button id='btn-bal'>Request payment</button>
            </div>
        </div>
       
      </div>

      {/* dynamic */}
      <div className=' mainscr'>
      <div className='bl-jps '>
            <div className='bor1'>
                <p> 0.00$</p>
            </div>
            <div><p> Job title</p></div>
            <div className='bor3'>
                {/* <p>in progress</p> */}
                <button>Cancel</button>
            </div>
        </div>
      </div>
   {/* dynamic */}
      <Footer/>
    </div>
  );
}

export default balance;




