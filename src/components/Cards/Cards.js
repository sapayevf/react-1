import "./Cards.scss";
import Buttons from "../Buttons/Buttons";

function Cards() {
  return (
    <div className="s2-card">
      <div className="s2-card-title">
        <img src="./assets/icons/figma-icon.svg" />
        <div>
          <h3>FIGMA</h3>
          <p className="free">Free</p>
        </div>
      </div>
      <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="s2-visit">
        <img src="./assets/icons/like-icons.svg" />
        <Buttons>Visit</Buttons>
      </div>
    </div>
  );
}

export default Cards;
