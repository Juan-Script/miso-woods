import Navbar from "../shared/Navbar";
import logo from "../../assets/Logos_MisoWoods/logo-blanco.svg";
import { BiCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="img/logo" />
      </div>

      <div className="navbar">
        <Navbar />
      </div>

      <div className="icons">
        <BiCart />
        <BsFillPersonFill />
      </div>
    </div>
  );
};
