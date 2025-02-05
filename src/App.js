import "./App.scss";
import Buttons from "./components/Buttons/Buttons";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="container">
      <section className="section-1">
        <div>
          <h1>
            Awesome tools for <br /> Designer & Developer.
          </h1>
          <br />
          <p className="primary-text">
            Antool is a web collection of information on paid or <br /> free
            Design and Development tools
          </p>
          <br />
          <br />
          <form className="form-1">
            <img src="./assets/icons/search-icon.svg" />
            <input
              className="main-input"
              type="text"
              placeholder="find more than 430+ tools..."
            ></input>
            <Buttons className="main-btn">Search</Buttons>
            <br />
            <br />
            <br />
          </form>
          <img src="./assets/images/social-links.svg" />
        </div>
        <img className="s1-img" src="./assets/images/s1-img.svg" />
      </section>
      <section className="section-2">
        <div className="s2-title">
          <h2>Most Popular Tools</h2>
          <br />
          <p className="primary-text">
            Tools for the best Designers and Developers <br /> most popularly
            used in the world
          </p>
        </div>
        <div className="s2-cards">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
        <Buttons className={"s2-btn"}>Load More</Buttons>
      </section>
      <section className="section-3">
        <h3>Trusted more than 150+ brand</h3>
        <img src="./assets/images/s3-img.svg" />
      </section>
      <section className="section-4">
        
      </section>
    </div>
  );
}

export default App;
