import Image from "next/image";


const Submitdesgin = ()=>{
return(
    <div className="max fl h-90">
        <div className="w-35 sb-col1">
            <div className="cd-header">
                <div className="fl ali-cen fl-gap10 mb-11">
                <p>#3</p>
                <span>by designer name</span>
                </div>
                
                <div className="fl jst fl-gap2 mb-32">
                <button className="SD-btn4">Eliminate </button>
                <button className="SD-btn4" id="newestfilter">Decline</button>
                </div>
                <div className="fl  fl-gap2 jst-SB">
                <Image src="5stars.svg" alt="" width={130} height={18.5} />
                <button className="SD-btn2">share</button>
                </div>
            </div>
            <div className="fl-col fl-gap2 mb-32">
                <p>Description the Idea</p>
                <p>Description the Idea</p>
            </div>

            <div className="fl fl-gap2 mb-101">
                <Image src="paidstock.svg" alt="" width={22} height={22} />
                <p>Design uses paid stock</p>
            </div>
            <div className="SD-inp mb-45">
                <label>Comment</label>
                <input type="text" />
                <button className="SD-btn5">Send</button>
            </div>
            <div className="fl-col fl-gap8 mt-18 mb-82">
                <div className="cd-sec">
                    <label>Client name</label>
                    <div className="cd-csec fl">
                        <p>PLease change this color</p>
                    </div>
                </div>
                <div className="cd-sec">
                    <label>Designer name</label>
                    <div className="cd-csec2 fl">
                        <p>color changed</p>
                    </div>
                </div>
                <div className="cd-sec">
                    <label>Client name</label>
                    <div className="cd-csec fl">
                        <p>PLease change this font</p>
                    </div>
                </div>
                <div className="cd-sec">
                    <label>Designer name</label>
                    <div className="cd-csec2 fl">
                        <p>font changed</p>
                    </div>
                </div>
            </div>
            <div className="SD-btns fl fl-gap32 " >
                <button className="SD-btn3">Withdraw design</button>
                <button className="SD-btn3" >Add to folio</button>
            </div>
        </div>
        <div className="sb-col2">
            <Image src="subex1.svg" alt='' width={861} height={917} />
        </div>
    </div>
)};

export default Submitdesgin;