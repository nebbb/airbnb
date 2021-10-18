import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTheUsers } from "../../store/users";

export default function ProfilePageSingle() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadTheUsers());
  }, []);

  return (
    <div className="profie-page__container">
      <div className="profile-page-leftside">
        <div className="profile-user__modal">
          <div className="profile-user-icon">
            <div
              style={
                user?.profilePicture
                  ? {
                      backgroundImage: `url(${user?.profilePicture})`,
                    }
                  : null
              }
              className="profile-user-i"
            ></div>
            <p>Update photo</p>
          </div>
          <div className="profile-user-info"></div>
        </div>
      </div>
      <div className="profile-page-rightside">
        <div className="profile-user__info">
          <h2 className="profile-user-welcome">Hi, i'm {user?.username}</h2>
          <p>Joined in {user?.createdAt.split("T")[0]}</p>
          <span>0 reviews</span>
          <div>Reviews by you</div>
        </div>
      </div>
    </div>
  );
}
