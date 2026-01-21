# Phase 4: Bitrix24 Form Integration — Planning Summary

## Overview

Phase 4 planning is **complete** with 2 execution plans created following the GSD methodology. The phase is ready for execution with `/execute 4`.

## Plans Created

### Wave 1: Plan 4.1 — Bitrix24 Form Integration
**File**: `.gsd/phases/4/1-PLAN.md`  
**Autonomous**: Yes (with human verification checkpoint)  
**Dependencies**: None  
**Files Modified**: `app/layout.tsx`, `app/page.tsx`

**Objective**: Replace the static contact form with Bitrix24 embedded form to enable real lead capture.

**Tasks**:
1. **Integrate Bitrix24 script in Next.js layout** (auto)
   - Add Script component from next/script
   - Use strategy="lazyOnload" for performance
   - Load form from CDN: `https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js`

2. **Replace static form with Bitrix24 container** (auto)
   - Remove static HTML form and handleSubmit function
   - Add div with `data-b24-form="inline/391/tud5rt"` attribute
   - Maintain surrounding styling and layout

3. **Verify form loads and submits** (human checkpoint)
   - Test form appearance and functionality
   - Verify lead capture in Bitrix24 CRM
   - Confirm no console errors

**Must-Haves**:
- ✓ Bitrix24 form script loads successfully
- ✓ Form appears in CTA section replacing static form
- ✓ Form submission sends data to Bitrix24 CRM

---

### Wave 2: Plan 4.2 — Custom CSS Styling
**File**: `.gsd/phases/4/2-PLAN.md`  
**Autonomous**: Yes (with human verification checkpoint)  
**Dependencies**: Plan 4.1  
**Files Modified**: `app/globals.css`

**Objective**: Apply custom CSS to style Bitrix24 form to match BeeStay design system.

**Tasks**:
1. **Add Bitrix24 form custom CSS** (auto)
   - Target Bitrix24-generated classes (.b24-form, .b24-form-control, etc.)
   - Apply BeeStay design tokens (bee-gold #f9b410, rounded corners, spacing)
   - Match existing form styling (bg-white/10, border-white/20, backdrop-blur)
   - Ensure mobile responsiveness

2. **Verify form styling matches design** (human checkpoint)
   - Test on desktop (1920px) and mobile (375px)
   - Verify color consistency (bee-gold, bee-black)
   - Confirm focus states and accessibility
   - Check visual integration with page

**Must-Haves**:
- ✓ Form inputs match existing design system
- ✓ Submit button uses bee-gold color
- ✓ Mobile responsive across all viewports
- ✓ Form is accessible with proper focus indicators

---

## Execution Strategy

### Wave Structure
- **Wave 1**: Plan 4.1 (foundation - form integration)
- **Wave 2**: Plan 4.2 (styling - depends on 4.1)

### Context Budget
- Plan 4.1: ~15% (2 files, script integration)
- Plan 4.2: ~10% (1 file, CSS only)
- **Total**: ~25% (well within safe limits)

### Human Checkpoints
Both plans include human verification checkpoints:
1. **Plan 4.1**: Verify form loads and submits to Bitrix24
2. **Plan 4.2**: Verify styling matches BeeStay design

These checkpoints ensure quality and allow for adjustments before marking complete.

---

## Technical Details

### Bitrix24 Form Configuration
- **Form ID**: `inline/391/tud5rt`
- **CDN URL**: `https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js`
- **Integration Type**: Inline (renders in specified container)
- **Skip Moving**: `true` (form stays in place, doesn't float)

### Design System Application
- **Primary Color**: `#f9b410` (bee-gold)
- **Dark Color**: `#0a0a0a` (bee-black)
- **Border Radius**: `0.5rem` (rounded-lg)
- **Input Background**: `white/10` with backdrop-blur
- **Border**: `white/20`, focus state `bee-gold`

### Performance Considerations
- Script loads with `lazyOnload` strategy (non-blocking)
- CSS is minimal, only targeting form elements
- No impact on existing page performance

---

## Verification Criteria

### Functional Requirements
- [ ] Bitrix24 script loads without errors
- [ ] Form renders in CTA section
- [ ] Form submission creates lead in Bitrix24 CRM
- [ ] All form fields are functional
- [ ] Success message displays after submission

### Design Requirements
- [ ] Form matches BeeStay color scheme
- [ ] Typography consistent with page
- [ ] Proper spacing and alignment
- [ ] Mobile responsive (375px, 768px, 1920px)
- [ ] Focus states visible and accessible

### Performance Requirements
- [ ] Script loads asynchronously (non-blocking)
- [ ] No layout shift when form loads
- [ ] Page load time not impacted
- [ ] Build completes successfully

---

## Next Steps

1. **Execute Phase 4**: Run `/execute 4` to start implementation
2. **Monitor checkpoints**: Review and approve at human verification points
3. **After completion**: Choose next phase:
   - Phase 2: Performance Optimization (>90 PageSpeed score)
   - Phase 5: Final Testing & Deployment
   - Deploy to Hostinger (follow `deployment_guide.md`)

---

## Files Reference

### Planning Documents
- `.gsd/phases/4/1-PLAN.md` — Bitrix24 integration plan
- `.gsd/phases/4/2-PLAN.md` — Custom CSS styling plan
- `.gsd/bitrix24-form.txt` — Bitrix24 embed code

### Implementation Files
- `app/layout.tsx` — Next.js layout (script injection)
- `app/page.tsx` — Main page (form container)
- `app/globals.css` — Global styles (Bitrix24 custom CSS)

### Reference Documents
- `.gsd/SPEC.md` — Project specification
- `.gsd/ROADMAP.md` — Phase overview
- `.gsd/STATE.md` — Current project state

---

**Planning Status**: ✅ Complete  
**Ready for Execution**: Yes  
**Estimated Duration**: 2-3 hours  
**Complexity**: Medium (external integration + styling)
