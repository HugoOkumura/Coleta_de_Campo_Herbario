# escape=`
# Etapa de build
FROM node:22.14.0-alpine3.21 AS builder
WORKDIR /app

# Verifica se o grupo/node já existe antes de criar
RUN if ! getent group node >/dev/null; then `
      addgroup -g 1000 node; `
    fi && `
    if ! getent passwd node >/dev/null; then `
      adduser -u 1000 -G node -s /bin/sh -D node; `
    fi

COPY package*.json ./
RUN npm install

COPY . .
RUN chown -R node:node /app

RUN npx prisma generate

# Etapa final
FROM node:22.14.0-alpine3.21 AS runner
WORKDIR /app
# ENV NODE_ENV production

COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.env ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

RUN chown -R node:node /app
USER node

CMD ["npm", "run", "dev"]
