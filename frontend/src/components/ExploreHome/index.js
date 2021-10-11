import React from "react";
import "./ExploreHome.css";

function ExploreHome() {
  return (
    <div className="explore__container">
      <h2 className="explore-title">Featured locations</h2>
      <div className="explore-cities-container">
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>New York</h4>
            <p>5 hour drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Washington</h4>
            <p>45 minute drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Philadelphia</h4>
            <p>3.5 hour drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/c9e34a08-01ca-49b0-a589-457a4f990e57.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Pittsburgh</h4>
            <p>5 hour drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Arlington</h4>
            <p>45 minute drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Cleveland</h4>
            <p>7 hour drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/f3ebcc73-30b2-469f-b6ba-0578fdaaa649.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>North Bergen</h4>
            <p>5 hour drive</p>
          </div>
        </div>
        <div className="city-container">
          <div className="city-img-box">
            <img
              src="https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=240"
              className="city-img"
              alt="City"
            />
          </div>
          <div className="city-text-box">
            <h4>Virginia Beach</h4>
            <p>5 hour drive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHome;
