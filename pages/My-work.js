import React, { useState } from "react";
import Contests from "@/components/contests-mywork"
import MembershipSettings from "@/components/MembershipSettings";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/projects-mywork";
import Designer from "@/components/designer-mywork";
import Ndas from "@/components/ndas-mywork";
const Mywork = () => {
  const [activeComponent, setActiveComponent] = useState("contests");



  return (
    <div className="settings-container  ">
        

        <div className="home_section mainscr ">
        <Navbar/>
      <div className="max">

  
        <div className="my-workkk mt-142 mb-60">
            <h1>My Work</h1>
        </div>
      <div className="settings-nav mtop30" id="work-nav">
        <button
          className={` ${activeComponent === "contests" ? "active nav-btn" : "nav-btn"}`}
          onClick={() => setActiveComponent("contests")}
        >
          contests
        </button>

        <button
          className={`nav-btn ${
            activeComponent === "Project" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Project")}
        >
          Project
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "Designer" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Designer")}
        >
          Designer
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "NDAs" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("NDAs")}
        >
          NDAs
        </button>
      </div>
      </div>
      </div>    

      <div className=" ">
       
      <div className="mywork-conten max">
        {activeComponent === "contests" && <Contests />}
        {activeComponent === "Project" && <Projects />}
        {activeComponent === "Designer" && <Designer />}
        {activeComponent === "NDAs" && <Ndas/>}
      </div>
      </div>
      <Footer/>
    </div>
  );
};



export default Mywork;
