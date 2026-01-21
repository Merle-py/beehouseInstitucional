---
phase: 4
plan: 2
wave: 2
depends_on: [4.1]
files_modified:
  - app/globals.css
autonomous: true
user_setup: []

must_haves:
  truths:
    - "Bitrix24 form matches BeeStay design system (bee-gold, rounded corners, spacing)"
    - "Form is fully responsive on mobile and desktop"
    - "Form inputs have proper focus states and accessibility"
  artifacts:
    - "Custom CSS rules for Bitrix24 form elements in globals.css"
    - "Form styling matches existing CTA section design"
  key_links:
    - "CSS targets Bitrix24-generated classes and IDs"
---

# Plan 4.2: Custom CSS Styling for Bitrix24 Form

<objective>
Apply custom CSS to style the Bitrix24 embedded form to match the BeeStay design system, ensuring visual consistency with the rest of the landing page.

Purpose: Bitrix24 forms come with default styling that doesn't match the BeeStay brand. Custom CSS will override these defaults to maintain design excellence.

Output: Bitrix24 form styled with bee-gold accents, rounded corners, proper spacing, and mobile responsiveness matching the existing design.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (design excellence requirement)
- app/globals.css (existing design system with bee-gold, bee-black colors)
- app/page.tsx (CTA section styling for reference, lines 514-562)
- .gsd/ROADMAP.md (Phase 4 requirement: "Apply custom CSS to match BeeStay design")
</context>

<tasks>

<task type="auto">
  <name>Add Bitrix24 form custom CSS</name>
  <files>app/globals.css</files>
  <action>
    Add custom CSS rules at the end of globals.css to style the Bitrix24 form elements.
    
    Target elements to style (Bitrix24 generates these):
    1. Form container: .b24-form
    2. Input fields: .b24-form-control, input[type="text"], input[type="email"], input[type="tel"]
    3. Submit button: .b24-form-btn, button[type="submit"]
    4. Labels: .b24-form-control-label
    5. Error messages: .b24-form-control-alert
    
    Design system to apply:
    - Primary color: #D4AF37 (bee-gold) from existing CSS variables
    - Background: white/10 with backdrop-blur (matching current form)
    - Border: white/20 with bee-gold on focus
    - Border radius: 0.5rem (rounded-lg)
    - Padding: 1rem (px-4 py-3)
    - Font: inherit from body
    - Button: bg-bee-gold with hover state
    
    CSS structure:
    ```css
    /* Bitrix24 Form Custom Styling */
    .b24-form {
      /* Container styles */
    }
    
    .b24-form input[type="text"],
    .b24-form input[type="email"],
    .b24-form input[type="tel"],
    .b24-form-control {
      /* Input field styles matching existing form */
    }
    
    .b24-form button[type="submit"],
    .b24-form-btn {
      /* Button styles with bee-gold */
    }
    
    /* Mobile responsive adjustments */
    @media (max-width: 768px) {
      /* Adjust spacing and sizing for mobile */
    }
    ```
    
    AVOID: Using !important unless absolutely necessary - Bitrix24 CSS is not heavily specific
    AVOID: Overriding Bitrix24 functionality classes - only style visual elements
    AVOID: Hardcoding colors - use existing CSS variables where possible
  </action>
  <verify>npm run build completes successfully, CSS is included in production bundle</verify>
  <done>Custom CSS rules added to globals.css targeting all Bitrix24 form elements</done>
</task>

<task type="checkpoint:human-verify">
  <name>Verify form styling matches design</name>
  <files>N/A</files>
  <action>
    Test the styled Bitrix24 form across different viewports:
    
    Desktop testing (1920px):
    1. Run `npm run dev`
    2. Open http://localhost:3000
    3. Scroll to CTA section
    4. Verify form inputs have white/10 background with backdrop blur
    5. Verify borders are white/20 and turn bee-gold on focus
    6. Verify submit button is bee-gold with proper hover state
    7. Verify spacing matches the surrounding section
    
    Mobile testing (375px):
    1. Open DevTools and set viewport to iPhone SE (375px)
    2. Verify form is fully visible and usable
    3. Verify text size is readable (not too small)
    4. Verify button is full-width and properly sized
    5. Verify spacing is appropriate for mobile
    
    Visual consistency:
    - Form should look like it belongs to the page, not embedded
    - Colors should match the bee-gold/bee-black theme
    - Typography should be consistent with the rest of the page
  </action>
  <verify>User confirms form styling matches BeeStay design on both desktop and mobile</verify>
  <done>Bitrix24 form styling verified to match design system across all viewports</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Form inputs match existing design (bg-white/10, border-white/20)
- [ ] Submit button uses bee-gold color (#D4AF37)
- [ ] Focus states work correctly (border turns bee-gold)
- [ ] Mobile responsive (tested at 375px, 768px, 1920px)
- [ ] No visual breaks or layout shifts
- [ ] Form is accessible (labels, focus indicators)
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Form visually integrated with page design
- [ ] No design inconsistencies
</success_criteria>
