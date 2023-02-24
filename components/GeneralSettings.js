import React from 'react';

const GeneralSettings = () => {
  return (
    <div>
      <form className="form-group-sett">
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

        <div className="form-group">
          <label htmlFor="text">Address details</label>
          <input type="text" className="form-control" id="Address" />
        </div>

        <div className='form-group1'> 
          <div className="form-group w-30">
                <label htmlFor="first-name">Time Zone</label>
                <input type="text" className="form-control" id="Time-Zone" />
            </div>
            <div className="form-group w-30">
                <label htmlFor="last-name">Country</label>
                <input type="text" className="form-control " id="Country" />
            </div>
            <div className="form-group w-30">
                <label htmlFor="last-name">City</label>
                <input type="text" className="form-control" id="City" />
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
        <div>
        <button type="submit" className="btn btn-primary">Save Changes</button>

        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
