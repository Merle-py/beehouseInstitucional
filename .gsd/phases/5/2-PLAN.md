---
phase: 5
plan: 2
wave: 2
depends_on: [5.1]
files_modified:
  - .gsd/DEPLOYMENT.md
  - README.md
autonomous: false
user_setup:
  - service: hostinger
    why: "Static file hosting for production deployment"
    manual_steps:
      - task: "Upload /out folder contents to public_html/"
        location: "Hostinger File Manager or FTP"
        details: "Upload ALL files from /out directory to public_html/ root (not in a subdirectory)"
  - service: github
    why: "Version control and deployment automation (optional)"
    manual_steps:
      - task: "Create GitHub repository (if not exists)"
        location: "GitHub.com"
        details: "Repository already exists at https://github.com/Merle-py/beehouse-institucional.git"
      - task: "Push latest changes to GitHub"
        location: "Local terminal"
        details: "git push origin main"

must_haves:
  truths:
    - "Production site is accessible at live URL"
    - "All pages and assets load correctly in production"
    - "Bitrix24 form works in production environment"
    - "Google Analytics tracking is functional"
  artifacts:
    - "Deployment documentation exists in .gsd/DEPLOYMENT.md"
    - "README.md updated with deployment instructions"
  key_links:
    - "Deployment process is documented for future updates"
---

# Plan 5.2: Deployment & Documentation

<objective>
Deploy the BeeStay landing page to Hostinger and document the deployment process for future updates.

Purpose: Make the site live and accessible to users, and ensure the deployment process is repeatable for future updates.

Output: Live production site on Hostinger with complete deployment documentation.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (deployment requirements)
- .gsd/ROADMAP.md (Phase 5 deployment tasks)
- out/ (production build from Plan 5.1)
- deployment_guide.md (existing deployment notes, if exists)
</context>

<tasks>

<task type="auto">
  <name>Create deployment documentation</name>
  <files>.gsd/DEPLOYMENT.md, README.md</files>
  <action>
    Create comprehensive deployment documentation for the BeeStay landing page:
    
    Create `.gsd/DEPLOYMENT.md` with:
    1. **Prerequisites**:
       - Node.js version requirement
       - npm packages installed
       - Hostinger account access
    
    2. **Build Process**:
       - Clean build: `Remove-Item -Recurse -Force .next,out -ErrorAction SilentlyContinue`
       - Production build: `npm run build`
       - Verify build success
    
    3. **Deployment to Hostinger**:
       - Method 1: Manual upload via File Manager
         - Navigate to Hostinger File Manager
         - Go to public_html/ directory
         - Delete old files (if updating)
         - Upload ALL contents of /out folder to public_html/ root
         - Verify file structure is correct
       
       - Method 2: FTP upload
         - FTP credentials from Hostinger panel
         - Upload /out contents to public_html/
       
       - Method 3: Git auto-deploy (optional future setup)
         - Hostinger Git integration setup
         - Push to GitHub triggers deployment
    
    4. **Post-Deployment Verification**:
       - Check live URL loads correctly
       - Test all navigation links
       - Verify Bitrix24 form submission
       - Test mobile responsiveness
       - Verify Google Analytics tracking
       - Run PageSpeed Insights on live URL
    
    5. **Troubleshooting**:
       - CSS not loading → Check asset paths
       - 404 errors → Verify file structure in public_html/
       - Form not working → Check Bitrix24 script loading
    
    6. **Future Updates**:
       - Make changes locally
       - Test with `npm run dev`
       - Build with `npm run build`
       - Upload /out contents to Hostinger
       - Verify changes live
    
    Update `README.md` with:
    - Brief project description
    - Quick start instructions
    - Build and deployment commands
    - Link to full deployment docs
    
    AVOID: Hardcoding sensitive information (credentials, API keys)
    AVOID: Incomplete instructions that assume knowledge
  </action>
  <verify>Both .gsd/DEPLOYMENT.md and README.md exist with complete instructions</verify>
  <done>Deployment documentation created with step-by-step instructions for current and future deployments</done>
</task>

<task type="checkpoint:human-action">
  <name>Deploy to Hostinger</name>
  <files>N/A</files>
  <action>
    Deploy the production build to Hostinger hosting:
    
    **Automation attempted**: None - Hostinger deployment requires manual file upload or FTP access which AI cannot perform.
    
    **What you need to do**:
    1. Access Hostinger control panel
    2. Navigate to File Manager
    3. Go to `public_html/` directory
    4. If this is an update, delete existing files first
    5. Upload ALL contents from the `/out` folder to `public_html/` root
       - IMPORTANT: Upload the CONTENTS of /out, not the /out folder itself
       - Files should be directly in public_html/, not in public_html/out/
    6. Verify file structure:
       - public_html/index.html (should exist)
       - public_html/_next/static/ (should exist)
       - public_html/logo.svg, Airbnb.svg, etc. (should exist)
    
    **Alternative method (FTP)**:
    - Use FTP client (FileZilla, WinSCP)
    - Connect using Hostinger FTP credentials
    - Upload /out contents to public_html/
    
    **I'll verify after**: Access the live URL and check that the site loads correctly
  </action>
  <verify>Site is accessible at live Hostinger URL</verify>
  <done>Production site deployed to Hostinger and accessible</done>
</task>

<task type="checkpoint:human-verify">
  <name>Verify production deployment</name>
  <files>N/A</files>
  <action>
    Verify the production deployment is working correctly:
    
    **Live Site Verification**:
    1. Access the live Hostinger URL
    2. Verify all sections load correctly:
       - Hero section with phone mockup
       - Logo scroll animation
       - Features section (3 cards)
       - Diferenciais section (4 cards)
       - FAQ section (15 questions)
       - Contact section with Bitrix24 form
       - Footer
       - WhatsApp floating button
    
    3. Test Bitrix24 form:
       - Form loads and displays correctly
       - Fields are styled (bee-gold, glassmorphism)
       - Fill out form with test data
       - Submit form
       - Verify success message
       - Check Bitrix24 CRM for lead capture
    
    4. Test mobile responsiveness:
       - Test on actual mobile device (iOS or Android)
       - OR use DevTools device emulation
       - Verify layout at 375px, 768px, 1920px
       - Test form submission on mobile
    
    5. Test navigation:
       - Click all navigation links
       - Verify smooth scrolling works
       - Test "Começar Agora" buttons
       - Test WhatsApp button
    
    6. Check performance:
       - Run PageSpeed Insights on live URL
       - Verify scores meet targets (≥90 mobile, ≥95 desktop)
    
    7. Verify Google Analytics:
       - Open browser DevTools → Network tab
       - Filter for "google-analytics" or "gtag"
       - Verify GA requests are being sent
    
    **Expected results**:
    - All content displays correctly
    - No broken images or assets
    - Bitrix24 form functional
    - Mobile layout works properly
    - Navigation smooth and functional
    - Performance scores meet targets
    - Analytics tracking active
  </action>
  <verify>User confirms production site is fully functional</verify>
  <done>Production deployment verified, all features working correctly</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Deployment documentation complete and accurate
- [ ] README.md updated with deployment instructions
- [ ] Site deployed to Hostinger and accessible
- [ ] All pages and features work in production
- [ ] Bitrix24 form captures leads successfully
- [ ] Mobile responsiveness verified on live site
- [ ] PageSpeed scores meet targets on live URL
- [ ] Google Analytics tracking confirmed
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Production site live and functional
- [ ] Deployment process documented
- [ ] Phase 5 complete
</success_criteria>
