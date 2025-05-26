# escape=`
# Importa uma imagem oficial do Node.js 22.14.0 Alpine
FROM node:22.14.0-bullseye AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=1024" npm run build
RUN npm run build

FROM node:22.14.0-bullseye AS runner

WORKDIR /app

# ENV NODE_ENV=production `
#     PORT=3000 `
#     NEXT_TELEMERY_DISABLE=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm","run", "dev"]
