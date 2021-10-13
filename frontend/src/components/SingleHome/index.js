import React, { useRef, useEffect } from "react";
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

export default function SingleHome() {
  const { homeId } = useParams();
  const homes = useSelector((state) => state.homes);
  const reviews = useSelector((state) => state.ratings);
  const realReviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.session.user);
  let history = useHistory();
  const theReview = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTheHomes());
    dispatch(loadTheRatings());
    dispatch(loadTheReviews(homeId));
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
    const edited = await dispatch(editTheReviews(id, Number(1)));
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
              <Link to={`/homes/${homeId}/edit`}>Edit</Link>
            </div>
          ) : (
            "NO"
          )}
        </div>
      </div>
      <div className="single-home__gallery">
        <div className="firb">
          <img
            src={homes[homeId]?.picOne}
            alt="Home"
            className="single-home-img-1 single-home-img single-home-img1"
          />
        </div>
        <div className="secb">
          <img
            src={homes[homeId]?.picTwo}
            alt="Home"
            className="single-home-img-3 single-home-img single-home-img2"
          />
          <img
            src={homes[homeId]?.picThree}
            alt="Home"
            className="single-home-img-2 single-home-img single-home-img2"
          />
        </div>
      </div>
      <div className="single-home__content">
        <div className="single-home-content-leftside">
          <div className="home-top">
            <h2 className="single-home-content-title">
              {homes[homeId]?.type} hosted by {homes[homeId]?.type}
            </h2>
            <p>{homes[homeId]?.info}</p>
          </div>
          <div className="home-mid">Random Things</div>
          <div className="home-bot">{homes[homeId]?.description}</div>
        </div>
        <div className="single-home-content-rightside">CALENDAR</div>
      </div>
      <div className="single-home-reviews">
        <div className="review-title-box">Reviews</div>
        {realReviews &&
          Object.values(realReviews).map((review) => {
            if (review.placeId === +homeId) {
              return (
                <div key={review.id} className="home-review">
                  <div className="home-review-top">
                    <img src={review.User.profilePicture} alt="User" />
                  </div>
                  <div className="home-review-bottom">
                    <p>{review.review}</p>
                    <input ref={theReview} placeholder="Change edit..." />
                  </div>
                  {review.userId === user?.id && (
                    <div>
                      <button onClick={(e) => deleteReview(e, review.id)}>
                        Delete
                      </button>
                      <button onClick={(e) => editReview(e, review.id)}>
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              );
            }
          })}
      </div>
      <div className="single-home-map">ALL MAP here</div>
      <div className="single-home-hosted">Hosted by</div>
      <div className="single-home-rules">house rules</div>
    </div>
  );
}
