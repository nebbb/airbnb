import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import * as userActions from "../../store/session";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const useDemo = () => {
    document.body.style.overflowY = "scroll";
    return dispatch(
      userActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  return (
    <>
      <button
        className="modal__outer-container"
        onClick={() => {
          setShowModal(true);
          document.body.style.overflowY = "hidden";
        }}
      >
        <div className="modal__inner-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="16px"
            height="16px"
            viewBox="0 0 50 50"
            fill="#222222"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>

          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            width="30px"
            height="30px"
            fill="rgb(113, 113, 113)"
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </svg>
        </div>
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            document.body.style.overflowY = "auto";
          }}
        >
          <div className="modal-header">
            <div
              className="close-inner-modal"
              onClick={() => {
                setShowModal(false);
                document.body.style.overflowY = "auto";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
              </svg>
            </div>
            <h2>Log in or sign up</h2>
          </div>
          <div className="form-input--container">
            <h2 className="form-input--title">Welcome to Airbnb</h2>
            <LoginForm />
            <p className="form-txt">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <br /> <span className="dummy-link">Privacy Policy</span>
            </p>

            <div className="seperator-container">
              <div className="seperator-line"></div>
              <span className="seperator-text">or</span>
              <div className="seperator-line"></div>
            </div>

            <button className="form--login--btn" onClick={useDemo}>
              <div className="push-left">
                <img
                  className="make-smaller"
                  src="data:image/png;base64,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"
                />
              </div>
              Continue with Demo
            </button>
            <button className="form--login--btn">
              <div className="push-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#1776f1">
                      <path d="M86,10.32c-41.796,0 -75.68,33.884 -75.68,75.68c0,37.9432 27.95,69.27128 64.36928,74.74432v-54.68568h-18.72392v-19.89352h18.72392v-13.23712c0,-21.91624 10.67776,-31.53792 28.89256,-31.53792c8.72384,0 13.33688,0.64672 15.52128,0.94256v17.36512h-12.42528c-7.73312,0 -10.43352,7.33064 -10.43352,15.59352v10.87384h22.66272l-3.07536,19.89352h-19.58736v54.84736c36.93872,-5.01208 65.43568,-36.59472 65.43568,-74.906c0,-41.796 -33.884,-75.68 -75.68,-75.68z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              Continue with Facebook
            </button>
            <button className="form--login--btn">
              <div className="push-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </div>
              Continue with Google
            </button>
            <button className="form--login--btn">
              <div className="push-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 172 172"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#474747">
                      <path d="M153.17406,119.54c-3.70875,8.23719 -5.49594,11.91906 -10.26625,19.18875c-6.67844,10.15875 -16.09813,22.84375 -27.735,22.92438c-10.36031,0.09406 -13.03438,-6.75906 -27.10344,-6.63813c-14.05563,0.06719 -16.985,6.7725 -27.35875,6.665c-11.65031,-0.1075 -20.55938,-11.52937 -27.23781,-21.67469c-18.67813,-28.44719 -20.65344,-61.79906 -9.11063,-79.53656c8.17,-12.5775 21.08344,-19.96812 33.2175,-19.96812c12.3625,0 20.12938,6.78594 30.34188,6.78594c9.91687,0 15.95031,-6.79938 30.24781,-6.79938c10.80375,0 22.22562,5.88563 30.39562,16.04438c-26.71375,14.64687 -22.37344,52.79594 4.60906,63.00844zM107.31188,29.1325c5.20031,-6.67844 9.15094,-16.09812 7.71312,-25.6925c-8.47906,0.57781 -18.39594,5.99313 -24.1875,13.0075c-5.25406,6.39625 -9.60781,15.88313 -7.91469,25.06094c9.25844,0.29563 18.83937,-5.22719 24.38906,-12.37594z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              Continue with Apple
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
