# Wobli — Agent Conventions & Architecture Guidelines

**Always read and follow this file** when adding or modifying code in **Wobli**.

Whenever the user suggests a convention, pattern, or rule that should apply going forward, **immediately add/update it in this document** in the same change set.

---

## 1. App Context & Stack

| Item | Value |
|------|-------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Path alias | `@/*` → `./src/*` |
| Server State | TanStack React Query |
| Forms & Validation | Formik + Yup |
| HTTP Client | Axios |
| Icons | `react-icons` exclusively |

---

## 2. Project Layout (`src/`)

```
src/
├── app/
│   ├── layout.tsx                      # Root layout; providers wrapped inside <body>
│   ├── page.tsx                        # Home route entry: imports and renders <Home /> from @/app/features/home
│   ├── (pages)/                        # App Router route definitions
│   │   ├── shop-miniatures/page.tsx    # Renders <ShopMiniatures /> from @/app/features/shopMiniatures
│   │   ├── photo-to-miniature/page.tsx # Renders <PhotoToMiniature /> from @/app/features/photoToMiniature
│   │   └── [routeName]/page.tsx
│   └── features/                       # Feature modules
│       ├── home/                       # Home feature module (index.tsx, useHook.ts, sections/)
│       ├── shopMiniatures/             # Shop feature module (index.tsx, useHook.ts, sections/)
│       ├── photoToMiniature/           # Photo to Miniature feature module (index.tsx, useHook.ts, sections/)
│       └── [featureName]/              # Other feature modules
│           ├── index.tsx               # Feature UI composition
│           ├── useHook.ts              # Feature logic, state, React Query, Formik
│           └── sections/               # Feature-specific section files
├── components/                         # App-level shared shells & layout
│   ├── navbar/index.tsx                # Global Unified Navbar & Header (with breadcrumbs & flags)
│   ├── footer/index.tsx                # Global Footer
│   ├── pageWrapper/index.tsx           # Global PageWrapper
│   ├── ReactQueryClientProvider.tsx
│   └── ToastProvider.tsx
├── shared/                             # Reusable UI primitives & shared sections
│   ├── heading/                        # Typography: Text.tsx, TextWithLinks.tsx, PageHeader.tsx
│   ├── buttons/                        # Button.tsx, BtnGroup.tsx
│   ├── cards/                          # CardWrapper.tsx
│   ├── Chip.tsx                        # Chip.tsx (badges, tags, labels)
│   ├── sections/                       # Cross-feature reusable sections (TransformationsSection, FaqSection)
│   ├── input/                          # InputField, Dropdown, SelectionControl, Switcher, Modals
│   ├── divider/                        # Divider, DividerWithText
│   └── popover/                        # MenuPopover
├── lib/
│   ├── apiConstant.ts                  # Service base URLs, path builders, apiErrorMessage
│   ├── axiosInstance.ts                # Cached axios clients per MicroService + Bearer interceptor
│   ├── apis.ts                         # Pure HTTP request functions
│   └── types.ts                        # API payload and response types
├── utils/
│   ├── schema.ts                       # Formik initial values + Yup schemas
│   ├── authSession.ts                  # Token storage (cookies + localStorage)
│   ├── formikFieldError.ts             # Helper to extract Formik errors
│   ├── queryKeys.ts                    # Centralized React Query keys
│   ├── enum.ts                         # MicroService, storageKeys
│   ├── cookies.ts                      # Cookie helpers
│   └── localstorage.ts                 # LocalStorage helpers
└── styles/
    └── globals.css                     # Tailwind CSS tokens and global styles
```

---

## 3. Feature Architecture (`src/app/features/[featureName]/`)

For every feature:

1. **`index.tsx`** — UI entry for the feature. Consumes `useHook()` and composes sections.
2. **`useHook.ts`** — Business logic layer:
   - Formik forms and Yup validation
   - React Query hooks (`useQuery` / `useMutation`)
   - Local state and derived values
   - Action handlers and navigation logic
3. **`sections/`** — Folder containing section subcomponents specific to that feature.
4. **`src/app/(pages)/[routeName]/page.tsx`** — Next.js App Router entry that imports and renders the feature component from `@/app/features/[featureName]`.

---

## 4. Shared Sections (`src/shared/sections/`)

- Whenever a section (such as **Transformations Showcase Gallery**, **FAQ Accordion**, **Reviews Carousel**, etc.) appears in or is needed across multiple pages, move it to **`src/shared/sections/`** and import it across features to prevent code duplication.

---

## 5. Strict Shared Primitives Usage (Mandatory)

Always use our shared primitives across the entire application:

1. **Typography (`@/shared/heading/Text.tsx`)**:
   - **Mandatory for ALL text**: Headings, titles, subtitles, paragraphs, badges, price labels, descriptions.
   - **Do NOT** use raw `<h1>`, `<h2>`, `<p>`, or unstyled `<span>`.
   - Use `as` prop for semantic HTML (`as="h1"`, `as="h2"`, `as="h3"`, `as="span"`, `as="p"`).
   - Use `font` (`"display"` for Space Grotesk / `"sans"` for Plus Jakarta Sans), `size`, `type`, and `variant`.
   - Use **`@/shared/heading/TextWithLinks.tsx`** when mixing plain text and clickable links.

2. **Buttons (`@/shared/buttons/Button.tsx`)**:
   - **Mandatory for ALL buttons and clickable action triggers**: CTAs, add-to-bag buttons, category filter buttons, quantity steppers, upload triggers, modal buttons.
   - Use variants: `primary`, `secondary`, `pastel-primary`, `pastel-surface`, `ghost`, `white`, `stepper`.

3. **Cards (`@/shared/cards/CardWrapper.tsx`)**:
   - **Mandatory for ALL card containers**: Product tiles, review cards, step cards, guarantee containers, banner cards.
   - Use variants: `default`, `interactive`, `flat`, `gradient`.

4. **Chips & Badges (`@/shared/Chip.tsx`)**:
   - **Mandatory for ALL chips, tags, and status pills**: "Desk Buddy", "Pet Series", "Fantasy", "Staff Pick", "Trending", "Custom Made", "8K Ultra-Res Resin".
   - Use variants: `primary`, `secondary`, `tertiary`, `surface`, `glass`, `glass-primary`, `glass-secondary`, `glass-tertiary`, `brand-badge`.

5. **Icons (`react-icons`)**:
   - **Mandatory for ALL icons**: Strictly use **`react-icons`** (`react-icons/hi2`, `react-icons/fa6`, `react-icons/md`, `react-icons/fi`, etc.).
   - **Do NOT** use font icon ligatures or raw unstyled symbols.

6. **Form Controls & Checkboxes**:
   - Always build custom, styled checkbox indicators with crisp checkmark icons (`HiCheck`) from `react-icons/hi2`, smooth background transitions, and accessible hidden inputs (`sr-only`).

7. **Extending Shared Components**:
   - If an existing shared component lacks a style, size, or variant needed for a design, **update the shared component directly** rather than writing ad-hoc unstyled JSX elements.

---

## 6. Mobile & Tablet Responsiveness (Mandatory)

1. **Global Navbar Drawer**:
   - On viewports `< xl` (mobile & tablet), the global Navbar displays a squishy tactile hamburger button (`HiBars3`).
   - Clicking opens a slide-over mobile drawer with backdrop blur, full navigation links (`Home`, `Shop Miniatures`, `Photo to Miniature`, `How It Works`, `Reviews`), search input, and quick-action buttons (*Start Custom Order*, *My Bag*, *Track Order*).
2. **Responsive Grids & Breakpoints**:
   - Product grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
   - Feature & step cards: `grid-cols-1 md:grid-cols-3`.
   - Customizer layouts: `grid-cols-1 lg:grid-cols-12` with sticky sidebars collapsing gracefully below the main form on mobile/tablet.
   - Action buttons: `w-full sm:w-auto` for touch friendliness on small devices.

---

## 7. Code Quality & Minimal Implementation

- **Write Only What Is Required**: Do NOT over-optimize or over-engineer things. Write clean, direct, and sufficient code for the task.
- **Minimal Diffs**: Touch and change only the necessary files.
- **No Redundant Abstractions**: Avoid creating unnecessary helper wrappers or excessive layers when simple, readable code does the job.
