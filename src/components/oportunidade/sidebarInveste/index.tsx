import { useEffect, useState } from "react";
import { OpPageProps } from "../types";
import { StyledSidebarInveste } from "./styles";
import Link from "next/link";

const SidebarInveste = (props: OpPageProps) => {
  const [fracNumber, setFracNumber] = useState(0);
  const { opportunity } = props;
  const { offer, supply, netRent } = opportunity;
  const totalValue = offer ? Number(supply) * offer.price : 0;
  const fracPercent = 1 / Number(supply);

  useEffect(() => {
    fracNumber < 0 && setFracNumber(0);
  }, [fracNumber]);

  return (
    <StyledSidebarInveste>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="price-box">
            <span className="price-box__title">Valor total do imóvel</span>
            <span className="price-box__number">
              {totalValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span className="price-box__title-min">Fração mínima</span>
            <span className="price-box__number-min">
              {offer
                ? offer.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "---"}
            </span>
          </div>

          <div className="qtd-box">
            <span className="qtd-box__title">Número de frações</span>
            <div className="qtd-box__counter">
              <input
                type="number"
                readOnly
                value={fracNumber}
                className="qtd-box__input"
              />
              <button
                className="qtd-box__button plus"
                onClick={() => setFracNumber(fracNumber + 1)}
              ></button>
              <button
                className="qtd-box__button minus"
                onClick={() => setFracNumber(fracNumber - 1)}
              ></button>
            </div>
          </div>

          <div className="invest-perc">
            <span className="invest-perc__text">
              Você possuirá %<br></br>do imóvel
            </span>
            <span className="invest-perc__value">
              {(fracNumber * fracPercent).toLocaleString("pt-BR", {
                style: "percent",
              })}
            </span>
          </div>

          <div className="invest-perc">
            <span className="invest-perc__text">
              Aluguel<br></br>mensal rende
            </span>
            <span className="invest-perc__value">R$ 600.000,00</span>
          </div>

          <div className="invest-perc">
            <span className="invest-perc__text">
              Retorno estimado sobre<br></br>o investimento
            </span>
            <span className="invest-perc__value">10%</span>
          </div>

          <div className="invest-total">
            <span className="invest-total__text">Investimento total</span>
            <span className="invest-total__value">
              {(offer ? fracNumber * offer.price : 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <Link href="/cadastro">
            <a>
              <button className="bt-investir">Investir agora</button>
            </a>
          </Link>

          <p className="text">
            Sua compra somente será efetivada caso o número mínimo de frações a
            serem vendidas atinja o mínimo estabelecido pelo vendedor.
          </p>

          <div className="specialist-link">
            <img src="/static/images/cloud.svg" alt="" />
            <a
              href="mailto:atendimento@doctorweb.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <button>Falar com um especialista</button>
            </a>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="securit-text">
            <img src="/static/images/lock.svg" alt="" />
            <p>
              Todo nosso processo de compra e venda, assinatura de escritura
              eletrônica, registro de imóveis , é confidencial. Você está num
              ambiente seguro e suas informações e documentos são sigilosos.
            </p>
          </div>
        </div>
      </div>
    </StyledSidebarInveste>
  );
};

export { SidebarInveste };
