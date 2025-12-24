import { Wrapper } from "../../general/Wrapper";
import { Chat } from "../Chat";
import { questions } from "./data";
import { Question } from "./Question";
import { StyledQuestions } from "./styles";
import { QuestionsProps } from "./types";

const Questions = (props: QuestionsProps) => {
  const { searchTerm } = props;

  return (
    <StyledQuestions>
      <Wrapper>
        {questions
          .filter((q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(({ question, answer }, idx) => (
            <Question key={idx} question={question} answer={answer} />
          ))}
      </Wrapper>
      <Chat />
    </StyledQuestions>
  );
};

export { Questions };
