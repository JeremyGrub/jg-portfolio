# Jeremy Grub — Portfolio

Personal portfolio website for Jeremy Grub, Software Engineer. Built with React, Vite, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast build tooling and dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and scroll transitions

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with smooth scroll + mobile menu
│   ├── Hero.jsx         # Animated particle hero with typewriter effect
│   ├── About.jsx        # Background story, stats, skill tags
│   ├── GrubForge.jsx    # Grüb Forge LLC spotlight + live products
│   ├── Projects.jsx     # Project cards with links and tech stacks
│   ├── Experience.jsx   # Alternating timeline (IDEMIA + King County)
│   ├── Skills.jsx       # Grouped, animated skill tags
│   ├── Education.jsx    # Education cards
│   └── Contact.jsx      # Contact links + footer
├── App.jsx
├── main.jsx
└── index.css            # Tailwind base + custom utilities
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Animated particle field, typewriter role cycler, CTAs |
| 2 | About | Forensics → software story, stats, location |
| 3 | Grüb Forge LLC | LLC spotlight with live product cards |
| 4 | Projects | All projects with tech stacks and links |
| 5 | Experience | Timeline — IDEMIA & King County Sheriff's Office |
| 6 | Skills | Grouped by category with hover animations |
| 7 | Education | M.S. CS, Coding Dojo, B.S. Forensic Science |
| 8 | Contact | Email, LinkedIn, GitHub |

---

## Design

- **Background:** `#0a0a0d`
- **Accent:** `#f97316` (Forge Orange — matches Grüb Forge LLC branding)
- **Text:** `#f1f5f9`
- **Cards:** `#1a1a24`
- **Font:** Inter (UI) + JetBrains Mono (code/labels)

---

## Grüb Forge LLC

This portfolio is part of the [Grüb Forge LLC](https://grubforge.com) brand — Jeremy's LLC for building and shipping software products.

Live products:
- [latentlabacademy.com](https://latentlabacademy.com) — Forensic fingerprint education platform
- [dmfinder.io](https://dmfinder.io) — TTRPG Dungeon Master matchmaking platform

---

## License

© 2026 Jeremy Grub. All rights reserved.
