import React from "react";
import QuestionsPage from "./QuestionsPage";
import { Route, Routes } from "react-router-dom";
import Container from "../ui/Container";
import Sidebar from "../components/Sidebar";
import TagsPage from "./TagsPage";
import UsersPage from "./UsersPage";
import TopTags from "./TopTags";

const pages = [
  {
    key: 1,
    element: <QuestionsPage />,
    path: "/",
  },
  {
    key: 2,
    element: <TagsPage />,
    path: "/tags",
  },
  {
    key: 3,
    element: <UsersPage />,
    path: "/users",
  },
  {
    key: 4,
    element: <TopTags />,
    path: "/top-tags/:id",
  },
];

const Pages = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        {pages.map((page) => (
          <Route {...page} />
        ))}
      </Routes>
    </Container>
  );
};

export default Pages;
