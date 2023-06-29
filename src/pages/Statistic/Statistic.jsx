//Global
import { Link } from "react-router-dom";

//Styles
import "./statistic.css";

const Statistic = () => {
  return (
    <main>
      <h1>Вот ваша статистика:</h1>
      <div className="statistic">
        <p>Количество пользователей сайта: 0</p>
        <p>Количество местоположений: 0</p>
      </div>
      <p>
        Для больших подробностей переходите во{" "}
        <Link to={"/users"}>вкладки</Link>
      </p>
    </main>
  );
};

export default Statistic;
