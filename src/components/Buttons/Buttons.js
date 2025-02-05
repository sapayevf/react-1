import "./buttons.scss";

function Buttons({ children, className }) {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
}

export default Buttons;
