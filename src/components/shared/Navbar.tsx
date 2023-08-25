import { NavLink } from "react-router-dom";
import "../../css/styles.css";

export default function Navbar() {
  const Links = [
    { href: "/products", text: "Products" },
    { href: "/aboutus", text: "About Us" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="div">
      {Links?.map((link: any, index: number) => (
        <NavLink className="navbar" to={link?.href} key={index}>
          <span className="span">{link?.text}</span>
        </NavLink>
      ))}
    </div>
  );
}
