/** @type {import('next').NextConfig} */

const nextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://0.0.0.0:3000",
    "ws://localhost:3000",
    "ws://0.0.0.0:3000",
    "http://frontend:3000",  // Nome do serviço no Docker
    "ws://frontend:3000",   // WebSocket no Docker
  ],
};
export default nextConfig;
