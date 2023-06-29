//Styles
import "./button.css";

const Button = ({ title, width, height, fontSize, buttonType, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={buttonType}
      style={{ width, height, fontSize }}
    >
      {title}
    </button>
  );
};

export default Button;
