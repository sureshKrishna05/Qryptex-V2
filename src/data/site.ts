// src/data/site.ts
export const siteConfig = {
  name: "Qryptex",
  tagline: "Security First. Innovation Always.",
  description:
    "Security-first technology services company helping organizations build secure software, AI solutions, and custom technology systems.",
  url: "https://qryptex.in",

  flashNews: {
    enabled: true,
    badge: "IBM QISKIT FALL FEST 2026",
    title: "Power the Future of Quantum Computing",
    description:
      "Join Qryptex in supporting the official IBM Qiskit Fall Fest 2026 at Bharathidasan University. Showcase your brand, connect with exceptional student talent, and engage with researchers and developers driving the future of quantum technologies.",
    ctaText: "Become an Industry Partner",
    // CHANGED: Direct native WhatsApp deep link with pre-filled inquiry
    href: "whatsapp://send?phone=917598576406&text=Hello%2C%20I%20am%20interested%20in%20partnering%20with%20IBM%20Qiskit%20Fall%20Fest%202026%20at%20Bharathidasan%20University.",
    delayMs: 800,
  },
} as const;