import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  hydrated: boolean;
}

export const initialState: AppState = {
  hydrated: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSideBar: (state, action) => ({
      ...state,
      sideBar: action.payload,
    }),
  },
});

export const {
  // setHydrate,
  setSideBar,
} = slice.actions;

export default slice.reducer;
