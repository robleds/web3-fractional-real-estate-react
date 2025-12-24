import { StyledOpportunitues } from "./styles";
import { Opportunity } from "./Opportunity";
import Link from "next/link";
import { OpportunitiesProps } from "./types";
import { Wrapper } from "../../general/Wrapper";

const Opportunities = (props: OpportunitiesProps) => {
  const { showButton, title, opportunities } = props;

  return (
    <StyledOpportunitues>
      <Wrapper>
        <div className="see-opportunities">
          <span>{title}</span>
          <Link href="/oportunidades">
            <a className={showButton ? "" : "hidden"}>
              <button>ver todos</button>
            </a>
          </Link>
        </div>
        <ul className="list-invest">
          {opportunities
            .map((op: any) => (
              <li  key={op.recordId}>
                <Link href={`/oportunidades/${op.recordId}`}>
                  <a>
                    <Opportunity data={op} />
                  </a>
                </Link>
              </li>
            ))
            .slice(0, 3)}
        </ul>
      </Wrapper>
    </StyledOpportunitues>
  );
};

export { Opportunities };
