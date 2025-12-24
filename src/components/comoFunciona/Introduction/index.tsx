import { Wrapper } from "../../general/Wrapper";
import { StyledIntroduction } from "./styles";

const Introduction = () => {
  return (
    <StyledIntroduction>
      <Wrapper horizontal>
        <div className="text">
          <h2 className="bold">Venda fracionada de imóveis</h2>
          <p>
            A Brix BR é a primeira plataforma no Brasil de venda fracionada de
            imóveis. Nós estamos totalmente integrados à plataforma do
            e-cartórios de modo que, ao adquirir sua fração do imóvel, você
            automaticamente assina uma escritura eletrônica sendo dono legítimo
            de sua fração.
          </p>
        </div>

        <iframe
          className="video"
          src="https://www.youtube.com/embed/fxLUqR2nwiQ"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Wrapper>
    </StyledIntroduction>
  );
};

export { Introduction };
