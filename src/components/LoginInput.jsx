import React from "react";
import useInput from "../hooks/useInput";
import LanguageContext from "../contexts/LanguageContext";
import PropTypes from "prop-types";
const LoginInput = ({ onLogin }) => {
  const { language } = React.useContext(LanguageContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = (event) => {
    event.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form className="input-login" onSubmit={onSubmit}>
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
      <button> {language === "eng" ? "Login" : "Masuk"}</button>
    </form>
  );
};

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
export default LoginInput;
