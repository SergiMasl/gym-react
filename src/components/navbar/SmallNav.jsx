import React from "react";
import "./_smal-header.sass";
import navList from "../../asses/navList.json";
import { Link } from "react-router-dom";

export default function SmallNav({ isBurgerOn, setIsBurgerOn, setIsOpen }) {
  const click = () => {
    setIsOpen(false);
    setIsBurgerOn(!isBurgerOn);
  };
  return (
    <div className={`sm-header ${isBurgerOn ? "visble" : ""}`}>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link
              to={"/gym-react/"}
              className="nav-item"
              onClick={() => click()}
            >
              Home
            </Link>
          </li>

          {navList.map((i) => (
            <li key={i.id} className="nav-list-item">
              <Link to={i.route} className="nav-item" onClick={() => click()}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
