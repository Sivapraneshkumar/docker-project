# ----------- Stage 1: Builder -----------
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ----------- Stage 2: Production -----------
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app /app

ENV NODE_ENV=production
CMD ["npm", "start"]
