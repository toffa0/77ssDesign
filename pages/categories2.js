import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Footer2 from "@/components/footer2";
import { BASE_URL ,API_VERSION } from '@/config';
import {LogoidentityCat,WebdesignCat,ClothingMerchandiseCat,ArtIllustrationCat,BusinessadvertisingCat,Others} from "../components/consts"
import CatmenuSelector from "@/components/CatmenuSelector";
  
const Categories2 = ()=>{

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

    const [isLogo, setIsLogo] = useState(false);


    const [CatData, setCatData] = useState(LogoidentityCat);
    const [selectedCat, setSelectedCat] = useState('Logo design');
    return(
        <div>
               <div className="home_section  " style={{height:"480px"}}>
        <div className=" max">
               <Navbar/>
        <div className="pb-64 mt-140  ">
        <div>
        <div className="mb-20">
            <h1 className='DiffTitle-'  id="title">All Categories</h1>
        </div>
        <div className="fl jst-SB" style={{marginTop:"12px"}}>
            <Image src='catlogo1.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(LogoidentityCat)}} className={CatData=== LogoidentityCat?"catImageHeader activeCatImageHeader ":"catImageHeader"} />
            <Image src='catlogo2.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(WebdesignCat)}} className={CatData=== WebdesignCat?"catImageHeader activeCatImageHeader ":"catImageHeader"}/>
            <Image src='catlogo3.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(ClothingMerchandiseCat)}} className={CatData=== ClothingMerchandiseCat?"catImageHeader activeCatImageHeader ":"catImageHeader"}/>
            <Image src='catlogo4.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(ArtIllustrationCat)}} className={CatData=== ArtIllustrationCat?"catImageHeader activeCatImageHeader ":"catImageHeader"}/>
            <Image src='catlogo5.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(BusinessadvertisingCat)}} className={CatData=== BusinessadvertisingCat?"catImageHeader activeCatImageHeader ":"catImageHeader"}/>
            <Image src='catlogo6.svg' alt="" width={137.03} height={137.03} onClick={()=>{setCatData(Others)}} className={CatData=== Others?"catImageHeader activeCatImageHeader ":"catImageHeader"}/>
            </div>
        </div>

        
        </div>
        </div>
        </div>
                <div className="max "> 
                <div className="fl  mt-60 jst-SB ali-cen mb-250"> 
                <div class="dropdown-content10" >
                    <ul>
                        {CatData.data.map((item) => (
                            <li key={item.id} className="cat-menu-links"><button onClick={()=>
                                {   if(CatData===LogoidentityCat){
                                    setIsLogo(true)
                                }else{
                                    setIsLogo(false)
                                }
                                setSelectedCat(item.text)}}>{item.text}</button></li>
                            ))}
                    </ul>
                </div>
                <Image src={CatData.image} alt="" width={525.53} height={487.65}/>
            
                </div>
                <div style={{maxWidth:"768px"}}>
                    <div className="fl ali-cen jst-SB catcontentend" >
                    <h2>{selectedCat}</h2>
                    <Link href="pricing">Pricing</Link>
                    </div>
                    <p className="categText">Start and see your project transform into reality in ways that exceed your imagination, With multiple designs created just for you</p>
                    <div className="guarantee fl-col fl-gap20">
                        <p>Dozens of unique, editable designs in digital, print, and web file formats</p>
                        <p>Customer support to assist you throughout the process</p>
                        <p>Full-copyright ownership of designs and ready-to-use files</p>
                        <p>All designers have undergone screening and review processes for top-quality work</p>
                        <p>Money-back guarantee*</p>
                    </div>
                </div>
            </div>
            <div className="cat2-btns max">
                <Link href={isLogo?"Logobreif":"Contestbreif"} >Start contest</Link>
                <Link href={isLogo?"Logobreif":"1to1breif"} id="cyan">Hiring (1 to1)</Link>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}
export default Categories2;