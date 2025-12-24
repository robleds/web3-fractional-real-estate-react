import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Header } from '../../components/general/Header';
import { Introduction } from '../../components/comoFunciona/Introduction';
import { Explanations } from '../../components/comoFunciona/Explanations';

const ComoFunciona: NextPage = () => {
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <Header title="Como funciona" horizontal />
        <Introduction />
        <Explanations />
      </StyledPage>
      <Footer/>
    </>
  )
}

export default ComoFunciona;
