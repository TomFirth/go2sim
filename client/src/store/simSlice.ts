import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SIMCard, SimStatus, SimState } from "../types/sim";

const initialState: SimState = {
  sims: [],
  loading: false,
  error: null,
  filter: "all",
  activationResult: null
};

const simSlice = createSlice({
  name: "sims",
  initialState,

  reducers: {
    fetchSimsRequest(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSimsSuccess(state, action: PayloadAction<SIMCard[]>) {
      state.loading = false;
      state.sims = action.payload;
    },

    fetchSimsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    activateSimRequest(state, _action: PayloadAction<{ iccid: string }>) {
      state.loading = true;
      state.error = null;
      state.activationResult = null;
    },

    activateSimSuccess(state, action: PayloadAction<SIMCard>) {
      state.loading = false;
      state.sims = [action.payload, ...state.sims];
      state.activationResult = action.payload;
    },

    activateSimFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.activationResult = null;
    },

    clearError(state) {
      state.error = null;
    },

    clearResult(state) {
      state.activationResult = null;
    },

    setFilter(state, action: PayloadAction<SimStatus | "all">) {
      state.filter = action.payload;
    }
  }
});

export const {
  fetchSimsRequest,
  fetchSimsSuccess,
  fetchSimsFailure,
  activateSimRequest,
  activateSimSuccess,
  activateSimFailure,
  clearError,
  clearResult,
  setFilter
} = simSlice.actions;

export default simSlice.reducer;
