---
phase: 5
plan: 1
wave: 1
depends_on: []
files_modified:
  - out/
  - .gitignore
autonomous: false
user_setup: []

must_haves:
  truths:
    - "Production build completes successfully without errors"
    - "Static export generates all pages correctly"
    - "Bitrix24 form loads and functions in production build"
    - "All assets (images, fonts, CSS) load correctly"
  artifacts:
    - "out/ directory contains complete static site"
    - "All HTML files are properly generated"
    - "Asset paths are correct for static hosting"
  key_links:
    - "Build output is ready for deployment to Hostinger"
---

# Plan 5.1: Final Verification & Production Build

<objective>
Perform final verification of the BeeStay landing page and create the production-ready static export for deployment to Hostinger.

Purpose: Ensure all requirements are met before deployment and generate the final static files that will be deployed to production.

Output: Production-ready static site in `/out` directory, verified and ready for deployment.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (success criteria)
- .gsd/ROADMAP.md (Phase 5 tasks)
- next.config.js (build configuration)
- app/page.tsx (main page to verify)
- app/globals.css (Bitrix24 form styling)
</context>

<tasks>

<task type="auto">
  <name>Run production build and static export</name>
  <files>out/</files>
  <action>
    Execute the production build and static export process:
    
    Steps:
    1. Clean any existing build artifacts: `rm -rf .next out` (PowerShell: `Remove-Item -Recurse -Force .next,out -ErrorAction SilentlyContinue`)
    2. Run production build: `npm run build`
    3. Verify build completed successfully (exit code 0)
    4. Check that `/out` directory was created
    5. Verify all expected files exist in `/out`:
       - index.html (main page)
       - _next/static/ (assets)
       - All SVG files (logo.svg, Airbnb.svg, Booking.svg, etc.)
    
    AVOID: Deploying before verifying build success - check exit codes
    AVOID: Ignoring warnings in build output - review all output
  </action>
  <verify>npm run build exits with code 0 and out/ directory contains index.html</verify>
  <done>Production build completes successfully, out/ directory populated with static files</done>
</task>

<task type="checkpoint:human-verify">
  <name>Verify production build locally</name>
  <files>N/A</files>
  <action>
    Test the production build locally to ensure everything works:
    
    Steps:
    1. Serve the static files locally using a simple HTTP server
    2. Open http://localhost:8080 (or appropriate port)
    3. Verify all sections load correctly:
       - Hero section with phone mockup
       - Logo scroll animation
       - Features section
       - Diferenciais section
       - FAQ accordion (test opening/closing)
       - Contact section with Bitrix24 form
    4. Test Bitrix24 form:
       - Form loads correctly
       - Fields are styled properly (bee-gold, glassmorphism)
       - Form submission works
       - No console errors
    5. Test mobile responsiveness:
       - Open DevTools
       - Test at 375px (iPhone SE)
       - Test at 768px (iPad)
       - Verify all elements are visible and usable
    6. Check all links and navigation
    7. Verify WhatsApp floating button works
    
    Expected behavior:
    - All content displays correctly
    - No broken images or missing assets
    - Bitrix24 form is functional and styled
    - Mobile layout works properly
    - No console errors
  </action>
  <verify>User confirms all functionality works in production build</verify>
  <done>Production build verified working locally with all features functional</done>
</task>

<task type="checkpoint:human-verify">
  <name>Run PageSpeed Insights verification</name>
  <files>N/A</files>
  <action>
    Verify performance meets success criteria using PageSpeed Insights:
    
    Steps:
    1. Deploy the `/out` folder to a temporary hosting or use local tunnel (e.g., ngrok, localtunnel)
    2. Run PageSpeed Insights test: https://pagespeed.web.dev/
    3. Test both Mobile and Desktop
    4. Record scores:
       - Mobile Performance score (target: ≥90)
       - Desktop Performance score (target: ≥95)
       - LCP (target: <2.5s on mobile)
       - FCP (target: <1.8s on mobile)
    5. If scores don't meet targets, identify issues from report
    
    Success criteria from SPEC.md:
    - Mobile PageSpeed ≥90
    - Desktop PageSpeed ≥95
    - LCP <2.5s on mobile
    - FCP <1.8s on mobile
    
    If targets not met:
    - Review PageSpeed recommendations
    - Identify specific bottlenecks
    - Create follow-up plan to address issues
  </action>
  <verify>User confirms PageSpeed scores meet or exceed targets</verify>
  <done>PageSpeed Insights verification complete, scores documented</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Production build completes without errors
- [ ] out/ directory contains complete static site
- [ ] All pages and assets load correctly in local test
- [ ] Bitrix24 form functions properly in production build
- [ ] Mobile responsiveness verified at multiple breakpoints
- [ ] PageSpeed Insights scores meet targets (≥90 mobile, ≥95 desktop)
- [ ] No console errors in production build
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Production build ready for deployment
- [ ] Performance targets achieved
</success_criteria>
