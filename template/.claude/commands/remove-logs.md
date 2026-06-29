---
description: Recursively strip all console.log statements from JS/TS source files
allowed-tools: Bash(node scripts/removeLogs.js)
---

# Remove Console Logs

Strip every `console.log` statement from the project's source files.

## When to use
- Before committing or deploying, to clean up debug logging.

## Steps
1. From the project root, run:
   ```bash
   node scripts/removeLogs.js
   ```
2. Review the diff to make sure no important logging was removed.

## Notes
- Edits files in place across `.js`, `.jsx`, `.ts`, and `.tsx`.
- Only `console.log` is removed; other `console.*` methods are untouched.
- Excludes `node_modules`, `.git`, `dist`, and `build`.
