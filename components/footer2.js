import React from "react";
import Link from 'next/link'
import Image from "next/image";
const Footer2 = () => {
  return (
    <section className="bg-b   mainscr">
    <div className='foot-links section-fot'>
    <div>
    
    <ul>
      <li><Link href="#" icon="check" text="Link 1" />Design Services</li>
      <li><Link href="#" icon="check" text="Link 2" />Design Contest</li>
      <li><Link href="#" icon="check" text="Link 3" />Hiring (1 to1)</li>
      <li><Link href="#" icon="check" text="Link 4" />Agencies 360</li>
      <li><Link href="#" icon="check" text="Link 5" />77S design Studio</li>
      <li><Link href="#" icon="check" text="Link 6" />Find a Designer</li>
      <li><Link href="#" icon="check" text="Link 7" />Discover Designs</li>
    </ul>
    </div>
    <div>
    
    <ul>
      <li><Link href="#" icon="check" text="Link 1" />Category</li>
      <li><Link href="#" icon="check" text="Link 2" />Logo / brand identity</li>
      <li><Link href="#" icon="check" text="Link 3" />T-shirt</li>
      <li><Link href="#" icon="check" text="Link 4" />Label - packaging</li>
      <li><Link href="#" icon="check" text="Link 5" />Book - Magazine </li>
      <li><Link href="#" icon="check" text="Link 6" />Illustration - graphics</li>
      <li><Link href="#" icon="check" text="Link 7" />Web - App design</li>
      <li><Link href="#" icon="check" text="Link 7" />All categories</li>
    </ul>
    </div>
    <div>
    
    <ul>
      <li><Link href="#" icon="check" text="Link 1" ><Image src="footerSearch.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp;Find Work</Link></li>
      <li><Link href="/pricing" icon="check" text="Link 2" ><Image src="footerPricing.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Pricing</Link></li>
      <li><Link href="#" icon="check" text="Link 3" ><Image src="footerEnv.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Join to 77S design</Link></li>
      <li><Link href="#" icon="check" text="Link 4" ><Image src="footerHelp.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Help</Link></li>
      <li><Link href="#" icon="check" text="Link 5" ><Image src="footerAbout.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; About</Link></li>
      <li><Link href="#" icon="check" text="Link 6" ><Image src="footerContact.svg" alt="" width={23} height={24} />&nbsp;&nbsp;&nbsp; Contact</Link></li>
    </ul>
    </div>
    
    </div>
    </section>
    )
  }
export default Footer2;

