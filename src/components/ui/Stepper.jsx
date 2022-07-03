import "./stepper.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function Stepper({ title, date }) {
  return (
    <div className="stepper">
      <div className="step">
        <span className="stepTitle">
          <RadioButtonCheckedIcon className="icon" />
          <span className="title">{title}</span>
        </span>
        <span className="stepDate">{date}</span>
      </div>
    </div>
  );
}

export default Stepper;
