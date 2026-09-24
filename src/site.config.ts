/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — edit this file and the whole site follows,
 *  including astro.config.ts (canonical URLs) and the sitemap.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const SITE = {
  /** Shown in the header, footer, <title> and Open Graph tags. */
  name: 'Your Name',

  /** Canonical origin. Must be the real production URL, no trailing slash. */
  domain: 'https://example.com',

  /** One line under your name on the home page. */
  tagline: 'Short one-line description of what you do.',

  /** Public contact address. Used on home + privacy policy. */
  email: 'hello@example.com',

  /**
   * Who is legally responsible for the site (privacy policy "data controller").
   * For a personal site this is usually just your name.
   */
  legalEntity: 'Your Name',

  /** Governing jurisdiction named in the privacy policy. */
  country: 'India',

  /** Shown as "Last updated" on the privacy policy. Bump it when you edit it. */
  privacyUpdated: '2026-09-24',
} as const;

/** Nav links rendered in the header and footer. */
export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/privacy', label: 'Privacy' },
] as const;
