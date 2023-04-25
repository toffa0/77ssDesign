import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max3">
      
    <div style={{height:"779.06px",display:"flex",width:"100%"}}>
      {selectedImage?
        <div style={{width:"70%",margin:"auto"}}>
          <Image
            alt="not found"
            width={250}
            height={250}
            style={{width:"90%",height:"90%"}}
            src={URL.createObjectURL(selectedImage)}
          />

   
        </div>
      

      :
    <div style={{width:"70%",margin:"auto"}}>
      <input
        type="file"
        placeholder="Drag and drop to upload or click to browse to choose a file"
        name="myImage"
        className="inputfileupload"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          
        }}
        
      />
       <FontAwesomeIcon icon="fa-solid fa-check-square" />
       </div>

}
        <div style={{width:"30%",height:"100%",display:"flex",flexDirection:"column",margin:"auto"}}>
            <h3>Upload Sample</h3>
            <div>
        {selectedImage?    
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          :
          ""
        }
        <div style={{display:"flex",flexDirection:"column",margin:"30px 0"}}>
          <label style={{fontSize:"18px",color:"#3d3d3d"}}>Design Title</label>
          <span style={{fontSize:"14px",margin:"10px 0"}}>choose a concise title for your design.</span>
          <input style={{height:"32px",borderRadius:"7px"}} />
        </div>

        <div style={{display:"flex",flexDirection:"column",margin:"30px 0"}}>
          <label style={{fontSize:"18px",color:"#3d3d3d"}}>Description</label>
          <span style={{fontSize:"14px",margin:"10px 0"}}>Describe your design process and the result.</span>
          <textarea style={{height:"84px",borderRadius:"7px"}} />
        </div>
        <div>
          <button disabled={!selectedImage}>Add design</button>
          <button onClick={() => 
          
          window.location.reload(false)
          
          }>Cancel</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;