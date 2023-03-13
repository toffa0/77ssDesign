import Image from 'next/image'
import React, { useState } from 'react';


const BrandStyle = ()=>{
    const [BrandStyle1, setBrandStyle1] = useState("Classic");
    const [BrandStyle2, setBrandStyle2] = useState("Playful");
    const [BrandStyle3, setBrandStyle3] = useState("Geometrical");
    const [BrandStyle4, setBrandStyle4] = useState("Feminine");
    const [BrandStyle5, setBrandStyle5] = useState("Economical");
    const [BrandStyle6, setBrandStyle6] = useState("Mature");
    const [BrandStyle7, setBrandStyle7] = useState("Handcrafted");
return(
    <div className='contest-cont-content  jst-SB'>
        <div>
            <h2>Brand style</h2>
        </div>
    <div className='fl-col jstfe xyz ali-cen'>
        {/* first filter */}
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle1('Classic')}}>Classic</button>
       <button id='nobtn' onClick={()=>{setBrandStyle1('Modern')}}>Modern</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle1 === "Classic" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>
{/* first filter end*/}
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle2('Playful')}}>Playful</button>
       <button id='nobtn' onClick={()=>{setBrandStyle2('Serious') }}>Serious</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle2 === "Playful" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>   
     {/* first filter end*/} 
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle3('Geometrical')}}>Geometrical</button>
       <button id='nobtn' onClick={()=>{setBrandStyle3('Organic') }}>Organic</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle3 === "Geometrical" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     {/* first filter end*/}
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle4('Feminine')}}>Feminine</button>
       <button id='nobtn' onClick={()=>{setBrandStyle4('Masculine') }}>Masculine</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle4 === "Feminine" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     {/* first filter end*/}
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle5('Economical')}}>Economical</button>
       <button id='nobtn' onClick={()=>{setBrandStyle5('Luxurios') }}>Luxurios</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle5 === "Economical" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle6('Mature')}}>Mature</button>
       <button id='nobtn' onClick={()=>{setBrandStyle6('Youthful') }}>Youthful</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle6 === "Mature" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div> 
     <div className='choose '>
       <div className='fl jst-SB'>
       <button id='nobtn' onClick={()=>{setBrandStyle7('Handcrafted')}}>Handcrafted</button>
       <button id='nobtn' onClick={()=>{setBrandStyle7('Minimalist') }}>Minimalist</button>
       </div>
       <div className='abc'>
       <Image src="btn.svg" alt='' height={25} width={25} className={` ${BrandStyle7 === "Handcrafted" ? "drag drag-left":"drag drag-right"}`} />
       </div>
     </div>  
    </div>
    <div className='ght fl fl-gap47 mt-80 mb-45'>
        <div>
            <Image src="blues.svg" alt="" width={188} height={188} />
            <p>Blues</p>
        </div>
        <div>
            <Image src="dark.svg" alt="" width={188} height={188} />
            <p>Dark neutrals</p>
        </div>
        <div>
            <Image src="descolor.svg" alt="" width={188} height={188} />
            <p>Designers suggestions </p>
        </div>
    </div>
    <div className='ght'>
        <h3>Color requirements</h3>
        <textarea/>
    </div>
</div>

    )};
export default BrandStyle;