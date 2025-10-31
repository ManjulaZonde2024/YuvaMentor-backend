import express from "express";
import { getMentorships, createMentorship } from "../controllers/mentorshipController.js";

const router = express.Router();

router.get("/list", getMentorships);
router.post("/create", createMentorship);

export default router;
