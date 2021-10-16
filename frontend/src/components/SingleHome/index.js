import React, { useEffect, useState, Component } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loadTheHomes } from "../../store/homes";
import { loadTheRatings } from "../../store/ratings";
import { useHistory } from "react-router";
import { removeAHome } from "../../store/homes";
import { loadTheReviews } from "../../store/reviews";
import "./SingleHome.css";
import { Link } from "react-router-dom";
import { deleteTheReviews } from "../../store/reviews";
import { editTheReviews } from "../../store/reviews";
import DatePicker from "../DatePicker";
import DateCalendar from "../DateCalendar";
import { loadTheUsers } from "../../store/users";
import { addTheBookings } from "../../store/bookings";

export default function SingleHome() {
  const { homeId } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const homes = useSelector((state) => state.homes);
  const reviews = useSelector((state) => state.ratings);
  const realReviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users);
  let inputs = document.querySelectorAll(".DateInput_input_1");

  const [newReviewInput, setNewReviewInput] = useState("");

  useEffect(() => {
    dispatch(loadTheHomes());
    dispatch(loadTheRatings());
    dispatch(loadTheReviews(homeId));
    dispatch(loadTheUsers());
  }, [dispatch]);

  const deleteHome = async (e) => {
    e.preventDefault();
    const deleted = await dispatch(removeAHome(homeId));
    if (deleted) {
      history.push("/homes");
    }
  };

  const deleteReview = async (e, id) => {
    e.preventDefault();
    const deleted = await dispatch(deleteTheReviews(id));
  };

  const editReview = async (e, id) => {
    e.preventDefault();
    if (newReviewInput.length < 1) return;
    const edited = await dispatch(editTheReviews(id, newReviewInput));
    if (edited) setNewReviewInput("");
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const str = Array.from(inputs).map((input) => input.value);
    const fstr = `You've booked a stay at ${
      homes[homeId]?.name
    } from ${str.join(" to ")}`;
    const payload = {
      userId: user.id,
      placeId: homeId,
      description: fstr,
    };
    const booked = dispatch(addTheBookings(payload));
    if (booked) history.push("/bookings");
  };

  return (
    <div className="single-home__container">
      <div className="single-home-info">
        <div className="single-leftside">
          <h2 className="single-home-title">{homes[homeId]?.name}</h2>
          <div className="home__card--bottomleft">
            {reviews &&
              (reviews[homeId]?.avgRating === "NaN" ? (
                <div className="rating__container">No ratings.</div>
              ) : (
                <div className="rating__container">
                  <i className="fas fa-star"></i>
                  <p className="rating-tex">{reviews[homeId]?.avgRating}</p>
                  <p className="rating-par">{`(${reviews[homeId]?.length} ${
                    Number(reviews[homeId]?.length) > 1 ? "Reviews" : "Review"
                  }) `}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="single-rightside">
          TEST
          {user?.id === homes[homeId]?.userId ? (
            <div>
              <button onClick={deleteHome}>Delete</button>
              <Link className="edit-home" to={`/homes/${homeId}/edit`}>
                Edit
              </Link>
            </div>
          ) : (
            "NO"
          )}
        </div>
      </div>
      <div className="single-home__gallery">
        <div className="firb">
          <div
            className="single-home single-home-1"
            style={
              homes[homeId]?.picOne
                ? {
                    backgroundImage: `url(${homes[homeId]?.picOne})`,
                  }
                : null
            }
          ></div>
        </div>
        <div className="secb">
          <div
            className="single-home single-home-2"
            style={
              homes[homeId]?.picOne
                ? {
                    backgroundImage: `url(${homes[homeId]?.picTwo})`,
                  }
                : null
            }
          ></div>
          <div
            className="single-home single-home-3"
            style={
              homes[homeId]?.picOne
                ? {
                    backgroundImage: `url(${homes[homeId]?.picThree})`,
                  }
                : null
            }
          ></div>
        </div>
      </div>
      <div className="single-home__content">
        <div className="single-home-content-leftside">
          <div className="home-top">
            <h2 className="single-home-content-title">
              {homes[homeId]?.type} hosted by {homes[homeId]?.User.username}
            </h2>
            <p className="single-home-content-info-t">{homes[homeId]?.info}</p>
          </div>
          <div className="home-mid">
            <div className="home-mid-text">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                height="24px"
                width="24px"
              >
                <path d="m17.9772237 1.90551573.1439807.13496509 13.2525 13.25240998-1.4142088 1.4142184-.9603513-.9603098.0008557 12.5832006c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-22c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623-.00085571-12.5822006-.95878858.9593098-1.41421142-1.414217 13.25247161-13.25243161c1.1247615-1.1246896 2.9202989-1.16967718 4.0986078-.13494486zm-2.5902053 1.46599297-.0942127.08318915-10.29366141 10.29310155.00085571 14.5822006h5.9991443l.0008557-9.9966c0-1.0543764.8158639-1.9181664 1.8507358-1.9945144l.1492642-.0054856h6c1.0543764 0 1.9181664.8158639 1.9945144 1.8507358l.0054856.1492642-.0008557 9.9966h6.0008557l-.0008557-14.5832006-10.2921737-10.29212525c-.3604413-.36046438-.9276436-.38819241-1.3199522-.08316545zm3.6129816 14.9618913h-6l-.0008557 9.9963994h6z"></path>
              </svg>
              <div className="mid-flex">
                <span className="mid-flex-1">Entire home</span>
                <span className="mid-flex-2">
                  You’ll have the home to yourself.
                </span>
              </div>
            </div>
            <div className="home-mid-text">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                height="24px"
                width="24px"
              >
                <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path>
              </svg>
              <div className="mid-flex">
                <span className="mid-flex-1">Enhanced Clean</span>
                <span className="mid-flex-2">
                  This Host committed to Airbnb's 5-step enhanced cleaning
                  process.
                </span>
              </div>
            </div>
            <div className="home-mid-text">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                height="24px"
                width="24px"
              >
                <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
              </svg>
              <div className="mid-flex">
                <span className="mid-flex-1">Self check-in</span>
                <span className="mid-flex-2">
                  Check yourself in with the keypad.
                </span>
              </div>
            </div>
            <div className="home-mid-text">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                width="24px"
                height="24px"
              >
                <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              </svg>
              <div className="mid-flex">
                <span className="mid-flex-1">Great location</span>
                <span className="mid-flex-2">
                  Locations are always kept discrete for all homes.
                </span>
              </div>
            </div>
          </div>
          <div className="home-bot">
            <p className="home-bot-desc">{homes[homeId]?.description}</p>
          </div>
          <div className="home-bot-real">
            <p className="home-bot-real-desc">Check-in date</p>
            <DateCalendar />
          </div>
        </div>
        <div className="single-home-content-rightside">
          <div className="booking__container">
            <div className="booking-top">
              <div className="booking-flex">
                <div className="d-flex">
                  <span className="f-price">{homes[homeId]?.price}</span>
                  <span className="s-price">/ night</span>
                </div>
                <div>
                  {reviews &&
                    (reviews[homeId]?.avgRating === "NaN" ? (
                      <div className="rating__container">No ratings.</div>
                    ) : (
                      <div className="rating__container">
                        <i className="fas fa-star"></i>
                        <p className="rating-tex">
                          {reviews[homeId]?.avgRating}
                        </p>
                        <p className="rating-par">{`(${
                          reviews[homeId]?.length
                        } ${
                          Number(reviews[homeId]?.length) > 1
                            ? "Reviews"
                            : "Review"
                        }) `}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="booking-mid">
              <DatePicker />
            </div>
            <div className="booking-bottom">
              <button onClick={(e) => submitBooking(e)}>Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single-home-reviews">
        <div className="review-title-box">
          <div className="reviews-title">
            {reviews &&
              (reviews[homeId]?.avgRating === "NaN" ? (
                <div className="rating__container">No ratings.</div>
              ) : (
                <div className="rating__container">
                  <i className="fas fa-star"></i>
                  <p className="rating-tex">{reviews[homeId]?.avgRating}</p>
                  <p className="rating-par">{`• ${reviews[homeId]?.length} ${
                    Number(reviews[homeId]?.length) > 1 ? "Reviews" : "Review"
                  }`}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="reviews__overall__container">
          {realReviews &&
            Object.values(realReviews).map((review) => {
              if (review.placeId === +homeId) {
                return (
                  <div key={review.id} className="home-review">
                    <div className="home-review-top">
                      <img
                        className="review-p-img"
                        src={review.User?.profilePicture}
                        alt="User"
                      />
                      <div className="col-flex">
                        <p className="fir-text">
                          {users[review.userId]?.username}
                        </p>
                        <p className="sec-text">{review.createdAt}</p>
                      </div>
                    </div>
                    <div className="home-review-bottom">
                      <p className="review-text__main">{review.review}</p>
                      <input
                        value={newReviewInput}
                        onChange={(e) => setNewReviewInput(e.target.value)}
                        placeholder="Change edit..."
                      />
                    </div>
                    {review.userId === user?.id && (
                      <div>
                        <button onClick={(e) => deleteReview(e, review.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25px"
                            height="25px"
                            viewBox="0 0 172 172"
                          >
                            <defs>
                              <linearGradient
                                x1="26.99683"
                                y1="26.99683"
                                x2="98.74592"
                                y2="98.74592"
                                gradientUnits="userSpaceOnUse"
                                id="color-1_OZuepOQd0omj_gr1"
                              >
                                <stop offset="0" stopColor="#ff5a5f"></stop>
                                <stop offset="0.443" stopColor="#ee3d4a"></stop>
                                <stop offset="1" stopColor="#e52030"></stop>
                              </linearGradient>
                              <linearGradient
                                x1="98.08658"
                                y1="98.08658"
                                x2="145.15008"
                                y2="145.15008"
                                gradientUnits="userSpaceOnUse"
                                id="color-2_OZuepOQd0omj_gr2"
                              >
                                <stop offset="0" stopColor="#a8142e"></stop>
                                <stop offset="0.179" stopColor="#ba1632"></stop>
                                <stop offset="0.243" stopColor="#c21734"></stop>
                              </linearGradient>
                            </defs>
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
                              <g>
                                <path
                                  d="M152.005,44.43692c2.7735,-2.7735 2.7735,-7.267 0,-10.0405l-14.40142,-14.40142c-2.7735,-2.7735 -7.267,-2.7735 -10.0405,0l-41.56308,41.56308l-41.56308,-41.56308c-2.7735,-2.7735 -7.267,-2.7735 -10.0405,0l-14.40142,14.40142c-2.7735,2.7735 -2.7735,7.267 0,10.0405l41.56308,41.56308l-41.56308,41.56308c-2.7735,2.7735 -2.7735,7.267 0,10.0405l14.40142,14.40142c2.7735,2.7735 7.267,2.7735 10.0405,0z"
                                  fill="url(#color-1_OZuepOQd0omj_gr1)"
                                ></path>
                                <path
                                  d="M86,110.44192l41.56308,41.56308c2.7735,2.7735 7.267,2.7735 10.0405,0l14.40142,-14.40142c2.7735,-2.7735 2.7735,-7.267 0,-10.0405l-41.56308,-41.56308z"
                                  fill="url(#color-2_OZuepOQd0omj_gr2)"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <button onClick={(e) => editReview(e, review.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25px"
                            height="25px"
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
                              <g>
                                <path
                                  d="M111.39688,20.02188c-1.6125,0.26875 -3.09063,0.94062 -4.43438,1.74687c1.34375,-0.80625 2.95625,-1.47813 4.43438,-1.74687z"
                                  fill="#ff5a5f"
                                ></path>
                                <path
                                  d="M22.97813,151.97813l48.375,-10.75c2.28437,-0.5375 4.43437,-1.74688 6.04688,-3.35937l71.08437,-71.08438c4.8375,-4.8375 4.8375,-12.63125 0,-17.46875l-26.06875,-25.93437c-4.8375,-4.8375 -12.63125,-4.8375 -17.46875,0l-71.08437,71.08438c-1.6125,1.6125 -2.82187,3.7625 -3.35937,6.04688l-10.48125,48.50937c-0.67187,1.74688 1.20938,3.62813 2.95625,2.95625"
                                  fill="#ffffff"
                                ></path>
                                <path
                                  d="M139.88438,75.65313l8.73438,-8.73437c4.8375,-4.8375 4.8375,-12.63125 0,-17.46875l-26.06875,-26.20312c-4.8375,-4.8375 -12.63125,-4.8375 -17.46875,0l-8.73437,8.73438l43.5375,43.67188"
                                  fill="#ffffff"
                                ></path>
                                <path
                                  d="M55.9,116.1l-21.76875,-21.76875l62.21563,-62.21562l43.5375,43.5375l-62.21562,62.21563l-21.76875,-21.76875"
                                  fill="#f8b0b4"
                                ></path>
                                <path
                                  d="M55.9,116.1l62.21563,-62.21563l21.76875,21.76875l-62.21562,62.21563l-21.76875,-21.76875"
                                  fill="#f37c7e"
                                ></path>
                                <path
                                  d="M68.93438,129.26875v0c-1.74688,1.74687 -3.7625,3.09062 -6.31563,3.49375l-35.20625,11.825l-7.39062,4.3v0.26875c-0.5375,1.47813 0.67188,3.09062 2.15,3.09062c0,0 0,0 0.13438,0c0.26875,0 0.40312,0 0.67188,-0.13437v0l48.375,-10.75c2.28438,-0.5375 4.43438,-1.74688 6.04688,-3.35937l0.13438,-0.13438l-8.6,-8.6M131.28438,66.91875v0l8.46562,8.6v0l-8.46562,-8.6M139.88438,40.85c4.8375,4.8375 4.8375,12.63125 0,17.46875l-8.6,8.6l8.46562,8.6l0.13438,0.13438l8.73438,-8.73437c2.41875,-2.41875 3.62813,-5.50938 3.62813,-8.6c0,-3.09063 -1.20938,-6.31563 -3.62813,-8.73437l-8.73437,-8.73437"
                                  fill="#e7e7e7"
                                ></path>
                                <path
                                  d="M131.15,66.91875l-62.21562,62.35l8.73438,8.6l62.21563,-62.21562l-0.13438,-0.13438l-8.6,-8.6"
                                  fill="#dc7173"
                                ></path>
                                <path
                                  d="M20.02188,149.02188l3.7625,-20.69375l20.15625,20.15625l-20.9625,3.62813c-1.74688,0.5375 -3.62813,-1.34375 -2.95625,-3.09063z"
                                  fill="#a8b2c6"
                                ></path>
                                <path
                                  d="M150.23125,65.0375c0.94063,-1.34375 1.47813,-2.82187 1.88125,-4.43437c-0.40313,1.47813 -0.94063,3.09063 -1.88125,4.43437z"
                                  fill="#ff5a5f"
                                ></path>
                                <path
                                  d="M96.34688,32.11563l43.5375,43.5375"
                                  fill="none"
                                ></path>
                                <path
                                  d="M17.7375,154.2625c-1.74688,-1.74687 -2.28438,-4.16562 -1.6125,-6.31562l10.61562,-48.24063c0.80625,-3.09062 2.15,-5.77812 4.43438,-7.92813l70.95,-71.21875c6.31562,-6.31563 16.6625,-6.45 23.1125,-0.13438l26.06875,26.06875c6.31562,6.31563 6.31562,16.79688 0,23.24687l-71.08438,71.08438c-2.15,2.15 -4.97188,3.7625 -7.92812,4.43437l-48.24063,10.61563c-2.15,0.67188 -4.56875,0.13438 -6.31562,-1.6125zM119.59375,26.20313c-3.225,-3.225 -8.6,-3.225 -11.825,0l-71.08437,71.08438c-1.075,1.075 -1.88125,2.41875 -2.15,4.03125l-10.2125,46.225l46.225,-10.2125c1.47813,-0.40312 2.95625,-1.075 4.03125,-2.15l71.08437,-71.08438c3.225,-3.225 3.225,-8.6 0,-11.825z"
                                  fill="#464c55"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="single-home-hosted">Hosted by</div>
      <div className="single-home-rules">
        <h2 className="house-rules-title">Things to know</h2>
        <div className="house-rules-container">
          <div className="house-rule">
            <h3>House rules</h3>
          </div>
          <div className="house-rule">
            <h3>Health & safety</h3>
          </div>
          <div className="house-rule">
            <h3>Cancellation policy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
