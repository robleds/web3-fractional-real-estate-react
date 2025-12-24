import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Header } from '../../components/general/Header';
import { TermsOfUse } from '../../components/privacyAndTerms/TermsOfUse';

const Privacy: NextPage = () => {
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <Header title="Termos de uso" horizontal />
        <TermsOfUse />
      </StyledPage>
      <Footer/>
    </>
  )
}

export default Privacy;
