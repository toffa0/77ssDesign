import React, { useState } from 'react'

const Profile = () => {
    const [file, setFile] = useState(null)

    const handleFileUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
      }

  return (
    <div className="form-group-sett mb-172">
      <div className="form-group1 ">
        <div className="profile__img-upload">
            <div className='img-up jst'>
                <span>Avatar</span>
                <span>200x200</span>
            {/* <input type='file' onChange={handleFileUpload} id="imgup" /> */}
            </div>
        </div>
        <div className="form-group  w-100">
          <div>
            <label htmlFor="last-name">Username</label>
            <input type="text" id="Username" />
          </div>
          <div>
            <label htmlFor="last-name">Languages</label>
            <input type="text" id="Languages" />
          </div>

        </div>
      </div>
      <div className="form-group">
      <label htmlFor="last-name">Biography</label>
        <textarea id="Biography"></textarea>
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
      <div className="profile__submit-button">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Profile;
