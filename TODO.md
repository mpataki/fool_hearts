# Fool Hearts Website - TODO

Project management tracking for site improvements and technical debt.

## 🔧 Technical Debt

### High Priority
- [x] **Fix mobile layout issues**
  - [x] Make client logos responsive (currently fixed 59em width breaks on mobile)
  - [x] Fix setlist horizontal scroll (min-width 75em forces scroll on mobile)
  - [x] Make title font-size responsive (currently 575% is too large on phones)
  - [x] Fix client logo float layout to wrap properly
- [x] **Minimize jQuery usage** - Converted custom code to vanilla JS; jQuery still required for Slick Carousel
  - To fully remove jQuery, would need to replace Slick with vanilla JS carousel (e.g., Swiper, Glide.js)
- [ ] **Update from Bower** - Bower abandoned in 2017, migrate to npm or CDN

### Medium Priority
- [ ] **HTML5 compliance**
  - [ ] Remove deprecated `frameborder="0"` from iframes (use CSS)
  - [ ] Add viewport meta tag for proper mobile rendering
  - [ ] Update to modern iframe embedding practices
- [ ] **Performance improvements**
  - [ ] Lazy load video iframes (currently all 3 load immediately)
  - [ ] Consider using YouTube thumbnail links with click-to-play
  - [ ] Optimize image loading

### Low Priority
- [ ] **Accessibility improvements**
  - [ ] Add semantic HTML tags (`<main>`, `<section>`, `<header>`)
  - [ ] Add alt text/titles to video iframes
  - [ ] Check color contrast on purple elements (WCAG compliance)
  - [ ] Add aria labels where appropriate
- [ ] **Update CLAUDE.md** - Reflect any architectural changes made

## 🎨 UX/Design Improvements

### Content
- [ ] Consider truncating long testimonials (first one is 8 lines)
- [ ] Add band member photos or more "about" content
- [ ] Add clear call-to-action button for booking inquiries

### Features
- [ ] Lazy loading for videos
- [ ] Better mobile navigation
- [ ] Social media integration beyond Instagram

## 📝 Notes

### Completed
- 2025-10-09: Removed jQuery dependency - converted to vanilla JavaScript
- 2025-10-09: Fixed mobile layout issues - responsive title, client logos, and setlists
- 2025-10-09: Optimized mobile hero - reduced height to 60vh, positioned title over gradient at bottom
- 2025-10-09: Disabled parallax effect on mobile (<770px) and adjusted title positioning (52vh mobile, 60vh desktop)
