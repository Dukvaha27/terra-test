import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api, SERVICES } from "../../api";
import { searchQuestions } from "./actionTypes";

const { search, params, site, activity } = SERVICES;

export const searchQuetion = createAsyncThunk(
  searchQuestions,
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${api}${search}${params}${activity}q=${value}${site}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
