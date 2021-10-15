import React, { useState } from "react";
import "./ApplicationForm.css";
import { addTheApplication } from "../../store/applications";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function ApplicationForm() {
  const [userName, setUsername] = useState("");
  const [reason, setReason] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: user.id,
      reason,
    };
    const theApplication = await dispatch(addTheApplication(payload));
    if (theApplication) history.push("/");
  };

  return (
    <div className="application-form__container">
      <form className="application-form__main" onSubmit={onSubmit}>
        <label>
          Username
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
            className="application-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Why should we allow you to sell?
          <input
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            className="application-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <button className="application-form__button">Submit!</button>
      </form>
    </div>
  );
}
