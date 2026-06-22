import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import simReducer from "./simSlice";
import simSaga from "./simSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    sims: simReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(simSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;