import { getColor } from "../../home/Opportunities/Opportunity/utils";
import { StyledBannerOportunity } from "./styles";
import Image from "next/image";
import { OpPageProps } from "../types";

const BannerOportunity = (props: OpPageProps) => {
  const { opportunity } = props;
  const { title, type, address, totalArea, grossLettableArea } = opportunity;

  return (
    <StyledBannerOportunity>
      <div
        className="oportunity-banner"
        style={{ backgroundImage: "url(/static/images/header-oportunity.jpg)" }}
      >
        <div className="container">
          <div className="content">
            <div className="oportunity-banner__titles">
              <div className="oportunity-banner__tags">
                {type.split(/[\/ ]/g).map((tag: string, idx: number) => (
                  <button
                    className="oportunity-banner__tag"
                    style={{ backgroundColor: getColor() }}
                    key={idx}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <h1 className="oportunity-banner__name">{title}</h1>

              <div className="oportunity-banner__address">
                <Image
                  width={20}
                  height={24}
                  src="/static/images/pin-light.svg"
                  alt="Pin"
                  layout="fixed"
                />
                <span>
                  {address.street}, {address.number} - {address.neighborhood},{" "}
                  {address.city} - {address.state}
                </span>
              </div>
            </div>

            <div className="oportunity-banner__infos">
              <div className="oportunity-banner__infos-area">
                <span>
                  <strong>{totalArea.toLocaleString("pt-BR")} m2</strong>
                  Área Total
                </span>
              </div>
              <div className="oportunity-banner__infos-area">
                <span>
                  <strong>
                    {grossLettableArea.toLocaleString("pt-BR")} m2
                  </strong>
                  Área Locável
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBannerOportunity>
  );
};

export { BannerOportunity };
