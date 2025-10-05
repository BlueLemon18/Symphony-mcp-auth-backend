# 🧠 MCP Auth Backend

Node.js + Express + Prisma + Supabase 기반의 인증 백엔드 서버입니다.  
Docker를 이용해 어디서든 동일한 환경으로 실행 가능하며,  
Render를 통해 클라우드에 배포할 수 있습니다.

---

## ⚙️ Tech Stack

| Category | Tech |
|-----------|------|
| Language | JavaScript (Node.js 20) |
| Framework | Express |
| ORM | Prisma |
| Database | Supabase (PostgreSQL) |
| Auth | JWT (Access / Refresh Token) |
| Container | Docker |
| Deployment | Render (Free Plan) |

---

## 🐳 Local Development (with Docker)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/BlueLemon18/Symphony-mcp-auth-backend.git
cd Symphony-mcp-auth-backend
cp .env.example .env
docker build -t mcp-auth-backend .
docker run -p 4000:4000 --env-file .env mcp-auth-backend