import { StyledSteps } from "./styles";
import { StepProps } from "./types";

const Steps = (props: StepProps) => {
  const { step, setStep } = props;

  return (
    <StyledSteps>
      <div onClick={() => setStep(1)} className={step === 1 ? "current" : "done"}>1</div>
      <div onClick={() => setStep(2)} className={step === 2 ? "current" : (step > 2 ? "done" : "todo")}>2</div>
      <div onClick={() => setStep(3)} className={step === 3 ? "current" : "todo"}>3</div>
      <div className="separator"></div>
    </StyledSteps>
  );
};

export { Steps };
