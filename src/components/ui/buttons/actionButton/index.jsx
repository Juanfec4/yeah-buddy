import "./styles.scss";
const ActionButton = ({ iconSrc, handleClick, action }) => {
  return (
    <button className={`action-button--${action}`} onClick={handleClick}>
      <img src={iconSrc} alt={action} className="action-button__icon" />
    </button>
  );
};
export default ActionButton;
