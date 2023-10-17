import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LanguageContext from "../contexts/LanguageContext";
const RegisterPage = () => {
  const { language } = React.useContext(LanguageContext);

  return (
    <section className="register-page">
      <h2>
        {" "}
        {language === "eng" ? "Register your account" : "Daftarkan akunmu"}
      </h2>
      <RegisterInput />
      <p>
        {language === "eng"
          ? "Already have an account? "
          : "Sudah memiliki akun? "}{" "}
        <Link to="/"> {language === "eng" ? "Login" : "Masuk"}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
