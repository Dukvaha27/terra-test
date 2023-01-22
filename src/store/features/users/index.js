import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api, SERVICES } from "../../api";

//2.3/users?order=desc&sort=reputation&site=stackoverflow
const {
  users,
  params,
  reputation,
  site,
  top_tags,
  tags,
  top_questions,
  activity,
} = SERVICES;

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: api }),
  tagTypes: ["users"],
  reducerPath: "usersPath",
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `${users}${params}${reputation}${site}`,
      transformResponse: (res) => res.items,
    }),
    getTopTagsByUser: build.query({
      query: (id) => `${users}/${id}${top_tags}?site=stackoverflow`,
      transformResponse: (res) => res.items,
    }),
    getTopQuestionsByTags: build.query({
      query: ({ id, tag }) =>
        `${users}/${id}${tags}/${tag}${top_questions}${params}${activity}${site}`,
      transformResponse: (res) => res.items,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetTopTagsByUserQuery,
  useGetTopQuestionsByTagsQuery,
} = usersApi;
