import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => (document.body.style.overflowY = "scroll"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const showPassword = (e) => {
    const passwordInput = document.querySelector(".form--pw");
    if (e.target.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-login-cont">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        placeholder="Username"
        spellCheck="false"
        autoComplete="false"
        className="form--login-input"
      />
      <div className="show-hide-pw"></div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        spellCheck="false"
        autoComplete="false"
        className="form--login-input form--pw"
      />
      <div className="password-box">
        Show password?
        <input type="checkbox" onChange={showPassword} />
      </div>
      <button className="form--login--main-btn" type="submit">
        Continue
      </button>
    </form>
  );
}

export default LoginForm;
