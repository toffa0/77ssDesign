import Image from "next/image";

const Aboutbusiness= ()=>{

    return(
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Language:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Your industry:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Your website and/or social media:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Project name:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Type of design:</label>
                <select id="catsele" placeholder='All categories'>
                    <option value="" >All Categories</option>
                    <option value="Logo-brand">Logo-brand identity</option>
                    <option value="Business-Advertising">Business-Advertising</option>
                    <option value="Web-App">Web-App design</option>
                    <option value="Clothing">Clothing-Merchandise</option>
                    <option value="Illustration">Illustration-Graphics</option>
                </select>
            </div>
            <div className="fl fl-gap47">
                <label>Describe your project:</label>
                <textarea />
            </div>
            <div className="fl fl-gap47">
                <label>Design will be used:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Other requirements:</label>
                <textarea />
            </div>
            <div className="fl fl-gap47">
                <label>Link of Reference and/or sketch: </label>
                <input />
            </div>
            <div className="fl fl-gap47 ">
                <label>Attach your logo</label>
                <div className="fl fl-gap10 w-80">

                
                <div className="plusabout ">
                    <Image src="+.svg" alt="" width={27} height={27} />
                    <p>Please attach</p>
                </div>
                <div className="plusabout">
                    <Image src="+.svg" alt="" width={27} height={27} />
                </div>
                <div className="plusabout">
                    <Image src="+.svg" alt="" width={27} height={27} />
                </div>
                </div>
            </div>
            <div className="fl fl-gap47">
                <div className="fl fl-gap10 w-46">
                    <input type="checkbox" id="yes" />
                    <label>No logo</label>
                </div>
                <div className="w-74">
                    <p>Start a logo contest first</p>
                </div>
            </div>
            <div className="mt-159 mb-350">
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Aboutbusiness;