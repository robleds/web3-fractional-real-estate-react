import { StyledEnotariado } from "./styles";
import enotariado from "../../../assets/images/enotariado.png";
import Image from "next/image";
import Link from "next/link";

const Enotariado = () => {
  return (
    <StyledEnotariado>
      <div>
        <a target="_blank" href="https://www.e-notariado.org.br/notary" rel="noreferrer">
          <Image
            src={enotariado}
            alt="Enotariado logo"
            width={132}
            height={45}
            layout="fixed"
          />
        </a>

        <div className="enotariado-text">
          <h3 className="bold">A Brix é parceira da e-notariado</h3>
          <p>Segurança e credibilidade através da certificação cartorial</p>
        </div>
      </div>
    </StyledEnotariado>
  );
};

export { Enotariado };