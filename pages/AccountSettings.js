import React, { useEffect, useState } from "react";
import GeneralSettings from "@/components/AccountSettings/GeneralSettings";
import IDVerificationSettings from "@/components/AccountSettings/IDVerificationSettings";
import NotificationsSettings from "@/components/AccountSettings/NotificationsSettings";
import ProfileSettings from "@/components/AccountSettings/ProfileSettings";
import MembershipSettings from "@/components/AccountSettings/MembershipSettings";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL,API_VERSION } from "@/config";
import Cookies from "js-cookie";
const AccountSettings = () => {
  const [activeComponent, setActiveComponent] = useState("General");
  
  const[avatar,setAvatar]=useState('')
  const[firstname,setFirstname]=useState('')
  const[lastname,setLastname]=useState('')
  const[country,setCountry]=useState('')
  const[city,setCity]=useState('')
  const[timezone,setTimezone]=useState('')
  const[address,setAddress]=useState('')
  const[state,setState]=useState('')
  const[zip_code,setZip_code]=useState('')
  const[phone,setPhone]=useState('')
  const[languages,setLanguages]=useState('')
  const[bio,setBio]=useState('')
  const[id_card,setId_card]=useState('')
  const[rating,setRating]=useState('')

  const csrfToken = Cookies.get('csrfToken');

  useEffect(()=>{
      const user = localStorage.getItem('user');
      console.log(user)
      if(user.user_type==='designer')
      {
        window.location.href = '/AccountSettings-designer';
      }



      if(!csrfToken){
        // window.location.href = '/login';
      }
        fetch(`${BASE_URL}/${API_VERSION}/user/profile/client/5/`, {
            
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
              },
              credentials:"include",
              
        })
      .then(response => {return response.json()})
      .then(data => {console.log(data)})
      .catch(error => console.error(error));
    },[])
  return (
    <div className="settings-container ">
        

        <div className="home_section mainscr">
        <Navbar/>
        <div className="max mt-133">
        <div className="my-workkk  mb-46">
            <h3 id="title">Account Settings</h3>
        </div>
      
      <div className="settings-nav">
        <button
          className={` ${activeComponent === "General" ? "active nav-btn" : "nav-btn"}`}
          onClick={() => setActiveComponent("General")}
        >
          General
        </button>
        <button
          className={`nav-btn ${activeComponent === "Profile" ? "active" : ""}`}
          onClick={() => {
            setActiveComponent("Profile");
            console.log(activeComponent)
                
        
        }}
        >
          Profile
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "Notifications" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Notifications")}
        >
          Notifications
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "ID Verification" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("ID Verification")}
        >
          ID Verification
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Membership")}
        >
          Membership
        </button>
      </div>
      </div>
      </div>    

      <div className=" mainscr h-60v ">
      <div className="settings-content ">
        {activeComponent === "General" && <GeneralSettings />}
        {activeComponent === "Profile" && <ProfileSettings />}
        {activeComponent === "Notifications" && <NotificationsSettings />}
        {activeComponent === "ID Verification" && <IDVerificationSettings />}
        {activeComponent === "Membership" && <MembershipSettings />}
      </div>
      </div>
      <Footer/>
    </div>
  );
};



export default AccountSettings;
