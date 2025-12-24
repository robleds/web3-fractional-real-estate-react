import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';

const Conteudos: NextPage = () => {
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <h1>Conteudos</h1>
      </StyledPage>
      <Footer />
    </>
  )
}

export default Conteudos;
