import { BsQuestionCircle, BsCheckCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BankRefInputProps } from "../types";
import { StyledBankRefInput } from "./styles";
import { useState } from "react";

const BankRefInput = (props: BankRefInputProps) => {
  const { title, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <StyledBankRefInput onClick={() => setOpen(!open)} open={open}>
      <summary onClick={(e) => e.preventDefault()}>
        <div>
          <h3>{title}</h3>
          <BsQuestionCircle size={15} color="#39B8FF" />
        </div>
        <div>
          <span className={`indicator${false ? " active" : ""}`}>
            {false && <BsCheckCircleFill color="#64B514" size={15} />}
          </span>
          <IoIosArrowDown className={`arrow${open ? " open" : ""}`} />
        </div>
      </summary>
      <div className="content">
        <p>{children}</p>
      </div>
    </StyledBankRefInput>
  );
};

export { BankRefInput };
