import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { NavBar } from "../../general/NavBar";
import { Wrapper } from "../../general/Wrapper";
import { DashboardNavBar } from "../DashboardNavBar";
import { Chart } from "./Chart";
import { DocumentsMessage } from "./DocumentsMessage";
import { MyProperties } from "./MyProperties";
import { StyledWalletDetails } from "./styles";
import { ValueCard } from "./ValueCard";

type WalletProps = {
  user: any;
}

const WalletDetails = (props: WalletProps) => {
  const { user } = props;

  return (
    <>
      <DashboardNavBar />
      <Wrapper align="start">
        <StyledWalletDetails>
          <h2 className="title bold">
            Olá {user?.firstName}, veja aqui os detalhes da sua carteira
          </h2>
          <div className="top">
            <ValueCard category="invested" value={0} />
            <ValueCard category="received" value={0} />
            <DocumentsMessage type="analysis" />
          </div>
          <div className="bottom">
            <MyProperties />
            <Chart />
          </div>
        </StyledWalletDetails>
      </Wrapper>
    </>
  );
};

export { WalletDetails };
