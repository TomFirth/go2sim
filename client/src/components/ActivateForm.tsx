import React, { useState } from "react";

interface Props {
  onSubmit: (iccid: string) => void;
  loading?: boolean;
}

const ActivateForm: React.FC<Props> = ({ onSubmit, loading = false }) => {
  const [iccid, setIccid] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = iccid.trim();

    if (trimmed.length !== 19) {
      alert("ICCID expected to be 19 digits");
      return;
    }

    onSubmit(trimmed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="19-digit ICCID"
        value={iccid}
        onChange={(e) => setIccid(e.target.value)}
        maxLength={19}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Activating..." : "Activate SIM"}
      </button>
    </form>
  );
};

export default ActivateForm;