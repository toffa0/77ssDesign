import React from "react";

const Notifications = () => {
  return (
    <div className="form-group-sett1 ">
      <p>Desktop and mobile<br/> Get browser notifications on your device, even when 77S design is closed.</p>
      <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> Enable browser notifications on your device</span>
        </label>
      <div className="notification-type">
        <p>Email notifications</p>
        <ul>
            <li>
            <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> New invoice received, payment released </span>
        </label>
            </li>
            <li>
            <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> New designs received</span>
        </label>
            </li>
            <li>
            <label className="switch">
          <input type="checkbox" />
          <span className="slider round"> Comments and messages</span>
        </label>
            </li>
            <li>
            <label className="switch">
          <input type="checkbox" />
          <span className="slider round">   Remind deadlines to complete projects</span>
        </label>
            </li>
        </ul>
      </div>
      <div className="profile__submit-button">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Notifications;



//     