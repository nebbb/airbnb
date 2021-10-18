import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadTheBookings } from "../../store/bookings";
import { loadTheHomes } from "../../store/homes";
import { removeTheBookings } from "../../store/bookings";
import "./BookingsPage.css";

export default function BookingsPage() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings);
  const homes = useSelector((state) => state.homes);

  useEffect(() => {
    if (currUser) {
      dispatch(loadTheBookings(currUser.id));
      dispatch(loadTheHomes());
    }
  }, [currUser]);

  const removeBooking = (e, id) => {
    e.preventDefault();
    dispatch(removeTheBookings(id));
  };

  return (
    <div className="bookings-page__container">
      <h1>My Bookings</h1>
      <div className="bookings-list-container">
        {bookings &&
          Object.values(bookings).map((book) => {
            return (
              <div key={book.id} className="booking-row">
                <Link to={`/homes/${book.placeId}`}>
                  <div
                    className="booking-img"
                    style={{
                      backgroundImage: `url(${homes[book.placeId]?.picOne})`,
                    }}
                  ></div>
                </Link>
                <div className="booking-txt">
                  <p className="book-desc">{book.description}</p>
                  <p className="mar-both">Num of guests: 1</p>
                  <button
                    className="remove-book"
                    onClick={(e) => removeBooking(e, book.id)}
                  >
                    Remove booking
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
