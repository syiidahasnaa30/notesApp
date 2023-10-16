import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

const RegisterInput = () => {
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
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
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
export default RegisterInput;
