//Global
import { useState } from "react";

//Styles
import "./input.css";

//Icons
import eye from "../../assets/show-password.png";

const Input = ({ typeOfInput, placeholder, fontSize, width, height }) => {
  const [inputType, setInputType] = useState("password");

  const changeInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  if (typeOfInput === "password") {
    return (
      <div style={{ height }} className="block-input">
        <input
          style={{ fontSize, width }}
          required
          type={inputType}
          placeholder={placeholder}
        />
        <img onClick={changeInputType} src={eye} alt="show" />
      </div>
    );
  }

  return (
    <div style={{ height }} className="block-input">
      <input
        style={{ fontSize, width }}
        required
        type={typeOfInput}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
