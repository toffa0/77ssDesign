import React, { useState } from 'react'
import useAuth from "@/contexts/auth.contexts";
import { Im } from 'react-flags-select';

const Profile = ({setBio,avatar,setAvatar,setLanguages,setActiveComponent,Username,setUsername,languages,bio,payload}) => {
    const [file, setFile] = useState(null)
    const { user } = useAuth();
    const handleFileUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
      }
    // if(user){
    //   setUsername(user.username)
    // }

    const [OldpasswordShown, setOldPasswordShown] = useState(false);
    const [NewpasswordShown, setNewPasswordShown] = useState(false);
    const toggleOldPassword = () => {
      setOldPasswordShown(!OldpasswordShown);
    };
    const toggleNewPassword = () => {
      setNewPasswordShown(!NewpasswordShown);
    };

  return (
    <div className="form-group-sett m-40 mb-172">
      <div className="form-group1 ">
        <div className="profile__img-upload">
            <div className='img-up jst'>
              {avatar?
                      <img
                        className='uploadedImage'
                        alt="not found"
                        width={"250px"}
                        src={avatar}
                      />
              :
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",}}>
                <span>Avatar</span>
                <span>200x200</span>
                </div>
              }
         
            {/* <input type='file' onChange={handleFileUpload} id="imgup" /> */}
                  <input
                    type="file"
                    placeholder=""
                    name="myImage"
                    className="inputfileupload2"
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setAvatar(URL.createObjectURL(event.target.files[0]));
            }}
          />
            </div>
        </div>
        <div className="form-group  w-100">
          <div>
            <label htmlFor="last-name">Username</label>
            <input type="text" id="Username" value={Username} onChange={(e)=>setUsername(e.currentTarget.value)} />
          </div>
          <div>
            <label htmlFor="last-name">Languages</label>
            <input type="text" id="Languages" value={languages} onChange={(e)=>setLanguages(e.currentTarget.value)} />
          </div>

        </div>
      </div>
      <div className="form-group">
      <label htmlFor="last-name" className='mb-8'>Biography</label>
        <textarea id="Biography" value={bio} onChange={(e)=>setBio(e.currentTarget.value)}/>
      </div>
      <div className='p-33'>

      
      <h1 id='nn'>Change Password:</h1>
      
      <div className='form-group1'> 
          <div className="form-group w-40">
                <label htmlFor="first-name">Current Password</label>
                <input type={OldpasswordShown ? "text" : "password"} className="form-control" id="passwordold" />
                <button  className='show_hide_Pass'  onClick={toggleOldPassword}>{!OldpasswordShown?"Show":"Hide"}</button>
            </div>
            <div className="form-group w-40">
                <label htmlFor="last-name">New Password</label>
                <input type={NewpasswordShown ? "text" : "password"} className="form-control" id="passwordnew" />
                <button  className='show_hide_Pass'  onClick={toggleNewPassword}>{!NewpasswordShown?"Show":"Hide"}</button>
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
