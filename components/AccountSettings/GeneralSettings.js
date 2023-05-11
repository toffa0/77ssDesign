import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
import 'react-phone-input-2/lib/style.css'
import useAuth from "@/contexts/auth.contexts";
import PhoneInput from 'react-phone-input-2'

const GeneralSettings = ({setActiveComponent,setFirstname,setLastname,setAddress,setCity,setCountry,setTimezone,setZip_code,setState,setPhone,payload,setEmail,email,firstname,lastname,phone,city,state,zip_code,address}) => {


  const [selected, setSelected] = useState("");
  const [value, setValue] = useState()
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  console.log(selectedTimezone)
  setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const { user } = useAuth();
  console.log(user)



  return (
    <div>
      <form className="form-group-sett m-40 mb-172">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="name" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
        </div>
        
        <div className='form-group1'> 
          <div className="form-group w-40">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control" id="first-name" value={firstname} onChange={(e)=>setFirstname(e.currentTarget.value)} />
            </div>
            <div className="form-group w-40">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" id="last-name" value={lastname} onChange={(e)=>setLastname(e.currentTarget.value)} />
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="text">Address details</label>
          <input type="text" className="form-control" id="Address" value={address} onChange={(e)=>setAddress(e.currentTarget.value)} />
        </div>

        <div className='form-group1'> 
        <div className="form-group w-30">
                <label htmlFor="first-name">Time Zone</label>
                <input value={selectedTimezone} type="text" className="form-control" id="Time-Zone" />
                {/* <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                  selectButtonClassName='SelectCountry'
                /> */}
            </div>
            <div className="form-group w-30">
                <label htmlFor="last-name">Country</label>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => {setSelected(code);setCountry(code)}}
                  selectButtonClassName='SelectCountry'
                  searchable
                />
            </div>
            <div className="form-group w-30">
                <label htmlFor="last-name">City</label>
                <input type="text" className="form-control" id="City" value={city} onChange={(e)=>setCity(e.currentTarget.value)} />
            </div>
        </div>
        <div className='form-group1 mb-200'> 
          <div className="form-group w-30">
                <label htmlFor="State">State(opt.)</label>
                <input type="text" className="form-control" id="State" value={state} onChange={(e)=>setState(e.currentTarget.value)} />
            </div>
            <div className="form-group w-30">
                <label htmlFor="Zip">Zip(opt.)</label>
                <input type="text" className="form-control" id="Zip" value={zip_code} onChange={(e)=>setZip_code(e.currentTarget.value)} />
            </div>
            <div className="form-group w-30 ">
                <label htmlFor="Phone-Number">Phone Number</label>
                <input type="text" className="form-control" id="Phone-Number" value={phone} onChange={(e)=>setPhone(e.currentTarget.value)} />
            </div>
        </div>
        <div className='profile__submit-button'>
        <button type="button" className="btn btn-primary" onClick={()=>{setActiveComponent("Profile");console.log(payload)}}>Continue</button>

        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
