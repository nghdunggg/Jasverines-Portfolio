/**
 * ============================================================
 *  SHUTTER STUDIO — PHOTO CONFIGURATION
 *  Edit this file to add / remove / reorder your photos.
 * ============================================================
 *
 *  HOW TO GET A DIRECT IMAGE LINK:
 *
 *  ▸ GOOGLE DRIVE:
 *    1. Right-click your photo → "Share" → "Anyone with the link"
 *    2. Copy the share link. It looks like:
 *       https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *    3. Paste it below — the site auto-converts it for you.
 *
 *  ▸ DROPBOX:
 *    1. Click "Share" on your photo → "Copy link"
 *    2. Change "?dl=0" at the end to "?raw=1"
 *    3. Paste the modified link below.
 *
 *  ▸ FIELDS:
 *    - url      : your Google Drive or Dropbox link (required)
 *    - title    : photo title shown on hover
 *    - category : used for filter tabs — pick from:
 *                 "editorial" | "portrait" | "lifestyle" | "brand"
 *    - featured : true = shows in hero strip (optional)
 * ============================================================
 */

const SITE_CONFIG = {
  studioName: "Shutter Studio",
  tagline: "Visual stories, carefully made.",
  instagramHandle: "@shutterstudio",    // optional
  email: "hello@shutterstudio.com",     // optional
  bookingUrl: "",                        // link to booking form/page
};

const PHOTOS = [
  // ── ADD YOUR PHOTOS BELOW ──────────────────────────────────
  // Each photo is one { } block. Separate them with commas.

  {
    url: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_FILE_ID/view?usp=sharing",
    title: "Serena",
    category: "portrait",
    featured: true,
  },
  {
    url: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_FILE_ID_2/view?usp=sharing",
    title: "Morning Edit",
    category: "lifestyle",
  },
  {
    url: "https://www.dropbox.com/scl/fi/REPLACE/yourphoto.jpg?raw=1",
    title: "Velvet Noir",
    category: "editorial",
  },

  // ── KEEP ADDING MORE BELOW ─────────────────────────────────
  // {
  //   url: "YOUR_LINK_HERE",
  //   title: "Photo Title",
  //   category: "portrait",
  // },
];