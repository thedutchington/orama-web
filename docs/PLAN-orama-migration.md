R# Plan: Orama Migration

This document follows the structural requirements for the Orama tutoring site migration.

## Structure Maintenance

- **HOME:** Vision | Testimonials
- **RESOURCES:** Subjects | Cassini Whiteboard Hyperlink
- **CONTACT US:** Calendar | Booking-Page-Hyperlink

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Apple-inspired aesthetic)
- **Language:** TypeScript

## Task Breakdown

1. **Initialize Project:** `npx create-next-app@latest` (Apple-inspired configuration).
2. **Design Language Setup:** Define HSL colors, glassmorphism blurs, and premium typography.
3. **Core Components:** Navbar (translucent), Footer, Shared Card components.
4. **Pages:**
   - Home: Hero Vision + Testimonial Grid.
   - Resources: Subject Grid + Cassini Link.
   - Contact: Calendar integration + Booking Link.
5. **Polishing:** Animations (Framer Motion or CSS transitions) + UI/UX audit.

## Verification

- Accessibility check (contrast, Aria labels).
- Performance audit (Lighthouse scores).
- UI consistency across pages.
