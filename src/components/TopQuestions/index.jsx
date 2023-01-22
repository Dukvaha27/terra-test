import React, {memo} from "react";
import Modal from "../Modal";
import { useGetTopQuestionsByTagsQuery } from "../../store/features/users";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import TopQuestionItem from "./TopQuestionItem";
import EmptyQuestions from "../EmptyQuestions";

const CardContainer = styled.div`
  padding: 10px;
  max-height: 60vh;
  overflow: auto;
  & > :last-child {
    border-bottom: none;
  }
`;

const TopQuestions = ({ ...props }) => {
  const { id, tag } = props;
  const {
    data: topQuestions = [],
    isFetching,
    isError,
  } = useGetTopQuestionsByTagsQuery(
    { id, tag },
    {
      skip: !id || !tag,
    }
  );

  return (
    <Modal {...props}>
      {isFetching ? (
        <Spinner />
      ) : !topQuestions.length ? (
        <EmptyQuestions view={"Ничего не найдено"} />
      ) : isError ? (
        <EmptyQuestions view={"Вышла ошибка"} />
      ) : (
        <CardContainer>
          {topQuestions.map((question) => (
            <TopQuestionItem question={question} key={question.question_id} />
          ))}
        </CardContainer>
      )}
    </Modal>
  );
};

export default memo(TopQuestions);
