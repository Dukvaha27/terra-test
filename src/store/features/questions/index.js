import { createSelector, createSlice } from "@reduxjs/toolkit";
import {questionsReducer} from "./reducer";

const slice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  extraReducers: questionsReducer
});

const questionsSelector = (state) => state.questions;

export const questionSelect = createSelector(
  questionsSelector,
  (state) => state.questions
);

export const loadingSelect = createSelector(
    questionsSelector,
    state => state.loading
)

export const errorSelect = createSelector(
    questionsSelector,
    state => state.error
)

export default slice.reducer;
