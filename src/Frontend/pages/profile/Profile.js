import "./profileStyles.css";
import { useState } from "react";

import { Nav } from "../home/homeComponents/Nav";
import AddressManagement from "../../utils/AddressManagement";
import { ProfileDetails } from "./profileComponents/Details";

const tabs = {
  one: <ProfileDetails />,
  two: <AddressManagement profile />,
};

export const Profile = () => {
  const [tabShowing, setTabShowing] = useState("one");

  const handleTabChange = (event) => {
    setTabShowing(event.target.value);
  };

  return (
    <>
      <Nav />
      <div className="profile-buttons" style={{ marginTop: "10vh" }}>
        <button onClick={handleTabChange} value="one">
          Profile
        </button>
        <button onClick={handleTabChange} value="two">
          Address
        </button>
      </div>
      <section className="profile-section">{tabs[tabShowing]}</section>
    </>
  );
};
