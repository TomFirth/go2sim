import React from "react";

export interface SIMCard {
  id: number;
  iccid: string;
  phoneNumber: string | null;
  status: "pending" | "active" | "failed";
}

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
          <th align="left">ID</th>
          <th align="left">ICCID</th>
          <th align="left">Phone</th>
          <th align="left">Status</th>
        </tr>
      </thead>

      <tbody>
        {sims.map((sim) => (
          <tr key={sim.id}>
            <td>{sim.id}</td>
            <td>{sim.iccid}</td>
            <td>{sim.phoneNumber ?? "-"}</td>
            <td>
              <span
                style={{
                  color:
                    sim.status === "active"
                      ? "green"
                      : sim.status === "failed"
                      ? "red"
                      : "orange"
                }}
              >
                {sim.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimTable;