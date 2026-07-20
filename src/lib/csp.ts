/**
 * Content-Security-Policy tuned for this static Next.js portfolio.
 * Dev needs 'unsafe-eval' for Next.js tooling; production keeps a tighter script policy.
 *
 * เดิมเปิด worker-src/child-src เป็น blob: ไว้ให้ @react-pdf/renderer สร้าง PDF ฝั่ง client
 * ตอนนี้เรซูเม่เป็นไฟล์ static แล้ว จึงปิดกลับเป็น 'none'
 */
export function buildContentSecurityPolicy(): string {
  const isDev = process.env.NODE_ENV === "development";

  const scriptSrc = isDev
    ? "'self' 'unsafe-inline' 'unsafe-eval'"
    : "'self' 'unsafe-inline'";

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self'",
    "connect-src 'self'",
    "worker-src 'none'",
    "child-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ];

  return directives.join("; ");
}
