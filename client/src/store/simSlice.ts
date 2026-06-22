import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SimStatus = "pending" | "active" | "failed";

export interface SIMCard {
  id: number;
  iccid: string;
  phoneNumber: string | null;
  status: SimStatus;
}

export interface SimState {
  sims: SIMCard[];
  loading: boolean;
  error: string | null;
}

const initialState: SimState = {
  sims: [],
  loading: false,
  error: null
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
    },

    activateSimSuccess(state) {
      state.loading = false;
    },

    activateSimFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    clearError(state) {
      state.error = null;
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

  clearError
} = simSlice.actions;

export default simSlice.reducer;