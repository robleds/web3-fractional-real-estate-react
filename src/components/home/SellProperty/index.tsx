import { StyledSellProperty } from "./styles";
import Link from "next/link";
import { Button } from "../../general/Button";
import { Wrapper } from "../../general/Wrapper";

const SellProperty = () => {
  return (
    <StyledSellProperty>
      <Wrapper horizontal>
        <p className="title bold">Aumente a liquidez do seu imóvel</p>
        <p className="description">
          Veja como a Brix pode te ajudar a vender seus imóveis para o mundo
          todo com menos burocracia.
        </p>
        <Link href="/cadastro">
          <a>
            <Button type="button" height={65} width={280}>
              Quero fracionar meu imóvel
            </Button>
          </a>
        </Link>
      </Wrapper>
    </StyledSellProperty>
  );
};

export { SellProperty };
