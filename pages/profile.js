import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState,useEffect } from 'react';
import Portfolio from '@/components/portfolio';
import Reviews from '@/components/Reviews';
import Image from 'next/image';
import axiosInstance from "@/helpers/axios";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from 'next/router';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('portfolio');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const router = useRouter();
  if(router.ready){
    const { user_id } = router.query;
  }
  useEffect(() => {
    
    axiosInstance
    .get(`${BASE_URL}/${API_VERSION}/user/profile/client/${user_id}/`, {
    })
    .then((res) => {
      const data = res.data;
      console.log('res:',res);
      console.log('data:',data);
    })
    .catch((err) => {
      console.error(err);
      console.log(error.response.data)
    });
  });

  const [activeComponent, setActiveComponent] = useState("Portfolio");
  return (
    <div className="ProfilePage">
        <div className='mainscr'>
        <Navbar />
        </div>
        <div className=' prof fl-col fl-gap'>
        

        <div className='max'>
        <div className='pos-prof fl fl-gap31 '>
        
          <div>
            <Image src='/profileicon.png'  className='prof-img' alt="" width={86} height={88}/>

          </div>
           
        
        <div className='prof-nav'>

        <div className='fl fl-gapp16 pp'> 
          <p>Full Name</p>
          <span>online 15 minutes ago</span>
        </div>
       
        <button>Adv. Level</button>
        </div>
        </div>
        </div>
        <div className='mainscr'>
        <div className="fl fl-gap50 max ">
        <button
          className={` ${activeComponent === "Portfolio" ? "active nav-btn2" : "nav-btn2"}`}
          onClick={() => setActiveComponent("Portfolio")}
        >
          Portfolio
        </button>
        
        <button
          className={` ${activeComponent === "Reviews" ? "active nav-btn2" : "nav-btn2"}`}
          onClick={() => setActiveComponent("Reviews")}
        >
          Reviews
        </button>
        </div>
        </div>
        </div>

   
       <div className='max'>
       {activeComponent === "Portfolio" && <Portfolio />}
       {activeComponent === "Reviews" && <Reviews />}
       </div>
 
      <Footer/>
    </div>
  );
}

export default ProfilePage;




