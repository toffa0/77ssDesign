import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Footer2 from "@/components/footer2";
import { BASE_URL ,API_VERSION } from '@/config';
import {listItems,listItems2,listItems3,listItems4,listItems5} from "../components/consts"

const Categories2 = ()=>{

    const [ChooseCat, SetChooseCat] = useState("");
    const [chatboxOpen, SetchatboxOpen] = useState(false);

    useEffect(()=>{
        fetch(`${BASE_URL}/${API_VERSION}/core/categories/`, {
          
       
        })
        .then(response => {
        //   if(response.ok){
        //     console.log(response.json());
        //   } else {
        //     throw new Error('Something went wrong');
        //   }
        return response.json()
        })
        .then(data => console.log(data))

        .catch(error => console.error(error));
        
    },[])

    const [GeneralCat, setGeneralCat] = useState('');
    const [FirstCat, setFirstCat] = useState('');
    const [SecondCat, setSecondCat] = useState('');
    const [ThirdCat, setThirdCat] = useState('');
    const [ForthCat, setForthCat] = useState('');
    const [FifthCat, setFifthCat] = useState('');
    function handleFirstCat(e){
        setFirstCat(e)
        setGeneralCat(e)
        // 
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')

    }
    function handleSecondCat(e){
        setSecondCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setThirdCat('')
        setForthCat('')
        setFifthCat('')
    }

    function handleThirdCat(e){
        
        setThirdCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setForthCat('')
        setFifthCat('')
    }

    function handleForthCat(e){
        setForthCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setFifthCat('')
    }

    function handleFifthCat(e){
        setFifthCat(e)
        setGeneralCat(e)
        // 
        setFirstCat('')
        setSecondCat('')
        setThirdCat('')
        setForthCat('')
    }

    return(
        <div>
               <div className="home_section  ">
        <div className=" max">
               <Navbar/>
        <div className="pb-64 mt-110  ">
        
        <div className="mb-20">
            <h1 className='DiffTitle-'  id="title">Categories</h1>
        </div>
        <form className="sr-div2 fl jst" >
                <input type="text" name='' placeholder="Logo, Brand identity, Packaging..." />
                <select name="test">
                  <option value="CONTESTPROJECT">CONTEST </option>
                  <option value="CONTESTPROJECT">PROJECT</option>
                </select>
                <input type="submit" name=''  value="Start" /> 
            </form>
        </div>
        </div>
        </div>
            <div className=" cat2-bg">
                <div className="fl max">
                    
                
            <div className="fl-all4 w-30 fl-gap58 pos">
            <div class="dropdown">
                <Image src="catlogo1.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content2">
                    <ul>
                        {listItems.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFirstCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={FirstCat!=""?"CategResult":"DN"}>
                            <p>{FirstCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo2.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content2">
                    <ul>
                        {listItems2.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleSecondCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={SecondCat!=""?"CategResult":"DN"}>
                            <p>{SecondCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo3.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content2">
                    <ul>
                        {listItems3.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleThirdCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={ThirdCat!=""?"CategResult":"DN"}>
                            <p>{ThirdCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo4.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content2">
                    <ul>
                        {listItems4.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleForthCat(item.text)}>{item.text}</button></li>
                        ))}
                </ul>
                </div>
                <div  className={ForthCat!=""?"CategResult":"DN"}>
                            <p>{ForthCat}</p>
                </div>
            </div>
            <div class="dropdown">
                <Image src="catlogo5.svg" alt="" width={238} height={212}/>
                <div class="dropdown-content2">
                    <ul>
                        {listItems5.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>handleFifthCat(item.text)}>{item.text}</button></li>
                            ))}
                </ul>
                </div>
                <div  className={FifthCat!=""?"CategResult":"DN"}>
                            <p>{FifthCat}</p>
                </div>
            </div>

            <div className="cat2-chatbox">
            <button id="catbtn" onClick={()=>SetchatboxOpen(!chatboxOpen)}>Others</button>
            <Link href="#" className={chatboxOpen?"":"DN"}>           
                <Image src="chatbox.svg" alt="" width={106} height={106} />
            </Link>

            </div>
         
            </div>
            <div className="fl-all4 w-70 jst">
                <Image src="cat2img.svg" alt="" width={678} height={1470}/>
            </div>
            </div>
            <div className="cat2-btns max">
                <Link href="Contestbreif" >Start contest</Link>
                <Link href="1to1breif" id="cyan">Hiring (1 to1)</Link>
            </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Categories2;