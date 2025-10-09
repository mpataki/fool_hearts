# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Fool Hearts, a Toronto cover band. The site is deployed to AWS S3 and served as a static website at foolhearts.com.

## Tech Stack

- **Frontend**: Vanilla JavaScript with jQuery
- **CSS Framework**: Skeleton (lightweight responsive grid)
- **JavaScript Libraries**:
  - jQuery 3.2.1
  - Slick Carousel (for video and testimonial carousels)
  - ScrollReveal (for scroll-based animations)
- **Dependency Management**: Bower (legacy)
- **Deployment**: AWS S3 via shell script
- **CI/CD**: CircleCI (configured) and Travis CI (legacy)

## Key Files

- `index.html` - Single-page application with all content
- `js/index.js` - Main JavaScript with scroll effects, carousel initialization, and dynamic title/footer positioning
- `styles/styles.css` - All custom styles (Skeleton provides base grid)
- `deploy.sh` - Deployment script that syncs files to S3
- `bower.json` - Front-end dependencies

## Deployment

The site uses different branches for different environments:

- `staging` branch → deploys to `staging.foolhearts.com/`
- `production` branch → deploys to `foolhearts.com/`
- `master` branch → Travis CI deploys to `foolhearts.com`

**To deploy manually:**
```bash
./deploy.sh <s3-bucket-name>
```

The deploy script excludes development files (.git, bower.json, README.md, etc.) and requires AWS CLI to be installed with proper credentials configured.

## Architecture

### Single Page Structure
The site is a single HTML file with these main sections:
- Header with full-viewport hero image
- About Us (opening blurb + testimonials carousel)
- Videos section (YouTube embeds in carousel)
- Clients section (client logos)
- Example Sets (song repertoire displayed as cards)
- Footer (contact info and social links)

### JavaScript Behavior
**js/index.js** handles:
- **Title positioning**: Dynamically positions "FOOL HEARTS" title to float over the hero image. As user scrolls, the title locks to the top of the viewport with a fixed background
- **Footer reveal**: Footer is positioned fixed and reveals as the user scrolls down
- **Carousels**: Initializes Slick carousels for videos and testimonials
- **Scroll animations**: Uses ScrollReveal to animate elements with class `.reveal` as they come into view

### Styling Approach
- Uses Skeleton grid system for responsive columns
- Heavy use of fixed positioning for immersive scroll effects
- Custom purple/black color scheme (#402651, #6f5282)
- Box shadows and gradients for visual depth
- Responsive design with mobile-first carousel settings

## Development Notes

- This is a legacy codebase using Bower, which is deprecated
- No build step required - edit HTML/CSS/JS directly
- Test locally by opening index.html in a browser or using a local server
- The site has no backend - all content is static HTML
- Images are stored in the `images/` directory and served directly
