import Image from "next/image";

const Size= ()=>{

    return(
        <div className="oneto1 fl-col gap fl-gap32">
            <div className="fl fl-gap47">
                <label>Size of the product</label>
                <input placeholder="Optional (according to the product)" />
            </div>
            <div className="fl fl-gap47">
                <label>Text you would like to feature on the product</label>
                <textarea placeholder="Optional (according to the product)"/>
            </div>
            <div className="fl fl-gap47 ">
                <label>upload text file:</label>
                <div className="fl fl-gap10">

                
                    <div className="plusabout">
                    <Image src="+.svg" alt="" width={27} height={27} />
                    <p>Please attach</p>
                    </div>
 
                </div>
            </div>
            
            <div className="fl fl-gap47">
                <label>Link of the image or upload: </label>
                <div className="fl-col fl-gap32">


                <input placeholder="If you have images link please upload" />
                <div className="fl fl-gap10">
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
            </div>

            <div className="mt-159 mb-350">
                <button>Continue</button>
            </div>
            
        </div>
    )
}
export default Size;