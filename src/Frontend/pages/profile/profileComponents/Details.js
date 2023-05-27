import { useContext } from "react";

import { AuthContext } from "../../../context/auth-context";

export const ProfileDetails = () => {
  const { logoutHandler } = useContext(AuthContext);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <div className="profile-container">
      <img
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt="profileimage"
      ></img>
      <h3>
        {" "}
        Name : {userDetails
          ? userDetails.fullname
          : "Kashif Hussain Pathan"}{" "}
      </h3>
      <h3>
        {" "}
        Email :{" "}
        {userDetails ? userDetails.email : "kashifhussainpathan@gmail.com"}{" "}
      </h3>
      <h3> Contact : +919988776655 </h3>
      <button className="button logout-button" onClick={logoutHandler}>
        Logout{" "}
      </button>
    </div>
  );
};
