//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 149                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
user_pref("gfx.canvas.accelerated.cache-size", 256);
// user_pref("gfx.webrender.layer-compositor", true); //temporarily disabled for Firefox v149, fix scheduled for Firefox v150; it causes rendering issues, performance degradation on macOS at the moment; needs to be investigated further; you can re-enable it if you want to test it out, but be aware of potential issues; it is enabled by default on Windows and it's working as expected there, so keep it enabled on Windows systems; based on the code I saw, this layer compositor feature is not supported on Linux yet, so keep it disabled for now on Linux distros (let me know if I'm wrong about this, thx); fyi here is the related bugzilla ticket: https://bugzilla.mozilla.org/show_bug.cgi?id=2017820

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
// user_pref("security.OCSP.enabled", 0); // moved to MY OVERRIDES
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
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

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

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

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

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
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
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/** MOZILLA UI ***/
// user_pref("browser.newtabpage.activity-stream.system.showWeather", true); // show weather on new tab page; optional QoL feature, you can enable it if you like having weather info on the new tab page, but be aware that it may cause additional network requests and potential information leakage about your location; if you enable this, you can further customize the weather display with the following preference:
// user_pref("browser.newtabpage.activity-stream.weather.display", "detailed"); // use detailed weather info; use "simple" for just temperature
user_pref("browser.tabs.splitView.enabled", true); // enable split view; might be enabled by default from v149, but you can disable it if you dislike it
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false); // remove Mozilla promo from account menu
user_pref("sidebar.revamp", true); // enable new sidebar revamp UI; might be enabled by default from v149, but you can disable it if you dislike it
user_pref("sidebar.revamp.round-content-area", true); // enable rounded sidebar content area corner; you can disable it if you dislike it

// PREF: Set non-native scrollbar style
// Values:
// 0 = Default (System theme)
// 1 = macOS (Rounded pill, usually overlay)
// 2 = GTK (Linux style, square edges)
// 3 = Android (Mobile style, very thin)
// 4 = Windows 10 (Traditional, boxy, wider)
// 5 = Windows 11 (Modern, rounded corners)
// user_pref("widget.non-native-theme.scrollbar.style", 0);

// PREF: Force "Overlay" behavior for Windows 11 style
// Only affects scrollbars if widget.non-native-theme.scrollbar.style = 5 (or if Windows 11 style is the default (= 0) for your system)
// true = Scrollbar floats over content, is thinner, and expands on hover
// false = Scrollbar takes up space (layout shifts) and is always persistent
// user_pref("widget.non-native-theme.win11.scrollbar.force-overlay-style", true);

/** SECURITY ***/
user_pref("dom.security.https_only_mode_send_http_background_request", false); // disable automatic background HTTP requests for HTTPS-Only Mode to prevent potential information leakage about user browsing patterns
user_pref("security.cert_pinning.enforcement_level", 2); // enforce strict cert pinning checks for stronger MITM resistance
user_pref("security.OCSP.enabled", 1); // enable OCSP fetching for stricter certificate revocation checks
user_pref("security.OCSP.require", true); // hard-fail OCSP fetch failures when OCSP checks are enabled
user_pref("security.pki.crlite_mode", 2); // enforce both revoked and not-revoked CRLite results
user_pref("security.remote_settings.crlite_filters.enabled", true); // keep CRLite revocation filters enabled
user_pref("security.ssl.require_safe_negotiation", true); // require safe TLS renegotiation to block legacy downgrade paths

/** NETWORK ***/
user_pref("captivedetect.canonicalURL", ""); // clear captive portal probe endpoint for extra outbound reduction
user_pref("media.peerconnection.ice.default_address_only", true); // WebRTC only use default route
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // keep WebRTC proxy-aware when a proxy is configured
// user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true); // improves CPU usage on AMD GPU systems; you might want to enable this if you have an AMD graphics card
user_pref("network.captive-portal-service.enabled", false); // disable captive portal checks to reduce background requests
user_pref("network.connectivity-service.enabled", false); // disable connectivity checks that contact Mozilla endpoints
user_pref("network.file.disable_unc_paths", true); // block UNC path handling to reduce Windows network-share exposure
user_pref("network.http.http3.use_nspr_for_io", false); // switches Firefox's QUIC stack to use the Rust-based IO path instead of NSPR; may improve performance on some systems

/** DOWNLOADS ***/
// user_pref("browser.download.always_ask_before_handling_new_types", true); // always ask how to handle new MIME types
// user_pref("browser.download.alwaysOpenPanel", false); // keep the download panel from opening on every download
// user_pref("browser.download.useDownloadDir", false); // always ask where to save downloads for safer file handling
user_pref("browser.helperApps.deleteTempFileOnExit", true); // delete helper-app temp files when Firefox exits
user_pref("extensions.postDownloadThirdPartyPrompt", false); // keep strict prompts for third-party extension installs; this will prevent potentially unwanted extensions from being installed without explicit user consent, but it may also cause more prompts if you frequently install extensions from third-party sources, so use this if you prefer stronger security against unwanted extensions over fewer prompts

/** SESSION ***/
user_pref("browser.sessionstore.privacy_level", 2); // avoid storing extra form and POST data in session restore
// user_pref("toolkit.winRegisterApplicationRestart", false); // disable automatic restart/session restore after Windows reboot

/** SEARCH & URL BAR ***/
user_pref("browser.search.separatePrivateDefault", true); // enable a separate private-window default search engine
// user_pref("browser.search.visualSearch.featureGate", true); // enable Google Lens image search (only works with Google default search); since firefox does not have "search by image" functionality built in, this is the closest alternative; be aware that it may cause additional network requests and potential information leakage about your searches and images
user_pref("browser.urlbar.addons.featureGate", false); // disable add-on suggestion entries in the urlbar
user_pref("browser.urlbar.amp.featureGate", false); // disable AMP/adMarketplace suggestion entries in the urlbar
user_pref("browser.urlbar.fakespot.featureGate", false); // disable Fakespot suggestion entries in the urlbar
user_pref("browser.urlbar.mdn.featureGate", false); // disable MDN suggestion entries in the urlbar
user_pref("browser.urlbar.showSearchTerms.enabled", false); // keep full URLs visible instead of replacing with search terms
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // disable non-sponsored Firefox Suggest entries
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // disable sponsored Firefox Suggest entries
user_pref("browser.urlbar.suggest.searches", false); // disable address-bar search suggestions
user_pref("browser.urlbar.weather.featureGate", false); // disable weather suggestion entries in the urlbar
user_pref("browser.urlbar.wikipedia.featureGate", false); // disable Wikipedia suggestion entries in the urlbar
user_pref("browser.urlbar.yelp.featureGate", false); // disable Yelp suggestion entries in the urlbar

/** PASSWORDS ***/
user_pref("signon.autofillForms", false); // disable automatic credential autofill on page load

/** CONTAINERS ***/
user_pref("privacy.userContext.enabled", true); // enable Containers backend (UI toggle is already enabled above)

/** TAB / WINDOW BEHAVIOR ***/
user_pref("browser.link.open_newwindow", 3); // force target=_blank style links to open in tabs instead of new windows
user_pref("browser.link.open_newwindow.restriction", 0); // apply the tab-open rule to all window.open methods
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // prevent accidental clipboard search/open on middle-click new-tab

/** OPTIONAL SHUTDOWN SANITIZING ***/
// user_pref("privacy.sanitize.sanitizeOnShutdown", true); // run configured data cleanup every time Firefox closes
// user_pref("privacy.sanitize.timeSpan", 0); // default manual cleanup range to everything
// user_pref("privacy.clearOnShutdown_v2.cache", true); // clear cache on shutdown
// user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // clear cookies and storage on shutdown (except allowed sites); i suggest to add any sites you log into regularly to the cookie exceptions list to avoid having to log in every time you restart the browser, but this is up to you
// user_pref("privacy.clearOnShutdown_v2.formdata", true); // clear form history on shutdown
// user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true); // keep history and download history on shutdown; if you want to clear history on shutdown, you can set this to true, but be aware that it will also clear your download history, which cannot be separated at the moment; if you want to keep download history but clear browsing history, you can set this to false and then use the "Clear History" button in the library menu to clear browsing history while keeping download history; hopefully Mozilla will add more granular options for this in the future
// user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // clear history, form data and download history on shutdown; this is a combined option that will clear all three of these data types together; if you want to keep download history but clear browsing history and form data, you can set this to false and then use the "Clear History" button in the library menu to clear browsing history and form data while keeping download history; hopefully Mozilla will add more granular options for this in the future
// user_pref("privacy.clearOnShutdown_v2.siteSettings", false); // keep site settings on shutdown
// user_pref("privacy.clearHistory.cache", true); // include cache in manual Clear History defaults
// user_pref("privacy.clearHistory.cookiesAndStorage", true); // include cookies/storage in manual Clear History defaults
// user_pref("privacy.clearHistory.formdata", true); // include form data in manual Clear History defaults
// user_pref("privacy.clearHistory.siteSettings", true); // include site settings in manual Clear History defaults
// user_pref("privacy.clearSiteData.cache", true); // include cache in manual Clear Data defaults
// user_pref("privacy.clearSiteData.cookiesAndStorage", true); // include cookies/storage in manual Clear Data defaults
// user_pref("privacy.clearSiteData.formdata", true); // include form data in manual Clear Data defaults
// user_pref("privacy.clearSiteData.siteSettings", true); // include site settings in manual Clear Data defaults

/** OPTIONAL ANTI-FINGERPRINTING ***/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // block extension list access from web content for better fingerprinting resistance; this is an RFP feature, but you can enable it even if you don't use the full RFP mode; be aware that this may break some websites that rely on extension detection for functionality, but it will improve your privacy against fingerprinting techniques that try to identify users based on their installed extensions
// user_pref("privacy.spoof_english", 1); // spoof English locale to reduce language-based fingerprinting; this will make your browser report as English (United States) to websites, which can help reduce the uniqueness of your browser fingerprint if you are not actually using an English locale; however, it may cause some websites to display content in English instead of your native language, so use this if you prefer better fingerprinting resistance over localized content

/** AI ***/
user_pref("browser.ml.chat.shortcuts", false); // disable AI chat shortcuts
user_pref("browser.ml.chat.shortcuts.custom", false); // disable AI chat shortcuts
user_pref("browser.ml.pageAssist.enabled", false); // disable AI-powered page assistance
user_pref("browser.ml.smartAssist.enabled", false); // disable AI-powered smart assistance
user_pref("browser.tabs.groups.smart.userEnabled", false); // disable tab groups based on AI
user_pref("browser.translations.automaticallyPopup", false); // disable translation popup
user_pref("browser.translations.enable", false); // disable built-in translation (uses Neural Machine Translation - AI)
user_pref("browser.urlbar.quicksuggest.mlEnabled", false); // disable AI-powered suggestions in URL bar
user_pref("extensions.ml.enabled", false); // disable extension recommendations based on AI
user_pref("pdfjs.enableAltText", false); // disable PDF alt text (AI-generated descriptions)
user_pref("pdfjs.enableAltTextForEnglish", false); // disable PDF alt text for English language
user_pref("pdfjs.enableAltTextModelDownload", false); // disable PDF alt text model download
user_pref("places.semanticHistory.featureGate", false); // disable AI-powered semantic history

/** TELEMETRY */
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false); // disables Search Engine Results Page telemetry categorization
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false); // disable telemetry ping for Firefox Accounts
user_pref("network.trr.confirmation_telemetry_enabled", false); // disable telemetry for Trusted Recursive Resolver (DNS over HTTPS)
user_pref("nimbus.telemetry.targetingContextEnabled", false); // disable telemetry for Nimbus experiments

/** VPN */
user_pref("browser.contentblocking.report.hide_vpn_banner", true); // hide VPN banner in content blocking report
user_pref("browser.privatebrowsing.vpnpromourl", ""); // clear VPN promotional URL for private browsing
user_pref("browser.vpn_promo.enabled", false); // disable VPN promotional content in the browser
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false); // disable VPN enabled flag for Firefox Accounts toolbar

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
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
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400, default 300; adjust this number to your liking

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
