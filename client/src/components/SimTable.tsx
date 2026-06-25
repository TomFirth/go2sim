import React from "react";
import { SIMCard } from "../types/sim";

interface Props {
  sims: SIMCard[];
}

const SimTable: React.FC<Props> = ({ sims }) => {
  if (!sims.length) {
    return <p>No SIMs found</p>;
  }

  return (
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
        {sims.map((sim) => (
          <tr key={sim.id}>
            <td>{sim.id}</td>
            <td>{sim.iccid}</td>
            <td>{sim.phoneNumber ?? "-"}</td>
            <td className={`status-${sim.status}`}>
              {sim.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimTable;
