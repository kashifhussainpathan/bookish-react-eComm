import { useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import { Nav } from "../home/homeComponents/Nav";

export const Logout = () => {
  const { logoutHandler } = useContext(AuthContext);
  return (
    <>
      <section className="logout-section">
        <Nav />
        <div className="logout-wrapper">
          <button className="button logout-button" onClick={logoutHandler}>
            {" "}
            Logout{" "}
          </button>
        </div>
      </section>
    </>
  );
};
