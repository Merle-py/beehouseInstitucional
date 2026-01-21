---
phase: 4
plan: 1
wave: 1
depends_on: []
files_modified:
  - app/page.tsx
  - app/layout.tsx
autonomous: true
user_setup: []

must_haves:
  truths:
    - "Bitrix24 form script loads successfully on the page"
    - "Form appears in the CTA section replacing the static form"
    - "Form submission sends data to Bitrix24 CRM"
  artifacts:
    - "Bitrix24 script tag integrated in app/layout.tsx"
    - "Static form removed from app/page.tsx"
    - "Bitrix24 form container added to CTA section"
  key_links:
    - "Script loads from https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js"
---

# Plan 4.1: Bitrix24 Form Integration

<objective>
Replace the static contact form in the CTA section with the Bitrix24 embedded form to enable real lead capture in the client's CRM.

Purpose: Enable actual lead generation by connecting form submissions directly to Bitrix24 CRM, replacing the placeholder alert() functionality.

Output: Functional Bitrix24 form embedded in the landing page that captures leads in real-time.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (Bitrix24 integration requirement)
- .gsd/bitrix24-form.txt (embed code provided by client)
- app/page.tsx (current static form implementation, lines 514-562)
- app/layout.tsx (Next.js layout for script injection)
</context>

<tasks>

<task type="auto">
  <name>Integrate Bitrix24 script in Next.js layout</name>
  <files>app/layout.tsx</files>
  <action>
    Add the Bitrix24 form loader script to the Next.js layout using next/script component with proper strategy.
    
    Steps:
    1. Import Script from 'next/script'
    2. Add the Bitrix24 script tag inside the body, after {children}
    3. Use strategy="lazyOnload" to prevent blocking page load
    4. Add the inline script that loads the form
    
    Script details from .gsd/bitrix24-form.txt:
    - Form ID: inline/391/tud5rt
    - CDN URL: https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js
    - Skip moving: true (keeps form in place)
    
    AVOID: Using strategy="beforeInteractive" - this will block page load and hurt performance
    AVOID: Putting script in <head> - Bitrix24 forms need DOM to be ready
  </action>
  <verify>npm run build completes successfully without errors</verify>
  <done>Bitrix24 script is integrated in layout.tsx with lazyOnload strategy</done>
</task>

<task type="auto">
  <name>Replace static form with Bitrix24 container</name>
  <files>app/page.tsx</files>
  <action>
    Replace the static HTML form (lines 540-558) with a container div for the Bitrix24 form to render into.
    
    Steps:
    1. Remove the <form onSubmit={handleSubmit}> element and all its children
    2. Remove the handleSubmit function (lines 12-16) - no longer needed
    3. Replace with a div that has the Bitrix24 form attribute: data-b24-form="inline/391/tud5rt"
    4. Keep the surrounding styling container (bg-white/5 backdrop-blur-sm border...)
    5. Add min-height to prevent layout shift while form loads
    
    The Bitrix24 script will automatically find this div and inject the form.
    
    AVOID: Removing the entire CTA section - keep the left content (headline, description)
    AVOID: Changing the section styling - maintain visual consistency
  </action>
  <verify>npm run dev starts successfully and page renders without console errors</verify>
  <done>Static form removed, Bitrix24 container div added with correct data attribute</done>
</task>

<task type="checkpoint:human-verify">
  <name>Verify Bitrix24 form loads and submits</name>
  <files>N/A</files>
  <action>
    Test the Bitrix24 form integration in the browser:
    
    1. Run `npm run dev`
    2. Open http://localhost:3000
    3. Scroll to the "Agende Sua Análise Gratuita" section
    4. Verify the Bitrix24 form appears (should have Bitrix24 styling)
    5. Fill out the form with test data
    6. Submit and verify success message appears
    7. Check Bitrix24 CRM dashboard to confirm lead was captured
    
    Expected behavior:
    - Form loads within 2-3 seconds of page load
    - Form fields match Bitrix24 configuration
    - Form submission shows Bitrix24 success message
    - Lead appears in Bitrix24 CRM
  </action>
  <verify>User confirms form loads, submits successfully, and lead appears in Bitrix24</verify>
  <done>Bitrix24 form integration verified working end-to-end</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Bitrix24 script loads successfully (check Network tab)
- [ ] Form appears in CTA section with Bitrix24 styling
- [ ] Form submission creates lead in Bitrix24 CRM
- [ ] No console errors related to form loading
- [ ] Page performance not degraded (script loads lazily)
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Static form completely replaced
- [ ] Bitrix24 form functional in production build
</success_criteria>
