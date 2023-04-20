import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
import 'react-phone-input-2/lib/style.css'

import PhoneInput from 'react-phone-input-2'



const GeneralSettings2 = ({TimezoneSelect}) => {
  
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState()
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  console.log(selectedTimezone)


  return (
    <div>
      <form className="form-group-sett m-40 mb-172">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="name" />
        </div>
        
        <div className='form-group1'> 
          <div className="form-group w-40">
                <label htmlFor="first-name">First Name</label>
                <input type="text" className="form-control" id="first-name" />
            </div>
            <div className="form-group w-40">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" className="form-control" id="last-name" />
            </div>
        </div>
        <div className='form-group1'> 
          <div className="form-group w-40">
                <label htmlFor="first-name">Month / Day /	Year of Birth</label>
                <input type="Date" className="form-control" id="first-name" />
            </div>
            <div className="form-group w-40">
                <label htmlFor="last-name">Gender</label>
                <select>
                  <option disabled>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
            </div>
        </div>
        <div className="form-group">
          <label htmlFor="text">Link your portfolio (behance, dribbble, etc)</label>
          <input type="text" className="form-control" id="Address" />
          <input type="text" className="form-control" id="Address" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Social media</label>
          <input type="text" className="form-control" id="Address" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Address details</label>
          <input type="text" className="form-control" id="Address" />
        </div>

       <div className='form-group1'> 

            <div className="form-group w-30">
                <label htmlFor="last-name">Country</label>
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                    selectButtonClassName='SelectCountry'
                                    searchable
                                />
            </div>
            <div className="form-group w-30">
                <label htmlFor="last-name">City</label>
                <input type="text" className="form-control" id="City" />
            </div>
            <div className="form-group w-30">
                <label htmlFor="first-name">Time Zone</label>
                <input value={selectedTimezone} type="text" className="form-control" id="Time-Zone" />
                {/* <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                  selectButtonClassName='SelectCountry'
                /> */}
            </div>
        </div>
        <div className='form-group1'> 
          <div className="form-group w-30">
                <label htmlFor="State">State(opt.)</label>
                <input type="text" className="form-control" id="State" />
            </div>
            <div className="form-group w-30">
                <label htmlFor="Zip">Zip(opt.)</label>
                <input type="text" className="form-control" id="Zip" />
            </div>
            <div className="form-group w-30">
                <label htmlFor="Phone-Number">Phone Number</label>
                <input type="text" className="form-control" id="Phone-Number" />
            </div>
        </div>
        <div className='profile__submit-button mt-192' >
          <button type="submit" className="btn btn-primary">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings2;
