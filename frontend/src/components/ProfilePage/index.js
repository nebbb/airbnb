import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { loadTheHomes } from "../../store/homes";
import { loadTheUsers } from "../../store/users";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const homes = useSelector((state) => state.homes);

  const { profileId } = useParams();

  useEffect(() => {
    dispatch(loadTheUsers());
    dispatch(loadTheHomes());
  }, []);

  return (
    <div className="profie-page__container">
      <div className="profile-page-leftside">
        <div className="profile-user__modal">
          <div className="profile-user-icon">
            <div
              style={
                users[profileId]?.profilePicture
                  ? {
                      backgroundImage: `url(${users[profileId]?.profilePicture})`,
                    }
                  : null
              }
              className="profile-user-i"
            ></div>
            <p>Update photo</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEg0lEQVR4nO3bW6hUVRzH8Y/3e1pgJklgWRQ+ZKiVSUoUYZEQUYQUYj2IURH2kOBDGREZSBA+WRFkUiBFdI8uZGYFCRKpdMVKRaOysouWVqeHNbu195xz5syemb1ntPnCZs5lr//vv/ba67/W+q81dOnS5f/MkDZqn4hVuBTb8EcbfSmdhdiLnsr1LRa31aOSmIxnxIpXXy/htLZ5VyCDcRt+ESv7g9Dqiys/J38/iFsrZY4LzsTbsi29ESen7jkJ66rueR/TS/W0xQzDCiG4JZXai6trlFmAr1L3H8FqjCjU0wKYi51iRf4WWnhcHWVHC5X+K1X+C1xSiKctZjweFiqcOP8xLmjA1gxsTdn5B+uF7tKRLMRu0eHDwjg/vAmbQ3EHfkvZ3Ydrm/K0xZwitEw6gG3G2S3UOB1vVGm8iCkt1MjNIGEIO5By6iehxYoYwhK971N6PxeoV5NpeEvvFjm1BO1Jer9x7+KcErT/G9oOy/bJa8oQr+JKfKP3kNlMzKnJWdguO7StVd/QVhTjKj5UjzpnFCGWnqltx5wiRBpkjmzjrC1CJOl3+xT4mjXBcMG3HjxWb6FGouefQn/rNI4IvuXiuFlxNUr3AbTbgXbTfQDtdqDddPIDWIJdWFqkSKc+gOV4HFMVPM3uxAdwDx4SVn8HsLJIsaFFGs/JIKzBnZXf9+Ny7ChSNM8bcKjyOTpHmSX4FDcMcN8QYa2RVP5rzJO/8mMqn7/nLFcXq4V5dp4trNfEleON/dwzDE+LC5lPNJ7pOVKxcW+D5WuyUnRyVJ1lZgkbHT1Clvf6qv+PFBIpid1tsvsFeRiTsrO8QRs1uTklkCffNxe/VsodFaP6WNms0hZMaMK/6Slbi5qw0y+zUgLVLTkQ84V+2SOs2Bbjg5S918X+2yiLUvYK2VEaJW5W3N9A+ctkU2nJ9YLQFZolHaMKG912iEnIRrhCdqtsvdY5+17F5tYW2euTNWJAm9igjavwGR7UuonYJDEveF+LbPbJxWLr3VSkUE6Win7NLFJoCL6rCL1TpFBOtgg+7RZmlIWSBJsenF+0WB2kR6e7yxCcIs64nipDcACSWeRhjU+icrNBnOK28y2YKQ7Nj5YpPE0czj7UnmX1YHEydUjIHZTKA2LfKzRr0w+3KLnvVzMGe8QWOLdE7fPEWeWXWjOTbIj5wgInOcczvgTNCUKlk3XFhSVo1mSF7IpubIFao2WP3N1eoFbdDMKzolNvqj9fkIdRssvnDQVoNMwIvCI6t0nja4W+mCjMPBP7zwmZpI5iOF4WndyD2S2wO0P28OSrOvjg5Eg8ITp7CMuasLesYiOx94jOPJvQi6XidLlHSI5OzlF+Ip5PlT8qBNtjinmyh5j2C2eBB2JB5d6k3C6ddRwnFyfgSdnjruv0vbcwUlhppg88bRS+WXLMcx1+FCu2UwhuCdPxUer/B/W/j3DMMlVMXCTL1+WVK50s3eQ4/dYIIaO0QjZApgPdKu39IldpzMbnsoHuonY4Unj+rAZjcZcQ9NYoaEOzS5cuXWrxLzLYbveFH4+5AAAAAElFTkSuQmCC" />
          </div>
          <div className="profile-user-info"></div>
        </div>
      </div>
      <div className="profile-page-rightside">
        <div className="profile-user__info">
          <h2 className="profile-user-welcome">
            Hi, i'm {users[profileId]?.username}
          </h2>
          <p className="profile-when">
            Joined in {users[profileId]?.createdAt.split("T")[0]}
          </p>
          <div>Homes hosted by you</div>
          {homes &&
            Object.values(homes).map((home) => {
              if (home.userId === users[profileId]?.id) {
                return (
                  <div className="plzjustflex">
                    <div>
                      <Link to={`/homes/${home.id}`}>
                        <img className="home-profile-pic" src={home.picOne} />
                      </Link>
                    </div>
                    <div className="profile-h-name">{home.name}</div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
