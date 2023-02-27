import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import PIcon from "@/public/PI.svg"
import { BASE_URL ,API_VERSION } from '@/config';
import Cookies from 'js-cookie';

const Navbar = () => {

  const [csrfToken, csrfTokenSet] = useState('');

  useEffect(()=>{
    const csrfToken = Cookies.get('csrfToken');
    csrfTokenSet(csrfToken);
  },[])


  if (typeof window !== "undefined") {
    window.addEventListener('click', function(e){ 
      if(document.getElementById('icon-menu')){
        if (document.getElementById('icon-menu').contains(e.target)){
          handleClick();
        } else{
          setShowMenu(true)
        }
      }  
      
    });
  }

  // function handleClicks(e) {
  //   console.log("Click event happened!");
  //  handleAUTO();
  // }
  function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
 
    const [showMenu, setShowMenu] = useState(true);
  
    const handleClick = () => {
      setShowMenu(!showMenu);
  
    }; 
  

    const handleLogout=()=>{
        fetch(`${BASE_URL}/${API_VERSION}/user/logout/`, {
          
          credentials: 'include',
        })
        .then(response => {
          if(response.ok){
            console.log(response);
            removeCookie("csrfToken")
            window.location.href = '/login';
          } else {
            throw new Error('Something went wrong');
          }
        })

        .catch(error => console.error(error));
        
    }


    // document.addEventListener("click", handleClicks);

  
  return (
  <nav className="navbar">
    <div className="right">
      <Link href="/">
      <Image src="logo1.svg" alt="Logo" className="logo" width={148} height={40} />
      </Link>
      <div className='fl fl-gap5'>
      <Link href="/categories">
        Categories
      </Link>
      <Link href="/Discover">
        Discover
      </Link>
      <Link href="/Designers">
        Designers
      </Link>
      </div>
   
    </div>
    <div className="right">
      <Link href="/login">
        Help
      </Link>
      <Link href="/My-work">
      My Work
      </Link>
      <div className='fl fl-gap5'>

      {csrfToken?
      <div>

      <Link href="/"><Image src="env.svg" className="navicon" alt='' width={25} height={25}/></Link>
      <Link href="/"><Image src="bell.svg" className="navicon" alt='' width={25} height={25}/></Link>
      
    <div className='action'>
    <i  className="icon" id='icon-menu'><Image src="PI.svg" className="navicon" alt='' width={29} height={30} /></i>
    {/* onClick={handleClick} */}
    {!showMenu && (
      <ul className="menu">
        <div className='p-t20'>

        
        <li className="menu-item">
          <Link href="/AccountSettings" >Account Settings</Link>
        </li>
        <li className="menu-item">
          <Link href="/profile" >Profile</Link>
        </li>
        <li className="menu-item">
          <Link href="/balance">balance</Link>
        </li>
        <li className="menu-item">
          <button href="#" onClick={handleLogout}>Log Out</button>
        </li>
        </div>
      </ul>
    )}
    </div>
     </div>
      :
      <div>
        <Link href='/login'>Login/SignUp</Link>
      </div>}
      
      

  
    </div>
      
      
    </div>
  </nav>
  );
};

export default Navbar;