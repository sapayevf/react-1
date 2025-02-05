import "./header.scss";
import Buttons from "../Buttons/Buttons";

function Header() {
  return (
    <div className="container">
      <header>
        <img src="./assets/icons/logo.svg" />
        <nav>
          <a>Home</a>
          <a>Categories</a>
          <a>My Collections</a>
          <a>Blog</a>
        </nav>
        <div className="header-btns">
          <Buttons className="header-btn">Login</Buttons>
          <Buttons>Sign Up</Buttons>
        </div>
      </header>
    </div>
  );
}

export default Header;
