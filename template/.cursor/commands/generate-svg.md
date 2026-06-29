---
description: Convert SVGs in assets/svgs into React Native Icon components and register them in the Icon list
allowed-tools: Bash(node scripts/generate-svg.js)
---

# Generate SVG Icons

Generate React Native icon components from SVG files and register them in the `Icon` atom.

## When to use
- After adding one or more `.svg` files to `assets/svgs/`.
- When the user asks to add, create, or generate an icon.

## Steps
1. Make sure the new SVG files are in `assets/svgs/` with unique, kebab-case filenames (e.g. `my-icon.svg`).
2. From the project root, run:
   ```bash
   node scripts/generate-svg.js
   ```
3. Verify the generated `.tsx` components in `assets/icons/` and that `components/atoms/Icon/list.ts` now includes the new entries.

## Notes
- Overwrites existing icon components and updates `iconsList`.
- Original SVGs are kept (the `unlinkSync` line is commented out in the script).
- Always render icons through `@/components/atoms/Icon` — see the `icon-usage` rule.
