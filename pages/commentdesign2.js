import Image from "next/image";
import { useEffect, useState } from "react";
import Dot from "@/components/Dot";
const Submitdesgin = ()=>{

    const [dot, setDot] = useState(null);
    const [IDCom, setIDCom]= useState(1);
    const [CommentText, setCommentText] = useState('');
    const [Comment, setComment] = useState([{id:1,point:{x:47.203125,y:493},text:"yo yo",AccountName:'Osama',AccountType:"Client"}]);
    const [EditedComment, setEditedComment] = useState('');
    const [EditedCommentOpen, setEditedCommentOpen] = useState(false);
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
        // console.log("yo")
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
        setEditedCommentOpen(false);
        setEditedComment("");
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

    const handleDotClick=()=>{
        console.log("yes")
        setEditedCommentOpen(!EditedCommentOpen)
        setDot(null);
    }
    function EditButton(OldComm,id){
        var text = document.getElementById("CommentEdit");
        const textBody = document.getElementById("CommentBody");
        const EditButton = document.getElementById("EditButton");
        const UpdateButton = document.getElementById("UpdateButton");
        // if (text.style.display === "none") {
        console.log(text.style.display);
      if (EditedComment==="") {
        text.style.display = "block";
        textBody.style.display = "none";
        setEditedComment(OldComm);
        // UpdateButton.style.display = "block";
        // EditButton.style.display = "none";
      } else {
        text.style.display = "none";
        textBody.style.display = "flex";
        EditComment(id)
        setEditedComment("");
        // UpdateButton.style.display = "none";
        // EditButton.style.display = "block";
      }
      
    }

    const EditComment=(id)=>{
        const newState = Comment.map(obj=>{
            if (obj.id === id){
                return {...obj, text:EditedComment}
            }
            return obj;
        })
        setComment(newState);
        setEditedComment("");
    }
    const handleDeleteComment = (id) => {
        const newState = Comment.filter((obj) => obj.id !== id);
            setComment( newState);
        setEditedComment("");
        setIsHovering(false)
        setEditedCommentOpen(false)
      };

return(
    <div className="max3 fl h-90">
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
                <button className="SD-btn2">share <Image src="arrowup.svg" alt="" width={6.74} height={7.04} /></button>
                </div>
            </div>
            <div className="fl-col fl-gap2 mb-32">
                <p className="CD-Description">Description the Idea </p>
                <p className="CD-Description2">Description the Idea</p>
            </div>

            <div className="fl ali-cen fl-gap2 mb-101">
                <Image src="paidstock.svg" alt="" width={31} height={31} />
                <p className="paidstock-p">Design uses paid stock</p>
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
                        <div className={item.AccountType==="Client" ?"cd-csec fl jst-SB":"cd-csec2 fl jst-SB"} id={IsHoveringDot&IsHoveringID===item.id?"pinkbackground":""} >
                            <p id="CommentBody">{item.text}</p>
                            <input value={EditedComment} onChange={e => setEditedComment(e.target.value)} type="text" id="CommentEdit" style={{display: "none"}}/>
                            <button className="EditComm" onClick={()=>EditButton(item.text,item.id)} id="EditButton" >{EditedComment===""?"Edit":"Update"}</button>
                            {/* <button onClick={()=>EditComment(item.id)} id="UpdateButton" style={{display: "none"}}>Update</button> */}
                        </div>
                        {/* <Dot key={item.id} x={item.point.x} y={item.point.y}  /> */}
                    </div>
                ))}


            </div>
    
        </div>
        <div className="sb-col2" >
            <Image src="subex1.svg" alt='' width={892} height={950} onClick={handleDrawClick}  />
            {dot && <Dot x={dot.x} y={dot.y} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID} DotID={0} /> }  
            {dot && <FeedBackInp x={dot.x} y={dot.y} setCommentText={setCommentText} CommentText={CommentText} handleSubmit={handleSubmit} setDot={setDot}  /> }       
            {Comment.map((item)=>{
                // console.log(item.id);       &&  
                if(EditedCommentOpen&&item.id===IsHoveringID){
                    
                    // console.log("yes")
                    return <div key={item.id}> <Dot  x={item.point.x} y={item.point.y} DotColor={IsHovering&IsHoveringID===item.id?DotColor2:DotColor} DotID={item.id}  handleDotClick={handleDotClick} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID} textbody={item.text}/>
                    <FeedBackEditInp  x={item.point.x} y={item.point.y} setCommentText={setCommentText} CommentText={CommentText} handleSubmit={handleSubmit} setDot={setDot} setEditedComment={setEditedComment} EditedComment={EditedComment} EditComment={EditComment} textbody={item.text} DotID={item.id} handleDotClick={handleDotClick} handleDeleteComment={handleDeleteComment} />      
                    </div>
                }
                else{
                    return  <Dot key={item.id} x={item.point.x} y={item.point.y} DotColor={IsHovering&IsHoveringID===item.id?DotColor2:DotColor} DotID={item.id}  handleDotClick={handleDotClick} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID}/>
                }
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
            left: x -5,
            top: y  +40 ,
            display:"flex",
            
            
        }}> 
            <div style={{display:"flex",background:"transparent",flexDirection:"column",width:"152px"}} className="">
            <button className="FeedBackInp-Close" onClick={()=>setDot(null)} title="Delete" >X</button>
            <input type="text" className="FeedBackInp-inp" value={CommentText}  onChange={e => setCommentText(e.target.value)} placeholder="Enter Your Comment" />
            </div>
            <button className="FeedBackInp-btn" onClick={handleSubmit}><Image src="send.svg" width={25} height={25} alt="send" /></button>
            

            
        </div>
    )
}

const FeedBackEditInp= ({x,y,handleDotClick,EditedComment,DotID,handleDeleteComment,setEditedComment,textbody,EditComment})=>{

    useEffect(()=>{
        if(textbody!=""){
            setEditedComment(textbody);
        }
    },[textbody])
    
    
    return(
        <div
        className="FeedBackInp-cont"          
        style={{
            position: 'absolute',
            left: x -5,
            top: y  +40 ,
            display:"flex",
            
            
        }}> 
            <div style={{display:"flex",flexDirection:"column",width:"152px"}} className="">
            <button className="FeedBackInp-Close" onClick={()=>handleDeleteComment(DotID)} title="Delete" >X</button>
            <input type="text" className="FeedBackInp-inp" value={EditedComment}   onChange={e => setEditedComment(e.target.value)} />
            </div>
            <button className="FeedBackInp-btn" onClick={()=>{EditComment(DotID);handleDotClick()}}>Edit</button>
            

            
        </div>
    )
}