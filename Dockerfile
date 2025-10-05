# 1. Node.js 환경 설정
FROM node:20

# 2. 작업 폴더 설정
WORKDIR /app

# 3. package.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. Prisma 클라이언트 생성 (필수)
RUN npx prisma generate

# 6. 포트 설정
EXPOSE 4000

# 7. 서버 실행 명령
CMD ["npm", "run", "dev"]