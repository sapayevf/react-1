import "./Cards.scss";
import Buttons from "../Buttons/Buttons";

function Cards({ img, name, free, text }) {
  return (
    <div className="s2-card">
      <div className="s2-card-title">
        <img src={img} />
        <div>
          <h3>{name}</h3>
          <p className="free">{free}</p>
        </div>
      </div>
      <p className="primary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="s2-visit">
        <img src="./assets/icons/like-icons.svg" />
        <Buttons>Visit</Buttons>
      </div>
    </div>
  );
}

export default Cards;
