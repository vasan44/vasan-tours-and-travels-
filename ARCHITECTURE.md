# 🏗️ DESIGN SYSTEM ARCHITECTURE

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    TOURS & TRAVELS APP                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         UNIFIED DESIGN SYSTEM LAYER                  │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  CSS VARIABLES & UTILITIES                      │ │   │
│  │  │  (designSystem.css)                             │ │   │
│  │  │                                                  │ │   │
│  │  │  • Colors (Primary, Secondary, etc.)            │ │   │
│  │  │  • Spacing Scale (xs to 3xl)                    │ │   │
│  │  │  • Typography (Headings, Body, Labels)          │ │   │
│  │  │  • Border Radius (sm to 3xl)                    │ │   │
│  │  │  • Shadows (sm to 2xl)                          │ │   │
│  │  │  • Container System (1280px max)                │ │   │
│  │  │  • Grid System (2, 3, 4 columns)                │ │   │
│  │  │  • Button Styles (Primary, Secondary, Outline)  │ │   │
│  │  │  • Form Elements (Input, Select, Textarea)      │ │   │
│  │  │  • Utility Classes (Text, BG, Spacing, etc.)    │ │   │
│  │  │  • Responsive Utilities (Mobile, Tablet)        │ │   │
│  │  │  • Animations (Fade-in, Slide-in)               │ │   │
│  │  │                                                  │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  LAYOUT COMPONENTS                              │ │   │
│  │  │  (Layout.jsx)                                   │ │   │
│  │  │                                                  │ │   │
│  │  │  • PageLayout - Main wrapper                    │ │   │
│  │  │  • PageSection - Section with title             │ │   │
│  │  │  • TwoColumnLayout - 2/3 + 1/3 split            │ │   │
│  │  │  • CardGrid - Responsive grid                   │ │   │
│  │  │  • Card - Unified card                          │ │   │
│  │  │  • Button - Unified button                      │ │   │
│  │  │  • FormInput - Input with label                 │ │   │
│  │  │  • FormSelect - Select dropdown                 │ │   │
│  │  │  • FormTextarea - Textarea                      │ │   │
│  │  │                                                  │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         APPLICATION PAGES & COMPONENTS              │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  MAIN PAGES                                     │ │   │
│  │  │  • Home (Hero, Categories, Stats, etc.)         │ │   │
│  │  │  • About                                        │ │   │
│  │  │  • Domestic                                     │ │   │
│  │  │  • Packages                                     │ │   │
│  │  │  • Car Rental                                   │ │   │
│  │  │  • Contact                                      │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  TOUR DETAIL PAGES                              │ │   │
│  │  │  • Kerala (Wayanad, Munnar, Alappuzha, etc.)    │ │   │
│  │  │  • Karnataka (Coorg, Mysuru, etc.)              │ │   │
│  │  │  • North India (Goa, Rajasthan, etc.)           │ │   │
│  │  │  • Tamil Nadu (Ooty, Kodaikanal, etc.)          │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  FORMS & SECTIONS                               │ │   │
│  │  │  • BookingForm                                  │ │   │
│  │  │  • CarBookingForm                               │ │   │
│  │  │  • PickupDropSection                            │ │   │
│  │  │  • BookingSection                               │ │   │
│  │  │  • ContactForm                                  │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  ADMIN PAGES                                    │ │   │
│  │  │  • AdminDashboard                               │ │   │
│  │  │  • AdminCarRentalBookings                        │ │   │
│  │  │  • AdminTourBookings                             │ │   │
│  │  │  • AdminContactDashboard                         │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐ │   │
│  │  │  SHARED COMPONENTS                              │ │   │
│  │  │  • Header / Navbar                              │ │   │
│  │  │  • Footer                                       │ │   │
│  │  │  • Categories                                   │ │   │
│  │  │  • RecentTours                                  │ │   │
│  │  │  • Testimonials                                 │ │   │
│  │  │  • Stats                                        │ │   │
│  │  └─────────────────────────────────────────────────┘ │   │
│  │                                                        │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    index.css                                │
│         (Imports designSystem.css)                          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              designSystem.css                               │
│  • CSS Variables (colors, spacing, typography)              │
│  • Global Styles (container, section, typography)           │
│  • Component Styles (cards, buttons, forms)                 │
│  • Utility Classes (text, bg, spacing)                      │
│  • Responsive Utilities (mobile, tablet)                    │
│  • Animations (fade-in, slide-in)                           │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌──────────────────┐    ┌──────────────────┐
│  CSS Classes     │    │  Layout.jsx      │
│  (Tailwind +     │    │  Components      │
│   Custom)        │    │  (React)         │
└────────┬─────────┘    └────────┬─────────┘
         │                       │
         └───────────┬───────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  Application Pages     │
        │  & Components          │
        │  (Use both CSS classes │
        │   and React components)│
        └────────────────────────┘
```

---

## Component Hierarchy

```
App.jsx
├── Header
├── Routes
│   ├── Home
│   │   ├── Hero
│   │   ├── Categories
│   │   ├── Stats
│   │   ├── RecentTours
│   │   ├── Testimonials
│   │   └── BookingSection
│   │
│   ├── About
│   │   └── PageSection
│   │       └── CardGrid
│   │           └── Card
│   │
│   ├── Domestic
│   │   └── PageSection
│   │       └── TwoColumnLayout
│   │           ├── CardGrid
│   │           │   └── Card
│   │           └── BookingForm
│   │
│   ├── Tour Detail Pages (Kerala, Goa, etc.)
│   │   └── PageSection
│   │       └── TwoColumnLayout
│   │           ├── Content
│   │           └── BookingForm
│   │
│   ├── CarRental
│   │   └── PageSection
│   │       └── TwoColumnLayout
│   │           ├── CardGrid
│   │           │   └── Card
│   │           └── CarBookingForm
│   │
│   ├── Packages
│   │   └── PageSection
│   │       └── CardGrid
│   │           └── Card
│   │
│   ├── Contact
│   │   └── PageSection
│   │       └── TwoColumnLayout
│   │           ├── ContactForm
│   │           └── ContactInfo
│   │
│   └── Admin Pages
│       ├── AdminDashboard
│       ├── AdminCarRentalBookings
│       ├── AdminTourBookings
│       └── AdminContactDashboard
│
└── Footer
```

---

## Responsive Breakpoints

```
Mobile (< 640px)
├── Full width containers
├── 1 column grids
├── Stacked layouts
└── Reduced padding (16px)

Tablet (640px - 1024px)
├── Centered containers
├── 2 column grids
├── Side-by-side layouts
└── Medium padding (32px)

Desktop (1024px - 1280px)
├── Centered containers
├── 3-4 column grids
├── Full layouts
└── Large padding (48px)

Large (1280px+)
├── Max-width 1280px
├── Full layouts
├── All features visible
└── Large padding (48px)
```

---

## CSS Variable Hierarchy

```
Root Variables (designSystem.css)
├── Colors
│   ├── --primary: #8B2248
│   ├── --secondary: #00AEEF
│   ├── --success: #10B981
│   ├── --danger: #EF4444
│   ├── --warning: #F59E0B
│   ├── --dark: #1F2937
│   ├── --light: #F9FAFB
│   ├── --border: #E5E7EB
│   ├── --text-primary: #111827
│   ├── --text-secondary: #6B7280
│   └── --text-light: #9CA3AF
│
├── Spacing
│   ├── --spacing-xs: 0.25rem
│   ├── --spacing-sm: 0.5rem
│   ├── --spacing-md: 1rem
│   ├── --spacing-lg: 1.5rem
│   ├── --spacing-xl: 2rem
│   ├── --spacing-2xl: 3rem
│   └── --spacing-3xl: 4rem
│
├── Container
│   ├── --container-max: 1280px
│   ├── --container-padding: 3rem
│   ├── --container-padding-tablet: 2rem
│   └── --container-padding-mobile: 1rem
│
├── Typography
│   ├── --font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
│   ├── --font-size-xs: 0.75rem
│   ├── --font-size-sm: 0.875rem
│   ├── --font-size-base: 1rem
│   ├── --font-size-lg: 1.125rem
│   ├── --font-size-xl: 1.25rem
│   ├── --font-size-2xl: 1.5rem
│   ├── --font-size-3xl: 1.875rem
│   ├── --font-size-4xl: 2.25rem
│   └── --font-size-5xl: 3rem
│
├── Border Radius
│   ├── --radius-sm: 0.375rem
│   ├── --radius-md: 0.5rem
│   ├── --radius-lg: 0.75rem
│   ├── --radius-xl: 1rem
│   ├── --radius-2xl: 1.5rem
│   └── --radius-3xl: 2rem
│
├── Shadows
│   ├── --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
│   ├── --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
│   ├── --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
│   ├── --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
│   └── --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
│
└── Transitions
    ├── --transition-fast: 150ms ease-in-out
    ├── --transition-base: 300ms ease-in-out
    └── --transition-slow: 500ms ease-in-out
```

---

## Class Naming Convention

```
.container          - Max-width wrapper
.section            - Section with padding
.heading-1/2/3/4    - Heading levels
.subheading         - Subtitle
.body-text          - Regular text
.body-text-sm       - Small text
.label              - Form label
.card               - Card component
.card-sm/lg         - Card sizes
.btn                - Button base
.btn-primary        - Primary button
.btn-secondary      - Secondary button
.btn-outline        - Outline button
.btn-sm/lg          - Button sizes
.btn-block          - Full width button
.form-group         - Form field wrapper
.form-input         - Text input
.form-select        - Select dropdown
.form-textarea      - Textarea
.form-error         - Error message
.form-success       - Success message
.grid               - Grid container
.grid-2/3/4         - Grid columns
.text-center        - Center text
.text-primary       - Primary color
.text-secondary     - Secondary color
.text-muted         - Muted text
.bg-light           - Light background
.bg-primary         - Primary background
.divider            - Horizontal divider
.divider-center     - Centered divider
.gap-md/lg          - Gap utilities
.hide-mobile        - Hide on mobile
.hide-tablet        - Hide on tablet
.stack-mobile       - Stack on mobile
```

---

## Integration Points

```
1. CSS System
   └── index.css imports designSystem.css
       └── All pages inherit CSS variables and classes

2. React Components
   └── Layout.jsx exports reusable components
       └── All pages import and use components

3. Tailwind CSS
   └── Works alongside design system
       └── Use for quick utilities when needed

4. Brand Colors
   └── CSS variables (--primary, --secondary)
       └── Used in all components

5. Responsive Design
   └── CSS media queries in designSystem.css
       └── Automatic responsive behavior
```

---

## File Structure

```
frontend/src/
├── styles/
│   ├── designSystem.css          ← Design system (NEW)
│   └── autocomplete.css
├── components/
│   ├── Layout.jsx                ← Layout components (NEW)
│   ├── Domestic.jsx              ← Updated
│   ├── About.jsx                 ← To update
│   ├── CarRental.jsx             ← To update
│   ├── BookingForm.jsx            ← To update
│   ├── CarBookingForm.jsx         ← To update
│   ├── PickupDropSection.jsx      ← To update
│   ├── Footer.jsx                ← To update
│   ├── admin/
│   │   ├── AdminDashboard.jsx    ← To update
│   │   ├── AdminCarRentalBookings.jsx ← To update
│   │   ├── AdminTourBookings.jsx ← To update
│   │   └── AdminContactDashboard.jsx ← To update
│   ├── kerala/
│   │   ├── Wayanad.jsx           ← To update
│   │   ├── Munnar.jsx            ← To update
│   │   └── ... (other pages)
│   ├── karnataka/
│   │   └── ... (pages to update)
│   ├── northindia/
│   │   └── ... (pages to update)
│   └── taminadu/
│       └── ... (pages to update)
├── index.css                     ← Updated (imports designSystem.css)
└── App.jsx
```

---

## Status

🟢 **ARCHITECTURE COMPLETE**

The unified design system architecture is fully defined and ready for implementation across all pages and components.

---

**Version:** 1.0
**Status:** Production Ready
**Last Updated:** 2024
