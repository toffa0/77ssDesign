import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';
import Footer2 from '@/components/footer2';
import Catmenu from '@/components/cat-menu';
import Link from 'next/link';
import {CatExp,Contacts, designerLevel, industries, Languages, lastActivity, listItems,listItems2,listItems3,listItems4,listItems5} from "../consts"


const  ExperSettings = () => {
    const [isOpen, setOpen] = useState('');
    const [Approved, setApproved] = useState(true);
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
{/* <div className="fl  max"> */}
    

<div className="fl-all4 fl-gap50 w-101  pos form-group-sett m-40 mb-172">
<h1 className='pnew3'>Category</h1>
{CatExp.map((item) => (
    <div key={item.id} className="fl-col ">
        <div className="fl exp fl-gap33">
            <div className='expLogo-cont fl-col jst'>
                <Image src={item.img} alt="" width={item.width} height={item.height}/>
                <p>{item.text}</p>
            </div>
       
        <button > Add design +</button>
       
        <div className='grycir'>
        <button onClick={()=>handleClick(item.id)} id="kkkkkk">
            <Image src="droparrow2.svg" alt='' width={20} height={11.5} />
            </button>
        </div>
        
        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===item.id? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
                <p className='pnew'>{Approved?"Approved":"Disapproved"}</p>
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
        <div className="fl exp fl-gap33">
            <div className='expLogo-cont fl-col jst'>
                {/* <Image src={item.img} alt="" width={75} height={60}/> */}
                <p>Other</p>
                <p>skills</p>
            </div>
       <div className='fl-col fl-gap5  jstfe h1000'>
        <div className='fl exp fl-gap33'>
        <button onClick={()=>handleClick(key)}> Add design +</button>
        <div className='grycir'>
            <Image src="droparrow2.svg" alt='' width={20} height={11.5} />
        </div>
        </div>
        <p className='pnew2'>Finalizer, copy writer (company name), etc. ...</p>

       </div>
        
        

        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===key? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
            <p className='pnew'>{Approved?"Approved":"Disapproved"}</p>
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

    <div className="profile__submit-button mt-60"> 
        <button>Submit</button>
    </div>
           
</div>

</div>

// </div>




  );
}

export default ExperSettings;






