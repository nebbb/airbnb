import React, { useState } from "react";
import "./HomeForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addAHome } from "../../store/homes";
import { Redirect } from "react-router";

export default function HomeForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [type, setType] = useState("");
  const [imgOne, setImgOne] = useState("");
  const [imgTwo, setImgTwo] = useState("");
  const [imgThree, setImgThree] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: user.id,
      name,
      description,
      address,
      city,
      state,
      info,
      price,
      lat,
      long,
      type,
      picOne: imgOne,
      picTwo: imgTwo,
      picThree: imgThree,
    };
    const theHome = await dispatch(addAHome(payload));
    if (theHome) history.push("/homes");
  };

  if (user?.accountType < 2) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home-form__container">
      <form className="home-form__main" onSubmit={onSubmit}>
        <h1>Create a home</h1>
        <label>
          Home name
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Description
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Address
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          City
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          State
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Info
          <input
            onChange={(e) => setInfo(e.target.value)}
            value={info}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Price
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Lat
          <input
            onChange={(e) => setLat(e.target.value)}
            value={lat}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Long
          <input
            onChange={(e) => setLong(e.target.value)}
            value={long}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Type
          <input
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Image 1
          <input
            onChange={(e) => setImgOne(e.target.value)}
            value={imgOne}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Image 2
          <input
            onChange={(e) => setImgTwo(e.target.value)}
            value={imgTwo}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <label>
          Image 3
          <input
            onChange={(e) => setImgThree(e.target.value)}
            value={imgThree}
            className="home-form__input"
            autoComplete="false"
            spellCheck="false"
            required
          />
        </label>
        <button className="home-form__button">Add home!</button>
      </form>
    </div>
  );
}
