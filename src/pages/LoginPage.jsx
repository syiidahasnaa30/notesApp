import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { login } from "../utils/network-data";

const LoginPage = ({ onLoginSuccess }) => {
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
      <h2>Login untuk menggunakan aplikasi</h2>
      <LoginInput onLogin={onLogin} />
      <p>
        Belum Punya Akun?<Link to="/register">Buat Akun</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
