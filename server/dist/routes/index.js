"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { AppDataSource } = require("../index");
const { SIMCard, SimStatus } = require("../entities/db");
const router = express.Router();
router.get("/", async (_req, res) => {
    const repo = AppDataSource.getRepository(SIMCard);
    const sims = await repo.find({
        order: {
            id: "DESC"
        }
    });
    res.json(sims);
});
router.post("/activate", async (req, res) => {
    try {
        const { iccid } = req.body;
        if (!iccid || iccid.length !== 19) {
            return res.status(400).json({
                message: "ICCID must be 19 digits"
            });
        }
        const repo = AppDataSource.getRepository(SIMCard);
        const success = Math.random() > 0.3;
        const sim = repo.create({
            iccid,
            status: success ? SimStatus.ACTIVE : SimStatus.FAILED,
            phoneNumber: success ? generatePhoneNumber() : null
        });
        const saved = await repo.save(sim);
        return res.status(201).json(saved);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Activation failed"
        });
    }
});
function generatePhoneNumber() {
    const random = Math.floor(100000000 + Math.random() * 900000000);
    return `07${random}`;
}
module.exports = router;
//# sourceMappingURL=index.js.map