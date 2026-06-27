import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSimsRequest, setFilter } from "../store/simSlice";
import SimTable from "../components/SimTable";

const SimsPage = () => {
  const dispatch = useAppDispatch();
  const { sims, loading, filter } = useAppSelector(state => state.sims);

  useEffect(() => {
    dispatch(fetchSimsRequest());
  }, [dispatch]);

  const filteredSims = sims.filter(sim =>
    filter === "all" ? true : sim.status === filter
  );

  return (
    <div>
      <div className="page-header">
        <h2>SIM Activation History</h2>
        <div className="filter-group">
          <label htmlFor="status-filter">Filter Status: </label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value as any))}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {loading && sims.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <SimTable sims={filteredSims} />
      )}
    </div>
  );
};

export default SimsPage;
