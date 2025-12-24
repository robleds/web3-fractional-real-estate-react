import { Wrapper } from "../../general/Wrapper";
import { StyledIntroduction } from "./styles";

const Introduction = () => {
  return (
    <StyledIntroduction>
      <Wrapper horizontal>
        <h2 className="bold">Sobre nós</h2>
        <p>
          A Brix BR é a primeira plataforma no Brasil de venda fracionada de
          imóveis. Estamos totalmente integrados à plataforma do e-cartórios de
          modo que, ao adquirir sua fração do imóvel, você automaticamente
          assinará uma escritura eletrônica sendo dono legítimo de sua fração.
          Não vendemos cotas de fundo Imobiliário! Vendemos uma fração do
          imóvel! São coisas completamente diferentes. <br />
          <br />
          Na Brix você se torna, juridicamente, dono de uma fração do imóvel,
          podendo permanecer dono para o resto da vida ou, se preferir, poderá
          vender sua fração na própria plataforma (funcionalidade em
          desenvolvimento). <br />
          <br />
          Para o vendedor, por outro lado, representa a possibilidade de dar
          liquidez a um imóvel que, pelo valor, poderia ser muito difícil de
          vender! <br />
          <br />
          Além disso, pela plataforma da Brix, você, comprador de uma fração do
          imóvel, poderá receber online, na sua conta diretamente, os
          rendimentos de aluguéis daquele imóvel. Com transparência e segurança.
        </p>
      </Wrapper>
    </StyledIntroduction>
  );
};

export { Introduction };
