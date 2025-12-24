/* eslint-disable @next/next/no-img-element */
import { MouseEvent, useEffect, useState } from "react";
import { OpPageProps } from "../types";
import { getImages } from "../utils";
import { SidebarInveste } from '../../../components/oportunidade/sidebarInveste';
import { StyledOportunityDetail } from "./styles";

const OportunityDetail = (props: OpPageProps) => {
  const { opportunity } = props;
  const [emphasis, setEmphasis] = useState(-1);
  const { description, offer, supply, netRent, address, recordId } =
    opportunity;
  const totalValue = offer ? Number(supply) * offer.price : 0;
  const sellPercent = netRent / totalValue;
  const fracPercent = 1 / Number(supply);
  const [images, setImages] = useState([]) as any;

  useEffect(() => {
    getImages(recordId, setImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmphasis = (event: MouseEvent, index: number) => {
    setEmphasis(index);
    event.stopPropagation();
  };

  return (
    <StyledOportunityDetail>
      <div className="main">
        <h2 className="page-title">Descrição</h2>

        <p className="page-description">{description}</p>

        <div className="sale-status">
          <h2 className="page-title">Status</h2>

          <span className="sale-number">
            {sellPercent.toLocaleString("pt-BR", {
              style: "percent",
              minimumFractionDigits: 2,
            })}
          </span>

          <div className="sale-range-group">
            <div className="sale-group">
              <ul className="sale-list">
                <li className="sale-item">frações adquiridas</li>
                <li className="sale-item">frações reservadas</li>
                <li className="sale-item">valor total do imóvel</li>
              </ul>
              <span className="saled">vendido</span>
            </div>

            <div className="range-group">
              <div
                className="range-item"
                style={{ width: `${sellPercent * 100}%` }}
              ></div>
              <div className="range-item" style={{ width: "86%" }}></div>
              <div className="range-item"></div>
            </div>
          </div>
        </div>

        <div className="sale-detail">
          <div className="sale-detail__infos">
            <div className="sale-detail__infos-container">
              <p className="sale-detail__title">Rentabilidade alvo (TIR)</p>
              <span className="sale-detail__value">20.74% a.a</span>
              <div className="sale-detail__tooltip">
                <p>
                  Esta é a expectativa de rentabilidade do investimento,
                  considerando o fator tempo, de acordo com os recursos
                  aportados pelo investidor e devolvidos pela Sociedade
                  Investida em forma de Amortizações, Remunerações ou
                  Dividendos, estes pagos periodicamente ou ao final do projeto.
                </p>
              </div>
            </div>
            <p className="sale-detail__description">
              Não prometemos a rentabilidade. A compra de um imóvel tem o risco
              de mercado, risco de vacância e você poder ser obrigado a suportar
              os custos desse imóvel na proporção de sua fração caso ele fique
              desalugado
            </p>
          </div>

          <div className="sale-detail__numbers">
            <div className="sale-detail__numbers-col">
              <span className="sale-detail__numbers-values">
                Valor vendido
                <strong>
                  {netRent.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </span>

              <span className="sale-detail__numbers-values">
                Participação
                <strong>
                  {fracPercent.toLocaleString("pt-BR", {
                    style: "percent",
                  })}{" "}
                  por fração
                </strong>
              </span>
            </div>

            <div className="sale-detail__numbers-col">
              <span className="sale-detail__numbers-values">
                Fração mínima
                <strong>
                  {offer
                    ? offer.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : "---"}
                </strong>
              </span>

              <span className="sale-detail__numbers-values">
                Investidores
                <strong>{offer ? offer.numShares : 0}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="sidebar-mobile">
          <SidebarInveste opportunity={opportunity} />
        </div>

        <div className="invest-detail">
          <h2 className="page-title">Detalhes sobre o investimento</h2>

          <div className="invest-detail__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fxLUqR2nwiQ"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <p className="default-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>

          <div className="images-grid">
            {images
              .map((img: any, index: number) => (
                <div
                  onClick={() => setEmphasis(-1)}
                  className={`${
                    emphasis === index ? "emphasis " : ""
                  }images-grid__item`}
                  key={index}
                >
                  <img onClick={(event) => handleEmphasis(event, index)} src={img[0]} alt="" />
                </div>
              ))
              .slice(0, 4)}
          </div>

          <div className="invest-address">
            <div className="invest-address__info">
              <h2 className="page-title">Endereço</h2>
              <p className="default-text">
                {address.street}, {address.number} - {address.neighborhood},{" "}
                {address.city} - {address.state}
              </p>
            </div>
            <div className="invest-address__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3666.810120635574!2d-43.2591465353973!3d-22.998124046251302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1638496511689!5m2!1spt-BR!2sbr"
                width="380"
                height="200"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="invest-faq">
            <h2 className="page-title">Perguntas e respostas</h2>

            <p className="invest-faq__item">
              <strong>A Brix é um fundo imobiliário?</strong>
              Não. Brix é grupo de profissionais do ramo imobiliário e
              tecnológico, com escritório no Rio de Janeiro, onde centralizam
              todas as operações com apoio de um sistema online (site Brix) para
              gestão dos ativos e dos clientes.
            </p>

            <p className="invest-faq__item">
              <strong>O que é Blockchain?</strong>
              De forma resumida, blockchain é um sistema que permite rastrear o
              envio e recebimento de alguns tipos de informação pela internet.
              São pedaços de código gerados online que carregam informações
              conectadas – como blocos de dados que formam uma corrente – daí o
              nome.
            </p>

            <p className="invest-faq__item">
              <strong>O que é e-notariado?</strong>O e-Notariado é a plataforma
              digital gerida pelo Colégio Notarial do Brasil – Conselho Federal,
              que conecta os usuários aos serviços oferecidos pelos cartórios de
              notas em todo o Brasil.
            </p>

            <p className="invest-faq__item">
              <strong>
                Comprando uma fração eu serei dono de uma parte do imóvel?
              </strong>
              Sim. Ao comprar, assinar a escritura e registrar sua fração, você
              será dono legítimo de uma fração desse imóvel. Você poderá
              revender a qualquer momento e você também receberá os rendimentos
              (quando houver) proporcionais a sua fração.
            </p>
          </div>
        </div>
      </div>
    </StyledOportunityDetail>
  );
};

export { OportunityDetail };
