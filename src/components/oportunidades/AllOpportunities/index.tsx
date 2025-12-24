import { SmallOpportunity } from "../SmallOpportunity";
import { StyledAllOpportunities } from "./styles";
import Link from "next/link";
import { Wrapper } from "../../general/Wrapper";
import { AllOpProps } from "../types";
import { useEffect, useState } from "react";
import { applyFilters } from "../utils";

const AllOpportunities = (props: AllOpProps) => {
  const { opportunities } = props;
  const [filteredOps, setFilteredOps] = useState([...opportunities].reverse());
  const [order, setOrder] = useState("Mais recentes");
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    applyFilters(order, category, opportunities, setFilteredOps);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, order]);

  return (
    <StyledAllOpportunities>
      <Wrapper>
        <div className="top">
          <h2 className="title bold">Mais oportunidades</h2>
          <div className="filters">
            <select
              name="order"
              id="order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="Mais recentes">Mais recentes</option>
              <option value="Mais investidores">Mais investidores</option>
              <option value="Menos investidores">Menos investidores</option>
            </select>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Comercial">Comercial</option>
              <option value="Residencial">Residencial</option>
            </select>
          </div>
        </div>
        <ul>
          {filteredOps.map((op: any) => (
            <Link key={op.recordId} href={`/oportunidades/${op.recordId}`}>
              <a>
                <SmallOpportunity data={op} />
              </a>
            </Link>
          ))}
        </ul>
      </Wrapper>
    </StyledAllOpportunities>
  );
};

export { AllOpportunities };
