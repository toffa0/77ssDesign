import React, { useState } from 'react'
import Image from 'next/image'

const IDVerification = ({setId_card,handleContinue}) => {
  const [file, setFile] = useState("idver.svg")
  const [status, setStatus] = useState('Pending Verification')
  const [result, setResult] = useState(null)

  const handleFileUpload = e => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="form-group-sett m-40 mb-172">
      <div className='idtxt'>
        <p>77S design is a professional marketplace and it’s important for us to confirm the identities of our users in order to maintain a trusted environment.</p>
        <p>Verifying your ID helps to secure your accounts and payments.At certain moments you will be required to verify your ID to progress to the next step.</p>
        <p>Once you started the verification process, you can check your status here.</p>
      </div>
      <div className='idimg'>
        <div className="form-group w-40 jend">
                <label htmlFor="last-name">ID number </label>
                <input type="password" className="form-control" id="passwordnew" />
        </div>
        <div className='submitID'>
        <div className='idimg2'>
        <Image  src={file} alt='ID Document Preview' width={235} height={180} />
        <input
                    type="file"
                    placeholder=""
                    name="myImage"
                    className="inputfileupload2"
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setId_card(event.target.files[0]);
            }}
          />
        </div>
        <p>Submit your ID</p>
        </div>
    
    
        {file!="idver.svg" && (
          <div>
            
            <p>Document Status: {status}</p>
            <p>Submission Date: {new Date().toLocaleDateString()}</p>
            {result && <p>Verification Result: {result}</p>}
          </div>
        )}
      </div>
      <div className="profile__submit-button mt-80"> 
        <button onClick={handleContinue}>Submit</button>
      </div>
    </div>
  )
}

export default IDVerification
   