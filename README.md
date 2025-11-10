# Firefox Hardening

This repository provides a `user.js` file to configure Firefox for better privacy and security, along with scripts to clean up `prefs.js`.

## How to Use

1.  **Open your Firefox profile folder.**
    *   In Firefox, go to `Help` > `More Troubleshooting Information`.
    *   In the "Application Basics" section, find the "Profile Folder" line and click "Open Folder".

2.  **Backup your preferences.**
    *   It is highly recommended to back up your entire profile folder.
    *   At a minimum, you should back up your `prefs.js` file.

3.  **Copy `user.js` to your profile folder.**
    *   Copy the `user.js` file from this repository into your Firefox profile folder.

4.  **Run the preferences cleaner script.**
    *   On Linux or macOS, run `prefsCleaner.sh`.
    *   On Windows 10/11, run `prefsCleaner.bat`.
    *   This will remove any settings from `prefs.js` that are already present in `user.js`, allowing them to be reset to their default values if they become inactive.

5.  **Enjoy a more private and secure browsing experience!**

## Disclaimer

Modifying Firefox preferences can sometimes cause issues with certain websites or browser features. If you experience any problems, you can try to identify the problematic preference by commenting out sections of the `user.js` file. If all else fails, you can restore your `prefs.js` backup.

## Credits

*   The `user.js` file is based on the [Betterfox](https://github.com/yokoffing/Betterfox) project.
*   The `prefsCleaner.sh` and `prefsCleaner.bat` scripts were created by claustromaniac and are part of the [arkenfox/user.js](https://github.com/arkenfox/user.js) project.