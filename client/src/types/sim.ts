export type SimStatus = "pending" | "active" | "failed";

export interface SIMCard {
  id: number;
  iccid: string;
  phoneNumber: string | null;
  status: SimStatus;
}

export interface ActivateSimRequest {
  iccid: string;
}

export interface SimState {
  sims: SIMCard[];
  loading: boolean;
  error: string | null;
}
