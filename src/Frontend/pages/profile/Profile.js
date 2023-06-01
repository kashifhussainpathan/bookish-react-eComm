import "./profileStyles.css";
import { NavLink, Outlet } from "react-router-dom";

import { Nav } from "../home/homeComponents/Nav";

export const Profile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? "profile-nav-item nav-link-active"
      : "profile-nav-item nav-link";
  };

  return (
    <>
      <Nav />
      <div className="profile-nav">
        <NavLink to={"/profile/details"} className={toggleActive}>
          Profile
        </NavLink>{" "}
        {/*address management and order management will be added later on*/}
        <NavLink to={"/profile/addresses"} className={toggleActive}>
          Addresses
        </NavLink>{" "}
        <NavLink to={"/profile/orders"} className={toggleActive}>
          Order
        </NavLink>
      </div>
      <section className="profile-section">
        <Outlet />
      </section>
    </>
  );
};
