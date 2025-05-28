# Etapa de build
FROM node:22.14.0-alpine3.21 AS builder
WORKDIR /app

# Não precisa criar usuário/grupo, já existe 'node' na imagem oficial

COPY package*.json ./
RUN npm install

COPY . .

#RUN chown -R node:node /app
RUN npx prisma generate

# Etapa final
FROM node:22.14.0-alpine3.21 AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.env ./   # Descomente se precisar copiar o .env
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

#RUN chown -R node:node /app

#USER node

CMD ["npm", "run", "dev"]
