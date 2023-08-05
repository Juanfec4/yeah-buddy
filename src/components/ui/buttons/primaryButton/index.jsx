import "./styles.scss";
const PrimaryButton = ({ handleClick, content }) => {
  return (
    <button onClick={handleClick} className="button--primary">
      <span className="button__text">{content}</span>
    </button>
  );
};
export default PrimaryButton;
