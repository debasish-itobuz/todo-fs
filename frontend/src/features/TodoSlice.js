import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk(
  "TodoSlice/getTodo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/todo/getAll");
      const todo = response.data.data || [];

      return { todo };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    todos: [],
    count: 0,
    loading: false,
    error: null,
  },

  reducers: {
    setCount: (state) => {
      state.count += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload.todo;
        state.error = null;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default TodoSlice.reducer;

export const { setCount } = TodoSlice.actions;
