---
description: Restructure locale files so every language mirrors the base language keys; optionally emit CSVs
allowed-tools: Bash(node scripts/sync-translations.js), Bash(node scripts/sync-translations.js --csv)
---

# Sync Translations

Keep translation JSON files aligned with the base language and, optionally, export CSVs for translators.

## When to use
- After adding, removing, or changing keys in the base language file.
- When setting up a new language.

## Steps
1. Update the base language file under `locale/` (default base is `en`).
2. From the project root, run:
   ```bash
   node scripts/sync-translations.js
   ```
   To also generate CSVs without the interactive prompt:
   ```bash
   node scripts/sync-translations.js --csv
   ```

## Notes
- Translation files live in `locale/`. The script's `TRANSLATION_DIR` defaults to `../i18n` — adjust it to `../locale` if needed.
- Overwrites non-base language files; missing values are left empty for translation.
- Edit the `LANGUAGES` array in the script to add/remove languages (defaults: `en`, `ar`).
- Requires the `commander` package.
