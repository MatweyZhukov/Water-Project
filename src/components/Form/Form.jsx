//Global
import { Link } from "react-router-dom";

//Styles
import "./form.css";

//Components
import Input from "../../elements/Inputs/Input";
import Button from "../../elements/Buttons/Button";

const Form = ({ title, userStatus = false }) => {
  return (
    <form>
      <div className="form-content">
        <h1>{title}</h1>
        <div className="form-content-items">
          <Input
            fontSize={"20px"}
            placeholder={"Придумайте логин..."}
            typeOfInput={"email"}
            width={"450px"}
            height={"50px"}
          />
          <Input
            fontSize={"20px"}
            placeholder={"Придумайте пароль..."}
            typeOfInput={"password"}
            width={"400px"}
            height={"50px"}
          />
        </div>
        <div className="buttons">
          <Button
            title={"Регистрация"}
            width={"180px"}
            height={"50px"}
            fontSize={"20px"}
            buttonType={"submit"}
          />

          <Button
            title={"Сбросить"}
            width={"180px"}
            height={"50px"}
            fontSize={"20px"}
            buttonType={"reset"}
          />

          {userStatus && (
            <Link to={"/signin"} style={{ fontSize: "15px", color: "black" }}>
              Есть учетная запись?
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
