import "./App.css";

import React, { useEffect } from "react";

import ActivateForm from "./components/ActivateForm";
import SimTable from "./components/SimTable";

import { useAppDispatch, useAppSelector } from "./store/hooks";

import { activateSimRequest, fetchSimsRequest } from "./store/simSlice";

function App() {
  const dispatch = useAppDispatch();

  const { sims, loading } = useAppSelector((state) => state.sims);

  useEffect(() => {
    dispatch(fetchSimsRequest());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>SIM Card Activation</h1>
      </header>

      <main className="app-content">
        <section>
          <h2>Activate SIM</h2>
          <ActivateForm
            loading={loading}
            onSubmit={(iccid) =>
              dispatch(
                activateSimRequest({
                  iccid
                })
              )
            }
          />
        </section>

        <section>
          <h2>Activated SIMs</h2>
          <SimTable sims={sims} />
        </section>
      </main>

    </div>
  );
}

export default App;