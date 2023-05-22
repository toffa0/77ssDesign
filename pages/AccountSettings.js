import React, { useEffect, useState } from "react";
import GeneralSettings from "@/components/AccountSettings/GeneralSettings";
import IDVerificationSettings from "@/components/AccountSettings/IDVerificationSettings";
import NotificationsSettings from "@/components/AccountSettings/NotificationsSettings";
import ProfileSettings from "@/components/AccountSettings/ProfileSettings";
import MembershipSettings from "@/components/AccountSettings/MembershipSettings";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL, API_VERSION } from "@/config";
import Cookies from "js-cookie";
import useAuth from "@/contexts/auth.contexts";
import axiosInstance from "@/helpers/axios";

const AccountSettings = () => {
  const { user } = useAuth();
  const [activeComponent, setActiveComponent] = useState("General");

  const [avatar, setAvatar] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [phone, setPhone] = useState("");
  const [languages, setLanguages] = useState(""); 
  const [bio, setBio] = useState("");
  const [id_card, setId_card] = useState("");
  const [rating, setRating] = useState(34);

  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState(user?user.username:"");
 
  const [settings, setSettings] = useState({});

  const csrfToken = Cookies.get("csrfToken");

  const payload = {
    avatar: avatar,
    username:Username,
    firstname: firstname, 
    lastname: lastname,
    country: country,
    city: city,
    timezone: timezone,
    address: address,
    state: state,
    zip_code: zip_code,
    phone: phone,
    languages: languages,
    bio: bio,
    id_card: id_card,
    rating: rating,
  };
  const handleContinue = () => {
    console.log(payload);
    let form_data = new FormData();
    form_data.append("firstname", firstname);
    form_data.append("lastname", lastname);
    form_data.append("country", country);
    form_data.append("city", city);
    form_data.append("timezone", timezone);
    form_data.append("address", address);
    form_data.append("state", state);
    form_data.append("zip_code", zip_code);
    form_data.append("phone", phone);
    form_data.append("languages", languages);
    form_data.append("bio", bio);
    form_data.append("avatar", avatar);
    form_data.append("id_card", avatar);
    form_data.append("rating", rating);
    console.log(form_data);
    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/profile/client/`, formData)
      .then((res) => {
        router.reload();
      })
      .catch((error) => {console.error(error);alert(error)});
    // fetch(`${BASE_URL}/${API_VERSION}/user/profile/client/`, {
    //   method: "POST",
    //   headers: {
    //     "X-CSRFToken": csrfToken,
    //   },
    //   credentials: "include",
    //   body: form_data,
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.error(error));
  };

 

  useEffect(() => {
    if (user.user_type === "designer") {
      window.location.href = "/AccountSettings-designer";
    }
    console.log(user.id)
    if (user) {
      axiosInstance(`${BASE_URL}/${API_VERSION}/user/csrf/`);
      fetch(`${BASE_URL}/${API_VERSION}/user/profile/client/${user.id}`, {
        headers: {
          // 'Content-Type': 'application/json',
          "X-CSRFToken": csrfToken,
        },
        credentials: "include",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setSettings(data);
          setEmail(data.user.email)
          setFirstname(data.firstname)
          setLastname (data.lastname)
          setCountry(data.country) 
          setCity(data.city)
          setAddress(data.address) 
          setState(data.state)
          setPhone(data.phone) 
          setZip_code(data.zip_code)
          setLanguages(data.languages)
          setBio(data.bio)
          setAvatar(data.avatar)
        })
        .catch((error) => console.error(error));
    }
  }, []);
  console.log(settings)
  if(settings!=={}){
    console.log("settings:",settings.user)
   
  }
  return (
    <div className="settings-container ">
      <div className="home_section mainscr">
        <Navbar user />
        <div className="max mt-133">
          <div className="my-workkk  mb-46">
            <h3 id="title">Account Settings</h3>
          </div>

          <div className="settings-nav">
            <button
              className={` ${
                activeComponent === "General" ? "active nav-btn" : "nav-btn"
              }`}
              onClick={() => setActiveComponent("General")}
            >
              General
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Profile" ? "active" : ""
              }`}
              onClick={() => {
                setActiveComponent("Profile");
                console.log(activeComponent);
              }}
            >
              Profile
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Notifications" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("Notifications")}
            >
              Notifications
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "ID Verification" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("ID Verification")}
            >
              ID Verification
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Membership" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("Membership")}
            >
              Membership
            </button>
          </div>
        </div>
      </div>

      <div className=" mainscr h-60v ">
        <div className="settings-content ">
          {/* <input
            type="file"
            placeholder="Drag and drop to upload or click to browse to choose a file"
            name="myImage"
            className="inputfileupload"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setAvatar(event.target.files[0]);
            }}
          /> */}
          {/* <button onClick={handleContinue}>Cont</button> */}
          {activeComponent === "General" && <GeneralSettings setActiveComponent={setActiveComponent} setFirstname={setFirstname} setLastname={setLastname} setAddress={setAddress} setCity={setCity} setCountry={setCountry} setTimezone={setTimezone} setZip_code={setZip_code} setState={setState} setPhone={setPhone} email={email} setEmail={setEmail} firstname={firstname} lastname={lastname} phone={phone} city={city} state={state} zip_code={zip_code} address={address}   payload={payload} />} 
          {activeComponent === "Profile" && <ProfileSettings setBio={setBio} avatar={avatar} setAvatar={setAvatar} setLanguages={setLanguages} setActiveComponent={setActiveComponent} setUsername={setUsername} Username={Username} languages={languages} bio={bio} payload={payload} />}
          {activeComponent === "Notifications" && <NotificationsSettings setActiveComponent={setActiveComponent} payload={payload} />}
          {activeComponent === "ID Verification" && <IDVerificationSettings setId_card={setId_card} handleContinue={handleContinue} />}
          {activeComponent === "Membership" && <MembershipSettings  />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;


// firstname,lastname,country,city,timezone,address,state,zip_code,phone,languages,bio,avatar, id_card,