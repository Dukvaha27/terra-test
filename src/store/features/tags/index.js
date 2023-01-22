import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api, SERVICES } from "../../api";

const { tags, params, site } = SERVICES;

export const tagsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: api }),
  tagTypes: [""],
  reducerPath: "tagsPath",
  endpoints: (build) => ({
    getTags: build.query({
      query: () => `${tags}${params}${site}`,
      transformResponse: (res) => res.items,
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
