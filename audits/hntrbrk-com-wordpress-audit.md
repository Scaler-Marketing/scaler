# WordPress Site Audit: hntrbrk.com (Hunterbrook Media)

**Date:** 2026-03-27
**Prepared for:** Scaler Marketing
**Audit Type:** External reconnaissance (pre-developer-access)
**Reported Hosting:** WP Engine

---

## 1. Executive Summary

Hunterbrook Media (hntrbrk.com) is an investigative journalism outlet that runs on **WordPress** hosted on **WP Engine**. The site publishes financial investigations with no ads or paywalls. Based on external analysis, the site appears to be a **custom-built WordPress theme** (likely developed by or with DGFX Studio) with a relatively clean frontend footprint. Once we gain developer/backend access, a deeper audit of plugin versions, PHP version, database health, and security configurations will be essential.

---

## 2. Confirmed Technology Stack

### CMS: WordPress (Confirmed)
**Evidence:**
- URL parameter `?post_type=post` indexed by Google at `hntrbrk.com/?post_type=post` — this is a WordPress-specific query parameter
- Standard WordPress category taxonomy: `/category/breaking-news/`, `/category/investigations/`
- WordPress RSS feed at `/feed/` (indexed by Google with title "HUNTERBROOK")
- WordPress-style permalink structure with short post slugs: `/b2/`, `/rh/`, `/crane/`, `/ubiquiti/`, `/brainco/`, etc.

### Hosting: WP Engine (Per Client)
- Client has confirmed WP Engine hosting
- WP Engine typically provides:
  - Managed WordPress hosting with automatic updates
  - Built-in caching (Page Cache + Object Cache)
  - Cloudflare-powered CDN (Advanced Network)
  - Automatic daily backups
  - Staging environments
  - PHP version management
  - SSL certificates via Let's Encrypt

### Newsletter: Substack
- Newsletter subdomain: `newsletter.hntrbrk.com`
- Uses Substack's `/p/` URL pattern for posts
- Separate from the main WordPress site
- Content cross-posted between WordPress and Substack

### Design/Creative: DGFX Studio
- Dan DeLorenzo (Creative Director) runs DGFX Studio
- 25 years of visual journalism experience (Bloomberg, WSJ, NYT, AP)
- Likely involved in the custom theme design

---

## 3. Site Architecture Analysis

### URL Structure
| Pattern | Type | Notes |
|---------|------|-------|
| `/` | Homepage | Main landing page |
| `/about-us/` | Static page | WordPress page |
| `/team/` | Static page | Team directory |
| `/category/breaking-news/` | Category archive | WordPress taxonomy |
| `/category/investigations/` | Category archive | WordPress taxonomy |
| `/b2/`, `/rh/`, `/crane/`, etc. | Single posts | Short custom slugs |
| `/feed/` | RSS feed | Standard WP feed |
| `/?post_type=post` | Post type archive | WP query parameter |

### Content Types
- **Posts** — Investigative articles with short slug URLs
- **Pages** — About, Team, and likely others
- **Categories** — Breaking News, Investigations (at minimum)
- Possible **custom post types** given the `?post_type=post` parameter being explicitly indexed

### Newsletter Integration
- Substack handles email distribution at `newsletter.hntrbrk.com`
- This is a common pattern — WordPress for the main site, Substack for email list management
- Content appears to be manually cross-posted or syndicated

---

## 4. Potential Issues & Red Flags

### 4.1 Security Concerns (To Verify with Backend Access)

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | **WP REST API Exposure** | The `?post_type=post` parameter being indexed suggests the REST API may be publicly accessible at `/wp-json/`. This could leak user data, draft posts, and internal structure. |
| HIGH | **XML-RPC Endpoint** | Need to verify if `/xmlrpc.php` is disabled. If enabled, it's a common brute-force attack vector. |
| HIGH | **Login Page Exposure** | `/wp-login.php` was shared — verify if it's protected by IP whitelisting, 2FA, or a security plugin. WP Engine offers this natively. |
| MEDIUM | **User Enumeration** | `/wp-json/wp/v2/users` may expose author usernames if not restricted. |
| MEDIUM | **WordPress Version Disclosure** | Generator meta tag may expose the WP version. Should be hidden. |
| MEDIUM | **Plugin/Theme Version Disclosure** | Script/style URLs often include `?ver=` parameters that reveal versions. |
| LOW | **readme.html / license.txt** | Default WordPress files that disclose version info. Should be blocked. |

### 4.2 Performance Concerns

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | **No Ads/No Paywalls Model** | While great for UX, the site needs to be lean since there's no revenue from the site itself to justify heavy infrastructure spend. |
| MEDIUM | **Image Optimization** | Investigative journalism sites are typically image/media-heavy. Need to verify WebP conversion, lazy loading, and srcset implementation. |
| MEDIUM | **Caching Configuration** | WP Engine has built-in caching but it needs proper configuration. Check if page cache exclusions are set correctly for any dynamic content. |
| MEDIUM | **CDN Configuration** | Verify WP Engine's Advanced Network (Cloudflare CDN) is enabled and properly configured. |
| LOW | **Render-Blocking Resources** | Check for unoptimized CSS/JS loading. May need critical CSS implementation. |

### 4.3 SEO & Crawlability

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | **Sitemap** | Need to verify XML sitemap exists and is submitted to Google Search Console. Check if Yoast SEO, Rank Math, or another SEO plugin is installed. |
| MEDIUM | **robots.txt** | Need to verify proper crawl directives. |
| MEDIUM | **Structured Data** | News/Article schema should be implemented for an investigative journalism site. |
| MEDIUM | **Open Graph / Twitter Cards** | Need to verify social sharing meta tags are properly configured for all post types. |
| LOW | **Canonical URLs** | Verify canonical tags are set correctly, especially with Substack cross-posting. Duplicate content risk. |

### 4.4 WordPress Maintenance Concerns

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | **WordPress Core Version** | Need to confirm current version and whether auto-updates are enabled. WP Engine can manage this. |
| HIGH | **Plugin Audit** | Unknown plugin inventory. Need full audit of: installed plugins, active vs. inactive, versions, update status, known vulnerabilities. |
| HIGH | **Theme Updates** | If custom theme — who maintains it? Is there a child theme? Is the parent theme still actively maintained? |
| HIGH | **PHP Version** | WP Engine supports PHP 8.x. Need to verify the site is on a supported, current PHP version (ideally 8.2+). |
| MEDIUM | **Database Optimization** | Check for post revisions bloat, transient cleanup, orphaned metadata, and autoloaded options size. |
| MEDIUM | **User Roles & Permissions** | Audit all admin/editor accounts. Check for unused accounts, proper role assignments. |
| MEDIUM | **Backup Strategy** | WP Engine provides daily backups but verify retention period and test restore process. |
| LOW | **Staging Environment** | Verify staging/dev environments exist for testing updates before pushing to production. |

### 4.5 WP Engine-Specific Items to Check

| Item | Details |
|------|---------|
| **Environment** | Which WP Engine plan? (Startup, Growth, Scale, Custom) |
| **PHP Version** | Current PHP version setting |
| **Advanced Network** | Is Cloudflare CDN enabled? |
| **Page Performance** | WP Engine's built-in performance monitoring |
| **Object Cache** | Is Redis/Memcached enabled for object caching? |
| **GeoTarget** | Any geo-targeting or CDN edge rules? |
| **Transferable Sites** | Confirm site transfer process to Scaler's WP Engine account if needed |
| **Disallowed Plugins** | WP Engine bans certain plugins (e.g., some caching plugins, backup plugins). Verify compliance. |
| **Multisite** | Confirm if this is a single-site or multisite installation |

---

## 5. Recommended First Steps (Once Developer Access is Granted)

### Immediate (Day 1)
1. **Full Plugin Inventory** — List all installed plugins, versions, and status
2. **WordPress Core Version Check** — Confirm version and update status
3. **PHP Version Check** — Verify PHP version in WP Engine dashboard
4. **Security Scan** — Run Wordfence or Sucuri scan (check WP Engine's built-in scanning first)
5. **User Audit** — Review all user accounts, roles, and last login dates
6. **Check wp-config.php** — Review security keys, debug settings, and custom constants

### Short-term (Week 1)
7. **Performance Baseline** — Run GTmetrix/PageSpeed Insights and document current scores
8. **Plugin Vulnerability Check** — Cross-reference all plugins against WPScan vulnerability database
9. **Theme Analysis** — Identify theme type (custom, child, purchased), framework, and maintenance history
10. **Backup Verification** — Confirm WP Engine backup schedule and test a restore
11. **SSL/HTTPS Audit** — Check for mixed content, HSTS headers, and certificate configuration
12. **SEO Plugin Setup** — Verify sitemap, robots.txt, and schema implementation

### Ongoing Maintenance Plan
13. **Update Schedule** — Establish regular update cadence for core, plugins, and themes
14. **Monitoring** — Set up uptime monitoring and error alerting
15. **Staging Workflow** — Establish staging > production deployment process
16. **Security Hardening** — Implement recommended security headers, disable unused endpoints

---

## 6. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Outdated plugins with vulnerabilities | Medium | High | Regular update schedule, vulnerability monitoring |
| Brute force attacks on wp-login | Medium | High | 2FA, IP restrictions, WP Engine's built-in protection |
| REST API data leakage | Medium | Medium | Restrict API access, disable user enumeration |
| Duplicate content (WP + Substack) | High | Medium | Canonical URLs, content syndication strategy |
| Performance degradation over time | Medium | Medium | Regular database optimization, caching review |
| Theme developer abandonment | Low-Medium | High | Document theme structure, prepare migration plan |

---

## 7. About the Client

- **Hunterbrook Media** — Investigative journalism outlet, no ads/no paywalls
- **Business Model** — Affiliated investment fund (Hunterbrook Capital) and litigation firm (Hunterbrook Law) monetize the journalism
- **Content Volume** — Active publishing schedule with investigations, breaking news, features
- **Team** — Mix of investigative reporters, intelligence analysts, and creative staff
- **Social Presence** — Active on X (@hntrbrkmedia, 33.7K followers), YouTube, IG, TikTok, BlueSky, Bloomberg Terminal
- **Contact** — ideas@hntrbrk.com, talent@hntrbrk.com, press@hntrbrk.com

---

*This audit will be significantly expanded once developer/backend access is granted. The above findings are based entirely on external reconnaissance and publicly available information.*
