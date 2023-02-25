import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cookies from 'js-cookie';
import Image from 'next/image';




const Login = () => {

  const [csrfToken, setScrf] = useState("");
  // const history = useHistory(); 
    
  useEffect(()=>{
    const csrfToken = Cookies.get('csrfToken');
    console.log(csrfToken);



    // fetch("http://ec2-54-146-11-112.compute-1.amazonaws.com/v1.0/user/csrf/",
    // {credentials:"include",})
    // .then((res)=>{
    //   let csrfTokken = res.headers.get("X-CSRFToken")
    //   setScrf(csrfToken);
    //   console.log(csrfToken);
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  },[])
    
  function generateCsrfToken() {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }
  function getExpirationDate(token) {
    if (!token || typeof token !== 'string') {
      return null;
    }
    
    const tokenParts = token.split('.');
    
    if (tokenParts.length !== 3) {
      return null;
    }
    
    const encodedPayload = tokenParts[1];
    const payload = JSON.parse(atob(encodedPayload));
    
    if (!payload || !payload.exp) {
      return null;
    }
    
    const expirationDate = new Date(payload.exp * 1000);
    return expirationDate;
  }
  
  const handleSubmit= (e)=>{
      e.preventDefault();
      
    
      const email = document.getElementById('email1').value;
      const password = document.getElementById('password1').value;
      
      const formData = { email,password  };
      
      fetch('http://ec2-54-146-11-112.compute-1.amazonaws.com/v1.0/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        credentials:"include",
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => 
        {
          console.log(data);
      const csrfToken = generateCsrfToken();
      document.cookie = `csrfToken=${csrfToken}; expires=${getExpirationDate()}; path=/`;
      window.location.href = '/';
        })
      .catch(error => console.error(error));
      
    };


    


  return (
    <form onSubmit={handleSubmit} className="form-container" id="myForm2">
      
      <input type="text" placeholder="Username" id="email1"/>
      <input type="password" placeholder="Password" id="password1"/>
      <button type="submit">Submit</button>
      <div className="bottom-row">
        <div>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember Me</label>
        </div>
        <Link href="#">Forgot Password?</Link>
      </div>
      <div className="social-group ">
        <p>Or login with</p>
        <div>
        <FaFacebook style={styles.footerIcon} />
        <FaTwitter style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaLinkedin style={styles.footerIcon} />
        </div>
      </div>

      
      
    </form>
  );
};


const SignUp = () => {


    
    
    const handleSignup= (e)=>{
      e.preventDefault();

    
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const formData = { email,password  };
      
      fetch('http://ec2-54-146-11-112.compute-1.amazonaws.com/v1.0/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    };
    




  return (
    <form className="form-container" id="myForm" onSubmit={handleSignup}>
      
      <div className="bottom-row2"> 
        <div className="fl fl-gap99 ">
        <input type="radio" id="remember" name="accounttype"/>
        <label htmlFor="remember">Need design</label>
        </div>
        <div className="fl fl-gap99">
        <input type="radio" id="remember2" name="accounttype" />
        <label htmlFor="remember">Designer</label>
        </div>
    
      </div>
      <div className=" fl-gap99 sm-btn bottom-row2">

        <button><div className="fl-sm"><Image src="google.svg" alt=""/><p>Sign Up with Google</p></div></button>
        <button><div className="fl-sm"><Image src="facebook.svg" id="fb-btn" alt=""/> <p>Sign Up with Facebook</p></div> </button>
      </div>
      <div className="fl fl-gap99">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
      </div>
      
      <input type="email" placeholder="Email" id="email" />
      <input type="password" placeholder="Password" id="password" />
      <span>By signing up, you agree to our Terms and Privacy</span>
      <button type="submit">Submit</button>
<div className="bottom-row1">
      <p>
        Already have an account?{" "}
        <Link href="#" onClick={() => setIsLogin(!isLogin)}>
          Login
        </Link>
        </p>
        </div>
        {/* <div className="social-group mdl">
        <p>Or SignUp with</p>
        <div>
        <FaFacebook style={styles.footerIcon} />
        <FaTwitter style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaLinkedin style={styles.footerIcon} />
        </div>
      </div> */}
    </form>
  );
};











const LoginSignUp = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [activeComponent, setActiveComponent] = useState("login");

  return (
    <div className="page1">
   
        <div className="page-container">
      
            <div className="img-part">
              <Link href="/" > <Image src="logo1.svg" className="logimg" alt=""/></Link>
           
            <Image src="login.png" alt="" width={362} height={811} />
            </div>
            <div className="form-part">
            <div className="switch-container">
        <button onClick={() => {
          setShowLogin(true);
          setActiveComponent("login")}} className='btn-switch' id={`${activeComponent==="login"? "logactive":""}`} >Login</button>
        
        <button onClick={() => {
          setShowLogin(false);
          setActiveComponent("signup")}
        } className='btn-switch' id={`${activeComponent==="signup"? "logactive":""}`}>Sign Up</button>


     


      </div>
            {showLogin ? <Login /> : <SignUp />}
            </div>
    
     
    </div>
    
    </div>
    
  );
};

export default LoginSignUp;




const styles = {
    footerContainer: {
      borderTop:"2px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "4% 0",
      color: "#000"
    },
    footerLogo: {
      width: "100px"
    },
    footerLinks: {
      display: "flex",
      alignItems: "center"
    },
    footerLink: {
      marginRight: "20px",
      color: "#fff"
    },
    footerSeparator: {
      margin: "0 10px"
    },
    footerIcons: {
      display: "flex",
      alignItems: "center"
    },
    footerIcon: {
      marginRight: "10px",
      fontSize: "20px",
      color: "#000"
    }
  };