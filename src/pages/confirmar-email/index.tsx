import type { NextPage } from "next";
import { InitialAuthBanner } from "../../components/auth/AuthBanner/Initial";
import { EmailConfirm } from "../../components/auth/SigupForm/Register/EmailConfirm";
import { StyledAuthPage } from "../../styles/auth";

const ConfirmEmail: NextPage = () => {

  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <EmailConfirm />
      </StyledAuthPage>
    </>
  );
};

export default ConfirmEmail;
