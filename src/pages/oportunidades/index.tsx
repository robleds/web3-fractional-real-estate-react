import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Opportunities } from '../../components/home/Opportunities';
import { SellProperty } from '../../components/home/SellProperty';
import { AllOpportunities } from '../../components/oportunidades/AllOpportunities';
import AssetsApi from '../../services/AssetsApi';

const Oportunidades: NextPage = (props: any) => {
  const { assets } = props;

  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <Opportunities opportunities={assets} title="Destaques" />
        <AllOpportunities opportunities={assets} />
        <SellProperty />
      </StyledPage>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const assets = await AssetsApi.getAssets();

  return {
    props: {
      assets,
    },
  }
}

export default Oportunidades;
