# Contributing to Showgone

Thank you for your interest in contributing to **Showgone**! We welcome contributions from developers, vehicle enthusiasts, and compliance experts.

---

## How to Contribute

### 1. Adding or Updating CARB EO Parts
The primary dataset lives in `app.js` under `PARTS_DATABASE`.

When adding a new part entry:
- Ensure the **CARB EO Number** (e.g. `D-550-13`) is verified against the official CARB database.
- Use explicit status tags: `'legal'`, `'illegal'`, or `'exempt'`.
- Provide clear year and engine compatibility ranges.
- Links should point to retailer category/landing pages rather than fragile individual product detail URLs.

### 2. Code Contributions
- Keep dependencies minimal (vanilla HTML/CSS/JS).
- Avoid non-standard DOM frameworks or complex build pipelines where simple ES5/ES6 vanilla JS suffices.
- Ensure cross-browser compatibility and responsive design.

### 3. Pull Request Guidelines
1. Fork the repository and create your feature branch:
   ```bash
   git checkout -b feature/new-part-database-entry
   ```
2. Commit your changes with clear, descriptive commit messages.
3. Push to your branch and open a Pull Request against the `master` branch of `Open-Source-Cowboy-Consulting/i-love-carbs`.
4. Ensure your PR description clearly explains the changes or additions.

---

## Code Style

- Use semantic HTML tags.
- Follow existing formatting patterns in `style.css` and `app.js`.
- Respect dark-mode design guidelines and golden/green status badges.
