import { createContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userToken = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [loginInput, setLoginInput] = useState({});
  const [signupInput, setSignupInput] = useState({});

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/auth/signup`, signupInput);
      // localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem("userDetails", JSON.stringify(signupInput));

      setSignupInput({
        fullname: "",
        email: "",
        password: "",
        cnfpassword: "",
      });
      navigate("/login");
    } catch (e) {
      console.log(e.response);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("Login handler called");
      const { data } = await axios.post(`/api/auth/login`, loginInput);
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setIsLoggedIn(true);
      toast.success("Logged In Successfully");
      setLoginInput({ email: "", password: "" });
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const logoutHandler = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("paymentId");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const value = {
    userToken,
    isLoggedIn,
    setIsLoggedIn,
    loginInput,
    setLoginInput,
    signupInput,
    setSignupInput,
    signupHandler,
    loginHandler,
    logoutHandler,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
