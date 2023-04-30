import React, { useState } from 'react'

const Profile = ({setBio,setAvatar,setLanguages,setActiveComponent,payload}) => {
    const [file, setFile] = useState(null)

    const handleFileUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
      }

  return (
    <div className="form-group-sett m-40 mb-172">
      <div className="form-group1 ">
        <div className="profile__img-upload">
            <div className='img-up jst'>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",}}>
                <span>Avatar</span>
                <span>200x200</span>
              </div>
         
            {/* <input type='file' onChange={handleFileUpload} id="imgup" /> */}
                  <input
                    type="file"
                    placeholder=""
                    name="myImage"
                    className="inputfileupload2"
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setAvatar(event.target.files[0]);
            }}
          />
            </div>
        </div>
        <div className="form-group  w-100">
          <div>
            <label htmlFor="last-name">Username</label>
            <input type="text" id="Username" />
          </div>
          <div>
            <label htmlFor="last-name">Languages</label>
            <input type="text" id="Languages" onChange={(e)=>setLanguages(e.currentTarget.value)} />
          </div>

        </div>
      </div>
      <div className="form-group">
      <label htmlFor="last-name" className='mb-8'>Biography</label>
        <textarea id="Biography" onChange={(e)=>setBio(e.currentTarget.value)}/>
      </div>
      <div className='p-33'>

      
      <h1 id='nn'>Change Password:</h1>
      
      <div className='form-group1'> 
          <div className="form-group w-40">
                <label htmlFor="first-name">Current Password</label>
                <input type="password" className="form-control" id="passwordold" />
            </div>
            <div className="form-group w-40">
                <label htmlFor="last-name">New Password</label>
                <input type="password" className="form-control" id="passwordnew" />
            </div>
        </div>
        </div>
        <div className="profile__About-button">
        <button id='profile__About-button'>About</button>
      </div>
      <div className='profile__submit-button'>
        <button type="button" className="btn btn-primary" onClick={()=>{setActiveComponent("Notifications");console.log(payload)}}>Continue</button>

        </div>
    </div>
  );
};

export default Profile;
