import React, {memo} from "react";
import Td from "../../ui/Table/Td";
import { DivClamp } from "../../ui/DivClamp";

const QuestionItem = ({ question, onClick }) => {
  const { owner } = question;
  return (
    <tr onClick={() => onClick(true)}>
      <Td>{owner.display_name}</Td>
      <Td className={".items-text"}>
        <DivClamp width={400}>{question.title}</DivClamp>
      </Td>
      <Td style={{ textAlign: "center" }}>{question.answer_count}</Td>
      <Td>
        <DivClamp width={200}>{question.tags.join(",")}</DivClamp>
      </Td>
    </tr>
  );
};

export default memo(QuestionItem);
