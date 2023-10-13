import React from "react";
import styles from "./Footer.module.css";
import british from "../../Assets/british.png";
import facebook_icon from "../../Assets/facebook_icon.png";
import twitter_icon from "../../Assets/twitter_icon.png";
import discord_icon from "../../Assets/discord_icon.png";
import logo_tadb from "../../Assets/logo-tadb.png";
import logo_tsdb from "../../Assets/logo-tsdb.png";
import logo_tmdb from "../../Assets/logo-tmdb.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_content}>
          <div className={styles.text}>
            © 2023 TheCocktailDB. <br /> Proudly built in the UK
            <img src={british} alt="british_flag" />
          </div>
          <div className={styles.socialProject_links}>
            <div className={styles.socials}>
              <p>Socials:</p>{" "}
              <a target="blank" href="https://www.facebook.com/TheDataDB/">
                <img src={facebook_icon} alt="" />
              </a>
              <a target="blank" href="https://twitter.com/TheAudioDB">
                <img src={twitter_icon} alt="" />
              </a>
              <a target="blank" href="https://discord.com/invite/pFvgaXV">
                <img src={discord_icon} alt="" />
              </a>
            </div>
            <div className={styles.projects}>
              <a target="blank" href="https://www.thesportsdb.com/">
                <img src={logo_tsdb} alt="" />
              </a>
              <a target="blank" href="https://www.theaudiodb.com/">
                <img src={logo_tadb} alt="" />
              </a>
              <a target="blank" href="https://www.themealdb.com/">
                <img src={logo_tmdb} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.footer_menu}>
            <ul>
              <a
                target="blank"
                href="https://www.thecocktaildb.com/missing.php"
              >
                <li>Missing</li>
              </a>
              <a target="blank" href="https://www.thecocktaildb.com/about.php">
                <li>About</li>
              </a>
              <a target="blank" href="https://www.thecocktaildb.com/faq.php">
                <li>Faq</li>
              </a>
              <a
                target="blank"
                href="https://www.thecocktaildb.com/contact.php"
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
