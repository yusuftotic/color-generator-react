import { createSlice } from "@reduxjs/toolkit";

import { addHexCodeToStorage } from "../helpers/storageUtils";

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    tab: 'hex',
    hex: '#A91D5F',
    rgb: 'rgb(169, 29, 95)',
    hexCodes: [],
    rgbCodes: []
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setHex: (state, action) => {
      state.hex = action.payload;
      addHexCodeToStorage(action.payload);
    },
    setRgb: (state, action) => {
      state.rgb = action.payload;
    },
    setHexCodes: (state, action) => {
      state.hexCodes = action.payload;
    },
    setRgbCodes: (state, action) => {
      state.rgbCodes = action.payload;
    }
  }
});

export const { setTab, setHex, setRgb, setHexCodes, setRgbCodes } = colorSlice.actions;

export default colorSlice.reducer;