import Image from "next/image";
import React, { useState } from "react";
const Style= ()=>{
    const [lettermarks, setlettermarks] = useState(null);

    

    return(
        <div className="oneto1 fl-col gap fl-gap32">
   
  
            <div className="fl-col fl-gap47 ">
                <label>lettermarks</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div  className={lettermarks==="ibm"?"logoabout SelectedHighlight":"logoabout"}  onClick={()=>setlettermarks('ibm')}>
                    <Image src="ibm.svg" alt="" width={27} height={27} className="" />
                    </div>
                    <div className={lettermarks==="HM"?"logoabout SelectedHighlight":"logoabout"} onClick={()=>setlettermarks('HM')} >
                    <Image src="HM.svg" alt="" width={27} height={27} />
                    </div>
                    <div className={lettermarks==="LV"?"logoabout SelectedHighlight":"logoabout"} onClick={()=>setlettermarks('LV')} >
                    <Image src="LV.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Wordmarks</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="coca.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="visa2.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="virgin.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Pictorial marks</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="7.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="twitter.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="apple.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Abstract logo marks</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="addidas.svg" alt="" width={27} height={27}  />
                    </div>
                    <div className="logoabout">
                    <Image src="pepsi.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="bp.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Mascots</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="Intersection5.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="kfc.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="Intersection6.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            
            <div className="fl-col fl-gap47">
                <label>Combination mark</label>
                <div className="fl-col fl-gap32">


                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="doritos.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="lacoste.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="Bk.svg" alt="" width={27} height={27} />
                    </div>
                </div>
                </div>
            </div>
            <div className="fl-col fl-gap47 ">
                <label>Emblem</label>
                <div className="fl fl-gap10">

                
                <div className="fl fl-gap32">
                    <div className="logoabout">
                    <Image src="harley.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="starbucks.svg" alt="" width={27} height={27} />
                    </div>
                    <div className="logoabout">
                    <Image src="harvard.svg" alt="" width={27} height={27} />
                    </div>
                </div>
 
                </div>
            </div>
            


            <div className="mt-159 mb-350 fl fl-gap32 jstfe">
                <button id="skipbtn">Skip</button>
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Style;