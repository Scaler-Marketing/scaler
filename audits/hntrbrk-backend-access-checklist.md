# hntrbrk.com — Backend Access Checklist
### Scaler Marketing · Pre-Engagement Verification Items
**Created:** 2026-03-27
**Status:** Pending backend access

---

## Purpose

These are items that need to be verified or investigated once we have developer access to the WordPress backend and WP Engine portal. They were identified by cross-referencing the Perplexity external audit findings against known WP Engine behaviors and common WordPress misconfigurations.

---

## Priority 1: Verify Before Quoting Final Scope

These directly affect how we scope Phase 1 stabilization work.

### [ ] 1. Confirm Cloudflare Setup Type
**Why it matters:** The audit flagged a "double-cache" issue (Cloudflare + WP Engine). But WP Engine's Advanced Network *is* Cloudflare — an integrated partnership. If Hunterbrook is on Advanced Network, there's no double-cache problem. If they're running a *separate* Cloudflare account on top of WP Engine, that's the real issue and the source of the WAF login lockouts.

**How to check:**
- WP Engine Portal > [site] > Overview — look for "Advanced Network" or "Legacy Network"
- Check DNS: if nameservers point to Cloudflare directly (not WP Engine), they have their own Cloudflare account
- Ask: does the client manage their own Cloudflare dashboard?

**Impact on scope:** If separate Cloudflare account, cache consolidation is 4-6 hours. If Advanced Network, it's 1-2 hours of config verification.

---

### [ ] 2. Re-Test Performance Numbers
**Why it matters:** The audit cites 63.9s LCP on mobile and 42 MB page weight. These are extreme — even for an unoptimized media site. If these came from a single test on a heavy investigation page (embedded video, interactive charts), they don't represent the average experience.

**How to check:**
- Run PageSpeed Insights on 3-4 different page types:
  - Homepage (`hntrbrk.com`)
  - A text-heavy investigation (`/ubiquiti/` or `/brainco/`)
  - A shorter breaking news post
  - The `/team/` page
- Run each test 3 times and average the results
- Document both mobile and desktop scores

**Impact on scope:** If numbers are consistently this bad across all pages, the image optimization + cache work is justified at 27-38 hours. If it's isolated to a few heavy pages, the scope may be tighter.

---

### [ ] 3. Confirm WP-Cron Status
**Why it matters:** The audit assumes WP-Cron is "broken" based on a plugin update backlog. But WP Engine commonly *disables* WordPress's built-in WP-Cron and replaces it with a server-level cron. This is actually best practice — WP-Cron is unreliable on cached sites because it depends on page visits to trigger.

**How to check:**
- `wp-config.php`: look for `define('DISABLE_WP_CRON', true);`
- WP Engine Portal: check if server-side cron is enabled
- WordPress Admin > Tools > Site Health > check for cron-related warnings
- Check Action Scheduler (if installed) for failed/pending jobs

**Impact on scope:** If WP-Cron is intentionally disabled and server cron is running, this is a non-issue (0 hours). If both are broken, it's 2-3 hours.

---

### [ ] 4. Verify WP_MEMORY_LIMIT vs Server Capacity
**Why it matters:** The audit's strongest finding — `WP_MEMORY_LIMIT` at 40M on a 512M server. This likely explains silent publishing failures. But verify the exact values.

**How to check:**
- `wp-config.php`: look for `define('WP_MEMORY_LIMIT', '40M');`
- WordPress Admin > Tools > Site Health > Info > Server tab
- Note both `WP_MEMORY_LIMIT` and `WP_MAX_MEMORY_LIMIT` (admin-side limit)

**Fix:** Single line change in `wp-config.php` — but do it on staging first. Set to `256M` (not the full 512M; leave headroom for the OS and MySQL).

**Impact on scope:** 1-2 hours including staging test and verification. This is the highest-ROI fix in the entire engagement.

---

## Priority 2: Verify During First Backend Session

### [ ] 5. Theme Architecture Assessment
**Why it matters:** Custom theme "hunterbrook" v4.42 by Mikael Dahlen (Diet) with ongoing development by Till Daldrup (Europe). Single-developer dependency = bus factor risk.

**How to check:**
- Is it a child theme or standalone custom theme?
- How large is `functions.php`? (100 lines = simple; 1000+ lines = complex/risky)
- Does it use a framework (Sage, Timber, Underscores)?
- How tightly coupled is it to ACF PRO field groups?
- Are there hardcoded references to the developer's infrastructure (update servers, license checks)?
- When was the theme last updated? (check file modification dates)
- Is there a Git repo for the theme? Who has access?

**Impact on scope:** If theme is clean and well-structured, ongoing maintenance is straightforward. If it's a monolithic `functions.php` with deep ACF coupling, any change requires the original developer or significant reverse-engineering.

---

### [ ] 6. ACF Free + ACF PRO Conflict
**Why it matters:** Audit flags both installed. Running both creates field registration conflicts.

**How to check:**
- Plugins list: are both "Advanced Custom Fields" and "Advanced Custom Fields PRO" present?
- If yes, which one is active? Are field groups registered in code (PHP) or in the database (JSON)?
- Deactivating the free version is a 30-second fix BUT could break things if field groups were registered under the free version's namespace

**Impact on scope:** If confirmed, 30 minutes to fix. But test on staging first.

---

### [ ] 7. Inactive Image Optimization Plugins
**Why it matters:** WebP Express and Imsanity both installed but inactive — the "smoking gun" for 40+ MB page weight.

**How to check:**
- Confirm both are inactive in Plugins list
- Check if any other image optimization is running (ShortPixel, Imagify, Smush, EWWW)
- Check WP Engine's built-in image optimization settings
- Check if Cloudflare Polish is enabled (if on Advanced Network)

**Impact on scope:** Activating alone isn't enough. Need to:
1. Configure settings properly
2. Run bulk optimization on existing media library
3. Verify WebP delivery is working (check response headers)
4. Estimate media library size (hundreds vs thousands of images affects time)

---

### [ ] 8. Yoast Test Helper in Production
**Why it matters:** Developer debug tool active on production = sloppy deployment hygiene. Suggests changes are made directly in production without staging.

**How to check:**
- Confirm it's active in Plugins list
- Check what it's doing (resetting indexables? faking WP version?)
- Deactivate and delete it

**Broader question:** Is there a deployment workflow at all, or is everything done live?

---

### [ ] 9. User Account Audit
**Why it matters:** 9 administrators (should be 2-3), 30+ editors with zero posts, external Gmail admins.

**How to check:**
- Export full user list with roles and last login dates
- Identify: dormant accounts (no login in 90+ days), excessive admin accounts, external email domains with admin/editor access
- Check for any user with username = email address (security risk)

**Deliverable:** User audit spreadsheet with recommendations (demote, deactivate, or delete)

---

### [ ] 10. Database Charset (utf8 vs utf8mb4)
**Why it matters:** `utf8` doesn't support emoji or full Unicode. Media publication needs `utf8mb4`.

**CAUTION:** This is NOT a quick fix. Migrating charset on a production database can break things.

**How to check:**
- `wp-config.php`: look for `DB_CHARSET` value
- WordPress Admin > Tools > Site Health > Info > Database
- Check if any content already contains characters that would be affected

**Impact on scope:** If migration is needed, it should be its own scoped mini-project (2-4 hours including full backup, staging migration, content verification, production migration). Do NOT bundle this into "quick fixes."

---

## Priority 3: WP Engine Portal Checks

### [ ] 11. WP Engine Plan & Environment
- What plan tier? (Startup, Growth, Scale, Custom)
- How many environments? (Production, Staging, Development)
- Is staging current / in sync with production?
- Who has WP Engine portal access? (We'll need it)

### [ ] 12. WP Engine Caching & CDN
- Page Cache: enabled? Exclusions configured correctly?
- Object Cache: Redis or Memcached? Enabled?
- Advanced Network (Cloudflare CDN): enabled or Legacy Network?
- Any custom cache exclusion rules?

### [ ] 13. WP Engine Backups
- Daily backup retention period?
- When was the last backup taken?
- Has a restore ever been tested?
- Any backup plugin installed? (WP Engine bans some — check for conflicts)

### [ ] 14. WP Engine Disallowed Plugins
- Cross-reference installed plugins against WP Engine's disallowed list
- Common conflicts: W3 Total Cache, WP Super Cache, other caching/backup plugins

---

## Priority 4: Security Verification

### [ ] 15. REST API Exposure
- Test `/wp-json/wp/v2/users/` unauthenticated — does it return user data?
- Test `/wp-json/` root — what namespaces are exposed?
- Check if a security plugin is filtering responses

### [ ] 16. XML-RPC Status
- Is `/xmlrpc.php` accessible?
- If enabled, disable it (WP Engine can do this at the server level)

### [ ] 17. DMARC / Email Authentication
- Current DMARC: `p=none` (no enforcement)
- Recommended path: Add `rua` reporting tag first, monitor for 30 days, then move to `p=quarantine`
- Do NOT jump straight to `p=reject` — could break legitimate email delivery

### [ ] 18. Security Headers
- Check for: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- If on Cloudflare, these can be added via Workers or Transform Rules

### [ ] 19. Two Factor Plugin Configuration
- Which 2FA plugin is installed? (audit mentions email-based 2FA)
- Is it causing the login lockouts?
- Consider: is it conflicting with WP Engine's own security layer?

---

## Post-Access Deliverables

Once all checks above are complete, produce:

1. **Updated audit document** with confirmed findings (replace "suspected" with "confirmed")
2. **Revised Phase 1 scope** with accurate hour estimates based on actual findings
3. **User audit spreadsheet** with action recommendations
4. **Staging environment verification** before any production changes

---

*This checklist is a living document. Update items as they are verified.*
