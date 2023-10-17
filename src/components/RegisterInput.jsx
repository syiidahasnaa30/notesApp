import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

const RegisterInput = () => {
  const { language } = React.useContext(LanguageContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();
    const { error } = await register({ name, email, password });

    if (error) {
      console.log(error);
      alert(error);
    } else {
      alert("Register Success");
      navigate("/");
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
      <button>{language === "eng" ? "Register" : "Daftar"}</button>
    </form>
  );
};
export default RegisterInput;
