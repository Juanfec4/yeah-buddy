import "./styles.scss";
const Placeholder = ({ handleClick, content }) => {
  return (
    <div onClick={handleClick} className="placeholder-container">
      <p className="placeholder-container__text">Tap to</p>
      <h2 className="placeholder-container__text">{content}</h2>
    </div>
  );
};

export default Placeholder;
