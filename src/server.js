import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import meRoutes from "./routes/me.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 라우트 연결
app.use("/auth", authRoutes);
app.use("/me", meRoutes);

// 서버 실행
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Auth server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("✅ MCP Auth Backend is running!");
});