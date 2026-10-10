# Aya Hassan — Modern Architectural Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?style=flat-square&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)
[![Design](https://img.shields.io/badge/Aesthetic-Architectural%20Editorial-sky?style=flat-square)](#)

A modern, minimalist, high-performance architectural portfolio website tailored for **Aya Hassan** — final-year architecture student at **Al-Azhar University** (graduating July 2025).

Designed to showcase the balance between **creative conceptual vision** and **hands-on site reality** (Quantity Surveying & Finishing Works), with deep focus on **Revit BIM workflows**, **AutoCAD**, **Lumion**, and **technical constructability**.

---

## 🌟 Key Features

- **Architectural Aesthetic**: Clean structural grid layout, blueprint hairline borders, technical metric counters, and responsive typography (Space Grotesk + Plus Jakarta Sans + JetBrains Mono).
- **Dual Focus Showcase**: Spotlights both digital design (Revit, AutoCAD, SketchUp, Lumion, Photoshop) and real-world construction site experience (Quantity Surveying, Finishing Works, BOQs, Snag Lists).
- **Interactive Project Filtering**: Filter works by *Architecture*, *BIM & Working Drawings*, *Interior & Finishing*, and *Academic*.
- **Interactive Case Study Modal**: High-res gallery plates, project briefs, design philosophy, structural/BIM notes, and site considerations.
- **Built-in Architectural CV Viewer**: Clean, stylized printable Curriculum Vitae with one-click **Print / Save as PDF** support.
- **Dark & Light Mode**: Seamless architectural theme switch with persistent user preference in `localStorage`.
- **Direct Contact Channels**: Integrated LinkedIn link to [Aya Hassan's Profile](https://www.linkedin.com/in/aya-hassan-405877280/), quick one-click email copy button, and interactive mailto contact form.
- **Zero Build Friction**: Pure HTML5, modern CSS, vanilla JavaScript, and Tailwind CSS. Instant GitHub Pages compatibility with zero compilation steps.

---

## 📁 Repository Structure

```
aya-hassan-portfolio/
├── index.html              # Core single-page application & architectural layout
├── css/
│   └── style.css           # Custom architectural styling, dark/light themes, print styles
├── js/
│   └── main.js             # Projects data store, filter logic, modals, clipboard, theme engine
├── assets/
│   ├── images/             # Local project renderings, diagrams, and photos
│   ├── icons/              # Architectural vectors & symbols
│   └── cv/                 # Printable PDF copies or documents
├── .nojekyll               # Prevents GitHub Pages from ignoring files or processing Jekyll
└── README.md               # Documentation and GitHub deployment guide
```

---

## 🚀 How to Publish on GitHub & Activate GitHub Pages

Follow these simple steps to publish this repository and host it live on your GitHub domain:

### Step 1: Create a New GitHub Repository
1. Go to [GitHub](https://github.com/new).
2. Create a new repository named `aya-hassan-portfolio` (or `portfolio`).
3. Make it **Public**.
4. Do **not** initialize with README or .gitignore (we already have them ready here).

### Step 2: Push the Local Repository to GitHub
In your terminal, run the following commands inside `/home/khaled/Work/aya-hassan-portfolio`:

```bash
cd /home/khaled/Work/aya-hassan-portfolio

# Add all files to git
git add .

# Create initial commit
git commit -m "feat: initial commit of Aya Hassan modern architectural portfolio"

# Set main branch
git branch -M main

# Link your GitHub repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/aya-hassan-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in 2 Clicks
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click on **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.

Your portfolio will be live in about 1–2 minutes at:
```
https://<YOUR-USERNAME>.github.io/aya-hassan-portfolio/
```

> 💡 **Custom Domain Tip**: If Aya Hassan purchases a personal domain (e.g. `ayahassan.arch` or `ayahassan.com`), you can simply add it under **Custom domain** in the same GitHub Pages settings page.

---

## 🛠️ How to Customize & Add Projects

### 1. Adding or Modifying Projects
All project data lives inside [`js/main.js`](./js/main.js) in the `projectsData` array. You can easily update:
- `title`, `subtitle`, `category` (`architecture`, `bim`, `interior`, `academic`)
- `year`, `location`, `role`, `tools`
- `image` (main card cover) and `gallery` (additional detail plates)
- `overview`, `concept`, `technicalDetails`, and `practicalNote`

### 2. Updating Contact Information & Links
In [`index.html`](./index.html), search for `ayahassan.arch@gmail.com` or `https://www.linkedin.com/in/aya-hassan-405877280/` to update phone numbers, links, or addresses as needed.

---

## 💻 Local Preview
To test the site locally on your computer:

```bash
# Using Python 3 built-in server:
python3 -m http.server 8080

# Then open in your browser:
# http://localhost:8080
```

---

## 📄 License
Released under the [MIT License](LICENSE).
Designed with care for Aya Hassan.
