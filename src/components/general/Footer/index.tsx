import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { StyledFooter } from "./styles";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import visa from "../../../assets/images/icons/visa.png";
import paypal from "../../../assets/images/icons/paypal.png";
import amex from "../../../assets/images/icons/amex.png";
import { Wrapper } from "../Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div className="top">
          <div className="labels">
            <Image
              src={logo}
              alt="Brix Logo"
              width={116}
              height={30}
              layout="fixed"
            />
            <h3 className="text-logo">Venda e compra fracionada.</h3>

            <ul className="social-media">
              <li>
                <a href="#" target="_blank">
                  <FaFacebookF size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <AiFillInstagram size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaLinkedinIn size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter size={20} color="#DFB47A" />
                </a>
              </li>
            </ul>
          </div>

          <div className="content">
            Brix é uma disrupção no mercado de imóveis no Brasil. Sabe aquele
            hotel, ou aquele Shopping Center que sempre te pareceu um ótimo
            negócio mas que você nunca teve condições de comprar ou ser sócio?
            Pois agora você pode! Na Brix você se torna, juridicamente, dono de
            uma fração do imóvel, podendo permanecer dono para o resto da vida
            ou, se preferir, poderá vender sua fração na própria plataforma Para
            o vendedor, por outro lado, representa a possibilidade de dar
            liquidez a um imóvel que, pelo valor, poderia ser muito difícil de
            vender! Não vendemos cotas de fundo Imobiliário! Vendemos uma fração
            do imóvel! São coisas completamente diferentes.
          </div>

          <ul className="cards">
            <li>
              <Image
                src={paypal}
                alt="PayPal payment"
                width={50}
                height={50}
                layout="fixed"
              />
            </li>
            <li>
              <Image
                src={amex}
                alt="American Express payment"
                width={38}
                height={38}
                layout="fixed"
              />
            </li>
            <li>
              <Image
                src={visa}
                alt="Visa payment"
                width={38}
                height={38}
                layout="fixed"
              />
            </li>
          </ul>
        </div>

        <div className="bot">
          <p>Todos os direitos reservados © 2021. Brix Investimentos. </p>
          <div className="privacy">
            <Link href="/politica-privacidade">
            <a target="_blank">
              Política de privacidade
            </a>
            </Link>
            <Link href="/termos-de-uso">
            <a target="_blank">
              Termos de Uso
            </a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </StyledFooter>
  );
};

export { Footer };
