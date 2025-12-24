import { StyledInitialAuthBanner } from "./styles";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../assets/images/logo2.png";

const InitialAuthBanner = () => {
  return (
    <StyledInitialAuthBanner>
      <Link href="/">
        <a>
          <Image
            src={logo}
            alt="Brix logo"
            width={189}
            height={45.25}
            layout="fixed"
          />
        </a>
      </Link>
      <h2 className="bold">
        Acesse oportunidades exclusivas de venda fracionada de imóveis.
      </h2>
    </StyledInitialAuthBanner>
  );
};

export { InitialAuthBanner };
