import React from "react";
import Form from "../components/Forma";
import QuestionsList from "../components/Questions/QuestionsList";

const QuestionsPage = () => {
  return (
    <div style={{flex:1}}>
      <Form />
      <QuestionsList />
    </div>
  );
};

export default QuestionsPage;
