import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';
import {cardData2} from "../components/consts"
import Browse from './browse';
import ProjectsMessage3comp from '@/components/ProjectsMessage3comp';
const ProjectsMessage3 = ()=>{
    const [isOpen, setOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("Brief");

  return (
    <div className="ProfilePage">
        <div className='mainscr '>
        <Navbar/>
      
        </div>
       
        <div className='mainscr  '>
        <div className=' w-101 pt-96'>


   
        
        <div className='max '>
            <div>
                <div>
                <h1>Name of the brief Name of the </h1>
                <h1>brief Name of the</h1>
                <div className='fl jst-SB w-101 hi mtop30'>
                    <div>
                        <p className='cn3'>Client Name</p>
                        <div className='fl-col jst-FE h-90'>
                            <div className='fl fl-gapp3 cpm'>
                                <button >Go To Final Round</button>
                                <button id='cpm2'>...</button>
                                {/* <select>
                                    <option>...</option>
                                    <option>Invite Designer</option>
                                </select> */}
                            </div>

                        </div>
                    </div>
                    <div>
                        <p>Watch(7)</p>
                        <div>
                        
                            <div className='fl mtop30 brrrr fl-gapp3'>
                            
                                <div className=''>
                                    <div className='messpart1 p-s20 fl jsta fl-gap25 ' id='w-300'>
                                    <label>Price</label> <span>$ 190</span>
                                    </div>
                                    <div className='messpart2 fl p-s20 jst-SB ' id='w-300'>
                                        <div className='fl-col jst'>
                                        <Image src="blind.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Blind</p>
                                        </div>
                                        <div  className='fl-col jst'>
                                        <Image src="dollar.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Guaranteed</p>
                                        </div>
                                        <div className='fl-col jst'>
                                        <Image src="clock.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>Urgent</p>
                                        </div>
                                        <div className='fl-col jst'>
                                        <Image src="vector2.svg" width={22} height={25} alt=""  />
                                        <p className='messpart-p'>NDA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='fl-col jst-SB messpart'>
                                    <button>Brief</button>
                                    <button>Messages</button>
                                    <button>Designs</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                </div>
            <div className='disc-head3 fl jst-SB'>
                <div id='SD-header' className='fl'>
                    <h1 >Please submit logo design only (4 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Selection ofqualified designers (4 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Finalists (3 days)</h1>
                </div> 
                <div id='SD-header' className='fl'>
                    <h1 >Winner selection (7 days)</h1>
                </div> 
            </div>
            <div className='disc-head4 fl jst-SB'>
                <div className='fl w-60 jst-SB'>
                <div  className='fl slct-cpm'>
                    <select>
                        <option>All (10)</option>
                    </select>
                </div> 
                <div  className='fl slct-cpm'>
                    <select>
                        <option>Rated (2)</option>
                    </select>
                </div> 
                <div  className='fl slct-cpm'>
                    <select>
                        <option>All designers (22)</option>
                    </select>
                </div> 
                </div>

                <div className='fl w-40 jst-SB pl-33'>
                <div  className='fl slct-cpm'>
                    <select>
                        <option>Newest first</option>
                    </select>
                    
                </div> 
                <div  className='fl slct-cpm jstfe'>
                    <button className='clearbtn'>
                    <Image src="dotsquares.svg" alt='' width={50} height={50} />
                    </button>
                    <button className='clearbtn'>
                    <Image src="dotlines.svg" alt='' width={50} height={50} />
                    </button>
                </div> 
                </div>


            </div>

            <div className=' '> 
            {activeComponent === "Brief" && 
            <ProjectsMessage3comp cardData={{cardData2}}/>

            }
            {activeComponent === "Design" && 
            <div className='disc-card-cont'>
            <Browse cardData={{cardData2}} />
            </div>
            }
                
            </div>


                  
    </div>
      
</div>





</div>

       
      </div>

      <Footer/>
    </div>
  );
}

export default ProjectsMessage3;




