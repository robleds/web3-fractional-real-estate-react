import { StyledExplanations } from "./styles";
import buildings from "../../../assets/images/buildings.png";
import finance from "../../../assets/images/finance.png";
import chart from "../../../assets/images/pie-chart.png";
import blockchain from "../../../assets/images/blockchain.png";
import Image from "next/image";
import { Wrapper } from "../../general/Wrapper";

const Explanations = () => {
  return (
    <StyledExplanations>
      <Wrapper>
        <h3 className="title bold">
          Entenda como funciona a compra fraccionada de imóveis
        </h3>
        <ul className="explanations-list">
          <li>
            <Image
              src={buildings}
              alt="Buildings representation"
            />
            <p>
              O proprietário de um imóvel faz o cadastro na plataforma Brix e
              envia todas as certidões negativas e documentos
            </p>
          </li>
          <li>
            <Image
              src={blockchain}
              alt="Blockchain representation"
            />
            <p>
              Através da Blockchain, esse imóvel é fracionado em várias partes
            </p>
          </li>
          <li>
            <Image
              src={finance}
              alt="Business and finance representation"
            />
            <p>
              O investidor , através de tokens, pode comprar quantas frações
              quiser sendo que um mínimo de frações é estabelecido
            </p>
          </li>
          <li>
            <Image
              src={chart}
              alt="Pie chart representation"
            />
            <p>
              Você se tornará dono de uma fração do imóvel (no RGI) e receberá
              os alugéis líquidos direto na sua conta
            </p>
          </li>
        </ul>
      </Wrapper>
    </StyledExplanations>
  );
};

export { Explanations };
