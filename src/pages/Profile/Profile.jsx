//Global;
import { useState } from "react";

//Components
import Modal from "../../components/Modal/Modal";
import Button from "../../elements/Buttons/Button";

//Icon
import icon from "../../assets/profile-icon.png";

//Styles
import "./profile.css";

const Profile = () => {
  const [blur, setBlur] = useState(true),
    [modal, setModal] = useState(false);

  const changeModalStatus = () => setModal(!modal);

  const changeDataBlur = () => {
    console.log("blurred");
  };

  return (
    <div className="profile">
      <div className="profile-content">
        <img className="profile-img" src={icon} alt="Иконка пользователя" />
        <div className="user-data">
          <div className="data">
            <span className="user-email">someemail</span>
            <span className="user-password">password</span>
          </div>
          <Button
            title={"Показать данные"}
            width={"170px"}
            height={"40px"}
            fontSize={"20px"}
            buttonType={"button"}
            onClick={changeModalStatus}
          />
        </div>
      </div>

      <Modal
        modal={modal}
        changeDataBlur={changeDataBlur}
        changeModalStatus={changeModalStatus}
      />
    </div>
  );
};

export default Profile;
