import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postActions";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  filteredPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    searchPosts: (state, { payload }) => {
      state.filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(payload.toLowerCase()) ||
          post.text.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.posts = payload;
        state.filteredPosts = payload;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { searchPosts } = postSlice.actions;

export const selectPosts = (state) => state.posts.filteredPosts;
export const selectLoading = (state) => state.posts.loading;
export const selectErrors = (state) => state.posts.error;

export default postSlice.reducer;
