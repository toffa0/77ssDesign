import Image from 'next/image'


const TypeofDesign= ()=>{
    return(
        <div className="checkout-cont">
            <div className="fl jstfe fl-gap10">
                <div className='fl jst'>
                    <label>Currency</label>
                </div>
                <select>
                    <option>  Egp</option>
                    <option>  $</option>
                </select>
            </div>

            <div className="typeDesign-secpart fl fl-gap32 jst-SB">
                <div className='firstcol'>
                    <div className='typesec-part1'>
                        <h3>SILVER</h3>
                        <h4>$ 299</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>80 designs expected</li>
                            <li>Available for all designers</li>
                            <li>Larger prize</li>
                            <li>%100 guarantee</li>

                        </ol>
                        <div className='fl jst'>
                            <button>Select</button>    
                        </div>
                        
                    </div>
                </div>
                <div className='seccol'>
                    <div className='typesec-part1'>
                        <h3>GOLD</h3>
                        <h4>$ 599</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>60 designs expected</li>
                            <li>Pro. and Adv. level designers only</li>
                            <li>Dedicated director</li>
                            <li>%100 guarantee</li>

                        </ol>
                        <div className='fl jst'>
                            <button>Select</button>    
                        </div>
                        
                    </div>
                </div>
                <div className='thirdcol'>
                    <div className='typesec-part1'>
                        <h3>PLATINUM</h3>
                        <h4>$ 999</h4>
                    </div>
                    <div className='typesec-part2 fl-col fl-gap6'>
                        <ol className='fl-col fl-gap6'>
                            <li>40 designs expected</li>
                            <li>Advanceleve designers only</li>
                            <li>Priority support</li>
                            <li>Dedicated director</li>
                            <li>%100 guarantee</li>

                        </ol>

                        <div className='fl jst'>
                            <button>Select</button>    
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='typesec3'>
                <label>Custome Package:</label>
                <input/>
                <span>Start from $ 299</span>
            </div>
            <div className="checkout-thirdpart">
                <h2>Project Features</h2>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label>Promote your project: Push your contest to the top of the list</label>
                    </div>
                    <label>$39</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label>Blind contest: The designers can not see each other&apos;s designs</label>
                    </div>
                    <label>FREE</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label> Private project: The contest won&apos;t be visible in google and the<br/>
                            <span>search result requires designers to sign a confidentiality 
                            agreement NDA</span>
                        </label>
                    </div>
                    <label>$49</label>
                </div>
                <div className="fl jst-SB">
                    <div className="fl gap15">
                        <input type='checkbox'/>
                        <label>Urgent contest: Duration of the contest will be 4 days<br/> 
                            <span>(standard contest duration is 7 days/2 rounds) </span>
                        </label>
                    </div>
                    <label>$39</label>
                </div>

            </div>
            <div className="checkout-fourthpart">
                <p><span>Note: You can end or extend the contest any time</span> if you want that ($49 for an additional 1 day)
                          
                </p>
            </div>

            <div className="checkout-fifthpart mb-92">
                <div className='fl fl-gap10 mb-14'>
                    <input type="checkbox" />
                    <label>Guaranteed</label>
                </div>
                <p>You will have more designers participating and receive <span>50% more proposal around your budget </span></p>
                <div className='fl fl-gap10 mt-11 mb-32'>
                    <p><span>If not guaranteed.</span> 77S design charges administration fee of $20 to process the refund (this will be deducted from the receivable). </p>
                </div>
                <div>
                    <label>JUST REMEMBER…NO REFUND</label>
                </div>
            </div>
            <div>
            <div className='fl jstfe but'>
                <button>Continue</button>
            </div>
 
                

            </div>
        </div>
    )
}

export default TypeofDesign;