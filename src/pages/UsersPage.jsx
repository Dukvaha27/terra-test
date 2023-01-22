import React from "react";
import { Flex } from "../ui/Flex";
import { useGetUsersQuery } from "../store/features/users";
import EmptyQuestions from "../components/EmptyQuestions";
import Spinner from "../ui/Spinner";
import Card from "../ui/card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DivClamp } from "../ui/DivClamp";

const Content = styled.div`
  h1 {
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`;

const UsersPage = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  if (isError) {
    return <EmptyQuestions view={"Error "} />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Flex width={"10rem"}>
      {users.map((user) => (
        <Card width={"10rem"} key={user.user_id}>
          <Flex>
            <img src={user.profile_image} alt="" width="30" height="30" />
            <Content>
              <h1>
                <Link to={`/top-tags/${user.user_id}`}>
                  <DivClamp>{user.display_name}</DivClamp>
                </Link>
              </h1>
            </Content>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default UsersPage;
