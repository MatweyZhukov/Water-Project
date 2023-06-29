//Global
import { Link } from "react-router-dom";

//Styles
import "./header.css";

//Icon
import profile from "../../assets/profile-icon.png";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <p className="text">Статистика по учету воды</p>
        <div className="user-profile">
          <Link className="user-profile-text" to={"/"}>
            Главная
          </Link>

          <Link to={"/profile"}>
            <img src={profile} alt="profile" />
          </Link>

          <Link className="user-profile-text" to={"/login"}>
            Регистрация
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
