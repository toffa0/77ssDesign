import Image from "next/image";
import { useState } from "react";
const Brand= ()=>{
    const [Slidervalue1, setSlidervalue1] = useState(0);
    const [Slidervalue2, setSlidervalue2] = useState(0);
    const [Slidervalue3, setSlidervalue3] = useState(0);
    const [Slidervalue4, setSlidervalue4] = useState(0);
    const [Slidervalue5, setSlidervalue5] = useState(0);
    const [Slidervalue6, setSlidervalue6] = useState(0);
    const [Slidervalue7, setSlidervalue7] = useState(0);



    return(
        <div className="oneto1 fl-col gap fl-gap32">


    <div className='fl-col jstfe xyz ali-cen '>
        {/* first filter */}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Classic</span>
       <span id='nobtn2' >Modern</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue1}  onChange={(e)=> setSlidervalue1(e.target.value)} id="valueSlider" />
     </div>
{/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Playful</span>
       <span id='nobtn2'>Serious</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue2}  onChange={(e)=> setSlidervalue2(e.target.value)} id="valueSlider" />
     </div>   
     {/* first filter end*/} 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Geometrical</span>
       <span id='nobtn2' >Organic</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue3}  onChange={(e)=> setSlidervalue3(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Feminine</span>
       <span id='nobtn2' >Masculine</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue4}  onChange={(e)=> setSlidervalue4(e.target.value)} id="valueSlider" />
     </div> 
     {/* first filter end*/}
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2'>Economical</span>
       <span id='nobtn2'>Luxurios</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue5}  onChange={(e)=> setSlidervalue5(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Mature</span>
       <span id='nobtn2' >Youthful</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue6}  onChange={(e)=> setSlidervalue6(e.target.value)} id="valueSlider" />
     </div> 
     <div className='choose2 '>
       <div className='fl jst-SB'>
       <span id='nobtn2' >Handcrafted</span>
       <span id='nobtn2' >Minimalist</span>
       </div>
       <input type="range" min="-100" max="100" defaultValue={Slidervalue7}  onChange={(e)=> setSlidervalue7(e.target.value)} id="valueSlider" />

     </div>  


</div>

            <div className="mt-159 mb-350 fl fl-gap32 jstfe">
                <button id="btndiff">Skip</button>
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Brand;