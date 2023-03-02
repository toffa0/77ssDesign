import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="mainscr bg-db" >
    <div style={styles.footerContainer} >
      <div style={styles.footerLinks}>
      <Image src="logo3.svg"  alt="" width={148.745} height={39.653} id="footerlogo" /> 
      <span style={styles.footerSeparator}></span>
        <a href="#" style={styles.footerLink} className="slash">
          Terms
        </a>
        <span style={styles.footerSeparator}></span>
        <a href="#" style={styles.footerLink} className="slash">
          Privacy
        </a>
      </div>
      <div style={styles.footerIcons}>
        <FaBehance style={styles.footerIcon} />
        <FaFacebook style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaTwitter  style={styles.footerIcon} id="color-w"/>
        
        
      </div>
   
    </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "130px",
    color: "#fff",
    maxWidth:"1300px",
    margin:"auto",
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
    height:"20px",
    margin: "0 10px"
  },
  footerIcons: {
    display: "flex",
    alignItems: "center",
    color:"#fff",
  },
  footerIcon: {
    marginRight: "10px",
    fontSize: "20px",
    color: "#fff"
  }
};

export default Footer;
