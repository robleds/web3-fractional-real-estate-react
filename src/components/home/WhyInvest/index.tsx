import { StyledWhyInvest } from "./styles";
import Link from "next/link";
import { Button } from "../../general/Button";
import { Wrapper } from "../../general/Wrapper";

const WhyInvest = () => {
  return (
    <StyledWhyInvest>
      <Wrapper horizontal align="start">
        <div>
          <h2 className="bold">Porque investir em imóveis fracionados?</h2>
          <div className="buttons">
            <Link href="/cadastro">
              <a>
                <Button type="button" height={65} width={230}>
                  Quero investir
                </Button>
              </a>
            </Link>
            <Link href="/como-funciona">
              <a>
                <button className="button-doubt bold">Como funciona?</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="info">
          <ul className="info-grid">
            <li>
              <h4>Renda passiva</h4>
              <p>Ganhe renda sem gerenciamento ativo</p>
            </li>
            <li>
              <h4>Valorização do capital</h4>
              <p>
                Historicamente, os preços dos imóveis aumentaram ao longo do
                tempo
              </p>
            </li>
            <li>
              <h4>Fluxo de caixa estável</h4>
              <p>Os pagamentos de aluguel fornecem fluxo de caixa estável.</p>
            </li>
            <li>
              <h4>Proteção contra inflação</h4>
              <p>
                Os valores das casas e os aluguéis normalmente aumentam durante
                os períodos de inflação
              </p>
            </li>
          </ul>
          <p>
            Todo imóvel apresenta risco de vacância e, caso ocorra, o investidor
            poderá ter que arcar com custos de condomínio, IPTU – sempre
            proporcional a sua fração.
          </p>
        </div>
      </Wrapper>
    </StyledWhyInvest>
  );
};

export { WhyInvest };
