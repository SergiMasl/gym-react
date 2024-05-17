import React from "react";
import { Link } from "react-router-dom";

export default function Header({ Logo, navList }) {
  return (
    <header className="header">
      <div className="header-logo-wrap">
        <Link to="gym-react/" className="header-logo">
          <img src={Logo} />
          <p>Logo</p>
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          {navList.map((i) => (
            <li key={i.id} className="nav-list-item">
              <Link to={i.route} className="nav-item">
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-book-wrap">
        <Link to="/" className="header-book-btm">
          Book Class
        </Link>
      </div>
    </header>
  );
}
