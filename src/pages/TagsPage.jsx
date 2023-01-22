import React from "react";
import { useGetTagsQuery } from "../store/features/tags";
import Card from "../ui/card";
import Spinner from "../ui/Spinner";
import EmptyQuestions from "../components/EmptyQuestions";
import {Flex} from "../ui/Flex";

const TagsPage = () => {
  const { data:tags, isLoading, isError } = useGetTagsQuery();

  if (isError) {
    return <EmptyQuestions view={'При подгрузке тэгов произошла ошибка'}/>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex>
      {tags.map(({ name }, idx) => (
        <Card key={idx}>{name}</Card>
      ))}
    </Flex>
  );
};

export default TagsPage;
