import { StyledPresentation } from "./styles";
import Image from "next/image";
import predio from "../../../assets/images/sobre-nos.jpg";
import { Wrapper } from "../../general/Wrapper";

const Presentation = () => {
  return (
    <StyledPresentation>
      <Wrapper horizontal>
        <div className="text">
          <h2 className="bold">Nossa Missão</h2>
          <p>
            A Brix BR pretende democratizar a compra e venda de imóveis no
            Brasil. Sabe aquele hotel, ou aquele Shopping Center que sempre te
            pareceu um ótimo negócio mas que você nunca teve condições de
            comprar ou ser sócio? Pois agora você pode!
            <br />
            <br />
            Na Brix você pode investir desde 0,1% da fração de um imóvel até
            100% e com total segurança e transparência!
            <br />
            <br />
            Brix é uma disrupção no mercado de imóveis no Brasil.
          </p>
        </div>
        <div className="image">
          <Image
            id="image"
            src={predio}
            alt="Pessoas no escritório"
            layout="responsive"
          />
        </div>
      </Wrapper>
    </StyledPresentation>
  );
};

export { Presentation };
