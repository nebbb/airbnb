import React from "react";
import "./HostHome.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HostHome() {
  const user = useSelector((state) => state.session.user);

  return (
    <div
      style={{
        backgroundImage: `url("https://via.placeholder.com/500")`,
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
        <p className="host-text">
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
        </p>
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
