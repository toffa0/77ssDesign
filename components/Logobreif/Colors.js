import React, { useState } from "react";
import Image from 'next/image'


const Colors= ()=>{
    const [Colors, setColors] = useState("");
return(
    <div>
        <div className='ght fl fl-gap33 mt-80 mb-101 wrap'>
            <div className={Colors==="blues"?"SelectedHighlight":""}  onClick={()=>setColors('blues')}>
                <Image src="blues.svg" alt="" width={188} height={188} />
                <p>Blues</p>
            </div>

            <div className={Colors==="Aquas"?"SelectedHighlight":""}  onClick={()=>setColors('Aquas')}>
                <Image src="Aquas.svg" alt="" width={188} height={188} />
                <p>Aquas </p>
            </div>

            <div className={Colors==="Greens"?"SelectedHighlight":""}  onClick={()=>setColors('Greens')}>
                <Image src="Greens.svg" alt="" width={188} height={188} />
                <p>Greens</p>
            </div>

            <div className={Colors==="Purples"?"SelectedHighlight":""}  onClick={()=>setColors('Purples')}>
                <Image src="Purples.svg" alt="" width={188} height={188} />
                <p>Purples  </p>
            </div>

            <div className={Colors==="Pinks"?"SelectedHighlight":""}  onClick={()=>setColors('Pinks')}>
                <Image src="Pinks.svg" alt="" width={188} height={188} />
                <p>Pinks</p>
            </div>

            <div className={Colors==="Reds"?"SelectedHighlight":""}  onClick={()=>setColors('Reds')}>
                <Image src="Reds.svg" alt="" width={188} height={188} />
                <p>Reds</p>
            </div>

            <div className={Colors==="Oranges"?"SelectedHighlight":""}  onClick={()=>setColors('Oranges')}>
                <Image src="Oranges.svg" alt="" width={188} height={188} />
                <p>Oranges</p>
            </div>
            
            <div className={Colors==="Yellows"?"SelectedHighlight":""}  onClick={()=>setColors('Yellows')}>
                <Image src="Yellows.svg" alt="" width={188} height={188} />
                <p>Yellows</p>
            </div>

            <div className={Colors==="Lightneutrals"?"SelectedHighlight":""}  onClick={()=>setColors('Lightneutrals')}>
                <Image src="Lightneutrals.svg" alt="" width={188} height={188} />
                <p>Light neutrals </p>
            </div>

            <div className={Colors==="Darkneutrals"?"SelectedHighlight":""}  onClick={()=>setColors('Darkneutrals')}>
                <Image src="dark.svg" alt="" width={188} height={188} />
                <p>Dark neutrals</p>
            </div>

            <div className={Colors==="DesignersSuggestions"?"SelectedHighlight":""}  onClick={()=>setColors('DesignersSuggestions')}>
                <Image src="descolor.svg" alt="" width={188} height={188} />
                <p>Designers suggestions</p>
            </div>

    </div>
    <div className="fl fl-gap47">
                <div className="fl-col fl-gap10 zn">
                <span>Note: If you have specific colors Please use their value in RGB, Hex, CMYK etc.</span>
                <input placeholder="" />
                
                </div>
            </div>
            <div className="mt-159 mb-350 fl fl-gap32 jstfe oneto1 ">
                <button id="btndiff">Skip</button>
                <button>Continue</button>
            </div>
    </div>
)}

export default Colors;