import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";
import PropTypes from "prop-types";

const RegisterInput = ({ setLoading }) => {
  const { language } = React.useContext(LanguageContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const navigate = useNavigate();

  const onRegister = async (event) => {
    if (password !== confirmPassword) {
      alert(
        language === "eng"
          ? "Password must same as Password Confirmation"
          : "Pastikan kata sandi anda sesuai dengan konfirmasi kata sandi"
      );
    } else {
      setLoading(true);
      event.preventDefault();
      const { error } = await register({ name, email, password });
      setLoading(false);
      if (error) {
        console.log(error);
      } else {
        alert("Register Success");
        navigate("/");
      }
    }
  };
  return (
    <form className="input-login" onSubmit={onRegister}>
      <label htmlFor="name">{language === "eng" ? "Name" : "Nama"}</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">
        {language === "eng" ? "Password" : "Kata Sandi"}
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="confirmPassword">
        {language === "eng" ? "Password Confirmation" : "Konfirmasi Kata Sandi"}
      </label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button>{language === "eng" ? "Register" : "Daftar"}</button>
    </form>
  );
};
RegisterInput.propTypes = {
  setLoading: PropTypes.func.isRequired,
};
export default RegisterInput;
