//Styles
import "./modal.css";

//Components
import Input from "../../elements/Inputs/Input";
import Button from "../../elements/Buttons/Button";

const Modal = ({ modal, changeDataBlur, changeModalStatus }) => {
  let modalClass = "modal",
    modalContentClass = "modal-content";

  if (modal) {
    modalClass += " show-modal";
    modalContentClass += " show-content";
  } else {
    modalClass += " hide-modal";
    modalContentClass += " hide-content";
  }

  return (
    <div className={modalClass}>
      <div className={modalContentClass}>
        <h1>Для вашей безопасности, чтобы увидеть данные, введите пароль.</h1>
        <Input
          width={"300px"}
          height={"50px"}
          fontSize={"25px"}
          placeholder={"Введите пароль..."}
          typeOfInput={"password"}
        />
        <div className="buttons">
          <Button
            title={"Подтвердить"}
            width={"150px"}
            height={"40px"}
            fontSize={"20px"}
            buttonType={"button"}
            onClick={changeDataBlur}
          />

          <Button
            title={"Отмена"}
            width={"150px"}
            height={"40px"}
            fontSize={"20px"}
            buttonType={"button"}
            onClick={changeModalStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
