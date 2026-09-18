# Showgone — California Emissions & CARB EO Compliance Tool

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Live Demo](https://img.shields.io/badge/Demo-Live_App-brightgreen.svg)](https://open-source-cowboy-consulting.github.io/i-love-carbs/)

**Showgone** is a lightweight, zero-dependency Single Page Application (SPA) designed to help truck owners (Silverado, F-150, Tundra, Tacoma, Colorado, Ranger, Avalanche, etc.) navigate California Air Resources Board (CARB) aftermarket part compliance, Executive Order (EO) verifications, smog check preparations, and BAR referee appointments.

---

## 🚀 Live Demo

Access the hosted web application anytime at:  
👉 **[https://open-source-cowboy-consulting.github.io/i-love-carbs/](https://open-source-cowboy-consulting.github.io/i-love-carbs/)**

---

## ✨ Features

- **🚛 My Garage (Interactive 3D Profile Builder)**:
  - Custom vehicle spec selector (Year, Make, Model, Engine, EFN, VIN, Plate).
  - Dynamic 3D perspective-transformed vehicle card with specs live-updating.
  - Smog check due-date tracking with warning badges and countdown.
  - LocalStorage persistence for multiple saved vehicles & installed modifications.

- **🛒 Marketplace & Parts Verification**:
  - Filter street-legal vs. off-road parts across major categories (Cold Air Intakes, Headers, Superchargers, Tuners, Catalytic Converters, Throttle Controllers, Exhausts, etc.).
  - Searchable by brand, product, vehicle, and exact CARB Executive Order (EO) number.
  - Direct buy links pointing to retailer landing pages.

- **📋 Compliance Center**:
  - **Smog Readiness Check**: Automated compliance analysis based on installed parts.
  - **Pre-Smog Checklist**: Step-by-step preparation list for California smog inspections.
  - **Vehicle Modification Declaration Form**: Print-ready declaration for technicians.
  - **BAR Referee Station Locator**: Full directory of California BAR Referee stations with addresses and phone numbers.
  - **Glovebox EO Wallet Card**: Printable card containing your vehicle's exact EO numbers.
  - **Build Export**: Export full vehicle build summaries as text files or printable documents.

- **📚 Knowledge Base & Encyclopedia**:
  - Dictionary of 40+ emissions acronyms, regulations, standards, and legal references (CARB, BAR, EFN, VECI, OBD-II, ASM, CVC 27156, etc.).
  - Viewable alphabetically (A-Z) or grouped by topic.

---

## 🛠️ Local Development & Running

Because **Showgone** is built with Vanilla HTML5, CSS3, and JavaScript, no build step or node_modules installation is required!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Open-Source-Cowboy-Consulting/i-love-carbs.git
   cd i-love-carbs
   ```

2. **Serve locally**:
   You can open `index.html` directly in your browser, or spin up any static web server:
   ```bash
   npx http-server -p 5500
   # or with Python
   python -m http.server 5500
   ```

3. Open `http://localhost:5500` in your web browser.

---

## 📄 License

Distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See [`LICENSE`](LICENSE) for more details.

---

## 🤝 Contributing & Security

- **Contributing**: Please review [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
- **Security**: For reporting security issues or database inaccuracies, refer to [`SECURITY.md`](SECURITY.md).

---

*Disclaimer: This tool is for informational and educational purposes only. Always verify EO numbers against the official CARB Executive Order database prior to smog inspection.*
