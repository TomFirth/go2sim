import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { activateSimRequest, clearError } from "../store/simSlice";

const ActivatePage = () => {
  const [iccid, setIccid] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.sims);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = iccid.trim();

    if (trimmed.length !== 19) {
      alert("ICCID must be 19 digits");
      return;
    }

    dispatch(activateSimRequest({ iccid: trimmed }));
    setIccid("");
  };

  return (
    <div>
      <h2>Activate SIM</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter 19-digit ICCID"
          value={iccid}
          onChange={(e) => setIccid(e.target.value)}
          maxLength={19}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Activating..." : "Activate SIM"}
        </button>
      </form>

      {error && (
        <div className="clearError">
          {error}
          <button onClick={() => dispatch(clearError())}>x</button>
        </div>
      )}
    </div>
  );
};

export default ActivatePage;