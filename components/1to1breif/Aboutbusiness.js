import Image from "next/image";

const Aboutbusiness= ({setName, setLanguages, setIndustry, setDescription, setUrl, setReference,setLogo, cosn})=>{
    function languagesonchange(e){
        setLanguages(e)
    }
    function industryOnchange(e){
        setIndustry(e)
    }
    function UrlOnchange(e){
        setUrl(e)
    }
    function nameOnchange(e){
        setName(e)
    }
    function DescribeOnchange(e){
        setDescription(e)
    }
    function ReferenceOnchange(e){
        setReference(e)
    }
    return(
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Languages:</label>
                <input type="text" onChange={e => languagesonchange(e.target.value)}/>
            </div>
            <div className="fl fl-gap47">
                <label>Your industry:</label>
                <input onChange={e => industryOnchange(e.target.value)}/>
            </div>
            <div className="fl fl-gap47">
                <label>Your website <br/>and/or social media:</label>
                <input onChange={e => UrlOnchange(e.target.value)}/>
            </div>
            <div className="fl fl-gap47">
                <label>Project name:</label>
                <input onChange={e => nameOnchange(e.target.value)}/>
            </div>
            <div className="fl fl-gap47">
                <label>Type of design:</label>
                <input />
            </div>
            <div className="fl fl-gap47">
                <label>Describe your project:</label>
                <textarea onChange={e => DescribeOnchange(e.target.value)}/>
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
                <input onChange={e => ReferenceOnchange(e.target.value)}/>
            </div>
            <div className="fl fl-gap47 ">
                <label>Attach your logo</label>
                <div className="fl fl-gap10 w-80">

                
                <div className="plusabout">
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
            <div className="fl fl-gapp16">
                <div className="fl fl-gap10 w-46">
                    <input type="checkbox" id="yes" />
                    <label>No logo</label>
                </div>
                <div className="w-74">
                    <p>Start a logo contest first</p>
                </div>
            </div>
            <div className="mt-159 mb-50">
                <button onClick={cosn}>Continue</button>
            </div>
            
        </div>
    )
}
export default Aboutbusiness;