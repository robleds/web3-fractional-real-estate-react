import { StyledMyProperties } from "./styles";
import Link from "next/link";
import { properties } from "./data";
import { Property } from "./Property";

const MyProperties = () => {
  return (
    <StyledMyProperties>
      <div className="my-props">
        <h4 className="bold">Meus imóveis</h4>
        <Link href="#">
          <a>ver todos</a>
        </Link>
      </div>
      <div className="properties">
        {properties.map((prop, idx) => (
          <Link href="#" key={idx}>
            <a>
              <Property
                index={idx}
                name={prop.name}
                owned={prop.owned}
                status={prop.status as any}
                value={prop.value}
                total={prop.total}
              />
            </a>
          </Link>
        ))}
      </div>
    </StyledMyProperties>
  );
};

export { MyProperties };
