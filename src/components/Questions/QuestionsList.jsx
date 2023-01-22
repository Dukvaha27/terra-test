import React, {memo, useMemo, useState} from "react";
import Table from "../../ui/Table";
import Th from "../../ui/Table/Th";

import Spinner from "../../ui/Spinner";
import useQuestions from "../../services/questions";
import SingleQuestion from "../SingleQuestion";
import QuestionItem from "./QuestionItem";
import EmptyQuestions from "../EmptyQuestions";
import Rotate from "../Rotate";
import arrow from "../../assests/arrow.svg";

const QuestionsList = () => {
  const { questions, loading, error } = useQuestions();
  const [rotate, setRotate] = useState(false);

  const sortQuestions = useMemo(() => {
    return [...questions].sort((a, b) => {
      return rotate ? a.answer_count - b.answer_count:b.answer_count - a.answer_count;
    });
  }, [rotate, questions]);

  const [open, setOpen] = useState(false);
  if (error) {
    return <EmptyQuestions view={"Произошла непредвиденная ошибка!"} />;
  }
  if (loading) {
    return <Spinner />;
  }

  if (!questions.length) {
    return <EmptyQuestions view={"По вашему запросу ничего не найдено!"} />;
  }


  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>author</Th>
            <Th>theme</Th>
            <Th onClick={() => setRotate(!rotate)}>
              answers count
              <Rotate rotate={rotate}>{arrow}</Rotate>
            </Th>
            <Th>tags</Th>
          </tr>
        </thead>
        <tbody>
          {sortQuestions.map((question) => (
            <QuestionItem
              question={question}
              key={question.question_id}
              onClick={setOpen}
            />
          ))}
        </tbody>
      </Table>
      <SingleQuestion open={open} setOpen={setOpen} />
    </>
  );
};

export default memo(QuestionsList);
