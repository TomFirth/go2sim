import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSimsRequest } from "../store/simSlice";

const SimsPage = () => {
  const dispatch = useAppDispatch();

  const sims = useAppSelector((state) => state.sims.sims);
  const loading = useAppSelector((state) => state.sims.loading);
  const error = useAppSelector((state) => state.sims.error);

  useEffect(() => {
    console.log("SimsPage mounted → fetching sims");
    dispatch(fetchSimsRequest());
  }, [dispatch]);

  return (
    <div>
      <h2>SIM Activation History</h2>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ICCID</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : sims.length === 0 ? (
            <tr>
              <td colSpan={4}>No SIMs found</td>
            </tr>
          ) : (
            sims.map((sim) => (
              <tr key={sim.id}>
                <td>{sim.id}</td>
                <td>{sim.iccid}</td>
                <td>{sim.phoneNumber ?? "-"}</td>
                <td>{sim.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SimsPage;