import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from "@/components/profcard"
import Image from 'next/image'
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from '@/components/footer2';
import Link from 'next/link';

const ProposalDescription = ()=>{
    const [isOpen, setOpen] = useState(false);


  return (
    <div className="ProfilePage">
        <div className=' w-101 pv-55'>


   
        
      
            <div className='disc-head2'>
             <h1 id='cnn4'>Proposal amount must be between $ 00 to $ 000</h1>
            </div>

            

        <div className=' p-t20 '> 
        <div>
            <div className='w-101 fl jst-SB'>
            <div className='projchat1 fl-col jst-SA'>
            <div>
                <p>Client</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle.svg" alt='' width={46} height={46} /> <span>Name</span>
                </div>
            </div> 
            <div>
                <p>Designer</p>
                <div className='fl jsta fl-gap2'>
                    <Image src="circle2.svg" alt='' width={46} height={46} /> <span>Designer Name</span>
                </div>
            </div> 
            </div>

            <div className='projchat2 fl-col fl-gap10 jst-SB '>
                <div className='fl-col fl-gap10 chtbx'>
                <div>
                    <p>Hello, </p>
                    <p>I would like to work together for this brief</p>
               
                </div>
                <div>
                    <p>type of design you need</p>
                    <p>————</p>
                </div>
                <div>
                    <p>Describe your project</p>
                    <p>————</p>
                </div>
                <div>
                    <p>Design will be used</p>
                    <p>————</p>
                </div>
                </div>
                
                <div className='fl jstfe chtbxbtn'>
                    <button>Attach</button>
                </div>
            </div>
            
            
          

        
            </div>
            <div>

                <div className='milestone'>
                    <div className='milestone-part'>

                        <div className='fl proposalprice'>
                            <select>
                                <option>EGP</option>
                                <option>$</option>
                            </select>
                            <p> 0.00</p>
                        </div>
                    
                    <div className='fl gap5 proposalprice2'>
                        <input type="radio" />
                        <label>Millestone:</label>
                    </div>
                    <div className='fl-col fl-gap32  '>
                        <div className='fl jst-SB'>
                            <div className='milestone1'>
                                <label>Part 1:</label>
                                <input type="text" />
                            </div>
                            <div className='inpPrice'>
                                <input type='text' placeholder='$00'/>
                            </div>
                        </div>
                        <div className='fl jst-SB'>
                            <div className='milestone1'>
                                <label>Part 2:</label>
                                <input type="text" />
                            </div>
                            <div className='inpPrice'>
                                <input type='text' placeholder='$00'/>
                            </div>
                        </div>
                        <div className='fl jst-SB'>
                            <div className='milestone1'>
                                <label>Part 3:</label>
                                <input type="text" />
                            </div>
                            <div className='inpPrice'>
                                <input type='text' placeholder='$00'/>
                            </div>
                        </div>
                        <div className='fl jst-SB'>
                            <div className='milestone1'>
                                <label>Part 4:</label>
                                <input type="text" />
                            </div>
                            <div className='inpPrice'>
                                <input type='text' placeholder='$00'/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='fl jstfe pgbtn'>
                    <button>SEND</button>
            </div>
        </div>


    
        </div>
                  
      







       
      </div>

    </div>
  );
}

export default ProposalDescription;




