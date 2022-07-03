import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["pending", "review", "progress", "away", "deleiverd", "canceled"];
}

function getStepContent(step, date) {
  switch (step) {
    case "pending":
      return `${date}`;
    case "review":
      return `${date}`;
    
    default:
      return "Unknown step";
  }
}

function VerticalStepper({ history }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(3);
  const steps = getSteps();

  const   displayStepContent = (step, index) => {
    // if (history[step]) setActiveStep(index);
    console.log(step, history[step])

    return history[step] ? (
      <StepContent>
        <Typography>{getStepContent(step, history[step])}</Typography>
      </StepContent>
    ) : (
      ""
    );
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step}</StepLabel>
          {displayStepContent(step, index)}
        </Step>
      ))}
    </Stepper>
  );
}

export default VerticalStepper;
