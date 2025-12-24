import type { NextPage } from "next";
import { InitialAuthBanner } from "../../components/auth/AuthBanner/Initial";
import { Register } from "../../components/auth/SigupForm/Register";
import { NavBar } from "../../components/general/NavBar";
import { StyledAuthPage } from "../../styles/auth";

const Registro: NextPage = () => {
  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <Register />
      </StyledAuthPage>
    </>
  );
};

export default Registro;
