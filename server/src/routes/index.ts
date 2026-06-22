import express from "express";
import AppDataSource from "../data-source";
import { SIMCard, SimStatus } from "../entities/SIMCard";

type Request = import("express").Request;
type Response = import("express").Response;

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(SIMCard);

  const sims = await repo.find({
    order: {
      id: "DESC"
    }
  });

  res.json(sims);
});

router.post("/activate", async (req: Request, res: Response) => {
  try {
    const { iccid } = req.body;

    if (!iccid || iccid.length !== 19) {
      return res.status(400).json({
        message: "ICCID must be 19 digits"
      });
    }

    const repo = AppDataSource.getRepository(SIMCard);

    const existing = await repo.findOne({
      where: { iccid }
    });

    if (existing) {
      return res.status(409).json({
        message: "SIM already exists",
        data: existing
      });
    }

    const success = Math.random() > 0.5;

    const sim = repo.create({
      iccid,
      status: success ? SimStatus.ACTIVE : SimStatus.FAILED,
      phoneNumber: success ? generatePhoneNumber() : null
    });

    const saved = await repo.save(sim);

    return res.status(201).json(saved);

  } catch (error: any) {
    console.error("Activate SIM error:", error);

    if (error?.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "SIM already exists"
      });
    }

    return res.status(500).json({
      message: "Activation failed"
    });
  }
});

function generatePhoneNumber() {
  const random = Math.floor(100000000 + Math.random() * 900000000);
  return `07${random}`;
}

export default router;