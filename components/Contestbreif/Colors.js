import React, { useState } from "react";
import Image from 'next/image'


const Colors= ()=>{

return(
    <div>
        <div className='ght fl fl-gap33 mt-80 mb-101 wrap'>
            <div>
                <Image src="blues.svg" alt="" width={188} height={188} />
                <p>Blues</p>
            </div>
            <div>
                <Image src="Aquas.svg" alt="" width={188} height={188} />
                <p>Aquas </p>
            </div>
            <div>
                <Image src="greens.svg" alt="" width={188} height={188} />
                <p>Greens</p>
            </div>
            <div>
                <Image src="Purples.svg" alt="" width={188} height={188} />
                <p>Purples  </p>
            </div>
            <div>
                <Image src="Pinks.svg" alt="" width={188} height={188} />
                <p>Pinks</p>
            </div>
            <div>
                <Image src="Reds.svg" alt="" width={188} height={188} />
                <p>Reds</p>
            </div>

            <div>
                <Image src="Oranges.svg" alt="" width={188} height={188} />
                <p>Oranges</p>
            </div>
            <div>
                <Image src="Yellows.svg" alt="" width={188} height={188} />
                <p>Yellows</p>
            </div>
            <div>
                <Image src="Lightneutrals.svg" alt="" width={188} height={188} />
                <p>Light neutrals </p>
            </div>
            <div>
                <Image src="dark.svg" alt="" width={188} height={188} />
                <p>Dark neutrals</p>
            </div>
            <div>
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