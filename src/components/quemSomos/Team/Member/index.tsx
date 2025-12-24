import { StyledMember } from "./styles";
import { MemberProps } from "./types";
import Image from "next/image";

const Member = (props: MemberProps) => {
  const { name, picture, role, children } = props;

  return (
    <StyledMember>
      <div className="image">
        <Image
          src={picture}
          alt="Cartão de membro"
          layout="responsive"
        />
      </div>
      <div className="member">
        <h3 className="bold">{name}</h3>
        <p>{role}</p>
      </div>
      <hr className="break" />
      <p className="description">{children}</p>
    </StyledMember>
  );
};

export { Member };
