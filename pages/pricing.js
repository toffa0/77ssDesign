import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Footer2 from "@/components/footer2";
import Image from 'next/image';
import Catmenu from "@/components/cat-menu";


const Pricing = () => {
    const [listItems, setListItems] = useState([
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
        { id: 4, text: "Item 4" },
        { id: 5, text: "Item 5" },
        { id: 6, text: "Item 6" },
        { id: 7, text: "Item 7" },
      ]);

    return(
        <div>
            <div className="bg-gr mainscr">
            <Navbar/>
            <h1>Pricing</h1>
            <form className="sr-div">
                <input type="text" name='' placeholder="Logo, Brand identity, Backaging..." />
                <input type="submit" name=''  value=" " /> 
            </form>
         
            <div className='cat-menu-bg' >
            <Catmenu/>
    
            </div>
            </div>
            <div className="mainscr p-t20">
                <div className="fl-all2">
                    <h1>Contest packages</h1>
                    <div className="pricing">
                     <span>Currency</span>
                     <select>
                        <option>LE. EGP</option>
                     </select>
                    </div>
              
                </div>
                <div className="fl-right">
                    <div className="pr-box bg-silver">
                        <h3>SILVER</h3>
                        <span>2999</span>
                    </div>
                    <div className="pr-box bg-gold">
                        <h3>GOLD</h3>
                        <span>5999</span>
                    </div>
                    <div className="pr-box bg-plat">
                        <h3>CRYSTAL</h3>
                        <span>9999</span>
                    </div>
                </div>
                <div className="pr-details">
                    <div className="fl-all2 ppp bg-gray white">
                        <p>Design concepts (approx.)</p> 
                        <div className="pr-details-span">
                        <span>50</span>
                        <span>80</span>
                        <span>70</span>
                        </div>
                    </div>
                    <div className="fl-all2 ppp ">
                        <p>100% guarante </p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>
                    <div className="fl-all2 ppp bg-gray white">
                        <p>Full intellectual property right  </p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="s7"  src="s7.svg" id="s7" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="s7"  src="s7.svg" id="s7" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="s7"  src="s7.svg" id="s7" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>
                    <div className="fl-all2 ppp ">
                        <p>Pro & Adv. Level designers only    </p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="minus"  src="minus2.svg" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="minus"  src="minus2.svg" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>
                    <div className="fl-all2 ppp bg-gray white">
                        <p>Adv. Level designers only   </p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="minus"  src="minus.svg" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="minus"  src="minus.svg" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="s7"  src="s7.svg" id="s7" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>
                    <div className="fl-all2 ppp">
                        <p>Dedicated manager</p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="minus"  src="minus2.svg" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="s7"  src="s72.svg" id="s7" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>
                    <div className="fl-all2 ppp bg-gray white">
                        <p>Prioritized support </p> 
                        <div className="pr-details-span">
                            <aside>
                            <Image alt="minus"  src="minus.svg" width={34} height={25}/>
                            </aside>
                        
                            <aside>
                            <Image alt="minus"  src="minus.svg" width={34} height={25}/>
                            </aside>
                            <aside>
                            <Image alt="s7"  src="s7.svg" id="s7" width={34} height={25}/>
                            </aside>
                        </div>
                    </div>

                </div>
                <div className="p-t20 red">
                    <p>*Explore creative concept from multiple designer </p>
                    <p>*Fixed price with set timeline</p>
                </div>
                <div className="pd-50 pr-sec">
                    <button>Start contest</button>
                </div>
                <div className="pd-51 ">
                    <h1>Project</h1>
                    <div className="pr-sec prj">
                        <p>
                        from
                        </p>
                        <p>
                        EGP 2999
                        </p>
                        <p>
                        To
                        </p>
                        <p>
                        EGP 6999
                        </p>
                       
                    </div>
                </div>
                <div className="p-t20 red">
                    <p>*Explore creative concept from multiple designer </p>
                    <p>*Fixed price with set timeline</p>
                </div>
                <div className="pd-50 pr-sec pb-50">
                    <button id="cyan">Hiring 1 to 1</button>
                </div>
            </div>
            <Footer2/>
            <Footer/>
        </div>
    )
}

export default Pricing;