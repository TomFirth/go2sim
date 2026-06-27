import express, { Request, Response } from "express";
import AppDataSource from "../data-source";
import { SIMCard, SimStatus } from "../entities/SIMCard";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(SIMCard);
  const sims = await repo.find({
    order: { id: "DESC" }
  });
  res.json(sims);
});

router.post("/activate", async (req: Request, res: Response) => {
  try {
    const { iccid } = req.body;

    if (!iccid || iccid.length !== 19) {
      return res.status(400).json({ message: "ICCID must be 19 digits" });
    }

    const repo = AppDataSource.getRepository(SIMCard);
    const existing = await repo.findOne({ where: { iccid } });

    if (existing) {
      return res.status(409).json({ message: "SIM already exists" });
    }

    const success = Math.random() > 0.5;
    const sim = repo.create({
      iccid,
      status: success ? SimStatus.ACTIVE : SimStatus.FAILED,
      phoneNumber: success ? generatePhoneNumber() : null
    });

    const saved = await repo.save(sim);
    return res.status(201).json(saved);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Activation failed" });
  }
});

function generatePhoneNumber() {
  const digits = Math.floor(100000000 + Math.random() * 900000000);
  return `07${digits}`;
}

export default router;
