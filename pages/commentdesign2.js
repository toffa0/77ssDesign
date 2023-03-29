import Image from "next/image";
import { useState } from "react";
import Dot from "@/components/Dot";
const Submitdesgin = ()=>{

    const [dot, setDot] = useState(null);
    const [IDCom, setIDCom]= useState(1);
    const [CommentText, setCommentText] = useState('');
    const [Comment, setComment] = useState([{id:1,point:{x:47.203125,y:493},text:"yo yo",AccountName:'Osama',AccountType:"Client"}]);
    const [IsHovering, setIsHovering] = useState(true);
    const [IsHoveringDot, setIsHoveringDot] = useState(false);
    const [IsHoveringID, setIsHoveringID] = useState(null);
    const [DotColor, setDotColor] = useState('#FF6B6B');
    const [AccountName, setAccountName] = useState('Osama');
    const [AccountType, setAccountType] = useState('Client');
    const DotColor2="blue";

    function handleMouseEnter(id) {
        setIsHovering(true);
        setIsHoveringID(id)
        // console.log(IsHovering)
        console.log(IsHoveringID)
        console.log(IDCom)
      }
    
      function handleMouseLeave() {
        setIsHovering(false);
        
      }
      function handleMouseEnterDot(id) {
        console.log("yo")
        setIsHoveringDot(true);
        setIsHoveringID(id)
        // console.log(IsHovering)
        console.log(IsHoveringID)
        console.log(IDCom)
      }
    
      function handleMouseLeaveDot() {
        setIsHovering(false);
        
      }


    const handleDrawClick = (event)=>{
        const rect = event.target.getBoundingClientRect();
        // const x = event.clientX - rect.left;
        // const y = event.clientY - rect.top;
        //////////////////////////////////////
        // const x = event.screenX - rect.left;
        // const y = event.screenY - rect.top;
        //////////////////////////////////////
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;
        setDot({ x, y });
        console.log(rect)
        console.log(dot)
        // return <Dot x={x} y={y} /> 

    }
    const handleSubmit= ()=>{
        if(CommentText!=""&dot!=null)
        {  setComment([...Comment ,{id:IDCom+1,point:dot,text:CommentText,AccountName:AccountName,AccountType:AccountType}])
            // console.log(Comment)
            setDot(null);
            setCommentText('');
            setIDCom(IDCom+1);
            
        }
        else{
            console.log("please write a comment and choose a point")
        }
    }
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
                <input type="text" value=""  onChange={e => setCommentText(e.target.value)} />
                <button className="SD-btn5" onClick={handleSubmit}>Send</button>
            </div>
            <div className="fl-col fl-gap8 mt-18 mb-118">

                {Comment.map((item)=>(
                    <div key={item.id} className="cd-sec feedbackhover2" onMouseEnter={()=>handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                        <label>{item.AccountName}</label>
                        <div className={item.AccountType==="Client" ?"cd-csec fl":"cd-csec2 fl"} id={IsHoveringDot&IsHoveringID===item.id?"pinkbackground":""} >
                            <p>{item.text}</p>
                        </div>
                        {/* <Dot key={item.id} x={item.point.x} y={item.point.y}  /> */}
                    </div>
                ))}




                {/* <div className="cd-sec">
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
                </div> */}
                {/* <div className="cd-sec">
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
                </div> */}
            </div>
    
        </div>
        <div className="sb-col2" >
            <Image src="subex1.svg" alt='' width={861} height={917} onClick={handleDrawClick}  />
            {dot && <Dot x={dot.x} y={dot.y} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID} DotID={0} /> }  
            {dot && <FeedBackInp x={dot.x} y={dot.y} setCommentText={setCommentText} CommentText={CommentText} handleSubmit={handleSubmit} setDot={setDot}  /> }       
            {Comment.map((item)=>{
                // console.log(item.id);
                return  <Dot key={item.id} x={item.point.x} y={item.point.y} DotColor={IsHovering&IsHoveringID===item.id?DotColor2:DotColor} DotID={item.id}  onClick={console.log("yes")} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID}/>
                
            })} 
        </div>
    </div>
)};

export default Submitdesgin;


const FeedBackInp= ({x,y,setCommentText,CommentText,handleSubmit,setDot})=>{

    return(
        <div
        className="FeedBackInp-cont"          
        style={{
            position: 'absolute',
            left: x +55,
            top: y  +40 ,
            backgroundColor: "white",
            display:"flex",
            
            
        }}> 
            <div style={{display:"flex",flexDirection:"column",borderLeftWidth:"1px",borderLeftColor:"#9E9EA3",borderLeftStyle:"soild",padding:"3px"}} className="BordLeft">
            <button className="FeedBackInp-Close" onClick={()=>setDot(null)}>X</button>
            <input type="text" className="FeedBackInp-inp" value={CommentText}  onChange={e => setCommentText(e.target.value)} placeholder="Enter Your Comment" />
            </div>
            <button className="FeedBackInp-btn" onClick={handleSubmit}>Send</button>
            

            
        </div>
    )
}
// export default FeedBackInp;