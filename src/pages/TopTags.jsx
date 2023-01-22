import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTopTagsByUserQuery } from "../store/features/users";
import { Flex } from "../ui/Flex";
import Card from "../ui/card";
import Spinner from "../ui/Spinner";
import TopQuestions from "../components/TopQuestions";
import styled from "styled-components";

const TagsStyled = styled.span`
  text-decoration: underline;
  color: #8c5c2f;
`;

const TopTags = () => {
  const { id } = useParams();
  const { data: topTags, isLoading } = useGetTopTagsByUserQuery(id);
  const [tag, setTag] = useState("");
  const [show, setShow] = useState(false);

  if (isLoading) return <Spinner />;

  const handleClick = (tag) => {
    setTag(tag);
    setShow(true);
  };
  return (
    <Flex width={"10rem"}>
      {topTags?.map((tag, idx) => (
        <Card key={idx} width={"9rem"} isClicked onClick={() => handleClick(tag.tag_name)}>
          <TagsStyled>
            {tag.tag_name}
          </TagsStyled>
        </Card>
      ))}
      <TopQuestions
        tag={tag}
        id={id}
        open={show}
        onClose={setShow}
      />
    </Flex>
  );
};

export default TopTags;
