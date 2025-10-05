import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

// 내 정보 조회
router.get("/", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, email: true, name: true, role: true },
  });
  res.json(user);
});

// 내 정보 수정
router.patch("/", authMiddleware, async (req, res) => {
  const { email, password, name } = req.body;

  const updates = {};
  if (email) updates.email = email;
  if (name) updates.name = name;
  if (password) updates.password = await bcrypt.hash(password, 10);

  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: updates,
    select: { id: true, email: true, name: true, role: true },
  });

  res.json({ message: "Profile updated", user });
});

// 계정 삭제
router.delete("/", authMiddleware, async (req, res) => {
  await prisma.user.delete({ where: { id: req.user.id } });
  res.json({ message: "Account deleted successfully" });
});

export default router;