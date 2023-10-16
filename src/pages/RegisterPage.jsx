import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
const RegisterPage = () => {
  return (
    <section className="register-page">
      <h2>Register Page</h2>
      <RegisterInput />
      <p>
        Sudah Punya Akun? <Link to="/">Masuk</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
