# Ember & Oak — Restaurant Website
### Project Blueprint v1.0 | Frontend Build Plan

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [OODA Decision Framework](#3-ooda-decision-framework)
4. [Tech Stack & Rationale](#4-tech-stack--rationale)
5. [Design System](#5-design-system)
6. [Folder & File Structure](#6-folder--file-structure)
7. [Pages — Full Breakdown](#7-pages--full-breakdown)
8. [Full Website Copy](#8-full-website-copy)
9. [Component Inventory](#9-component-inventory)
10. [Build Phases & Timeline](#10-build-phases--timeline)
11. [Devil's Advocate — Risks & Mitigations](#11-devils-advocate--risks--mitigations)
12. [Optimization Checklist](#12-optimization-checklist)
13. [SEO Strategy](#13-seo-strategy)
14. [Accessibility Checklist](#14-accessibility-checklist)
15. [Deployment Plan](#15-deployment-plan)

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Project Name** | Ember & Oak |
| **Type** | Restaurant / Hospitality Website |
| **Niche** | Wood-fire, farm-to-table, neighbourhood dining |
| **Target Client** | Upscale casual restaurants, bistros, chef-owned eateries |
| **Portfolio Goal** | Demonstrate: multi-page layout, Bootstrap 5 mastery, form handling, interactive menu, gallery lightbox |
| **Pages** | 6 (Home, Menu, Reservations, Our Story, Gallery, Contact) |
| **Stack** | Bootstrap 5, Vanilla JavaScript, HTML5, CSS3 |
| **Build Time** | 10–14 days (solo developer) |
| **Responsive** | Mobile-first, tested at 320px / 768px / 1280px / 1440px |

### Elevator Pitch
> A fire-kissed, farm-to-table restaurant website built with Bootstrap 5 and vanilla JS — showcasing multi-page architecture, interactive menus, reservation forms, and lightbox galleries. Represents a real-world client deliverable for a high-end hospitality brand.

---

## 2. Goals & Success Metrics

### Business Goals (simulated client)
- Drive table reservations via online form
- Showcase menu with weekly-change narrative
- Build brand trust through chef story + photography
- Appear in local "restaurant near me" searches

### Portfolio Goals
- Demonstrate Bootstrap 5 grid, components, and utilities
- Show custom CSS layered on top of Bootstrap (not just vanilla BS)
- Prove form UX competence (validation, Flatpickr, feedback states)
- Display JavaScript interactivity: tabs, modals, lightbox, sticky nav

### Success Metrics (for portfolio presentation)
| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Fully Loaded (3G) | < 4s |
| Mobile score (PageSpeed) | ≥ 85 |
| Forms validated | 100% client-side |
| Cross-browser tested | Chrome, Firefox, Safari, Edge |

---

## 3. OODA Decision Framework

> Applied to each major build decision. Observe → Orient → Decide → Act.

### Loop 1 — Framework Choice
- **Observe:** Client niche is hospitality. Visual weight matters. Speed-to-build matters for portfolio.
- **Orient:** React adds complexity without benefit here (no dynamic data, no state management needed). Bootstrap 5 ships ready-made components (carousel, modal, tabs, accordion) that map perfectly to restaurant UI patterns.
- **Decide:** Bootstrap 5 + Vanilla JS. Zero build tooling. Deliverable fast. Easier for non-dev clients to hand off.
- **Act:** CDN-linked BS5 + custom `style.css` + `main.js`.

### Loop 2 — Navigation Architecture
- **Observe:** 6 pages. Restaurant visitors scan quickly — they want menu, location, book-a-table within 1 click.
- **Orient:** SPA feel is nice but overengineered here. Separate HTML pages = simpler, indexable, faster per-page load.
- **Decide:** Multi-page site with shared nav duplicated across pages + active state set via JS.
- **Act:** Shared nav + footer. Active state set per-page via `window.location.pathname` detection.

### Loop 3 — Reservation Form
- **Observe:** Date/time input (`<input type="datetime-local">`) is ugly and inconsistent across browsers.
- **Orient:** Flatpickr is 16kb, zero-dependency, beautiful, and accessible. Justifies the CDN call.
- **Decide:** Flatpickr for date + time pickers, custom Bootstrap validation for other fields.
- **Act:** Flatpickr + BS5 validation classes + success toast on submit.

### Loop 4 — Image Strategy
- **Observe:** Restaurant site lives or dies by photography. But real photos = heavy = slow.
- **Orient:** Use Unsplash/Pexels compressed placeholder images at 1200px max-width, WebP format where supported, lazy loading on all below-fold images.
- **Decide:** `loading="lazy"` + `<picture>` with WebP + fallback JPEG. Inline critical above-fold image as CSS background.
- **Act:** Document image specs in `assets/README.md`. Use `srcset` for hero.

### Loop 5 — Mobile Navigation
- **Observe:** Restaurant visitors are ≥ 60% mobile. Nav must work perfectly on phone.
- **Orient:** Bootstrap's built-in `navbar-toggler` is functional but generic.
- **Decide:** Customize BS nav with full-screen overlay on mobile + close-on-link-click JS.
- **Act:** Custom `.nav-overlay` class + JS event listener on nav links.

---

## 4. Tech Stack & Rationale

```
Bootstrap 5.3.x       — Grid, components, utilities, forms, modals
Vanilla JavaScript     — Tabs, lightbox, nav, form validation, scroll effects
HTML5                  — Semantic markup, accessibility, SEO structure
CSS3                   — Custom design layer over Bootstrap, CSS variables, animations
Flatpickr 4.x          — Date + time picker for reservation form
Google Fonts           — Cormorant Garamond (display) + Lato (body)
Unsplash/Pexels        — Placeholder photography (compressed, attributed)
```

### Why NOT React/Vite here
- No dynamic data fetching needed
- No component state complexity
- Faster build → faster portfolio deployment
- More impressive to clients who want "simple, maintainable" sites
- Demonstrates you can work without a framework (senior signal)

### CDN Links (add to `<head>`)
```html
<!-- Bootstrap 5.3 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<!-- Flatpickr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

<!-- Custom CSS -->
<link rel="stylesheet" href="assets/css/style.css">
```

```html
<!-- Bottom of <body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="assets/js/main.js"></script>
```

---

## 5. Design System

### Brand Identity
> **Ember & Oak** evokes warmth (fire/ember), rootedness (oak/wood), and craft. The visual identity should feel: warm, organic, editorial, unpretentious luxury.

### Color Palette

```css
:root {
  /* Primary Palette */
  --color-ember:       #C4622D;   /* Primary accent — fire orange-red */
  --color-ember-dark:  #8B3A18;   /* Hover states, deep accents */
  --color-ember-light: #F2D5B8;   /* Backgrounds, tints */

  /* Neutrals */
  --color-oak:         #3B2F1E;   /* Primary text — deep warm brown */
  --color-bark:        #6B5744;   /* Secondary text, muted labels */
  --color-linen:       #FAF6F0;   /* Page background — warm off-white */
  --color-cream:       #F0E9DC;   /* Section alternates, card bg */
  --color-smoke:       #D6CEC4;   /* Borders, dividers */

  /* Functional */
  --color-success:     #3A7D44;
  --color-error:       #B93232;
  --color-white:       #FFFFFF;

  /* Overlay */
  --overlay-dark:      rgba(30, 20, 10, 0.55);
  --overlay-deeper:    rgba(30, 20, 10, 0.75);
}
```

### Typography

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;   /* Headlines, section titles */
  --font-body:    'Lato', system-ui, sans-serif;           /* Body, nav, labels, forms */

  /* Scale */
  --text-xs:   0.75rem;    /* 12px — labels, captions */
  --text-sm:   0.875rem;   /* 14px — meta, small UI */
  --text-base: 1rem;       /* 16px — body default */
  --text-lg:   1.125rem;   /* 18px — lead paragraph */
  --text-xl:   1.5rem;     /* 24px — subheadings */
  --text-2xl:  2rem;       /* 32px — section titles */
  --text-3xl:  3rem;       /* 48px — hero headline */
  --text-4xl:  4.5rem;     /* 72px — hero display (desktop) */

  /* Weight */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-semi:    600;
}
```

### Spacing Scale
```css
:root {
  --space-xs:  0.5rem;    /* 8px */
  --space-sm:  1rem;      /* 16px */
  --space-md:  1.5rem;    /* 24px */
  --space-lg:  3rem;      /* 48px */
  --space-xl:  5rem;      /* 80px */
  --space-2xl: 8rem;      /* 128px */
}
```

### Section Spacing Convention
- Standard section: `padding: var(--space-xl) 0`
- Tight section (dividers, strips): `padding: var(--space-lg) 0`
- Hero: full viewport height (`100vh`) or `min-height: 85vh`

### Border & Radius
```css
--radius-sm:   4px;
--radius-md:   8px;
--radius-pill: 50px;
--border-standard: 1px solid var(--color-smoke);
```

### Breakpoints (Bootstrap 5 defaults)
| Name | Width | Usage |
|---|---|---|
| xs | < 576px | Mobile portrait |
| sm | ≥ 576px | Mobile landscape |
| md | ≥ 768px | Tablet |
| lg | ≥ 992px | Desktop |
| xl | ≥ 1200px | Wide desktop |
| xxl | ≥ 1400px | Ultra-wide |

---

## 6. Folder & File Structure

```
ember-and-oak/
│
├── index.html                  ← Home page
├── menu.html                   ← Menu page
├── reservations.html           ← Reservations page
├── our-story.html              ← Our Story page
├── gallery.html                ← Gallery page
├── contact.html                ← Contact page
│
├── assets/
│   ├── css/
│   │   └── style.css           ← All custom CSS (overrides + extensions)
│   │
│   ├── js/
│   │   ├── main.js             ← Shared JS (nav, scroll, utils)
│   │   ├── menu.js             ← Menu tab logic
│   │   ├── reservations.js     ← Flatpickr init + form validation
│   │   └── gallery.js          ← Lightbox logic
│   │
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-home.webp
│   │   │   ├── hero-home-fallback.jpg
│   │   │   ├── hero-menu.webp
│   │   │   └── hero-story.webp
│   │   │
│   │   ├── food/
│   │   │   ├── starter-01.webp … starter-04.webp
│   │   │   ├── main-01.webp … main-06.webp
│   │   │   ├── dessert-01.webp … dessert-04.webp
│   │   │   └── drinks-01.webp … drinks-04.webp
│   │   │
│   │   ├── gallery/
│   │   │   └── photo-01.webp … photo-12.webp
│   │   │
│   │   ├── team/
│   │   │   ├── chef-anya.webp
│   │   │   └── team-group.webp
│   │   │
│   │   └── brand/
│   │       ├── logo.svg
│   │       ├── logo-white.svg
│   │       └── favicon.ico
│   │
│   └── README.md               ← Image specs + attribution
│
├── README.md                   ← Project overview for portfolio
└── plan.md                     ← This file
```

---

## 7. Pages — Full Breakdown

---

### Page 1: `index.html` — Home

**Goal:** Hook visitor in 5 seconds. Drive to Menu or Reserve.

#### Sections (in order)

```
[1] Navbar            — Fixed, transparent → solid on scroll
[2] Hero              — Full-screen background image, headline, 2 CTAs
[3] Intro Strip       — 3-column icon strip: Hours | Location | Reserve
[4] About Teaser      — Left image + right copy, CTA to Our Story
[5] Featured Dishes   — 3-card grid, dish photo + name + price
[6] Chef Quote        — Full-width dark section, pull quote
[7] Reservations CTA  — Centered CTA block with ember background
[8] Instagram Strip   — 6-image grid (static, simulated)
[9] Footer            — Logo, links, address, socials, copyright
```

#### Component Map
| Section | Bootstrap Components Used | Custom JS |
|---|---|---|
| Navbar | `.navbar`, `.navbar-toggler`, `.collapse` | Scroll-aware class toggle |
| Hero | CSS background, custom overlay | None |
| Intro Strip | `.row`, `.col-md-4`, BS Icons | None |
| About Teaser | `.row.align-items-center`, `.g-5` | None |
| Featured Dishes | `.card`, `.card-img-top`, `.card-body` | None |
| Chef Quote | Custom CSS, `blockquote` | None |
| Reservations CTA | `.btn`, custom section | None |
| Instagram Strip | CSS grid, hover overlay | None |
| Footer | `.row`, BS Icons | None |

---

### Page 2: `menu.html` — Menu

**Goal:** Display current menu. Easy to scan. Appetite-stimulating.

#### Sections

```
[1] Navbar
[2] Page Hero         — Smaller hero, "Our Menu" title, breadcrumb
[3] Menu Note         — Italic intro "Menu changes weekly..." warning
[4] Menu Tabs         — Bootstrap Nav Tabs: Starters | Mains | Desserts | Drinks
[5] Allergen Notice   — Subtle callout box
[6] Reservations CTA  — Reusable CTA component
[7] Footer
```

#### Menu Tab Structure (per tab)
```
[Tab Panel] — e.g. Starters
  ├── Section Header (optional: "Small Plates")
  ├── Menu Item Row (repeats N times):
  │     ├── Item Name          — font-display, 18px
  │     ├── Item Description   — font-body, 14px, color bark
  │     ├── Price              — right-aligned, ember color
  │     └── Divider line
  └── Chef's Note (optional italic callout)
```

#### Full Menu Content

**Starters**
| Dish | Description | Price |
|---|---|---|
| Charred Leek Velouté | Wood-smoked leeks, crème fraîche, chive oil, sourdough croutons | £9 |
| Beetroot & Goat Cheese | Roasted heritage beets, whipped chèvre, hazelnut, watercress | £10 |
| Beef Tartare | Hand-cut Hereford beef, quail egg, capers, cornichon, grilled bread | £13 |
| Burrata | Puglia burrata, heritage tomatoes, basil oil, Maldon sea salt | £12 |
| Scallops | Pan-seared Orkney scallops, cauliflower purée, crispy pancetta, lemon foam | £16 |

**Mains**
| Dish | Description | Price |
|---|---|---|
| Oak-Smoked Duck Breast | Cherry jus, celeriac gratin, charred spring onion, duck fat crouton | £28 |
| Wood-Fire Lamb Rack | Herb crust, roasted garlic, flageolet beans, rosemary jus | £32 |
| Dry-Aged Rib-Eye (250g) | 35-day aged Longhorn, beef dripping chips, watercress, béarnaise | £38 |
| Wild Mushroom Risotto | Porcini & shiitake, aged Parmesan, truffle oil, crispy sage (V) | £22 |
| Whole Roasted Sea Bass | Fennel & orange salsa, saffron potatoes, brown butter, samphire | £26 |
| Confit Chicken | Free-range thigh, leek fondue, chanterelles, chicken jus, gremolata | £24 |

**Desserts**
| Dish | Description | Price |
|---|---|---|
| Burnt Basque Cheesecake | Caramelised top, blackberry coulis, lavender cream | £9 |
| Chocolate Fondant | 70% Valrhona, pistachio gelato, praline crumble | £10 |
| Poached Pear | Earl Grey pear, honey pannacotta, almond tuile | £9 |
| Cheese Board (3 pcs) | Comté, Époisses, Colston Bassett Stilton, quince, crackers | £14 |

**Drinks**
| Category | Item | Price |
|---|---|---|
| Cocktails | Smoked Negroni — bourbon, campari, sweet vermouth, applewood smoke | £14 |
| Cocktails | Oak & Honey — Laphroaig, honey syrup, lemon, thyme | £13 |
| Cocktails | Ember Sour — Mezcal, blood orange, egg white, chilli salt rim | £13 |
| Wine | Sancerre, Domaine Vacheron, 2022 (glass) | £13 |
| Wine | Barolo, Giacomo Conterno, 2019 (glass) | £18 |
| Non-Alcoholic | Seedlip Spice & Tonic | £8 |
| Non-Alcoholic | House Shrub Lemonade (rotating seasonal) | £5 |

---

### Page 3: `reservations.html` — Reservations

**Goal:** Minimize friction. Maximum booking conversion.

#### Sections
```
[1] Navbar
[2] Page Hero         — "Reserve a Table" headline, warm image bg
[3] Reservation Form  — Main booking form (full details below)
[4] Dining Info       — Hours, policies, private dining note
[5] Footer
```

#### Reservation Form Fields
```
[Row 1]  First Name* (col-md-6)    |  Last Name* (col-md-6)
[Row 2]  Email* (col-md-6)         |  Phone* (col-md-6)
[Row 3]  Date* (Flatpickr)         |  Time* (Flatpickr, slots only)
[Row 4]  Party Size* (select 1–12) |  Occasion (select: Birthday/Anniversary/Business/Other)
[Row 5]  Dietary Requirements (textarea, optional)
[Row 6]  Special Requests (textarea, optional)
[Row 7]  [Reserve My Table →] (full-width button)
```

#### Flatpickr Configuration
```javascript
// Date picker
flatpickr("#date", {
  minDate: "today",
  maxDate: new Date().fp_incr(90),  // 90 days forward
  disable: [
    function(date) {
      return (date.getDay() === 1); // disable Mondays (closed)
    }
  ],
  dateFormat: "D, d M Y"
});

// Time picker
flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  minTime: "12:00",
  maxTime: "21:30",
  minuteIncrement: 30  // 30-min slots only
});
```

#### Form Validation (Bootstrap 5)
```javascript
document.querySelector('#reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
    this.classList.add('was-validated');
    return;
  }
  // Simulate submission → show success toast
  showToast('success', 'Table reserved! Confirmation sent to your email.');
  this.reset();
  this.classList.remove('was-validated');
});
```

#### Dining Hours
| Day | Lunch | Dinner |
|---|---|---|
| Tuesday – Friday | 12:00 – 14:30 | 18:00 – 22:00 |
| Saturday | 12:00 – 15:00 | 17:30 – 22:30 |
| Sunday | 12:00 – 16:00 | — |
| Monday | Closed | Closed |

---

### Page 4: `our-story.html` — Our Story

**Goal:** Build brand trust. Create emotional connection.

#### Sections
```
[1] Navbar
[2] Page Hero         — Full-width chef photography
[3] Opening Statement — Large display font, manifesto paragraph
[4] Chef Bio          — Left image (chef portrait) + right text
[5] Philosophy Cards  — 3-column: The Fire | The Farm | The Table
[6] Kitchen Feature   — Alternating image + text (2 rows)
[7] Awards & Press    — Logo strip: publication names/icons
[8] Team              — 4-person grid with names + roles
[9] Reservations CTA  — Reusable
[10] Footer
```

---

### Page 5: `gallery.html` — Gallery

**Goal:** Visual feast. Showcase food + ambiance photography. Lightbox detail view.

#### Sections
```
[1] Navbar
[2] Page Hero         — Minimal. Title only. Image-forward approach.
[3] Filter Strip      — Buttons: All | Food | Ambiance | Events | Kitchen
[4] Photo Grid        — Masonry-style 3-column grid (CSS columns)
[5] Footer
```

#### Gallery Filter JS
```javascript
document.querySelectorAll('.gallery-filter').forEach(btn => {
  btn.addEventListener('click', function() {
    const cat = this.dataset.filter;
    document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    document.querySelectorAll('.gallery-item').forEach(item => {
      if (cat === 'all' || item.dataset.category === cat) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
```

#### Lightbox (Bootstrap Modal)
```javascript
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function() {
    document.querySelector('#lightboxImg').src = this.src;
    document.querySelector('#lightboxCaption').textContent = this.alt;
    new bootstrap.Modal(document.querySelector('#lightboxModal')).show();
  });
});
```

#### Photo Categories (12 images minimum)
| # | Category | Subject |
|---|---|---|
| 01–03 | food | Tartare, duck breast, risotto |
| 04–05 | food | Chocolate fondant, cheese board |
| 06–08 | ambiance | Dining room, bar area, candlelit table |
| 09–10 | kitchen | Chef plating, wood-fire grill |
| 11–12 | events | Private dining, birthday setup |

---

### Page 6: `contact.html` — Contact

**Goal:** Reassurance. Multiple contact paths. Map. Policy clarity.

#### Sections
```
[1] Navbar
[2] Page Hero         — Minimal, "Find Us" title
[3] Contact Split     — Left: info + map | Right: contact form
[4] FAQ Accordion     — 6 common questions
[5] Footer
```

#### Contact Info
```
Address:         14 Ashford Lane, Marylebone, London W1U 3QR
Phone:           +44 (0)20 7946 0823
Email:           hello@emberandoak.co.uk
Reservations:    reservations@emberandoak.co.uk
```

#### Google Maps Embed
```html
<div class="ratio ratio-16x9">
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

> Note: Use a real London coordinate for demo. Replace `pb=...` with actual embed URL from Google Maps → Share → Embed.

#### FAQ Questions
1. Do you accommodate dietary restrictions?
2. Can I book a private dining room?
3. What is your cancellation policy?
4. Do you accept walk-ins?
5. Is there parking nearby?
6. Do you offer gift vouchers?

---

## 8. Full Website Copy

### Navbar
```
Logo:      EMBER & OAK
Nav Links: Home | Menu | Reservations | Our Story | Gallery | Contact
CTA:       Reserve a Table
```

---

### Home Page

**Hero**
```
Headline:    Fire-kissed food. Unhurried evenings.
Subheading:  A neighbourhood restaurant where seasonal ingredients
             meet wood-fire craft. Every plate, a small story.
CTA 1:       View Our Menu
CTA 2:       Reserve a Table
```

**Intro Strip**
```
Icon 1 | Hours
  Tue–Sat: Lunch & Dinner
  Sunday: Lunch Only | Monday: Closed

Icon 2 | Location
  Ashford Lane, Marylebone
  London W1U 3QR

Icon 3 | Reservations
  Book Online or Call Us
  +44 (0)20 7946 0823
```

**About Teaser**
```
Label:    Our Philosophy
Heading:  Honest food. Honest fire.
Body:     We cook what arrives from the farm each morning.
          No frozen shortcuts. No trendy gimmicks. Just honest
          ingredients over an open oak fire — the way it's always
          meant to taste.

          Ember & Oak has been a fixture on Ashford Lane since 2017.
          Not because we follow trends, but because we quietly ignore them.

CTA:      Read Our Story →
```

**Featured Dishes**
```
Label:    From Tonight's Menu
Heading:  What's on the fire.
Body:     Our kitchen wakes with the season. What you see tonight
          may be gone by Thursday — and something even better
          will take its place.
```

**Chef Quote**
```
Quote:         "I don't cook for applause. I cook because
                these ingredients deserve honesty."
Attribution:   — Anya Caldwell, Head Chef & Co-Founder
```

**Reservations CTA Section**
```
Heading:   Ready to join us?
Body:      We hold your table for 15 minutes. Parties of 6 or more,
           please call us directly. Private dining available
           Tuesday through Saturday evenings.
CTA:       Reserve Your Table
Sub-CTA:   Or call +44 (0)20 7946 0823
```

---

### Menu Page

**Page Hero**
```
Heading:   Our Menu
Subtext:   Updated weekly. Driven by what's seasonal, local, and right.
```

**Menu Intro Note**
```
Our menu changes every week based on what arrives from our partner farms
in the Chilterns and Kent. Tonight's selection is current as of this week —
we recommend calling ahead if you have a particular dish in mind.

All dishes are prepared in a kitchen that handles nuts, gluten, dairy,
and shellfish. Please inform your server of any allergies before ordering.
```

**Allergen Notice**
```
Contains dishes with: Gluten | Dairy | Nuts | Shellfish | Eggs
Speak to your server — we will always do our best to accommodate.
(V) = Vegetarian. Vegan options available on request.
```

---

### Reservations Page

**Page Hero**
```
Heading:   Reserve Your Table
Subtext:   We'd love to have you. Book online in under a minute.
```

**Form Heading**
```
Heading:   Make a Reservation
Body:      All fields marked * are required. We'll send a confirmation
           to your email address. For same-day bookings, please call us directly.
```

**Success Toast**
```
✓ Reservation received! A confirmation will arrive in your inbox
  shortly. We look forward to welcoming you.
```

**Dining Policies**
```
• We hold reservations for 15 minutes past the booking time.
• Parties of 6 or more, please call us to book.
• 24-hour cancellation notice appreciated.
• Children welcome. High chairs available on request.
• Private dining available for groups of 12–24. Enquire below.
• We cannot guarantee specific tables, but will always try.
```

---

### Our Story Page

**Opening Statement**
```
Display:  We didn't open Ember & Oak to impress critics.
          We opened it because Marylebone deserved a proper local.
```

**Chef Bio**
```
Label:    Head Chef & Co-Founder
Name:     Anya Caldwell

Bio:      Anya spent 12 years cooking across Lyon, Tokyo, and New York
          before returning to London with a simple conviction: great
          restaurants aren't about spectacle. They're about
          repetition — the quiet discipline of doing honest things
          beautifully, every single night.

          She trained under Michel Guérard in Eugénie-les-Bains and
          spent three years at Zaiyu Hasegawa's Den in Tokyo before
          opening a small wood-fire kitchen in Hackney that became the
          seed of Ember & Oak.

          "The fire doesn't lie," she says. "Neither does the guest who comes back."
```

**Philosophy Cards**
```
Card 1 — The Fire
The oak-fire grill is the heart of our kitchen. We don't use it for
drama — we use it because nothing else produces that flavour.
Low, slow, and exact.

Card 2 — The Farm
We source from seven farms across the Chilterns and Kent. Each one
knows us by name. We visit twice a year. We pay fairly and always will.

Card 3 — The Table
A restaurant is a room where strangers slow down. We design every
element — lighting, spacing, sound — to protect that slowing down.
```

**Kitchen Feature Sections**
```
Section A — The Grill
Heading:   Oak. Applewood. Cherry.
Body:      Every wood we burn is chosen for the flavour it adds to
           the dish above it. The grill runs from 11am. By service,
           it's at the exact temperature it needs to be.
           No shortcuts. No gas assist.

Section B — The Prep
Heading:   6am starts. No exceptions.
Body:      Everything that can be made in-house, is. Our stocks
           take 18 hours. Our bread comes out at 9am. By noon,
           the kitchen smells like the best version of dinner.
```

**Awards & Press**
```
As featured in:
  The Guardian | The Times | Time Out London
  Hardens London Restaurants | Michelin Guide (Recommended)
```

**Team**
```
Anya Caldwell      — Head Chef & Co-Founder
Marcus Reid        — Sous Chef
Priya Sharma       — Pastry Chef
Tom Weller         — Restaurant Manager
```

---

### Gallery Page

```
Heading:   A Seat at the Table
Subtext:   The food. The room. The evenings.
```

---

### Contact Page

```
Heading:   Find Us
Subtext:   We're in Marylebone, London — easy from Baker Street or Bond Street.
```

**FAQ Answers**
```
Q: Do you accommodate dietary restrictions?
A: Absolutely. We handle most dietary needs with advance notice.
   Please mention requirements when booking and speak to your server
   on arrival. We accommodate: vegetarian, vegan (on request),
   gluten-free (shared kitchen), nut-free, and dairy-free.

Q: Can I book a private dining room?
A: Yes. Our private dining room seats 12–24 guests and is available
   Tuesday through Saturday evenings. Email
   reservations@emberandoak.co.uk with your date, party size,
   and requirements.

Q: What is your cancellation policy?
A: We ask for 24 hours' notice where possible. No-show or same-day
   cancellations for parties of 4+ may incur a £20 per person fee.

Q: Do you accept walk-ins?
A: We hold a small number of tables for walk-ins but cannot guarantee
   availability without a booking — particularly Friday and Saturday
   evenings. Booking online takes under a minute.

Q: Is there parking nearby?
A: Marylebone has NCP car parks on Welbeck Street and Portman Square.
   We're 3 minutes from Baker Street (Bakerloo, Metropolitan, Circle,
   Jubilee, H&C) and 5 minutes from Bond Street (Jubilee, Central).

Q: Do you offer gift vouchers?
A: Yes — £25, £50, £100, and £150 denominations.
   Purchasable in the restaurant or by phone.
   Valid 12 months from purchase date.
```

---

### Footer
```
Column 1 — Brand
  EMBER & OAK
  Wood-fire cooking. Seasonal ingredients.
  A neighbourhood restaurant since 2017.

Column 2 — Navigate
  Home | Menu | Reservations | Our Story | Gallery | Contact

Column 3 — Visit
  14 Ashford Lane, Marylebone, London W1U 3QR
  +44 (0)20 7946 0823
  hello@emberandoak.co.uk

Column 4 — Follow
  Instagram | Facebook | TripAdvisor

Bottom bar:
  © 2024 Ember & Oak. All rights reserved.  |  Privacy Policy  |  Terms
```

---

## 9. Component Inventory

### Shared Components

| Component | File | Description |
|---|---|---|
| `Navbar` | Repeated per-page + `main.js` | Fixed nav, scroll-aware opacity, mobile overlay |
| `Footer` | Repeated per-page | 4-column, dark background |
| `PageHero` | CSS class `.page-hero` | Short hero variant for inner pages |
| `SectionCTA` | CSS class `.cta-section` | Reusable reservation CTA block |
| `ToastNotification` | `main.js` | BS5 Toast for form success/error |

### Page-Specific Components

| Component | Page | Notes |
|---|---|---|
| `HeroFull` | index.html | CSS background-image, overlay, text, 2 CTAs |
| `InfoStrip` | index.html | 3-col icon + text strip |
| `DishCard` | index.html, menu.html | Image + name + desc + price |
| `MenuTabs` | menu.html | BS5 Nav Tabs + Tab Content |
| `MenuItemRow` | menu.html | Name, desc, price in flex layout |
| `AllergenBadge` | menu.html | Small BS5 badge components |
| `ReservationForm` | reservations.html | Flatpickr + BS5 validation |
| `HoursTable` | reservations.html | Dining hours grid |
| `PhilosophyCard` | our-story.html | Icon + heading + body card |
| `TeamCard` | our-story.html | Photo + name + role |
| `GalleryGrid` | gallery.html | CSS columns + filter + lightbox |
| `LightboxModal` | gallery.html | BS5 Modal with img + caption |
| `ContactForm` | contact.html | BS5 form + validation |
| `MapEmbed` | contact.html | Responsive iframe ratio wrapper |
| `FaqAccordion` | contact.html | BS5 Accordion |

### Navbar Scroll Behavior
```javascript
// main.js
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
```

```css
/* style.css */
.navbar {
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.navbar-scrolled {
  background: var(--color-oak) !important;
  box-shadow: 0 2px 20px rgba(0,0,0,0.15);
}
```

### Active Nav State
```javascript
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach(link => {
  if (link.getAttribute('href') === page) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
```

### Mobile Nav — Close on Link Click
```javascript
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});
```

---

## 10. Build Phases & Timeline

### Phase 1: Foundation (Days 1–2)
**Goal:** Repo setup, design system, shared components.

- [ ] Create folder structure
- [ ] Set up `style.css` with all CSS variables
- [ ] Build and test `Navbar` (desktop + mobile + scroll behavior)
- [ ] Build `Footer`
- [ ] Create base HTML template (head, meta, all CDN links)
- [ ] Source + compress all placeholder images (WebP conversion)
- [ ] Set up favicon and logo SVG

**Deliverable:** Every page has working nav + footer. Design tokens locked.

---

### Phase 2: Core Pages (Days 3–7)
**Goal:** Build all 6 pages with full content and copy.

- [ ] `index.html` — Home (all 9 sections)
- [ ] `menu.html` — Menu (tabs + full menu content)
- [ ] `reservations.html` — Reservation form + Flatpickr
- [ ] `our-story.html` — Story + chef bio + team grid
- [ ] `gallery.html` — Photo grid + filter buttons + lightbox modal
- [ ] `contact.html` — Contact form + map embed + FAQ accordion

**Deliverable:** All pages complete with real copy and images. No polish yet.

---

### Phase 3: JavaScript & Interactivity (Days 8–10)
**Goal:** Wire all JS. Validate all forms. Confirm all interactions.

- [ ] `main.js`: Scroll nav, active state, mobile menu close-on-click
- [ ] `menu.js`: BS5 tab confirm + any custom tab behavior
- [ ] `reservations.js`: Flatpickr init, form validation, success toast
- [ ] `gallery.js`: Filter logic, lightbox trigger
- [ ] Smooth scroll for in-page anchor links
- [ ] Cross-page test all JS at mobile viewport
- [ ] Console must be clean on all 6 pages

**Deliverable:** Full interactivity confirmed. Zero broken JS.

---

### Phase 4: Polish & Optimization (Days 11–14)
**Goal:** Lighthouse 90+. Pixel-perfect. Portfolio-ready.

- [ ] Responsive audit at 320px / 768px / 1280px / 1440px
- [ ] Compress all images (Squoosh.app)
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Accessibility audit: alt text, ARIA labels, focus states
- [ ] Add `<meta>` title + description to all 6 pages
- [ ] Add Open Graph tags for social sharing
- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Run Lighthouse. Hit targets. Fix issues.
- [ ] Write `README.md` for portfolio presentation
- [ ] Deploy to Netlify or GitHub Pages
- [ ] Record Loom walkthrough for portfolio case study

**Deliverable:** Deployed. Lighthouse scored. Case study written.

---

## 11. Devil's Advocate — Risks & Mitigations

> Anticipate what will go wrong before it does.

---

### Risk 1: Bootstrap specificity wars
**Problem:** Bootstrap's CSS specificity makes custom overrides silently lose. You'll stare at correct CSS that does nothing.

**Mitigation:**
- Prefix all custom component classes with `.eo-` (Ember & Oak) to avoid BS clashes
- Override Bootstrap via its own CSS variables: `--bs-primary: var(--color-ember)`
- Never use `!important` as a band-aid — find the real specificity problem
- Load `style.css` strictly AFTER the Bootstrap CDN `<link>` tag

---

### Risk 2: Flatpickr looks broken on Windows Chrome
**Problem:** Flatpickr default theme renders fine on Mac. Looks dated/misaligned on Windows Chrome/Edge.

**Mitigation:**
- Import a named Flatpickr theme and override with brand tokens in CSS
- Explicitly test on Windows Chrome before sign-off (BrowserStack free tier works)

---

### Risk 3: Mobile menu won't close after tapping a link
**Problem:** Bootstrap's collapse nav doesn't auto-close when a link is tapped — especially in mobile.

**Mitigation:** Already included in Component Inventory. Implement the close-on-click listener from Day 1, not as a Phase 4 afterthought.

---

### Risk 4: Hero image causes layout shift + white flash
**Problem:** Full-screen hero = large image file = white flash before the image loads = terrible first impression = CLS penalty.

**Mitigation:**
- Set `background-color: var(--color-oak)` on the hero section as a fallback (visible while image loads)
- Use a tiny base64-encoded blur placeholder loaded immediately inline
- Add `fetchpriority="high"` to hero `<img>` if using `<img>` tag instead of CSS background

---

### Risk 5: "Menu changes weekly" claim rings hollow
**Problem:** The menu copy says it updates every week. In a static demo that never changes, this breaks the narrative and looks lazy to clients.

**Mitigation:**
- Add a visible "Last Updated: [Week of X]" line near the menu intro — update once before deploy
- In portfolio case study, note: "In production, this connects to a headless CMS (Contentful / Sanity) — restaurant staff update the menu weekly without touching code."

---

### Risk 6: Forms submit to nowhere
**Problem:** Contact and reservation forms have no backend. On submit, they either silently reset or the page refreshes — both look broken.

**Mitigation (choose one):**
- **Netlify Forms** (if deploying to Netlify): add `data-netlify="true"` + `<input type="hidden" name="form-name">` — free, zero JS required
- **Formspree**: add `action="https://formspree.io/f/{id}"` — free tier, 50 submissions/month
- **JS simulation**: intercept submit via JS, show success toast, reset form — acceptable for pure portfolio demo

```html
<!-- Netlify Forms example -->
<form name="reservation" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="reservation">
  <!-- fields here -->
</form>
```

---

### Risk 7: Google Maps iframe blocked by CSP or ad-blockers
**Problem:** Some deploy environments, browsers, or ad-blockers block Google Maps iframe embeds. Blank box = unprofessional.

**Mitigation:**
- Wrap iframe in a `<noscript>` / CSS fallback that shows a styled address card + "Get Directions →" link
- Or replace with a static map image: `https://maps.googleapis.com/maps/api/staticmap` (free tier, simple key)

---

### Risk 8: Accessibility failures tank Lighthouse score
**Most-missed issues in restaurant sites:**
- Hero `<img>` with no meaningful `alt` text (or wrong alt like `alt="hero"`)
- Icon-only nav links / social links with no `aria-label`
- Low contrast on dark overlays with light text
- Form inputs with no associated `<label>` (using `placeholder` as a substitute)
- Missing `role="img"` or `alt` on decorative divider images

**Mitigation:** Install the `axe DevTools` Chrome extension. Run it on every page before Phase 4 sign-off.

---

## 12. Optimization Checklist

### Performance
- [ ] All images WebP with JPEG fallback via `<picture>` element
- [ ] Hero image `fetchpriority="high"`, all others `loading="lazy"`
- [ ] Max dimensions: 1400px hero, 800px cards, 400px thumbnails
- [ ] Bootstrap loaded from CDN (browser-cached across sites)
- [ ] Custom CSS minified for production (`style.min.css`)
- [ ] All JS files deferred: `<script defer src="...">`
- [ ] Google Fonts loaded with `display=swap` to prevent FOIT
- [ ] No render-blocking resources above the fold

### Image Target File Sizes
| Image Type | Max Size | Format |
|---|---|---|
| Hero / Full-screen | ≤ 300kb | WebP |
| Section backgrounds | ≤ 150kb | WebP |
| Card / thumbnail | ≤ 60kb | WebP |
| Team / portrait | ≤ 80kb | WebP |

### Code Quality
- [ ] No inline `style=""` attributes (all in `style.css`)
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Zero console errors on all 6 pages
- [ ] All IDs unique per page
- [ ] `.eo-` prefix on all custom component classes

### Cross-Browser Matrix
| Browser | Version | Status |
|---|---|---|
| Chrome | 120+ | Must pass |
| Firefox | 120+ | Must pass |
| Safari | 17+ | Must pass |
| Edge | 120+ | Must pass |
| iOS Safari | 16+ | Must pass |
| Android Chrome | 120+ | Must pass |

---

## 13. SEO Strategy

### Structured Data (add to `<head>` of `index.html`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Ember & Oak",
  "description": "Wood-fire, farm-to-table restaurant in Marylebone, London",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 Ashford Lane",
    "addressLocality": "Marylebone",
    "addressRegion": "London",
    "postalCode": "W1U 3QR",
    "addressCountry": "GB"
  },
  "telephone": "+442079460823",
  "url": "https://emberandoak.co.uk",
  "servesCuisine": "Contemporary British",
  "priceRange": "£££",
  "openingHours": [
    "Tu-Fr 12:00-22:00",
    "Sa 12:00-22:30",
    "Su 12:00-16:00"
  ]
}
</script>
```

### Page-Specific Meta Tags
| Page | `<title>` | `<meta description>` |
|---|---|---|
| Home | Ember & Oak \| Wood-Fire Restaurant in Marylebone, London | Fire-kissed, farm-to-table dining in Marylebone. Seasonal menus. Open fire cooking. Reserve your table. |
| Menu | Our Menu \| Ember & Oak Restaurant, London | Explore our weekly-changing menu of wood-fire dishes. Farm-sourced ingredients, seasonal and honest. |
| Reservations | Reserve a Table \| Ember & Oak, Marylebone | Book your table at Ember & Oak online. We'd love to have you. |
| Our Story | Our Story \| Ember & Oak — Chef Anya Caldwell | The story behind Ember & Oak — our kitchen, our chef, and why we cook. |
| Gallery | Gallery \| Ember & Oak Restaurant | Food, ambiance, and kitchen photography from Ember & Oak. |
| Contact | Contact & Directions \| Ember & Oak, London | Find us in Marylebone. Opening hours, map, phone, and email. |

### Open Graph Tags (add to all pages)
```html
<meta property="og:title" content="Ember & Oak | Wood-Fire Restaurant, London">
<meta property="og:description" content="Seasonal, wood-fire cooking in the heart of Marylebone. Reserve your table.">
<meta property="og:image" content="assets/images/hero/hero-home.webp">
<meta property="og:url" content="https://emberandoak.co.uk">
<meta property="og:type" content="restaurant">
<meta name="twitter:card" content="summary_large_image">
```

---

## 14. Accessibility Checklist

- [ ] `lang="en"` on `<html>` tag on every page
- [ ] Skip-to-content link: `<a href="#main" class="visually-hidden-focusable">Skip to content</a>`
- [ ] All `<img>` have descriptive `alt` text (empty `alt=""` only for decorative images)
- [ ] All form inputs have associated `<label for="id">` — never rely on `placeholder` alone
- [ ] `aria-label` on all icon-only interactive elements (close buttons, social icon links)
- [ ] `aria-current="page"` on active nav link
- [ ] Focus outline visible on all interactive elements (keyboard users)
- [ ] Color contrast ratio ≥ 4.5:1 for body text — verify via WebAIM Contrast Checker
- [ ] Heading order logical per page (h1 → h2 → h3, never skip levels)
- [ ] BS5 modal traps focus automatically (built-in) — verify doesn't break
- [ ] BS5 accordion has built-in ARIA — verify `aria-expanded` toggles correctly
- [ ] No auto-playing audio or video with sound
- [ ] Reduced motion respected

```css
/* style.css — add near top */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 15. Deployment Plan

### Option A: Netlify (Recommended)
```
1. Push project repo to GitHub
2. Log into netlify.com → "Add new site" → "Import an existing project"
3. Connect GitHub repo
4. Build command:   (leave empty — static HTML)
5. Publish dir:     /  (project root)
6. Click Deploy
7. Enable Netlify Forms in Site Settings (free form handling)
8. Add custom domain or use auto-generated netlify.app URL for demo
9. HTTPS: provisioned automatically via Let's Encrypt
```

### Option B: GitHub Pages
```
1. Push repo to GitHub
2. Repo Settings → Pages → Source: Deploy from branch → main → / (root)
3. URL: https://yourusername.github.io/ember-and-oak
4. Use Formspree for form backend (free, add action="https://formspree.io/f/{id}")
```

### Post-Deploy Final Checklist
- [ ] All 6 pages load without errors
- [ ] All images render (no broken paths from case mismatch)
- [ ] Reservation + contact forms submit successfully
- [ ] Mobile test on a real device (not only DevTools)
- [ ] Lighthouse run on live URL (not localhost — scores differ)
- [ ] Screenshot Lighthouse scores for portfolio case study
- [ ] Share live URL + GitHub repo link in portfolio

### Portfolio Presentation Script
1. **Lead with the problem:** "A neighbourhood restaurant needed a site that converts visitors into bookings without relying on third-party booking widgets."
2. **Show the work:** Live URL + GitHub repo link
3. **Explain key decisions:** Why Bootstrap over React, why Flatpickr, why multi-page over SPA
4. **Quantify results:** Lighthouse scores, 6 pages, 4 JS modules, 14-day build
5. **Signal production readiness:** "In production, the menu tab content would be driven by a headless CMS like Contentful. The reservation form would integrate with SevenRooms or ResDiary. The static gallery would pull from Cloudinary."

---

*Ember & Oak — Project Blueprint v1.0*
*Authored for freelance frontend portfolio. May 2025.*
