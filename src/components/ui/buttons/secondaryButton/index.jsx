import "./styles.scss";
const SecondaryButton = ({ handleClick, content }) => {
  return (
    <button onClick={handleClick} className="button--secondary">
      <span className="button__text">{content}</span>
    </button>
  );
};
export default SecondaryButton;
