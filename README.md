# 🧠 MCP Auth Backend

Node.js + Express + Prisma 기반의 인증 서버입니다.  
Docker 컨테이너로 패키징되어 Supabase(PostgreSQL)와 연동되며,  
Render를 통해 자동 배포됩니다.

---

## 🚀 기술 스택
JavaScript (Node.js 20), Express.js, Prisma ORM, JWT(jsonwebtoken), bcrypt, dotenv, cors  
Database: Supabase (PostgreSQL)  
배포: Docker + Render (Region: Singapore, Plan: Free)

---

## 📦 주요 기능
- 회원가입: `POST /auth/register`
- 로그인: `POST /auth/login`
- 내 정보 확인: `GET /auth/me`
- 토큰 재발급: `POST /auth/refresh`

---

## Symphony MCP Auth Backend API Guide

Base URL: https://symphony-mcp-auth-backend.onrender.com

<!-- 회원가입 -->
POST https://symphony-mcp-auth-backend.onrender.com/auth/register
Body (raw / JSON):
{
  "email": "test@example.com",
  "password": "12345678",
  "name": "jonggwan",
  "role": "user"
}
Response:
{
  "id": "uuid-unique-id",
  "email": "test@example.com"
}

<!-- 로그인 -->
POST https://symphony-mcp-auth-backend.onrender.com/auth/login
Body (raw / JSON):
{
  "email": "test@example.com",
  "password": "12345678"
}
Response:
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}

<!-- 정보 조회 -->
GET https://symphony-mcp-auth-backend.onrender.com/me
Headers:
Authorization: Bearer <JWT_TOKEN>
Response:
{
  "id": "uuid-unique-id",
  "email": "test@example.com",
  "name": "jonggwan",
  "role": "user"
}

<!-- 계정 삭제 -->
DELETE https://symphony-mcp-auth-backend.onrender.com/me
Headers:
Authorization: Bearer <JWT_TOKEN>
Response:
{
  "message": "User deleted successfully"
}

## 🌐 배포 주소
https://symphony-mcp-auth-backend.onrender.com  
예시 요청:  
`POST https://symphony-mcp-auth-backend.onrender.com/auth/login`

---

## ⚙️ 로컬 실행 방법

```bash
git clone https://github.com/BlueLemon18/Symphony-mcp-auth-backend.git
cd Symphony-mcp-auth-backend
cp .env.example .env

# .env 파일을 열고 아래와 같이 수정합니다.
# (비밀번호는 Supabase Database > Connection string에서 복사)
DATABASE_URL="postgresql://postgres:<비밀번호>@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require"
JWT_SECRET="supersecretjwt"
JWT_REFRESH_SECRET="superrefreshsecret"
PORT=4000

# Docker를 사용하여 실행합니다.
docker build -t mcp-auth-backend .
docker run -p 4000:4000 --env-file .env mcp-auth-backend

# 성공 시 다음 메시지가 출력됩니다:
✅ Auth server running on port 4000

GitHub 저장소: https://github.com/BlueLemon18/Symphony-mcp-auth-backend
배포 URL: https://symphony-mcp-auth-backend.onrender.com

##
Supabase 접근 방법:
각 팀원은 Supabase에 로그인 후
Settings → Database → Connection string 메뉴에서
자신의 DATABASE_URL을 복사하여 .env에 등록합니다.

Render가 GitHub main 브랜치를 감시하고 있으며,
git push 시 자동으로 빌드 및 배포가 이루어집니다.