import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { activateSimRequest, clearError, clearResult } from "../store/simSlice";
import ActivateForm from "../components/ActivateForm";

const ActivatePage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, activationResult } = useAppSelector(state => state.sims);

  const handleSubmit = (iccid: string) => {
    dispatch(activateSimRequest({ iccid }));
  };

  return (
    <div>
      <h2>Activate New SIM</h2>

      <ActivateForm loading={loading} onSubmit={handleSubmit} />

      {error && (
        <div className="banner banner-error">
          <span>{error}</span>
          <button className="close-btn" onClick={() => dispatch(clearError())}>✕</button>
        </div>
      )}

      {activationResult && (
        <div className={`banner banner-${activationResult.status === "active" ? "success" : "error"}`}>
          <span>
            SIM {activationResult.iccid} activation {activationResult.status}
            {activationResult.phoneNumber && ` (Phone: ${activationResult.phoneNumber})`}
          </span>
          <button className="close-btn" onClick={() => dispatch(clearResult())}>✕</button>
        </div>
      )}
    </div>
  );
};

export default ActivatePage;
