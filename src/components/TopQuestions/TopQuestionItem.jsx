import React, {memo} from "react";
import Card from "../../ui/card";
import { DivClamp } from "../../ui/DivClamp";
import styled from "styled-components";

const CardContainerItem = styled.div`
  padding: 20px 0;
  border-bottom: 1.5px solid gray;
`;

const Row = styled.div`
  display: flex;
  & > :first-child {
    font-weight: bold;
    margin-right: 1rem;
  }
`;

const TopQuestionItem = ({ question }) => {
  return (
    <CardContainerItem key={question.question_id}>
      <Row>
        <div>Author:</div>
        <div>{question.owner.display_name}</div>
      </Row>
      <Card width={"600px"} label={"Тема:"}>
        <DivClamp width={600}>{question.title}</DivClamp>
      </Card>
      <Row>
        <div>answers:</div>
        <div>{question.answer_count}</div>
      </Row>
    </CardContainerItem>
  );
};

export default memo(TopQuestionItem);
