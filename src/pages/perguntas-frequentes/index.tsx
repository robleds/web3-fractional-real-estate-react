import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { StyledPage } from '../../styles/pages';
import { Header } from '../../components/general/Header';
import { Questions } from '../../components/faq/Questions';
import { useState } from 'react';

const Faq: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavBar navigation login />
      <StyledPage>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} title="Perguntas frequentes" search height={295} align="start" />
      <Questions searchTerm={searchTerm} />
      </StyledPage>
      <Footer />
    </>
  )
}

export default Faq;
