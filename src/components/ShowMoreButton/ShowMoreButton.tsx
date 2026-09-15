import arrowDown from "../../assets/Frame 14.png";
import "./ShowMoreButton.css";

type ShowMoreButtonProps = {
  onClick: () => void;
};

export const ShowMoreButton = ({ onClick }: ShowMoreButtonProps) => {
  return (
    <button type="button" className="show-more-button" onClick={onClick}>
      Pokaż więcej
      <img src={arrowDown} alt="" className="show-more-button__icon" />
    </button>
  );
};
