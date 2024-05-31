import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiClient from "api/axiosClient";

export const getPosts = createAsyncThunk(
  "posts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await ApiClient.get(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
