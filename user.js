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
 * version: 150                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
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
 * START: MY OVERRIDES (grouped by categories A-Z ascending order)
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

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

/** ANTI-FINGERPRINTING ***/
// user_pref("privacy.resistFingerprinting", true); // enable built-in anti-fingerprinting features; read this before enabling: https://support.mozilla.org/en-US/kb/resist-fingerprinting
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // block extension list access from web content for better fingerprinting resistance; this is an RFP feature, but you can enable it even if you don't use the full RFP mode; be aware that this may break some websites that rely on extension detection for functionality, but it will improve your privacy against fingerprinting techniques that try to identify users based on their installed extensions
// user_pref("privacy.resistFingerprinting.letterboxing", true); // enable letterboxing to add opaque padding around the content area so the reported inner window dimensions are always a multiple of 200×100px, preventing viewport-based fingerprinting
// user_pref("privacy.resistFingerprinting.pbmode", true); // enable built-in anti-fingerprinting features in private browsing mode ONLY
// user_pref("privacy.spoof_english", 1); // spoof English locale to reduce language-based fingerprinting; this will make your browser report as English (United States) to websites, which can help reduce the uniqueness of your browser fingerprint if you are not actually using an English locale; however, it may cause some websites to display content in English instead of your native language, so use this if you prefer better fingerprinting resistance over localized content
// user_pref("privacy.window.maxInnerWidth", 1900); // limit inner window width to reduce screen-size fingerprinting; this will make your browser report a maximum inner window width of 1900 pixels, which can help reduce the uniqueness of your browser fingerprint based on screen size, but it may also cause layout issues on some websites that are designed for wider screens, so use this if you prefer better fingerprinting resistance over potential website layout problems; if you have a very wide monitor (e.g. 4K) and want to set this higher, you can adjust the value to your liking, but setting it too high may reduce the effectiveness of this anti-fingerprinting measure, while setting it too low may cause more layout issues, so find a balance that works for you
// user_pref("privacy.window.maxInnerHeight", 1000); // limit inner window height to reduce screen-size fingerprinting; this will make your browser report a maximum inner window height of 1000 pixels, which can help reduce the uniqueness of your browser fingerprint based on screen size, but it may also cause layout issues on some websites that are designed for taller screens, so use this if you prefer better fingerprinting resistance over potential website layout problems; if you have a very tall monitor and want to set this higher, you can adjust the value to your liking, but setting it too high may reduce the effectiveness of this anti-fingerprinting measure, while setting it too low may cause more layout issues, so find a balance that works for you
user_pref("widget.non-native-theme.use-theme-accent", false); // disable using the system accent color in non-native themes to reduce color-based fingerprinting; this will prevent websites from being able to detect your system accent color, which can be used as part of a fingerprinting profile, but it may also make your browser's appearance less integrated with your operating system's theme, so use this if you prefer better fingerprinting resistance over visual integration with your OS theme

/** CONTAINERS ***/
user_pref("privacy.userContext.enabled", true); // enable Containers backend (UI toggle is already enabled above)

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true); // always ask how to handle new MIME types
// user_pref("browser.download.alwaysOpenPanel", false); // keep the download panel from opening on every download
// user_pref("browser.download.useDownloadDir", false); // always ask where to save downloads for safer file handling
user_pref("browser.helperApps.deleteTempFileOnExit", true); // delete helper-app temp files when Firefox exits
user_pref("extensions.postDownloadThirdPartyPrompt", false); // keep strict prompts for third-party extension installs; this will prevent potentially unwanted extensions from being installed without explicit user consent, but it may also cause more prompts if you frequently install extensions from third-party sources, so use this if you prefer stronger security against unwanted extensions over fewer prompts

/** GEOLOCATION ***/
// user_pref("geo.enabled", false); // disable geolocation API entirely; this will prevent all websites from being able to access your location through the browser, but it may also break functionality on some sites that rely on geolocation for features like maps, local search results, or location-based content, so use this if you prefer maximum privacy over potential website functionality issues
// user_pref("geo.provider.ms-windows-location", false) // disable Windows geolocation provider; this will prevent Firefox from using the Windows location service to determine your location
// user_pref("geo.provider.use_corelocation", false) // disable macOS Core Location geolocation provider
// user_pref("geo.provider.use_geoclue", false) // disable Linux geolocation provider; this will prevent Firefox from using the Geoclue service to determine your location on Linux

/** MEDIA ***/
// user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true); // enables zero-copy NV12 textures to improve CPU usage on AMD GPU systems; you might want to enable this if you have an AMD graphics card

/** MOZILLA UI ***/
// user_pref("browser.newtabpage.activity-stream.system.showWeather", true); // show weather on new tab page; optional QoL feature, you can enable it if you like having weather info on the new tab page, but be aware that it may cause additional network requests and potential information leakage about your location; if you enable this, you can further customize the weather display with the following preference:
// user_pref("browser.newtabpage.activity-stream.weather.display", "detailed"); // use detailed weather info; use "simple" for just temperature
user_pref("browser.tabs.splitView.enabled", true); // enable split view; might be enabled by default from v149, but you can disable it if you dislike it
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false); // remove Mozilla promo from account menu
user_pref("sidebar.revamp", true); // enable new sidebar revamp UI; might be enabled by default from v149, but you can disable it if you dislike it
user_pref("sidebar.revamp.round-content-area", true); // enable rounded sidebar content area corner; you can disable it if you dislike it

// Possible values for widget.non-native-theme.scrollbar.style:
// 0 = Default (System theme)
// 1 = macOS (Rounded pill, usually overlay)
// 2 = GTK (Linux style, square edges)
// 3 = Android (Mobile style, very thin)
// 4 = Windows 10 (Traditional, boxy, wider)
// 5 = Windows 11 (Modern, rounded corners)
// user_pref("widget.non-native-theme.scrollbar.style", 0); // set custom scrollbar style

// Only affects scrollbars if widget.non-native-theme.scrollbar.style = 5 (or if Windows 11 style is the default (= 0) for your system)
// true = Scrollbar floats over content, is thinner, and expands on hover
// false = Scrollbar takes up space (layout shifts) and is always persistent
// user_pref("widget.non-native-theme.win11.scrollbar.force-overlay-style", true);

/** NETWORK ***/
user_pref("captivedetect.canonicalURL", ""); // clear captive portal probe endpoint for extra outbound reduction
user_pref("media.peerconnection.ice.default_address_only", true); // WebRTC only use default route; might cause issues with VPNs or network interfaces, so disable if you have connectivity problems with WebRTC-based applications (e.g. video calls); this is a privacy improvement that prevents WebRTC from leaking local IP addresses, but it may cause connectivity issues in some network configurations, so use this if you prefer better privacy over potential connectivity problems
// user_pref("media.peerconnection.ice.no_host", true); // disable WebRTC from gathering local IP addresses; this is a stronger privacy improvement that prevents WebRTC from gathering any local IP addresses, but it may cause connectivity issues in some network configurations, especially if you are behind a NAT or using a VPN, so use this if you prefer maximum privacy over potential connectivity problems
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // keep WebRTC proxy-aware when a proxy is configured
user_pref("network.captive-portal-service.enabled", false); // captive portal detection at detectportal.firefox.com makes a plain HTTP request even with DoH enabled, this reveals network presence
user_pref("network.connectivity-service.enabled", false); // disable connectivity checks that contact Mozilla endpoints
user_pref("network.dns.echconfig.enabled", true); // enable ECH (Encrypted Client Hello) configuration for DNS over HTTPS; should be enabled by default
user_pref("network.file.disable_unc_paths", true); // block UNC path handling to reduce Windows network-share exposure
user_pref("network.IDN_show_punycode", true); // show punycode for all IDN domains to prevent homograph attacks; this will make Firefox display the punycode representation of internationalized domain names (IDNs) instead of the Unicode characters, which can help protect against homograph attacks where malicious sites use similar-looking characters to impersonate legitimate domains, but it may also make some non-ASCII domain names harder to read, so use this if you prefer better security against homograph attacks over readability of internationalized domain names
user_pref("network.http.http3.use_nspr_for_io", false); // switches Firefox's QUIC stack to use the Rust-based IO path instead of NSPR; may improve performance on some systems

/** PERMISSIONS ***/
// Possible values for all permissions.default.* preferences: 
// 0 = always ask
// 1 = always allow
// 2 = block;
user_pref("permissions.default.camera", 0); // set default camera permission to "always ask" for better privacy
user_pref("permissions.default.desktop-notification", 2); // block desktop notification permission requests to prevent potential abuse and annoyance from websites asking for permission to send notifications; if you want to allow notifications for specific sites, you can manage exceptions in the site permissions settings
user_pref("permissions.default.geo", 2); // block geolocation permission requests to prevent potential abuse and information leakage about your location; if you want to allow geolocation for specific sites, you can manage exceptions in the site permissions settings
user_pref("permissions.default.image", 1); // allow images by default; you can set this to 2 to block all images, but be aware that it will break the layout and functionality of many websites, so use this if you prefer stronger privacy against image-based tracking over website usability
user_pref("permissions.default.local-network", 0); // set local network permission to "always ask" to prevent potential abuse of local network access by websites; this will prompt you for permission whenever a website tries to access devices on your local network, which can help protect against certain types of attacks that try to exploit vulnerabilities in local network devices
user_pref("permissions.default.loopback-network", 0); // set loopback network permission to "always ask" to prevent potential abuse of loopback network access by websites; this will prompt you for permission whenever a website tries to access services running on your own machine, which can help protect against certain types of attacks that try to exploit vulnerabilities in local services
user_pref("permissions.default.microphone", 0); // set default microphone permission to "always ask" for better privacy
user_pref("permissions.default.screen-wake-lock", 1); // allow screen wake lock by default; this is a feature that allows websites to prevent your screen from dimming or locking while you are using them, which can be useful for certain applications like video players or online presentations; if you want to block this feature for all sites, you can set this to 2, but be aware that it may cause inconvenience on sites that use it for legitimate purposes, so use this if you prefer stronger privacy against potential abuse of wake locks over convenience
user_pref("permissions.default.shortcuts", 0); // set default shortcuts permission to "always ask" to prevent potential abuse of keyboard shortcuts by websites; this will prompt you for permission whenever a website tries to register global keyboard shortcuts, which can help protect against malicious sites that try to hijack your keyboard input
user_pref("permissions.default.xr", 2); // block WebXR permission requests to prevent potential abuse of augmented reality and virtual reality features by websites; if you want to allow WebXR for specific sites, you can manage exceptions in the site permissions settings

/** PRIVACY **/
user_pref("device.sensors.enabled", false); // disable access to device sensors (accelerometer, gyroscope, magnetometer); this can help improve privacy by preventing websites from being able to access sensor data that can be used for tracking and fingerprinting purposes, but it may also break functionality on some sites that rely on sensor data for features like motion-based interactions or device orientation detection, so use this if you prefer better privacy over potential website functionality issues
// you can fine-tune sensor access with the following more specific preferences if you want to allow certain sensors while blocking others, but setting device.sensors.enabled to false will override all of these and block all sensors regardless of the individual settings:
// user_pref("device.sensors.ambientLight.enabled", false);
// user_pref("device.sensors.motion.enabled", false);
// user_pref("device.sensors.orientation.enabled", false);
// user_pref("device.sensors.proximity.enabled", false);
user_pref("dom.battery.enabled", false); // disable access to battery API; this will prevent websites from being able to detect your device's battery status, which can be used for tracking and fingerprinting purposes, but it may also break functionality on some sites that rely on battery information for features like power-saving modes or performance optimizations, so use this if you prefer better privacy over potential website functionality issues
// user_pref("dom.event.clipboardevents.enabled", false); // disable clipboard events for better privacy; this will prevent websites from being able to detect when you copy, paste, or cut content, which can help protect against certain types of tracking and fingerprinting techniques that rely on clipboard event detection; however, it may also break functionality on some sites that use clipboard events for legitimate purposes, such as custom copy-paste behavior or rich text editing features, so use this if you prefer better privacy over potential website functionality issues
// user_pref("dom.gamepad.enabled", false); // disable access to gamepad API; this can help improve privacy by preventing websites from being able to detect and track users based on their gamepad usage, but it may also break functionality on websites that rely on gamepad input (e.g. xbox), so use this if you prefer better privacy over potential website functionality issues
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true); // keep the built-in tracking protection allowlist enabled to prevent breakage on sites with known issues; this is a list of sites that are allowed to load certain tracking resources in order to prevent breakage of functionality on those sites, but it may also allow some tracking on those sites, so use this if you prefer better compatibility over maximum blocking of trackers
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", true); // keep the built-in tracking protection allowlist for convenience features enabled to prevent breakage on sites with known issues; this is a list of sites that are allowed to load certain resources in order to prevent breakage of convenience features on those sites, but it may also allow some tracking on those sites, so use this if you prefer better compatibility over maximum blocking of trackers

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

/** SECURITY ***/
user_pref("devtools.debugger.remote-enabled", false); // disable remote debugging to prevent potential unauthorized access to the browser's debugging interface, which could be exploited by attackers to gain insights into browser internals or execute malicious code; this is especially important if you do not use remote debugging features, so use this if you prefer better security against potential remote attacks over the ability to use remote debugging features
user_pref("dom.disable_window_move_resize", true); // prevent websites from moving or resizing the browser window, which can be used for malicious purposes such as clickjacking or creating fake login screens; this will improve security by preventing websites from manipulating the browser window in ways that can trick users into performing unintended actions, but it may also break functionality on some sites that rely on window manipulation for legitimate purposes, so use this if you prefer better security over potential website functionality issues
user_pref("dom.security.https_only_mode_send_http_background_request", false); // disable automatic background HTTP requests for HTTPS-Only Mode to prevent potential information leakage about user browsing patterns
user_pref("security.cert_pinning.enforcement_level", 2); // enforce strict cert pinning checks for stronger MITM resistance
// user_pref("security.OCSP.enabled", 1); // enable OCSP fetching for stricter certificate revocation checks
// user_pref("security.OCSP.require", true); // hard-fail OCSP fetch failures when OCSP checks are enabled
user_pref("security.pki.crlite_mode", 2); // enforce both revoked and not-revoked CRLite results
user_pref("security.remote_settings.crlite_filters.enabled", true); // keep CRLite revocation filters enabled
user_pref("security.ssl.require_safe_negotiation", true); // require safe TLS renegotiation to block legacy downgrade paths
// security.tls.version.min possible values:
// 1 = TLS 1.0
// 2 = TLS 1.1
// 3 = TLS 1.2
// 4 = TLS 1.3
user_pref("security.tls.version.min", 3); // set the minimum TLS version to enforce the lowest allowed protocol; TLS 1.2 is still widely supported and considered secure, while TLS 1.0 and 1.1 are deprecated and have known vulnerabilities, so setting this to 3 will block those older protocols while maintaining compatibility with most modern websites; if you want to enforce TLS 1.3 only, you can set this to 4, but be aware that it may cause connectivity issues with sites that do not yet support TLS 1.3, so use this if you prefer stronger security over potential connectivity problems
user_pref("signon.autofillForms", false); // disable automatic credential autofill on page load

/** SESSION ***/
user_pref("browser.sessionstore.privacy_level", 2); // avoid storing extra form and POST data in session restore
// user_pref("toolkit.winRegisterApplicationRestart", false); // disable automatic restart/session restore after Windows reboot

/** SHUTDOWN SANITIZING ***/
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

/** TAB & WINDOW BEHAVIOR ***/
user_pref("browser.link.open_newwindow", 3); // open new windows in a new tab instead; this will make all links that would normally open in a new window (e.g. target="_blank") open in a new tab instead, which can help keep your browsing organized and prevent unwanted pop-up windows
user_pref("browser.link.open_newwindow.restriction", 0); // apply the tab-open rule to all window.open methods
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // prevent accidental clipboard search/open on middle-click new-tab

/** TELEMETRY ***/
user_pref("beacon.enabled", false); // disable the Beacon API to prevent websites from sending asynchronous analytics data that can be used for tracking 
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false); // disables Search Engine Results Page telemetry categorization
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false); // disable telemetry ping for Firefox Accounts
// Possible values for network.trr.mode:
// 0  — off (OS resolver only)
// 1  — race (TRR vs OS, fastest wins)
// 2  — first (TRR preferred, OS fallback)
// 3  — TRR only, no OS fallback
// 5  — off + disables ECS stripping
// user_pref("network.trr.mode", 3); // enable Trusted Recursive Resolver (DNS over HTTPS) for better privacy; if you experience connectivity issues, you can set this to 3 to use DoH only as a fallback, or set it back to 0 to use OS DNS resolver only (my advice is to use Quad9/NextDNS/AdGuard/Mullvad or any reputable DNS in your OS network settings with DoH and set this user_pref to 0)
// user_pref("network.trr.uri", "https://dns.quad9.net/dns-query"); // enable this as well if you set network.trr.mode to 3; you can change this to another DoH provider if you prefer, but make sure to use a reputable one that supports DNSSEC and has a good privacy policy (I would avoid Google and Cloudeflare due to privacy concerns, but Quad9, NextDNS, AdGuard and Mullvad are good options)
user_pref("network.trr.confirmation_telemetry_enabled", false); // disable telemetry for Trusted Recursive Resolver (DNS over HTTPS)
user_pref("nimbus.telemetry.targetingContextEnabled", false); // disable telemetry for Nimbus experiments
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); // disable telemetry reporting policy first run ping")

/** VPN ***/
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
user_pref("mousewheel.default.delta_multiplier_y", 300); // recommended to keep between 200-400, default 300; adjust this number to your liking: 200 -> buttery smooth, 400 -> faster, more responsive

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
