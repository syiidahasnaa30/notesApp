import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { login } from "../utils/network-data";
import LanguageContext from "../contexts/LanguageContext";

const LoginPage = ({ onLoginSuccess }) => {
  const { language } = React.useContext(LanguageContext);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });
    if (error) {
      console.log(error);
    } else {
      onLoginSuccess(data);
    }
  };
  return (
    <section className="login-page">
      <h2>
        {language === "eng"
          ? "Please login to use this notes"
          : "Masuk untuk menggunakan catatan ini"}
      </h2>
      <LoginInput onLogin={onLogin} />
      <p>
        {language === "eng" ? "Don't have any account? " : "Belum punya akun? "}
        <Link to="/register">
          {" "}
          {language === "eng" ? "Create an account" : "Buat akun"}
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
