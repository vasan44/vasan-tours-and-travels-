# 🚀 QUICK REFERENCE - Design System

## Import Layout Components
```jsx
import { 
  PageLayout, 
  PageSection, 
  TwoColumnLayout, 
  CardGrid, 
  Card, 
  Button,
  FormInput,
  FormSelect,
  FormTextarea 
} from './Layout';
```

## Common Patterns

### Page with Title and Grid
```jsx
<PageSection title="Our Tours" subtitle="Explore destinations">
  <CardGrid columns={3}>
    {tours.map(tour => (
      <Card key={tour.id}>
        <h3 className="heading-4">{tour.name}</h3>
        <p className="body-text">{tour.description}</p>
      </Card>
    ))}
  </CardGrid>
</PageSection>
```

### Two Column Layout (Content + Sidebar)
```jsx
<PageSection>
  <TwoColumnLayout
    left={<div>{/* Main content */}</div>}
    right={<div>{/* Sidebar */}</div>}
  />
</PageSection>
```

### Form with Validation
```jsx
<FormInput 
  label="Full Name"
  type="text"
  placeholder="Enter your name"
  error={errors.name}
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
  placeholder="Tell us about your preferences"
  error={errors.message}
/>

<Button variant="primary" block>
  Submit
</Button>
```

### Card Grid
```jsx
<CardGrid columns={4}>
  {items.map(item => (
    <Card key={item.id}>
      <img src={item.image} alt={item.name} />
      <h3 className="heading-4">{item.name}</h3>
      <p className="body-text-sm">{item.description}</p>
    </Card>
  ))}
</CardGrid>
```

## CSS Classes Quick Reference

### Typography
- `.heading-1` - Main title (3rem)
- `.heading-2` - Section title (2.25rem)
- `.heading-3` - Subsection (1.875rem)
- `.heading-4` - Card title (1.5rem)
- `.subheading` - Subtitle (1.125rem)
- `.body-text` - Regular text (1rem)
- `.body-text-sm` - Small text (0.875rem)
- `.label` - Form label

### Buttons
- `.btn` - Base button
- `.btn-primary` - Primary (maroon)
- `.btn-secondary` - Secondary (cyan)
- `.btn-outline` - Outline style
- `.btn-sm` - Small size
- `.btn-lg` - Large size
- `.btn-block` - Full width

### Cards
- `.card` - Default card
- `.card-sm` - Small card
- `.card-lg` - Large card

### Forms
- `.form-group` - Form field wrapper
- `.form-input` - Text input
- `.form-select` - Select dropdown
- `.form-textarea` - Textarea
- `.form-error` - Error message
- `.form-success` - Success message

### Layout
- `.container` - Max-width wrapper
- `.section` - Section with padding
- `.grid` - Grid container
- `.grid-2` - 2 columns
- `.grid-3` - 3 columns
- `.grid-4` - 4 columns

### Utilities
- `.text-center` - Center text
- `.text-primary` - Primary color
- `.text-secondary` - Secondary color
- `.text-muted` - Muted text
- `.bg-light` - Light background
- `.bg-primary` - Primary background
- `.divider` - Horizontal divider
- `.divider-center` - Centered divider
- `.gap-md` - Medium gap
- `.gap-lg` - Large gap

## Spacing Values
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

## Color Variables
- `--primary`: #8B2248 (Maroon)
- `--secondary`: #00AEEF (Cyan)
- `--success`: #10B981
- `--danger`: #EF4444
- `--warning`: #F59E0B
- `--dark`: #1F2937
- `--light`: #F9FAFB

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large: 1280px+

## DO's ✅
- Use layout components for page structure
- Use design system classes for styling
- Use CSS variables for colors and spacing
- Keep components simple and reusable
- Test on mobile, tablet, and desktop

## DON'Ts ❌
- Don't use inline styles
- Don't create custom padding/margins
- Don't use random colors
- Don't mix design systems
- Don't break responsive layout

## File Locations
- Design System: `frontend/src/styles/designSystem.css`
- Layout Components: `frontend/src/components/Layout.jsx`
- Documentation: `DESIGN_SYSTEM_GUIDE.md`
