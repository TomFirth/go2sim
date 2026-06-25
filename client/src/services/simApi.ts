import { SIMCard, ActivateSimRequest } from "../types/sim";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

export const simApi = {
  async fetchSims(): Promise<SIMCard[]> {
    const res = await fetch(`${API_URL}/sims`);

    if (!res.ok) {
      throw new Error("Failed to fetch SIMs");
    }

    return res.json();
  },

  async activateSim(payload: ActivateSimRequest): Promise<SIMCard> {
    const res = await fetch(`${API_URL}/sims/activate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const error = await res.json().catch(() => null);
      throw new Error(error?.message || "Failed to activate SIM");
    }

    return res.json();
  }
};
