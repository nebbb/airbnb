import React from "react";
import "./AdminPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTheApplications } from "../../store/applications";
import { updateAUser } from "../../store/applications";
import { useHistory } from "react-router";
import { Redirect } from "react-router";

export default function AdminPage() {
  const applicants = useSelector((state) => state.applications);
  const currUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTheApplications());
  }, []);

  const onAccept = async (e, id, userId) => {
    e.preventDefault();
    const payload = { id, userId };
    const updated = await dispatch(updateAUser(payload));
  };

  if (currUser?.accountType < 3) {
    return <Redirect to="/" />;
  }

  return (
    <div className="admin-page__container">
      <div className="admin-page__leftside">
        <div className="active-item admin-list-item">
          <i className="fab fa-wpforms"></i>
        </div>
      </div>
      <div className="admin-page__rightside">
        <div className="mid-p">
          <h2 className="seller__title">Seller account applicants</h2>
          <div className="seller__container">
            {applicants &&
              Object.values(applicants).map((applicant) => {
                return (
                  <div className="applicant-list-item" key={applicant.id}>
                    <div>
                      <span>{applicant.userId}</span>
                      <span>{applicant.reason}</span>
                    </div>
                    <button
                      onClick={(e) =>
                        onAccept(e, applicant.id, applicant.userId)
                      }
                    >
                      Accept
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
