# Changelog

All notable changes to this project will be documented in this file.

## [1.5.0] - 2024-10-11

### Fixed

from fastmail/squire 2.2.5 to 2.3.2

-   Fix "pathChange" event not being fired on selection change.
-   Fix backspace at beginning of quote was deleting the contents, not just
    removing the quote.
-   Fix crash extracting contents of range.
-   Fix text nodes sometimes incorrectly merged after delete.
-   Fix incorrect styles can be applied after splitting at the end of inline
    formatting, blurring, and focusing again.
-   Fix font info sometimes not returned even when selection within a single
    text span.
-   Fix some keyboard shortcuts not working on some platforms.
-   Fix unable to paste text with new line on Android.
-   Fix handling of Japanese IME input.
-   Fix willPaste event not cancelable.
-   Fix Firefox cursor position after paste.
-   Fix keyboard handling on some Android browsers

### Added

-   HTML copied from the editor now includes a `<!-- squire -->` comment
-   The willPaste event now includes an `html` property in the details, with the
    raw HTML that is being pasted.
-   Add undo point for automatic list creation.


## [0.1.0] - 2024-01-03

### init

- replace package name, package version, author name, repository url
