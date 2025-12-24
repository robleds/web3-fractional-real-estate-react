import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Header } from '../../components/general/Header';
import { Introduction } from '../../components/quemSomos/Introduction';
import { Presentation } from '../../components/quemSomos/Presentation';
import { Team } from '../../components/quemSomos/Team';

const QuemSomos: NextPage = () => {
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
      <Header url="/static/images/header-quem-somos.jpg" title="Quem somos" horizontal />
      <Introduction />
      <Presentation />
      <Team />
      </StyledPage>
      <Footer />
    </>
  )
}

export default QuemSomos;
