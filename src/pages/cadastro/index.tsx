import type { NextPage } from "next";
import { InitialAuthBanner } from "../../components/auth/AuthBanner/Initial";
import { InitialSignupForm } from "../../components/auth/SigupForm/Initial";
import { StyledAuthPage } from "../../styles/auth";
import { NavBar } from "../../components/general/NavBar";
import { useEffect, useState } from "react";
import { ComplementaryAuthBanner } from "../../components/auth/AuthBanner/Complementary";
import { ComplementarySignupForm } from "../../components/auth/SigupForm/Complementary";
import { DocumentsAuthBanner } from "../../components/auth/AuthBanner/Documents";
import { DocumentsSignupForm } from "../../components/auth/SigupForm/Documents";
import { ConfirmationSignupBanner } from "../../components/auth/AuthBanner/Confirmation";
import { SignupConfirmation } from "../../components/auth/SigupForm/Confirmation";
import { Steps } from "../../components/auth/SigupForm/Steps";

const Cadastro: NextPage = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepp = Number(localStorage.getItem("@brix/step") || 0);
    setStep(stepp);
  }, []);

  const registrationStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <InitialAuthBanner />
            <InitialSignupForm setStep={setStep} />
          </>
        );
      case 1:
        return (
          <>
            <ComplementaryAuthBanner />
            <ComplementarySignupForm setStep={setStep}>
              <Steps step={step} setStep={setStep} />
            </ComplementarySignupForm>
          </>
        );
      case 2:
        return (
          <>
            <DocumentsAuthBanner />
            <DocumentsSignupForm setStep={setStep}>
              <Steps step={step} setStep={setStep} />
            </DocumentsSignupForm>
          </>
        );
      case 3:
        return (
          <>
            <ConfirmationSignupBanner />
            <SignupConfirmation setStep={setStep}>
              <Steps step={step} setStep={setStep} />
            </SignupConfirmation>
          </>
        );
    }
  };

  return (
    <>
      <StyledAuthPage withPadding={step > 1}>
        {step > 1 && <NavBar center />}
        {registrationStep(step)}
      </StyledAuthPage>
    </>
  );
};

export default Cadastro;
