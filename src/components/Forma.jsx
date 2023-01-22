import React, { memo, useCallback, useState } from "react";
import useQuestions from "../services/questions";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Form = () => {
  const { searchQuestionHandler } = useQuestions();
  const [value, setValue] = useState("");

  const searchHandler = useCallback(() => {
    searchQuestionHandler(value);
  }, [value]);

  return (
    <Div>
      <Input
        placeholder={"Поиск..."}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <Button onClick={searchHandler}>поиск</Button>
    </Div>
  );
};

export default memo(Form);
