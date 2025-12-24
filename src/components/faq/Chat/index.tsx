import { StyledChat } from "./styes";
import { BsChat } from "react-icons/bs";

const Chat = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:atendimento@doctorweb.com.br"
    >
      <StyledChat>
        <BsChat color="white" size={35} />
      </StyledChat>
    </a>
  );
};

export { Chat };
