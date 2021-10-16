import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheBookings } from "../../store/bookings";

export default function BookingsPage() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.bookings);

  useEffect(() => {
    if (currUser) dispatch(loadTheBookings(currUser.id));
  }, [currUser]);
  return (
    <div className="bookings-page__container">
      <h1>My Bookings</h1>
      <div className="bookings-list-container">
        {bookings &&
          Object.values(bookings).map((book) => {
            return (
              <div key={book.id} className="booking-row">
                {book.id}
              </div>
            );
          })}
      </div>
    </div>
  );
}
