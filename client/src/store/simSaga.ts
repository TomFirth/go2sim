import { call, put, takeLatest, all } from "redux-saga/effects";
import { simApi } from "../services/simApi";
import {
  fetchSimsRequest,
  fetchSimsSuccess,
  fetchSimsFailure,
  activateSimRequest,
  activateSimSuccess,
  activateSimFailure
} from "./simSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { SIMCard } from "../types/sim";

function* fetchSimsSaga() {
  try {
    const data: SIMCard[] = yield call(simApi.fetchSims);
    yield put(fetchSimsSuccess(data));
  } catch (error: any) {
    yield put(fetchSimsFailure(error.message || "Failed to fetch SIMs"));
  }
}

function* activateSimSaga(action: PayloadAction<{ iccid: string }>) {
  try {
    const newSim: SIMCard = yield call(simApi.activateSim, action.payload);

    yield put(activateSimSuccess(newSim));
  } catch (error: any) {
    yield put(activateSimFailure(error.message || "Activation failed"));
  }
}

function* watchFetchSims() {
  yield takeLatest(fetchSimsRequest.type, fetchSimsSaga);
}

function* watchActivateSim() {
  yield takeLatest(activateSimRequest.type, activateSimSaga);
}

export default function* simSaga() {
  yield all([
    watchFetchSims(),
    watchActivateSim()
  ]);
}
