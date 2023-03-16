import Image from "next/image";

const Time= ()=>{

    return(
        <div className="oneto1 fl-col gap fl-gap32 ">
            <div className="fl fl-gap47">
                <label>Your timeline:</label>
                <select>
                    <option>48 hours</option>
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>Not sure. I’d like to chat with my designer</option>
                </select>
            </div>
            <div className="fl fl-gap47">
                <label>Your budget:</label>
                <div className="fl-col">
                <input placeholder="Guide: $199 - $799 " />
                <span>Designer will provide a quote</span>
                </div>
            </div>
            <div className="fl-col yoyoy jst-SB">
            <div className="fl jst-SB">
                <p className="timep">
                Can your designer showcase the finished
                designs in their 77S design portfolio? 
                </p>
                <div className="fl gap60 ali-end">
                    <div className="fl fl-gap10">
                        <input type="radio" id="inptabout" />
                        <span id="timespan">Yes</span>
                    </div>
                    <div className="fl fl-gap10">
                        <input type="radio" id="inptabout" />
                        <span id="timespan">No</span>
                    </div>
                </div>
            </div>

            </div>


            <div className="mt-159 mb-350">
                <button>Continue</button>
            </div>
        </div>
    )
}
export default Time;