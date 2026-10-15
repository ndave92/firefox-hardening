/* You may copy+paste this file and use it as it is.
If you make changes to your about:config while the program is running, the
changes will be overwritten by the user.js when the application restarts.
To make lasting changes to preferences, you will have to edit the user.js. */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 154                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
*****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
*****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** MEDIA CACHE ***/
user_pref("media.cache_readahead_limit", 3600);
user_pref("media.cache_resume_threshold", 1800);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORKING ***/
user_pref("network.buffer.cache.size", 65535);
user_pref("network.buffer.cache.count", 48);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.dnsCacheExpiration", 3600);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
*****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("nimbus.rollouts.enabled", false);

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
*****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** AI ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * START: MY OVERRIDES (grouped by categories A-Z ascending order)          *
*****************************************************************************/
/* Visit:
- https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
- https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening

Note: Some user_prefs below are intentionally commented out, which means they are optional and/or platform-specific. You can uncomment them if you want to enable those settings. Please read the comments for each preference to understand their effects and potential drawbacks.

Enter your personal overrides below this line: */

/** AI ***/
user_pref("browser.ml.chat.shortcuts", false); // hide the AI chatbot shortcut shown on text selection; default = true
user_pref("browser.ml.chat.shortcuts.custom", false); // hide custom prompts in the AI chatbot shortcut menu; default = true
user_pref("browser.ml.pageAssist.enabled", false); // disable AI page assist; default = false
user_pref("browser.smartwindow.enabled", false); // disable Smart Window (AI browsing window); default = false
user_pref("browser.tabs.groups.smart.userEnabled", false); // disable AI tab group suggestions (on-device model); default = true
user_pref("browser.translations.automaticallyPopup", false); // don't offer translation automatically on foreign-language pages; default = true
user_pref("browser.translations.enable", false); // disable Firefox Translations (on-device Bergamot ML models, page text is not sent to Mozilla); default = true
user_pref("browser.urlbar.quicksuggest.mlEnabled", false); // disable the ML backend for Firefox Suggest; default = false
user_pref("extensions.ml.enabled", false); // disable the experimental ML inference API for extensions; the AI controls toggle in Settings sets this, browser.ai.control.default in user.js does not; default = true
// user_pref("pdfjs.enableAltText", false); // disable the PDF editor's alt text feature, including the manual alt text editor, and never load the ML manager; default = true
user_pref("pdfjs.enableAltTextModelDownload", false); // don't download the on-device alt text model for the PDF editor; default = false
user_pref("pdfjs.enableGuessAltText", false); // disable AI-generated alt text suggestions for images added in the PDF editor; default = false
user_pref("places.semanticHistory.featureGate", false); // disable AI semantic history search; default = false (true on Nightly, early Beta and Developer Edition)

/** ANTI-FINGERPRINTING ***/
// user_pref("privacy.resistFingerprinting", true); // enable Resist Fingerprinting (RFP) in all windows; breaks some sites, read first: https://support.mozilla.org/kb/resist-fingerprinting; default = false
// user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // hide the mozAddonManager API from addons.mozilla.org; works without RFP; default = false
// user_pref("privacy.resistFingerprinting.letterboxing", true); // RFP letterboxing: pad the content area so its size snaps to steps (50 px up to 500 px, 200x100 px up to 1600 px, 200 px above); requires RFP; default = false
// user_pref("privacy.resistFingerprinting.pbmode", true); // enable RFP in private windows only; default = false
// user_pref("privacy.spoof_english", 2); // RFP: request English pages and report an en-US locale; may show English instead of your language (0 = ask, 1 = don't spoof, 2 = spoof); default = 0
// user_pref("privacy.window.maxInnerWidth", 1900); // RFP: maximum inner width of newly opened windows; ignored without RFP; default = 1400
// user_pref("privacy.window.maxInnerHeight", 1000); // RFP: maximum inner height of newly opened windows; ignored without RFP; default = 900
user_pref("widget.non-native-theme.use-theme-accent", false); // use Firefox's accent color instead of the OS accent for form controls and CSS AccentColor, so sites can't read it; default = false on Windows, true on macOS and Linux
// user_pref("widget.windows.uwp-system-colors.highlight-accent", true); // use the Windows accent color for the selection highlight; exposes it to sites through CSS system colors; Windows only; default = false

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true); // ask what to do with file types Firefox hasn't handled before; default = false
// user_pref("browser.download.alwaysOpenPanel", false); // don't open the downloads panel when a download starts; default = true
// user_pref("browser.download.useDownloadDir", false); // ask where to save every download; default = true
user_pref("browser.helperApps.deleteTempFileOnExit", true); // delete temp files of downloads opened with helper apps when Firefox exits; default = true (false on macOS)
user_pref("extensions.postDownloadThirdPartyPrompt", false); // check the site's add-on install permission before the add-on is downloaded, not after (arkenfox 2661); default = true

/** GEOLOCATION ***/
// user_pref("geo.enabled", false); // disable the Geolocation API entirely; breaks maps and location features; default = true
// user_pref("geo.provider.ms-windows-location", false); // don't use the Windows location service; Windows only; default = true
// user_pref("geo.provider.use_corelocation", false); // don't use the macOS Core Location service; macOS only; default = true
// user_pref("geo.provider.use_geoclue", false); // don't use the GeoClue location service; Linux only; default = true

/** MEDIA ***/
// user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true); // force zero-copy hardware video decoding even on GPUs and drivers Mozilla has blocked for it; can lower CPU use but risks glitches or crashes; Windows only; default = false
// user_pref("media.av1.enabled", false); // disable AV1 on hardware without AV1 decoding (e.g. Apple Silicon before M3), where software decoding (dav1d) costs CPU and battery; sites fall back to VP9 or H.264; default = true

/** MOZILLA UI ***/
// user_pref("browser.aboutaddons.novaThemesPickerEnabled", false); // hide the Nova themes picker in the Add-ons Manager; default = false
user_pref("browser.menu.showViewImageInfo", true); // show "View Image Info" in the image context menu; default = false (true on Developer Edition)
// user_pref("browser.newtabpage.activity-stream.nova.enabled", false); // use the classic New Tab page instead of the Nova redesign; default = true
// user_pref("browser.newtabpage.activity-stream.system.showWeather", true); // force the New Tab weather widget on where Mozilla hasn't enabled it for your region; it fetches weather for your approximate location; default = set by region
// user_pref("browser.newtabpage.activity-stream.weather.display", "simple"); // weather widget style: "simple" (temperature only) or "detailed"; default = "detailed"
// user_pref("browser.nova.enabled", false); // use the classic Firefox UI instead of the Nova redesign; default = true
user_pref("browser.tabs.splitView.enabled", true); // enable split view; default = true
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false); // hide Mozilla product promos in the account menu; default = true
// user_pref("pdfjs.enableNova", false); // use the classic PDF viewer UI; Nova only applies while browser.nova.enabled is also true; default = true
user_pref("sidebar.revamp", true); // enable the new sidebar; default = true

/* widget.non-native-theme.scrollbar.style values (non-default styles are experimental):
0 = default platform style
1 = macOS
2 = GTK
3 = Android
4 = Windows 10
5 = Windows 11 */
// user_pref("widget.non-native-theme.scrollbar.style", 0); // scrollbar style; default = 0
// user_pref("widget.non-native-theme.win11.scrollbar.force-overlay-style", true); // always draw Windows 11 scrollbars in the thin overlay style that expands on hover; only affects Windows 11 style scrollbars; default = false

/** NETWORK ***/
user_pref("captivedetect.canonicalURL", ""); // clear the captive portal probe URL; redundant while network.captive-portal-service.enabled is false; default = "http://firefox-portal-detection.com/generate_204"
user_pref("media.peerconnection.ice.default_address_only", true); // WebRTC: gather candidates only from the default route interface, so other interfaces (e.g. outside a VPN) aren't exposed; may break some calls; default = false
// user_pref("media.peerconnection.ice.no_host", true); // WebRTC: gather no host candidates at all; stronger, but breaks more calls; default = false
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // WebRTC: send all traffic through the proxy when one is configured; default = false
user_pref("network.captive-portal-service.enabled", false); // disable captive portal detection (plain HTTP requests to firefox-portal-detection.com); hotel and airport Wi-Fi login pages are no longer detected, open an http:// site manually; default = true
user_pref("network.connectivity-service.enabled", false); // disable connectivity checks (plain HTTP requests to firefox-portal-detection.com); default = true
user_pref("network.dns.echconfig.enabled", true); // use Encrypted Client Hello when a site's DNS HTTPS record offers it; works with DoH or the OS resolver; default = true
user_pref("network.file.disable_unc_paths", true); // block UNC network paths (\\server\share) in file:// URLs; Windows only; default = false
user_pref("network.http.http3.use_nspr_for_io", false); // HTTP/3: use the Rust UDP I/O path instead of NSPR; default = false

/* network.trr.mode values:
0 = off (default)
1 = reserved (off)
2 = DoH first, OS resolver as fallback
3 = DoH only, no fallback
4 = reserved (off)
5 = off by choice */
// user_pref("network.trr.mode", 5); // DoH off by choice, Firefox uses the OS resolver; set up encrypted DNS in the OS instead (e.g. Quad9, NextDNS, AdGuard, Mullvad); for DoH in Firefox use 2 or 3 with network.trr.uri; default = 0
// user_pref("network.trr.uri", "https://dns.quad9.net/dns-query"); // DoH resolver for modes 2 and 3; when empty Firefox uses network.trr.default_provider_uri (Cloudflare); default = ""

/** PERFORMANCE ***/
user_pref("browser.cache.memory.capacity", 524288); // memory cache size in KB (512 MB); with the disk cache off this is the whole HTTP cache, and the automatic size (-1) is capped at 32 MB; default = -1
user_pref("browser.cache.memory.max_entry_size", 20480); // largest single entry kept in the memory cache, in KB (20 MB); default = 5120
user_pref("content.notify.interval", 120000); // restore Mozilla's default; Betterfox sets 100000, which only shows slow-loading pages slightly sooner; comment this line out to use Betterfox's value; default = 120000
user_pref("network.buffer.cache.size", 65536); // network buffer segment size in bytes; must be a power of 2, Betterfox's 65535 is not; default = 32768

/** PERMISSIONS ***/
/* permissions.default.* values:
0 = always ask
1 = allow
2 = block */
// user_pref("permissions.default.camera", 0); // ask before sites use the camera; default = 0
// user_pref("permissions.default.image", 1); // load images; 2 blocks all images and breaks most sites; default = 1
// user_pref("permissions.default.local-network", 0); // ask before sites connect to devices on your local network; default = 0
// user_pref("permissions.default.loopback-network", 0); // ask before sites connect to services on this computer (localhost); default = 0
// user_pref("permissions.default.microphone", 0); // ask before sites use the microphone; default = 0
// user_pref("permissions.default.screen-wake-lock", 1); // allow sites to keep the screen awake (e.g. video, presentations); default = 1
// user_pref("permissions.default.shortcuts", 0); // sites may override Firefox keyboard shortcuts; 2 blocks this (no "ask" option); default = 0
user_pref("permissions.default.xr", 2); // block WebXR (VR/AR) requests; allow per site in site permissions; default = 0

/** PRIVACY ***/
user_pref("device.sensors.enabled", false); // block all device sensor events (orientation, motion, light, proximity) for websites; overrides the per-sensor prefs below; default = true
// per-sensor prefs, only used while device.sensors.enabled is true:
// user_pref("device.sensors.ambientLight.enabled", false); // default = false
// user_pref("device.sensors.motion.enabled", false); // default = true
// user_pref("device.sensors.orientation.enabled", false); // default = true
// user_pref("device.sensors.proximity.enabled", false); // default = false
user_pref("dom.battery.enabled", false); // disable the Battery API; websites can't use navigator.getBattery() anyway (chrome-only), so this is defense in depth; default = true
// user_pref("dom.event.clipboardevents.enabled", false); // stop sites from detecting or changing copy, cut and paste; breaks paste in web editors (e.g. Google Docs); default = true
// user_pref("dom.gamepad.enabled", false); // disable the Gamepad API; breaks browser games and cloud gaming (e.g. Xbox Cloud Gaming); default = true
// user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true); // strict tracking protection: keep the exceptions that fix major site breakage; default = true
// user_pref("privacy.trackingprotection.allow_list.convenience.enabled", true); // strict tracking protection: keep the exceptions that fix minor breakage, which may allow some trackers; default = true

/** RENDERING ***/
// user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); // 5 = natural symmetric; default = -1 (use the system/default value); Windows only
// user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100); // 0 = off, 100 = full; default = -1 (use the system/default value); Windows only

/** SEARCH & URL BAR ***/
user_pref("browser.search.separatePrivateDefault.enabled", true); // use a separate default search engine in private windows; default = false
user_pref("browser.search.separatePrivateDefault.featureGate", true); // show the private window search engine option in Settings; default = false
// user_pref("browser.search.visualSearch.featureGate", false); // hide "Search Image with Google Lens" in the image context menu; using it sends the image to Google; default = true
user_pref("browser.urlbar.addons.featureGate", false); // disable add-on suggestions in the address bar; default = false
user_pref("browser.urlbar.amp.featureGate", false); // disable sponsored AMP suggestions in the address bar; default = false
user_pref("browser.urlbar.fakespot.featureGate", false); // disable Fakespot suggestions in the address bar; default = false
user_pref("browser.urlbar.mdn.featureGate", false); // disable MDN suggestions in the address bar; default = false
user_pref("browser.urlbar.showSearchTerms.enabled", false); // show the URL instead of the search terms on result pages; only matters while showSearchTerms.featureGate is true; default = true
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // disable non-sponsored Firefox Suggest results; default = false
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // disable sponsored Firefox Suggest results; default = false
user_pref("browser.urlbar.suggest.searches", false); // disable search engine suggestions in the address bar; default = true
user_pref("browser.urlbar.weather.featureGate", false); // disable weather suggestions in the address bar; default = false
user_pref("browser.urlbar.wikipedia.featureGate", false); // disable Wikipedia suggestions in the address bar; default = false
user_pref("browser.urlbar.yelp.featureGate", false); // disable Yelp suggestions in the address bar; default = false

/** SECURITY ***/
// user_pref("devtools.debugger.remote-enabled", false); // disable remote debugging connections; default = false in official Mozilla builds
user_pref("dom.disable_window_move_resize", true); // stop sites from moving or resizing the browser window; default = false
user_pref("dom.security.https_only_mode_send_http_background_request", false); // HTTPS-Only: don't send a background plain HTTP request when HTTPS is slow; the fallback page may take longer to appear; default = true
user_pref("security.cert_pinning.enforcement_level", 2); // strict certificate pinning, also for user-added root certificates; breaks antivirus HTTPS scanning, corporate TLS proxies and debugging proxies (mitmproxy, Fiddler) on pinned sites; default = 1
// user_pref("security.OCSP.enabled", 1); // fetch OCSP for DV and EV certificates (0 = off, 1 = DV and EV, 2 = EV only); Betterfox sets 0 and relies on CRLite; default = 1
// user_pref("security.OCSP.require", true); // hard-fail: block the site when its OCSP server can't be reached; breaks sites while responders are down; default = false
// user_pref("security.pki.crlite_mode", 2); // enforce CRLite revocation results (0 = off, 1 = telemetry only, 2 = enforce); default = 2
user_pref("security.remote_settings.crlite_filters.enabled", true); // download CRLite revocation filters; default = true
user_pref("security.ssl.require_safe_negotiation", true); // refuse TLS servers without secure renegotiation (RFC 5746); may break very old servers; default = false

/* security.tls.version.min values:
1 = TLS 1.0
2 = TLS 1.1
3 = TLS 1.2
4 = TLS 1.3 */
// user_pref("security.tls.version.min", 3); // minimum TLS version; 4 breaks sites without TLS 1.3; default = 3
user_pref("signon.autofillForms", false); // don't autofill saved logins on page load, pick them from the field instead; default = true

/** SESSION ***/
user_pref("browser.sessionstore.privacy_level", 2); // don't save form data, POST data or cookies in session restore for any site (0 = all sites, 1 = unencrypted sites only, 2 = none); default = 0
// user_pref("toolkit.winRegisterApplicationRestart", false); // don't let Windows restart Firefox after a reboot; Windows only; default = true

/** SHUTDOWN SANITIZING ***/
// the clearOnShutdown_v2 prefs only apply while privacy.sanitize.sanitizeOnShutdown is true
// user_pref("privacy.sanitize.sanitizeOnShutdown", true); // clear the selected data every time Firefox closes; default = false
// user_pref("privacy.sanitize.timeSpan", 0); // default time range in the Clear History dialog (0 = everything, 1 = last hour); default = 1
// user_pref("privacy.clearOnShutdown_v2.cache", true); // clear cache on shutdown; default = true
// user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // clear cookies and site data on shutdown, except sites with an exception; add sites you stay logged into as exceptions; default = true
// user_pref("privacy.clearOnShutdown_v2.formdata", true); // clear saved form history on shutdown; default = false
// user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true); // clear browsing and download history on shutdown; default = true
// user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // legacy pref kept only to migrate old settings; not needed on ESR 140 or later; default = true
// user_pref("privacy.clearOnShutdown_v2.siteSettings", false); // keep site settings on shutdown; default = false
// user_pref("privacy.clearHistory.cache", true); // Clear History dialog: cache checked by default; default = true
// user_pref("privacy.clearHistory.cookiesAndStorage", true); // Clear History dialog: cookies and site data checked by default; default = true
// user_pref("privacy.clearHistory.formdata", true); // Clear History dialog: form history checked by default; default = false
// user_pref("privacy.clearHistory.siteSettings", true); // Clear History dialog: site settings checked by default; default = false
// user_pref("privacy.clearSiteData.cache", true); // Settings > Clear Data: cache checked by default; default = true
// user_pref("privacy.clearSiteData.cookiesAndStorage", true); // Settings > Clear Data: cookies and site data checked by default; default = true
// user_pref("privacy.clearSiteData.formdata", true); // Settings > Clear Data: form history checked by default; default = false
// user_pref("privacy.clearSiteData.siteSettings", true); // Settings > Clear Data: site settings checked by default; default = false

/** TAB & WINDOW BEHAVIOR ***/
user_pref("browser.link.open_newwindow", 3); // open links that target a new window in a new tab instead; default = 3
user_pref("browser.link.open_newwindow.restriction", 0); // apply open_newwindow to every window.open() call, including sized popups, so some login popups (OAuth, SSO) open as tabs (0 = all, 1 = never, 2 = except popups with features); default = 2
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // middle-clicking the new tab button doesn't open or search the clipboard text; default = false (true on Linux)
user_pref("layout.word_select.eat_space_to_next_word", false); // double-clicking a word doesn't also select the space after it; default = true on Windows, false elsewhere

/** TELEMETRY ***/
user_pref("beacon.enabled", false); // disable navigator.sendBeacon(); trackers can still use fetch() with keepalive, so the gain is small; to avoid site breakage add this uBlock Origin filter: *##+js(set-constant, navigator.sendBeacon, trueFunc); default = true
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false); // disable categorization of search result pages for telemetry; default = true
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false); // disable the Mozilla account client association ping; default = true
user_pref("nimbus.telemetry.targetingContextEnabled", false); // disable Nimbus targeting context telemetry; default = true
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); // mark the data reporting first run as done; only changes when the data choices notice appears, doesn't disable telemetry; default = unset

/** VPN ***/
user_pref("browser.contentblocking.report.hide_vpn_banner", true); // hide the Mozilla VPN banner on about:protections; default = false
user_pref("browser.vpn_promo.enabled", false); // disable Mozilla VPN promotions; default = true
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false); // hide Mozilla VPN in the account menu; default = true

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
*****************************************************************************/
/* Visit: https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
Enter your scrolling overrides below this line: */

/****************************************************************************
* OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                            *
*****************************************************************************/
/* Credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
Recommended for 120hz+ displays.
Largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling */
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // recommended to keep between 200-400, default 300; adjust this number to your liking: 200 -> buttery smooth, 400 -> faster, more responsive

/****************************************************************************
 * END: BETTERFOX                                                           *
*****************************************************************************/
