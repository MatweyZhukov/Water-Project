//Global
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Styles
import "./App.css";

//Components
import Header from "../Header/Header";
import Statistic from "../../pages/Statistic/Statistic";
import LogIn from "../../pages/LogIn/LogIn";
import Profile from "../../pages/Profile/Profile";
import SignIn from "../../pages/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route element={<Statistic />} path="/" />
          <Route element={<LogIn />} path="/login" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<SignIn />} path="signin" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
