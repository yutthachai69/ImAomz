import type { NextConfig } from "next";
import { buildContentSecurityPolicy } from "./src/lib/csp";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "X-XSS-Protection", value: "0" },
  {
    key: "Content-Security-Policy",
    value: buildContentSecurityPolicy(),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      // เพิ่ม hostname เมื่อใส่ image เป็น URL ภายนอกใน projects.ts
      // { protocol: "https", hostname: "example.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
