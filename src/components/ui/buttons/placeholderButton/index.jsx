import "./styles.scss";
const PlaceholderButton = ({ content, handleClick }) => {
  return (
    <button onClick={handleClick} className="placeholder-button">
      <span className="placeholder-button__text">{content}</span>
    </button>
  );
};

export default PlaceholderButton;
