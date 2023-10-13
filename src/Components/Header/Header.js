import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput("");
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navbar_content}>
            <div>
              <Link to="/">
                <img
                  width={296}
                  className={styles.logo}
                  height={41}
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
            <div className={styles.navbar_favorites}>
              <ul className={styles.navbar_menu}>
                <Link to="/">
                  <li className={styles.home}>Home</li>
                </Link>

                <Link to="/favorites">
                  <li className={styles.favorites}>
                    Избранное <i className="fa-solid fa-bookmark"></i>{" "}
                  </li>
                </Link>
              </ul>
              <form onSubmit={handleSearch} className={styles.form_control}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  name=""
                  id=""
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
