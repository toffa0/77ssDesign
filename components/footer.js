import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="mainscr bg-db" >
    <div style={styles.footerContainer} >
      <div style={styles.footerLinks}>
      <Image src="logo2.svg"  alt="" width={184} height={40} id="footerlogo" /> 
      <span style={styles.footerSeparator}>|</span>
        <a href="#" style={styles.footerLink}>
          Terms
        </a>
        <span style={styles.footerSeparator}>|</span>
        <a href="#" style={styles.footerLink}>
          Privacy
        </a>
      </div>
      <div style={styles.footerIcons}>
        <FaBehance style={styles.footerIcon} />
        <FaFacebook style={styles.footerIcon} />
        <FaInstagram style={styles.footerIcon} />
        <FaTwitter style={styles.footerIcon} />
        
        
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
    padding: "4% 0",
    color: "#fff"
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
    color: "#fff"
  }
};

export default Footer;
