import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Header } from '../../components/general/Header';
import { PrivacyPolicy } from '../../components/privacyAndTerms/PrivacyPolicy';

const Privacy: NextPage = () => {
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
        <Header title="Política de privacidade" horizontal />
        <PrivacyPolicy />
      </StyledPage>
      <Footer/>
    </>
  )
}

export default Privacy;
