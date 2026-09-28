# 🎨 UNIFIED DESIGN SYSTEM - Tours & Travels

## Overview
A complete design system ensuring consistent layout, typography, spacing, colors, and components across the entire React + Vite project.

---

## 📁 Files Created

### 1. `frontend/src/styles/designSystem.css`
**Purpose:** Global design tokens and utility classes

**Contains:**
- CSS Variables for colors, spacing, typography, shadows
- Container system (max-width: 1280px)
- Section spacing (consistent padding)
- Typography classes (.heading-1 to .heading-4, .subheading, .body-text)
- Card styles (.card, .card-sm, .card-lg)
- Button styles (.btn, .btn-primary, .btn-secondary, .btn-outline)
- Form element styles (.form-input, .form-select, .form-textarea)
- Grid system (.grid-2, .grid-3, .grid-4)
- Utility classes (.text-center, .bg-light, .divider, etc.)
- Responsive utilities and animations

### 2. `frontend/src/components/Layout.jsx`
**Purpose:** Reusable layout wrapper components

**Exports:**
- `PageLayout` - Main page wrapper with container
- `PageSection` - Section with title, subtitle, divider
- `TwoColumnLayout` - Left/right column layout (2/3 + 1/3)
- `CardGrid` - Responsive grid for cards (2, 3, or 4 columns)
- `Card` - Unified card component
- `Button` - Unified button component
- `FormInput` - Unified input with label and error
- `FormSelect` - Unified select with options
- `FormTextarea` - Unified textarea

---

## 🎯 Design Tokens

### Colors
```css
--primary: #8B2248 (Maroon)
--secondary: #00AEEF (Cyan)
--success: #10B981
--danger: #EF4444
--warning: #F59E0B
--dark: #1F2937
--light: #F9FAFB
```

### Spacing Scale
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

### Typography
```css
Headings: 5xl (3rem), 4xl (2.25rem), 3xl (1.875rem), 2xl (1.5rem)
Body: base (1rem), sm (0.875rem), xs (0.75rem)
Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
```

### Border Radius
```css
--radius-sm: 0.375rem (6px)
--radius-md: 0.5rem (8px)
--radius-lg: 0.75rem (12px)
--radius-xl: 1rem (16px)
--radius-2xl: 1.5rem (24px)
--radius-3xl: 2rem (32px)
```

### Shadows
```css
--shadow-sm: Light shadow
--shadow-md: Medium shadow (default for cards)
--shadow-lg: Large shadow (hover state)
--shadow-xl: Extra large shadow
--shadow-2xl: Maximum shadow
```

---

## 📐 Container System

### Desktop (1280px+)
- Max width: 1280px
- Padding: 3rem (48px) left/right
- Centered on screen

### Tablet (1024px - 1279px)
- Max width: 1280px
- Padding: 2rem (32px) left/right

### Mobile (< 640px)
- Full width
- Padding: 1rem (16px) left/right

**Usage:**
```jsx
<div className="container">
  {/* Content automatically centered and padded */}
</div>
```

---

## 📝 Typography System

### Heading Hierarchy
```jsx
<h1 className="heading-1">Main Page Title</h1>
<h2 className="heading-2">Section Title</h2>
<h3 className="heading-3">Subsection Title</h3>
<h4 className="heading-4">Card Title</h4>
```

### Text Styles
```jsx
<p className="subheading">Subtitle or description</p>
<p className="body-text">Regular paragraph text</p>
<p className="body-text-sm">Small text or helper text</p>
<label className="label">Form label</label>
```

---

## 🎴 Card System

### Basic Card
```jsx
<div className="card">
  <h3 className="heading-4">Card Title</h3>
  <p className="body-text">Card content</p>
</div>
```

### Card Sizes
```jsx
<div className="card card-sm">Small card</div>
<div className="card">Default card</div>
<div className="card card-lg">Large card</div>
```

### Using Layout Component
```jsx
import { Card } from './Layout';

<Card>
  <h3 className="heading-4">Title</h3>
  <p>Content</p>
</Card>
```

---

## 🔘 Button System

### Button Variants
```jsx
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
```

### Button Sizes
```jsx
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Medium (default)</button>
<button className="btn btn-primary btn-lg">Large</button>
```

### Button States
```jsx
<button className="btn btn-primary btn-block">Full Width</button>
<button className="btn btn-primary" disabled>Disabled</button>
```

### Using Layout Component
```jsx
import { Button } from './Layout';

<Button variant="primary" size="lg" block>
  Click Me
</Button>
```

---

## 📋 Form System

### Form Input
```jsx
<div className="form-group">
  <label className="label">Email</label>
  <input type="email" className="form-input" placeholder="Enter email" />
</div>
```

### Form Select
```jsx
<div className="form-group">
  <label className="label">Country</label>
  <select className="form-select">
    <option>Select...</option>
    <option>India</option>
  </select>
</div>
```

### Form Textarea
```jsx
<div className="form-group">
  <label className="label">Message</label>
  <textarea className="form-textarea" rows="4"></textarea>
</div>
```

### Using Layout Components
```jsx
import { FormInput, FormSelect, FormTextarea } from './Layout';

<FormInput 
  label="Name" 
  type="text" 
  placeholder="Enter name"
  error="Name is required"
/>

<FormSelect 
  label="Tour Type"
  options={[
    { value: 'domestic', label: 'Domestic' },
    { value: 'international', label: 'International' }
  ]}
/>

<FormTextarea 
  label="Message"
  placeholder="Enter message"
/>
```

---

## 🔲 Grid System

### Grid Columns
```jsx
<div className="grid grid-2">
  {/* 2 columns on desktop, 1 on mobile */}
</div>

<div className="grid grid-3">
  {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
</div>

<div className="grid grid-4">
  {/* 4 columns on desktop, 2 on tablet, 1 on mobile */}
</div>
```

### Using Layout Component
```jsx
import { CardGrid } from './Layout';

<CardGrid columns={3}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</CardGrid>
```

---

## 📐 Layout Components

### PageSection
```jsx
import { PageSection } from './Layout';

<PageSection 
  title="Our Services"
  subtitle="Explore our amazing tour packages"
>
  {/* Content here */}
</PageSection>
```

### TwoColumnLayout
```jsx
import { TwoColumnLayout } from './Layout';

<TwoColumnLayout
  left={<div>Left content (2/3 width)</div>}
  right={<div>Right content (1/3 width)</div>}
/>
```

### CardGrid
```jsx
import { CardGrid } from './Layout';

<CardGrid columns={3}>
  {items.map(item => (
    <Card key={item.id}>
      <h3 className="heading-4">{item.title}</h3>
    </Card>
  ))}
</CardGrid>
```

---

## 🎨 Utility Classes

### Text Alignment
```jsx
<div className="text-center">Centered text</div>
<div className="text-left">Left aligned</div>
<div className="text-right">Right aligned</div>
```

### Colors
```jsx
<p className="text-primary">Primary color text</p>
<p className="text-secondary">Secondary color text</p>
<p className="text-muted">Muted text</p>
```

### Background
```jsx
<div className="bg-light">Light background</div>
<div className="bg-primary">Primary background</div>
```

### Spacing
```jsx
<div className="gap-md">Medium gap</div>
<div className="gap-lg">Large gap</div>
```

### Divider
```jsx
<div className="divider"></div>
<div className="divider divider-center"></div>
```

---

## 📱 Responsive Utilities

### Hide on Specific Screens
```jsx
<div className="hide-mobile">Hidden on mobile</div>
<div className="hide-tablet">Hidden on tablet</div>
```

### Stack on Mobile
```jsx
<div className="flex stack-mobile">
  {/* Stacks vertically on mobile */}
</div>
```

---

## 🔄 Migration Guide

### Before (Inconsistent)
```jsx
<div className="max-w-7xl mx-auto px-4 md:px-12 py-12 sm:py-20">
  <h2 className="text-3xl font-bold text-[#8B2248] mb-2">Title</h2>
  <div className="w-20 h-1 bg-[#00AEEF] mb-8"></div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Cards */}
  </div>
</div>
```

### After (Unified)
```jsx
import { PageSection, CardGrid, Card } from './Layout';

<PageSection title="Title">
  <CardGrid columns={2}>
    {/* Cards */}
  </CardGrid>
</PageSection>
```

---

## ✅ Implementation Checklist

- [x] Create `designSystem.css` with all tokens
- [x] Create `Layout.jsx` with reusable components
- [x] Import design system in `index.css`
- [ ] Update `Domestic.jsx` to use new system
- [ ] Update `About.jsx` to use new system
- [ ] Update `CarRental.jsx` to use new system
- [ ] Update `BookingForm.jsx` to use form components
- [ ] Update `CarBookingForm.jsx` to use form components
- [ ] Update `PickupDropSection.jsx` to use form components
- [ ] Update all tour detail pages (Kerala, Goa, etc.)
- [ ] Update `Footer.jsx` for consistency
- [ ] Update admin pages for consistency
- [ ] Test responsive behavior on all screen sizes

---

## 🚀 Next Steps

1. **Import in all components:**
   ```jsx
   import { PageSection, CardGrid, Card, Button } from './Layout';
   ```

2. **Replace inline styles with classes:**
   - Replace `className="text-3xl font-bold text-[#8B2248]"` with `className="heading-2"`
   - Replace custom padding with `className="container section"`
   - Replace custom cards with `<Card>` component

3. **Test responsive behavior:**
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1280px+)

4. **Maintain consistency:**
   - Always use design system classes
   - Never add one-off inline styles
   - Use layout components for page structure

---

## 📊 Benefits

✅ **Consistency** - Same look and feel across all pages
✅ **Maintainability** - Update design in one place
✅ **Scalability** - Easy to add new pages
✅ **Responsive** - Works perfectly on all devices
✅ **Performance** - Reusable CSS classes
✅ **Professional** - Unified design language

---

## 🎯 Brand Colors

- **Primary (Maroon):** #8B2248 - Main brand color
- **Secondary (Cyan):** #00AEEF - Accent color
- **Text:** #111827 - Dark text
- **Muted:** #6B7280 - Secondary text
- **Light:** #F9FAFB - Light backgrounds

---

## 📞 Support

For questions about the design system, refer to:
- `frontend/src/styles/designSystem.css` - All CSS variables and utilities
- `frontend/src/components/Layout.jsx` - All reusable components
- This documentation file

---

**Status:** ✅ Design System Ready for Implementation
