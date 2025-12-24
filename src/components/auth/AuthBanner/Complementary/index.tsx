import { StyledComplementaryAuthBanner } from "./styles";

const ComplementaryAuthBanner = () => {
  const raw = localStorage.getItem("@brix/user") || '{}';
  const user = JSON.parse(raw);
  return (
    <StyledComplementaryAuthBanner>
      <div className="image"></div>
      <div className="text">
        <h3 className="title bold">
          <span>Olá {user?.firstName}.</span>
          <span>Falta pouco para você concluir o seu cadastro.</span>
        </h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </StyledComplementaryAuthBanner>
  );
};

export { ComplementaryAuthBanner };
