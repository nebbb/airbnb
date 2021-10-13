import React, { useEffect, useState } from "react";
import "./EditHome.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateAHome } from "../../store/homes";
import { loadTheHomes } from "../../store/homes";
import { useParams } from "react-router";

export default function EditHome() {
  const { homeId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const home = useSelector((state) => state.homes[homeId]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [type, setType] = useState("");
  const [imgOne, setImgOne] = useState("");
  const [imgTwo, setImgTwo] = useState("");
  const [imgThree, setImgThree] = useState("");

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      info,
      price,
      lat,
      long,
      type,
      picOne: imgOne,
      picTwo: imgTwo,
      picThree: imgThree,
    };
    const theHome = await dispatch(updateAHome(user.id, payload));
    if (theHome) history.push(`/homes/${homeId}`);
  };

  return (
    <div className="home-form__container">
      <form className="home-form__main" onSubmit={onSubmit}>
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
        <button className="home-form__button">Edit home!</button>
      </form>
    </div>
  );
}
