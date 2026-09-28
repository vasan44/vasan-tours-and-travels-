# 🎨 VISUAL STYLE GUIDE - Tours & Travels

## Color Palette

### Primary Colors
```
Primary (Maroon)
#8B2248
RGB: 139, 34, 72
Used for: Main headings, primary buttons, brand elements

Secondary (Cyan)
#00AEEF
RGB: 0, 174, 239
Used for: Accents, dividers, hover states, secondary buttons
```

### Semantic Colors
```
Success (Green)
#10B981
RGB: 16, 185, 129
Used for: Success messages, positive actions

Danger (Red)
#EF4444
RGB: 239, 68, 68
Used for: Error messages, destructive actions

Warning (Amber)
#F59E0B
RGB: 245, 158, 11
Used for: Warning messages, caution states
```

### Neutral Colors
```
Dark (Charcoal)
#1F2937
RGB: 31, 41, 55
Used for: Primary text, dark backgrounds

Light (Off-white)
#F9FAFB
RGB: 249, 250, 251
Used for: Light backgrounds, card backgrounds

Border (Light Gray)
#E5E7EB
RGB: 229, 231, 235
Used for: Borders, dividers

Text Primary (Dark Gray)
#111827
RGB: 17, 24, 39
Used for: Main text content

Text Secondary (Medium Gray)
#6B7280
RGB: 107, 114, 128
Used for: Secondary text, labels

Text Light (Light Gray)
#9CA3AF
RGB: 156, 163, 175
Used for: Placeholder text, helper text
```

---

## Typography System

### Heading 1 (3rem / 48px)
```
Font Weight: 700 (Bold)
Line Height: 1.2
Color: Primary (#8B2248)
Usage: Main page titles
Example: "Domestic Tourism"
```

### Heading 2 (2.25rem / 36px)
```
Font Weight: 700 (Bold)
Line Height: 1.2
Color: Primary (#8B2248)
Usage: Section titles
Example: "Our Services"
```

### Heading 3 (1.875rem / 30px)
```
Font Weight: 700 (Bold)
Line Height: 1.3
Color: Primary (#8B2248)
Usage: Subsection titles
Example: "Popular Destinations"
```

### Heading 4 (1.5rem / 24px)
```
Font Weight: 600 (Semibold)
Line Height: 1.4
Color: Text Primary (#111827)
Usage: Card titles
Example: "Kerala Tour Package"
```

### Subheading (1.125rem / 18px)
```
Font Weight: 500 (Medium)
Line Height: 1.5
Color: Text Secondary (#6B7280)
Usage: Subtitle, description
Example: "Explore amazing destinations"
```

### Body Text (1rem / 16px)
```
Font Weight: 400 (Regular)
Line Height: 1.6
Color: Text Primary (#111827)
Usage: Regular paragraph text
Example: "This is a regular paragraph..."
```

### Body Text Small (0.875rem / 14px)
```
Font Weight: 400 (Regular)
Line Height: 1.5
Color: Text Secondary (#6B7280)
Usage: Helper text, small descriptions
Example: "Optional field"
```

### Label (0.875rem / 14px)
```
Font Weight: 600 (Semibold)
Line Height: 1.5
Color: Text Primary (#111827)
Usage: Form labels
Example: "Full Name"
```

---

## Spacing Scale

### Spacing Values
```
xs: 4px    (0.25rem)   - Minimal spacing
sm: 8px    (0.5rem)    - Small spacing
md: 16px   (1rem)      - Medium spacing
lg: 24px   (1.5rem)    - Large spacing
xl: 32px   (2rem)      - Extra large spacing
2xl: 48px  (3rem)      - Double extra large
3xl: 64px  (4rem)      - Triple extra large
```

### Common Spacing Patterns
```
Section Padding:
- Desktop: 64px top/bottom (3xl)
- Tablet: 48px top/bottom (2xl)
- Mobile: 32px top/bottom (xl)

Container Padding:
- Desktop: 48px left/right (3rem)
- Tablet: 32px left/right (2rem)
- Mobile: 16px left/right (1rem)

Card Padding:
- Default: 32px (xl)
- Small: 24px (lg)
- Large: 48px (2xl)

Gap Between Items:
- Grid: 32px (xl)
- Flex: 24px (lg)
```

---

## Border Radius

### Radius Values
```
sm: 6px    (0.375rem)   - Minimal rounding
md: 8px    (0.5rem)     - Small rounding
lg: 12px   (0.75rem)    - Medium rounding
xl: 16px   (1rem)       - Large rounding
2xl: 24px  (1.5rem)     - Extra large rounding
3xl: 32px  (2rem)       - Maximum rounding
```

### Usage
```
Buttons: lg (12px)
Cards: xl (16px)
Inputs: lg (12px)
Images: xl (16px)
Modals: 2xl (24px)
```

---

## Shadows

### Shadow Levels
```
sm (Small)
0 1px 2px 0 rgba(0, 0, 0, 0.05)
Usage: Subtle shadows, minimal depth

md (Medium)
0 4px 6px -1px rgba(0, 0, 0, 0.1)
Usage: Default card shadow

lg (Large)
0 10px 15px -3px rgba(0, 0, 0, 0.1)
Usage: Hover state, elevated elements

xl (Extra Large)
0 20px 25px -5px rgba(0, 0, 0, 0.1)
Usage: Modals, dropdowns

2xl (Maximum)
0 25px 50px -12px rgba(0, 0, 0, 0.25)
Usage: Maximum elevation
```

### Shadow Usage
```
Cards: md (default), lg (hover)
Buttons: md (default), lg (hover)
Inputs: sm (default), md (focus)
Modals: 2xl
Dropdowns: xl
```

---

## Button Styles

### Primary Button
```
Background: #8B2248 (Primary)
Text Color: White
Border: None
Padding: 12px 24px (0.75rem 1.5rem)
Border Radius: 12px (lg)
Font Weight: 600 (Semibold)
Hover: #6B1A35 (darker), shadow-lg, translateY(-2px)
```

### Secondary Button
```
Background: #00AEEF (Secondary)
Text Color: White
Border: None
Padding: 12px 24px (0.75rem 1.5rem)
Border Radius: 12px (lg)
Font Weight: 600 (Semibold)
Hover: #0088B8 (darker), shadow-lg, translateY(-2px)
```

### Outline Button
```
Background: Transparent
Text Color: #8B2248 (Primary)
Border: 2px solid #8B2248
Padding: 12px 24px (0.75rem 1.5rem)
Border Radius: 12px (lg)
Font Weight: 600 (Semibold)
Hover: Background #8B2248, Text White
```

### Button Sizes
```
Small (btn-sm)
Padding: 8px 16px (0.5rem 1rem)
Font Size: 14px (0.875rem)

Medium (default)
Padding: 12px 24px (0.75rem 1.5rem)
Font Size: 16px (1rem)

Large (btn-lg)
Padding: 16px 32px (1rem 2rem)
Font Size: 18px (1.125rem)
```

---

## Form Elements

### Text Input
```
Height: 44px (0.75rem padding)
Border: 1px solid #E5E7EB
Border Radius: 12px (lg)
Background: White
Font Size: 16px (1rem)
Padding: 12px 16px (0.75rem 1rem)
Focus: Border #00AEEF, Box-shadow 0 0 0 3px rgba(0, 174, 239, 0.1)
Placeholder: #9CA3AF (text-light)
```

### Select Dropdown
```
Height: 44px (0.75rem padding)
Border: 1px solid #E5E7EB
Border Radius: 12px (lg)
Background: White
Font Size: 16px (1rem)
Padding: 12px 16px (0.75rem 1rem)
Focus: Border #00AEEF, Box-shadow 0 0 0 3px rgba(0, 174, 239, 0.1)
```

### Textarea
```
Border: 1px solid #E5E7EB
Border Radius: 12px (lg)
Background: White
Font Size: 16px (1rem)
Padding: 12px 16px (0.75rem 1rem)
Min Height: 120px
Resize: Vertical
Focus: Border #00AEEF, Box-shadow 0 0 0 3px rgba(0, 174, 239, 0.1)
```

### Form Label
```
Font Size: 14px (0.875rem)
Font Weight: 600 (Semibold)
Color: #111827 (text-primary)
Display: Block
Margin Bottom: 8px (0.5rem)
```

### Form Group
```
Margin Bottom: 24px (1.5rem)
Contains: Label + Input + Error/Success message
```

### Error Message
```
Font Size: 14px (0.875rem)
Color: #EF4444 (danger)
Margin Top: 8px (0.5rem)
```

### Success Message
```
Font Size: 14px (0.875rem)
Color: #10B981 (success)
Margin Top: 8px (0.5rem)
```

---

## Card Styles

### Default Card
```
Background: White
Border Radius: 16px (xl)
Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) (md)
Padding: 32px (xl)
Transition: All 300ms ease-in-out
Hover: Box-shadow lg, transform translateY(-2px)
```

### Small Card
```
Background: White
Border Radius: 12px (lg)
Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) (md)
Padding: 24px (lg)
Transition: All 300ms ease-in-out
Hover: Box-shadow lg, transform translateY(-2px)
```

### Large Card
```
Background: White
Border Radius: 24px (2xl)
Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) (md)
Padding: 48px (2xl)
Transition: All 300ms ease-in-out
Hover: Box-shadow lg, transform translateY(-2px)
```

---

## Grid System

### 2 Column Grid
```
Desktop (1024px+): 2 columns
Tablet (640px-1024px): 2 columns
Mobile (<640px): 1 column
Gap: 32px (xl)
```

### 3 Column Grid
```
Desktop (1024px+): 3 columns
Tablet (640px-1024px): 2 columns
Mobile (<640px): 1 column
Gap: 32px (xl)
```

### 4 Column Grid
```
Desktop (1024px+): 4 columns
Tablet (640px-1024px): 2 columns
Mobile (<640px): 1 column
Gap: 32px (xl)
```

---

## Container System

### Desktop (1280px+)
```
Max Width: 1280px
Padding: 48px left/right (3rem)
Centered on screen
```

### Tablet (1024px - 1279px)
```
Max Width: 1280px
Padding: 32px left/right (2rem)
Centered on screen
```

### Mobile (<640px)
```
Full width
Padding: 16px left/right (1rem)
No max width
```

---

## Responsive Breakpoints

### Mobile First Approach
```
Mobile: < 640px
- Full width containers
- 1 column grids
- Stacked layouts
- Reduced padding (16px)
- Smaller font sizes
- Touch-friendly buttons (44px min height)

Tablet: 640px - 1024px
- Centered containers
- 2 column grids
- Side-by-side layouts
- Medium padding (32px)
- Medium font sizes
- Optimized spacing

Desktop: 1024px - 1280px
- Centered containers
- 3-4 column grids
- Full layouts
- Large padding (48px)
- Full font sizes
- All features visible

Large: 1280px+
- Max-width 1280px
- Full layouts
- All features visible
- Large padding (48px)
- Full font sizes
```

---

## Animations

### Fade In Up
```
Duration: 300ms
Easing: ease-out
From: opacity 0, translateY(20px)
To: opacity 1, translateY(0)
Usage: Page load, element entrance
```

### Slide In Left
```
Duration: 300ms
Easing: ease-out
From: opacity 0, translateX(-20px)
To: opacity 1, translateX(0)
Usage: Sidebar, side elements
```

### Hover Effects
```
Cards: translateY(-2px), shadow-lg
Buttons: translateY(-2px), shadow-lg
Links: color change, underline
```

---

## Divider Styles

### Standard Divider
```
Width: 64px (4rem)
Height: 4px (0.25rem)
Background: #00AEEF (secondary)
Margin: 16px 0 (md)
```

### Centered Divider
```
Width: 64px (4rem)
Height: 4px (0.25rem)
Background: #00AEEF (secondary)
Margin: 16px auto (md)
Text Align: Center
```

---

## Utility Classes

### Text Alignment
```
.text-center - Center text
.text-left - Left align text
.text-right - Right align text
```

### Text Colors
```
.text-primary - Primary color (#8B2248)
.text-secondary - Secondary color (#00AEEF)
.text-muted - Muted text (#6B7280)
```

### Background Colors
```
.bg-light - Light background (#F9FAFB)
.bg-primary - Primary background (#8B2248)
```

### Spacing
```
.gap-md - Medium gap (24px)
.gap-lg - Large gap (48px)
```

### Visibility
```
.hide-mobile - Hide on mobile
.hide-tablet - Hide on tablet
.stack-mobile - Stack on mobile
```

---

## Best Practices

### DO's ✅
- Use design system classes
- Use CSS variables for colors
- Use layout components
- Keep components simple
- Test on all screen sizes
- Use consistent spacing
- Follow naming conventions

### DON'Ts ❌
- Don't use inline styles
- Don't create custom colors
- Don't mix design systems
- Don't break responsive layout
- Don't use random spacing
- Don't create one-off components
- Don't ignore accessibility

---

## Component Examples

### Card with Image
```jsx
<Card>
  <img src="image.jpg" alt="Title" className="w-full rounded-lg mb-4" />
  <h3 className="heading-4">Card Title</h3>
  <p className="body-text">Card description</p>
  <Button variant="primary" className="mt-4">Learn More</Button>
</Card>
```

### Form Section
```jsx
<div className="form-group">
  <label className="label">Full Name</label>
  <input type="text" className="form-input" placeholder="Enter name" />
</div>
```

### Grid Layout
```jsx
<CardGrid columns={3}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</CardGrid>
```

---

**Version:** 1.0
**Status:** Production Ready
**Last Updated:** 2024
