import { StyledOpportunity } from "./styles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { OpportunityProps } from "../types";
import { opportunitiesExample } from "../data";
import { getColor } from "./utils";
import axios from "axios";
import { useEffect, useState } from "react";
import V1Api from "../../../../services/V1Api";

const Opportunity = (props: { data: OpportunityProps }) => {
  const {
    title,
    type,
    offer,
    supply,
    address,
    recordId,
  }: OpportunityProps = props.data;
  const [images, setImages] = useState([]);

  const handleGetImages = async (recordId: string) => {
    const assetImages = await V1Api.getAssetImages(recordId);
    setImages(assetImages);
  };

  useEffect(() => {
    handleGetImages(recordId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledOpportunity image={images[0] ? images[0][0] : ""}>
      <div className="tags">
        {type.split(/[\/ ]/g).map((tag, idx) => (
          <span
            className="bold"
            style={{ backgroundColor: getColor() }}
            key={idx}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="title">
        <h3 className="bold">{title}</h3>
        <div className="location">
          <HiOutlineLocationMarker size={20} color="white" />
          <span>
            {address.neighborhood}, {address.city}
          </span>
        </div>
      </div>
      <div className="description">
        <div className="investors">
          <BsPeople color="#39B8FF" />
          <p>
            <span className="bold">{offer ? offer.numShares : 0} pessoas</span>{" "}
            já investiram nesta oportunidade.
          </p>
        </div>
        <div>
          <p>Investimento mínimo</p>
          <span className="invest-value bold">
            {offer
              ? offer.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : "---"}
          </span>
        </div>
        <div>
          <p>Valor do imóvel</p>
          <span className="invest-value bold">
            {offer
              ? (Number(supply) * offer.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : "---"}
          </span>
        </div>
      </div>
    </StyledOpportunity>
  );
};

export { Opportunity };
