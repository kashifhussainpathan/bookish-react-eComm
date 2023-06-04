import { Link } from "react-router-dom";
import { useContext, useState } from "react";

// import { ProductsNav } from "../products/components/ProductsNav";
import { AuthContext } from "../../context/auth-context";
import { Nav } from "../home/homeComponents/Nav";

// Importing React Icons
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Signup = () => {
  const { signupHandler, signupInput, setSignupInput } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Nav />
      <section className="auth-container">
        <div className="auth-wrapper">
          <h2 className="auth-heading">Signup</h2>
          <form onSubmit={signupHandler}>
            <div className="auth-form-container">
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  Full name<span className="color-text-error">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                  value={signupInput.fullname}
                  onChange={signupInputHandler}
                  required
                />
              </div>
              <div className="input-text-group ">
                <label className="">
                  Email address<span className="color-text-error">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={signupInput.email}
                  onChange={signupInputHandler}
                  required
                />
              </div>

              <div className="input-text-group">
                <label className="">
                  Password<span className="color-text-error">*</span>{" "}
                </label>
                <div className="password-input-container">
                  {" "}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    value={signupInput.password}
                    onChange={signupInputHandler}
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <AiOutlineEye
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="input-text-group">
                <label className="">
                  Confirm password<span className="color-text-error">*</span>{" "}
                </label>
                <div className="password-input-container">
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    name="cnfpassword"
                    value={signupInput.cnfpassword}
                    onChange={signupInputHandler}
                    required
                  />
                </div>
              </div>
              <button className="create-new-account-btn button" type={"submit"}>
                Create new account
              </button>
              <div className="create-new-account">
                <Link to="/login">Already have an account ?</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
