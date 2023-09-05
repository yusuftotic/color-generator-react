import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    hex: '#A91D5F',
    rgb: 'rgb(169, 29, 95)',
    tab: 'hex'
  },
  reducers: {
    setHex: (state, action) => {
      state.hex = action.payload;
    },
    setRGB: (state, action) => {
      state.rgb = action.payload;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    }
  }
});

export const { setHex, setRGB, setTab } = colorSlice.actions;

export default colorSlice.reducer;