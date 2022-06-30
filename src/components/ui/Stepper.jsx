import "./stepper.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function Stepper() {
  return (
    <div className="stepper">
      <div className="step">
        <span className="stepTitle">
          <RadioButtonCheckedIcon className="icon" />
          <span className="title">Pending</span>
        </span>
        <span className="stepDate">23 May 2021</span>
      </div>

      <div className="step">
        <span className="stepTitle">
          <RadioButtonCheckedIcon className="icon" />
          <span className="title">Pending</span>
        </span>
        <span className="stepDate">23 May 2021</span>
      </div>

      <div className="step">
        <span className="stepTitle">
          <RadioButtonCheckedIcon className="icon" />
          <span className="title">Pending</span>
        </span>
        <span className="stepDate">23 May 2021</span>
      </div>
    </div>
  );
}

export default Stepper;
