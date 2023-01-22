import { configureStore } from "@reduxjs/toolkit";
import questions from "./features/questions";
import { usersApi } from "./features/users";
import { tagsApi } from "./features/tags";

const store = configureStore({
  reducer: {
    questions,
    [usersApi.reducerPath]: usersApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([usersApi.middleware, tagsApi.middleware]),
});

export default store;
