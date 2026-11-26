// Globalne konstante sajta

// Kanonski domen: u produkciji uvek https://www.pajatrava.rs (Vercel podrazumevano preusmerava apex na www).
const PROD_URL = "https://www.pajatrava.rs";
export const SITE_URL = (
  process.env.NODE_ENV === "production"
    ? PROD_URL
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
).replace(/\/$/, "");

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Paja Trava PR";

export const SITE_DESCRIPTION =
  "Paja Trava PR – održavanje zelenih površina, košenje trave, orezivanje žive ograde, sečenje stabala, zasnivanje travnjaka, sadnja i automatski zalivni sistemi Hunter.";
export const PHONE_DISPLAY = "060 028 7145";
export const PHONE_TEL = "+381600287145";
export const EMAIL = "pavelirsaj@gmail.com";
