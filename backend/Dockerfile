# escape=`
FROM node:22.14.0-alpine3.21 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .

FROM node:22.14.0-alpine3.21 AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src/* ./
COPY --from=builder /app/package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 5000
CMD ["npm", "start"]