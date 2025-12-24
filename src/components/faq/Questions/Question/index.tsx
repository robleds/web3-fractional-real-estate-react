import { StyledQuestion } from "./styles";
import { QuestionProps } from "../types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Question = (props: QuestionProps) => {
  const { question, answer } = props;
  const [open, setOpen] = useState(false);

  return (
    <StyledQuestion>
      <details
        onClick={() => setOpen(!open)}
        className={open ? "" : "item-closed"}
        open={open}
      >
        <summary onClick={(e) => e.preventDefault()}>
          <h3 className="bold">{question}</h3>
          {open ? <IoIosArrowUp size={20} className="arrow" /> : <IoIosArrowDown size={20} className="arrow" />}
        </summary>
        <p>
          {answer.split("\n").map((part) => (
            <>
              {part}<br />
            </>
          ))}
        </p>
      </details>
    </StyledQuestion>
  );
};

export { Question };
