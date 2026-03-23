# Portfolio Theme Redesign - Blue Hour Aesthetic

## 🎨 Theme Overview

Your portfolio has been completely redesigned with a pastel Blue Hour aesthetic inspired by TXT's album concept, featuring warm tones and a pixel-style side navigation layout.

### Color Palette
- **Pastel Blue**: #A8D5FF (primary)
- **Pastel Pink**: #FFB4D6 (accent)
- **Pastel Yellow**: #FFFACD (secondary)
- **Pastel Green**: #B4FFD6 (tertiary)
- **Warm Background**: #FFF8F0 (creamy warm base)
- **Warm Accent**: #FFE5CC (peach tone)
- **Text Dark**: #2D2D3D (body text)
- **Text Light**: #5A5A6D (secondary text)

## 📁 Major Changes

### 1. **Side Navigation Bar**
   - **Location**: Fixed on the left at 280px width
   - **Features**:
     - Avatar with gradient (pink → yellow)
     - User name "Yasmine" with text shadow
     - Navigation menu with hover effects (green borders, translate effect)
     - Social links footer (GitHub, LinkedIn, Email)
     - Responsive toggle on mobile (hidden by default, slides in on hamburger click)
   - **File**: `components/SideNav.tsx` (new component)

### 2. **Global Layout Changes**
   - Main content now has `margin-left: 280px` to accommodate side nav
   - Mobile responsive: side nav converts to hamburger toggle
   - All pages inherit the side nav from `layout.tsx`
   - Removed old top navbar completely

### 3. **Color-Coded Sections**
   Each section has a unique gradient background with matching border:
   - **Hero**: Transparent with pastel blue tint + dashed pink border
   - **TODO**: Pale yellow gradient + green border
   - **Parcours (Timeline)**: Pale green gradient + blue border
   - **Projects**: Transparent pink tint
   - **Contact**: Pink gradient +ay yellow border
   - **Footer**: Warm accent background + dashed blue border

### 4. **Interactive Elements**
   - **Buttons**: Pixel-style (4px borders, sharp corners)
   - **Hover Effects**: Color shift + 2px translate
   - **Cards**: Border color changes on hover, shadow deepens
   - **Timeline**: Dots are pink with dark borders, line is dark

### 5. **Typography**
   - **Sans**: Poppins (main text, nav)
   - **Mono**: Fira Code (headings, timestamps)
   - **Serif**: Lora (available for special use)
   - **Text Shadows**: Subtle for headers (3px offset)

## 🗑️ Files Removed

### From root `/portfolio`:
- `carousel.css` (old static CSS)
- `index.html` (old HTML)
- `project-detail.html` (old product page)
- `project-detail.js` (old JavaScript)
- `script.js` (old logic)
- `style.css` (old stylesheet)
- `SHADCN_COMPONENT_INTEGRATION.md` (old documentation)

### From `/react-portfolio`:
- `COMPONENT_INTEGRATION.md` (old integration guide)
- `components/ui/demo.tsx` (unused demo)
- `components/ui/celestial-ink-shader.tsx` (removed - not in new design)

## 📱 Responsive Design

### Desktop (≥768px)
- Side nav visible on left
- Full-width sections
- Timeline alternates left/right

### Tablet (768px)
- Side nav converts to hamburger menu
- Content takes full width
- Mobile nav toggle appears (top-left)
- Overlay dim background when menu open

### Mobile (<480px)
- Smaller headlines (2rem)
- Single-column project grid
- Reduced padding/margins
   - Optimized touch targets

## 🚀 Updated Files

### `/app/layout.tsx`
- Removed: `CelestialInkShader` import
- Added: `SideNav` component
- Body now contains: `<SideNav />` + `{children}`

### `/app/page.tsx`
- Removed: Top navbar (`<nav className="navbar">`)
- Kept: All section content unchanged
- Side nav now handles navigation

### `/app/projets/[id]/page.tsx`
- Removed: Top navbar on detail page
- Side nav still available for navigation
- Same styling applied to detail page

### `/app/globals.css`
- **Complete rebuild** with:
  - New color variables (pastel palette)
  - Side nav styling (160+ lines)
  - Section backgrounds (gradients)
  - Responsive media queries
  - Pixel-style button designs
  - Timeline visual improvements

## ✨ Visual Features

### Pixel Aesthetic
- Sharp 4px borders instead of rounded
- Border-radius: 4px (minimal rounding)
- 2px offset shadows for depth
- Dashed borders for hero/footer

### Gradients
- Subtle 135deg angle gradients
- Color blending with warm tones
- Opacity overlays for text readability

### Animations
- Hover color transitions (0.3s)
- Transform translations (2-4px)
- Border color changes
- Shadow depth increases

## 🎯 Next Steps

1. **View the portfolio**: Open http://localhost:3000
2. **Test responsiveness**: Resize browser or test on mobile
3. **Customize colors**: Modify CSS variables in `:root`
4. **Update links**: Edit social links in `SideNav.tsx`
5. **Add features**: The structure is flexible for future enhancements

## 📝 Customization Tips

To change colors, edit the CSS variables in `globals.css`:
```css
:root {
  --pastel-blue: #A8D5FF;      /* Change primary color */
  --pastel-pink: #FFB4D6;      /* Change accent color */
  --warm-bg: #FFF8F0;          /* Change background */
  /* etc... */
}
```

To modify the nav, edit `components/SideNav.tsx`:
- Change avatar dimensions
- Update social links
- Adjust spacing
- Modify colors

---

**Theme Inspired By**: TXT Blue Hour Album Aesthetic
**Design Style**: Pastel + Pixel
**Warm Tone**: Cream/Peach based backgrounds
**Navigation**: Fixed side panel with responsive toggle
