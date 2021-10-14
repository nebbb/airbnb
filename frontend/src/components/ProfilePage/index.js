import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { loadTheUsers } from "../../store/users";
import "./ProfilePage.css";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { profileId } = useParams();

  useEffect(() => {
    dispatch(loadTheUsers());
  }, []);

  return (
    <div className="profie-page__container">
      <div className="profile-page-leftside">
        <div className="profile-user__modal">
          <div className="profile-user-icon">
            <div
              style={{
                backgroundImage: `url(${users[profileId]?.profilePicture})`,
              }}
              className="profile-user-i"
            ></div>
            <p>Update photo</p>
          </div>
          <div className="profile-user-info"></div>
        </div>
      </div>
      <div className="profile-page-rightside">
        <div className="profile-user__info">
          <h2 className="profile-user-welcome">
            Hi, i'm {users[profileId]?.username}
          </h2>
          <p>Joined in {users[profileId]?.createdAt}</p>
          <span>0 reviews</span>
          <div>Reviews by you</div>
        </div>
      </div>
    </div>
  );
}
