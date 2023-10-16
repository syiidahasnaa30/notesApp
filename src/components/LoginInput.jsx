import React from "react";
import useInput from "../hooks/useInput";

const LoginInput = ({ onLogin }) => {
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
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Submit</button>
    </form>
  );
};
export default LoginInput;
