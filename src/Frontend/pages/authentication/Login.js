import { useContext } from "react";
import { Link } from "react-router-dom";

// Importing css
import "./authStyles.css";

// import { ProductsNav } from "../products/components/ProductsNav";

import { AuthContext } from "../../context/auth-context";
import { Nav } from "../home/homeComponents/Nav";

export const Login = () => {
  const { loginInput, setLoginInput, loginHandler } = useContext(AuthContext);

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const testCredentialsLogin = () => {
    setLoginInput({
      email: "kashifhussainpathan@gmail.com",
      password: "kashifhussainpathan",
    });
  };

  return (
    <>
      <Nav />
      <section className="auth-container">
        <div className="auth-wrapper">
          <h2>Login</h2>
          <form onSubmit={loginHandler}>
            <div className="auth-form-container">
              <div className="input-text-group ">
                <label>
                  Email address<span className="color-text-error">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  name="email"
                  value={loginInput.email || ""}
                  onChange={loginInputHandler}
                  required
                />
              </div>
              <div className="input-text-group">
                <label>
                  Password<span className="color-text-error">*</span>{" "}
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginInput.password || ""}
                  onChange={loginInputHandler}
                  required
                />
              </div>
              <button
                className="test-credentials-button button"
                onClick={() => testCredentialsLogin()}
              >
                Login with test credentials
              </button>
              <button type="submit" className="login-button button">
                Login
              </button>
              <div className="create-new-account">
                <Link to="/signup">Create new account</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
