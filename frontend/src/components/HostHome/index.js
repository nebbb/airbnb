import React from "react";
import "./HostHome.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HostHome() {
  const user = useSelector((state) => state.session.user);

  return (
    <div
      style={{
        backgroundImage: `url(${
          user
            ? user.accountType > 1
              ? "https://a0.muscache.com/im/pictures/91780510-ca64-4fc4-a7e6-be7c8f7129d5.jpg?im_w=1440"
              : "https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
            : "https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
        })`,
      }}
      className="try-hosting__container mar-top-sm"
    >
      <div className="try-hosting__text-box">
        <h2 className="host-title">
          {user
            ? user.accountType > 1
              ? "Start selling!"
              : "Try hosting"
            : "Try hosting"}
        </h2>
        <div className="host-text">
          {user ? (
            user.accountType > 1 ? (
              "Start selling!"
            ) : (
              <p>
                Earn extra income and unlock new
                <br />
                opportunities by sharing your space.
              </p>
            )
          ) : (
            <p>
              Earn extra income and unlock new
              <br />
              opportunities by sharing your space.
            </p>
          )}
        </div>
        {user ? (
          user.accountType > 1 ? (
            <Link to="/create">
              <button className="host-btn mar-top-esm">Create listing</button>
            </Link>
          ) : (
            <Link to="/application">
              <button className="host-btn mar-top-esm">Learn more</button>
            </Link>
          )
        ) : (
          <Link to="/application">
            <button className="host-btn mar-top-esm">Learn more</button>
          </Link>
        )}
      </div>
    </div>
  );
}
