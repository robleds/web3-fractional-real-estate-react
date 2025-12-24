import type { NextPage } from "next";
import { Footer } from "../components/general/Footer";
import { Enotariado } from "../components/home/Enotariado";
import { Explanations } from "../components/home/Explanations";
import { Header } from "../components/home/Header";
import { Opportunities } from "../components/home/Opportunities";
import { SellProperty } from "../components/home/SellProperty";
import { WhyInvest } from "../components/home/WhyInvest";
import { NavBar } from "../components/general/NavBar";
import { StyledPage } from "../styles/pages";
import AssetsApi from "../services/AssetsApi";

const Home: NextPage = (props: any) => {
  const { assets } = props;

  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <Header />
        <Opportunities opportunities={assets} title="Veja aqui as oportunidades" showButton />
        <Explanations />
        <Enotariado />
        <WhyInvest />
        <SellProperty />
      </StyledPage>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const assets = await AssetsApi.getAssets();

  return {
    props: {
      assets,
    },
  }
}

export default Home;
