---
description: Auto-fill missing translation keys for each language via the Google Translate API
allowed-tools: Bash(node scripts/translate.js)
---

# Translate

Automatically translate missing keys from the base language into every configured language using the Google Translate API.

## When to use
- To machine-fill empty or missing translation values across language files.

## Prerequisites
- Set a valid `GOOGLE_TRANSLATE_API_KEY` in `scripts/translate.js`.
- Configure target languages in the `LANGUAGES` array.

## Steps
1. From the project root, run:
   ```bash
   node scripts/translate.js
   ```
2. Review the generated translations — machine output may need human correction.

## Notes
- Translation files live in `locale/`. The script's `TRANSLATION_DIR` defaults to `../i18n` — adjust it to `../locale` if needed.
- Only missing keys are translated; existing values are preserved.
- Falls back to the base-language text if a translation request fails.
