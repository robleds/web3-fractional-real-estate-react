import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { InitialAuthBanner } from "../../../components/auth/AuthBanner/Initial";
import { EmailConfirm } from "../../../components/auth/SigupForm/Register/EmailConfirm";
import { StyledAuthPage } from "../../../styles/auth";

const ConfirmEmail: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      axios
        .get(`https://bricks.rioblocks.io/v1/validate?token=${token}`)
        .then(() => {
          alert("Email validado com sucesso!");
          router.push("/login");
        })
        .catch(() => alert("Algo deu errado! Tente novamente!"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
