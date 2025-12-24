import { StyledHeader } from "./styles";
import Link from "next/link";
import { Button } from "../../general/Button";
import { Wrapper } from "../../general/Wrapper";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper align="start">
        <h1>Invista através de compra fraccionada de imóveis.</h1>
        <h2>Oportunidade para você se tornar dono de frações de imóveis.</h2>
        <div>
          <Link href="/cadastro">
            <a className="button-investir">
              <Button height={65} type="button" className="button-investir__link">
                Quero investir
              </Button>
            </a>
          </Link>
          <Link href="/como-funciona">
            <a>
              <button className="button-doubt">Como funciona?</button>
            </a>
          </Link>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export { Header };
