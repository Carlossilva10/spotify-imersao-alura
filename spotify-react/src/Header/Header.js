import React from "react";
import "./Header.css";
import smallLeft from "C:/Users/Carlos/spotify-imersao-alura/spotify-react/src/assets copy/icons/small-left.png";
import smallRight from "C:/Users/Carlos/spotify-imersao-alura/spotify-react/src/assets copy/icons/small-right.png";
import search from "C:/Users/Carlos/spotify-imersao-alura/spotify-react/src/assets copy/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>

        <div className="header__search">
          <img src={search} alt="" />
          <input
            id="search-input"
            maxlength="800"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            placeholder="O que você quer ouvir?"
            value=""
          />
        </div>
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
