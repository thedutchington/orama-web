# Plan: Blog Posts Integration

## Goal

Implement a minimalist, MD-based blog system with a dedicated page and a "Featured" list on the home page, following Anthropic's aesthetic within the Orama cinematic UI.

## Overview

- **Project Type**: WEB (Next.js)
- **Data Source**: Markdown (`.md`) files in `content/blog`.
- **Pages**: `/blog` (Index), `/blog/[slug]` (Post), and a "Featured" section on Home.
- **Aesthetic**: Minimalist list style (Anthropic-inspired) with Orama Vision Pro glassmorphism and red accents.

## Tech Stack

- **Parsing**: `gray-matter` (frontmatter), `remark` & `remark-html` (markdown rendering).
- **Transitions**: `framer-motion` for "digital snap" reveals.

## Tasks

- [ ] **Task 1: Project Setup & Dependencies**
  - Install `gray-matter`, `remark`, `remark-html`.
  - Create `content/blog` directory.
  - Add `sample-post.md` with frontmatter (title, date, slug, featured, author).
  - → *Verify*: `content/blog` exists with a valid markdown file.

- [ ] **Task 2: Blog Logic (lib/blog.ts)**
  - Implement functions to get all posts (sorted by date) and get post by slug.
  - Parse frontmatter and render content to HTML string.
  - → *Verify*: Unit test or console log shows correctly parsed post data.

- [ ] **Task 3: Blog Index Page (app/blog/page.tsx)**
  - Create a dedicated `/blog` route.
  - Display all posts in a minimalist list (Title on left, Date on right).
  - Apply Orama's `text-moving-red` and glassmorphism.
  - → *Verify*: Navigate to `/blog` and see the post list.

- [ ] **Task 4: Post Detail Page (app/blog/[slug]/page.tsx)**
  - Create dynamic route for individual posts.
  - Render markdown content with cinematic typography.
  - Include a "Back to Blog" button with the `border-trace` effect.
  - → *Verify*: Click a post from index and see full content with proper styling.

- [ ] **Task 5: Home Page "Featured" Section (app/page.tsx)**
  - Add a "Featured" section below "Special?".
  - Fetch only "featured" posts and display in the minimal Anthropic list style.
  - Include a "View all posts" link.
  - → *Verify*: Home page shows 2-3 recent featured posts.

- [ ] **Task 6: Navbar Integration**
  - Add "BLOG" link to `Navbar.tsx`.
  - → *Verify*: Navbar shows BLOG and navigates correctly.

## Done When

- [ ] A new `.md` post added to `content/blog` automatically appears on the index.
- [ ] The Home page "Featured" section mirrors the provided Anthropic design but in Orama colors.
- [ ] Navigation flows seamlessly between Home, Blog Index, and Posts.
- [ ] All pages pass a manual audit for cinematic consistency.

## Phase X: Verification

- [ ] Check color contrast on blog text.
- [ ] Verify responsive layout for lists on mobile.
- [ ] Run `npm run build` to ensure static generation of blog pages works correctly.
