import closeIcon from "../../../../assets/icons/x.svg";
import "./styles.scss";
const ExitButton = ({ handleClick, innerClass }) => {
  return <img src={closeIcon} alt="Close" className={innerClass} onClick={handleClick} />;
};
export default ExitButton;
