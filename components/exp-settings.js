import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';
import Footer2 from '@/components/footer2';
import Catmenu from '@/components/cat-menu';
import Link from 'next/link';
import {CatExp,Contacts, designerLevel, industries, Languages, lastActivity, listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"


const  ExperSettings = () => {
    const [isOpen, setOpen] = useState('');
    const key=99;
    
    const handleClick= (id)=>{
        
        if(isOpen===id)
        {
            setOpen("");
        }
        else{
            console.log(id)
            setOpen(id);
        }
       
    }


  return (
   
      

<div className=" "> 
<div className="fl p-33 max">
    

<div className="fl-all4 fl-gap50 w-101  pos">
<h1 className='pnew3'>Category</h1>
{CatExp.map((item) => (
    <div key={item.id} className="fl-col ">
        <div className="fl exp gap2">
            <div className='expLogo-cont fl-col jst'>
                <Image src={item.img} alt="" width={75} height={60}/>
                <p>{item.text}</p>
            </div>
       
        <button onClick={()=>handleClick(item.id)}> Add design +</button>
        <div className='grycir'>
            <Image src="droparrow2.svg" alt='' width={20} height={11.5} />
        </div>
        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===item.id? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
                <p className='pnew'>Approved</p>
                <p className='pnew'>Disapproved</p>
            </div>


            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
        </div>
        
    </div>       
        ))}

<div key={99} className="fl-col ">
        <div className="fl exp gap2">
            <div className='expLogo-cont fl-col jst'>
                {/* <Image src={item.img} alt="" width={75} height={60}/> */}
                <p>Other</p>
                <p>skills</p>
            </div>
       
        <button onClick={()=>handleClick(key)}> Add design +</button>
        <div className='grycir'>
            <Image src="droparrow2.svg" alt='' width={20} height={11.5} />
        </div>
        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===key? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
                <p className='pnew'>Approved</p>
                <p className='pnew'>Disapproved</p>
            </div>


            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
        </div>
        
    </div> 
<p className='pnew2'>Finalizer, copy writer (company name), etc. ...</p>
<div className='profile__submit-button'>
        <button type="submit" className="button1">Submit</button>

</div>
           
</div>

</div>

</div>




  );
}

export default ExperSettings;






