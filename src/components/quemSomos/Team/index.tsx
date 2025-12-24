import { StyledTeam } from "./styles";
import { team } from "./data";
import { Member } from "./Member";
import { Wrapper } from "../../general/Wrapper";

const Team = () => {
  return (
    <StyledTeam>
      <Wrapper>
        <div className="title">
          <h2 className="bold">Nosso time</h2>
          <p>
            Com apoio de uma equipe que busca sempre a excelência em cada
            oportunidade, a Brix é liderada por executivos com grande
            experiência no segmento imobiliário.
          </p>
        </div>
        <ul className="team">
          {team.map(({ name, description, picture, role }, index) => (
            <Member key={index} name={name} picture={picture} role={role}>
              {description}
            </Member>
          ))}
        </ul>
      </Wrapper>
    </StyledTeam>
  );
};

export { Team };
