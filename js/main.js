/**
 * Aya Hassan - Architectural Portfolio & BIM Specialist
 * Interactive Engine: Theme Toggle, Project Filter, Modal Viewer, CV Drawer
 */

// ==========================================
// 1. Projects Data Store
// ==========================================
const projectsData = [
  {
    id: "cultural-hub",
    title: "The Monolith: Cultural & Exhibition Pavilion",
    subtitle: "Public & Cultural Architecture | Graduation Studio",
    category: "architecture",
    year: "2024 - 2025",
    location: "New Cairo, Egypt",
    role: "Lead Concept Designer & BIM Modeler",
    tools: ["Autodesk Revit", "Lumion 12", "Adobe Photoshop", "AutoCAD"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A flagship cultural complex designed to foster artistic dialogue and urban gathering. The architectural form is sculpted from monolithic geometry carved with central daylight courtyards, utilizing passive solar orientation and natural stack ventilation suited for the Egyptian climate.",
    concept: "Synthesizing heavy massing inspired by historic Egyptian stone masonry with airy contemporary atriums. Fluid circulation ramps encourage spontaneous interaction across exhibition halls, amphitheater spaces, and public libraries.",
    technicalDetails: "Developed complete BIM model in Autodesk Revit LOD 300, coordinating column grid layouts, cantilever steel roof trusses, and facade curtain wall panelization. Performed solar radiation analysis to optimize louvers orientation.",
    practicalNote: "Site considerations included integrating local limestone cladding specifications with thermal break backing and rainwater collection channels for surrounding landscape irrigation."
  },
  {
    id: "courtyard-villa",
    title: "Bayt Al-Noor: Contemporary Courtyard Villa",
    subtitle: "Private Residential Architecture",
    category: "architecture",
    year: "2024",
    location: "Sheikh Zayed, Giza",
    role: "Architectural Designer & 3D Visualizer",
    tools: ["SketchUp Pro", "Autodesk Revit", "Lumion", "Photoshop"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A modern family residence designed around an internal microclimate courtyard with a reflective water feature. Blends private domestic serenity with generous natural daylight and cross-ventilation.",
    concept: "Reinterpreting the traditional Islamic 'Finaa' (inner courtyard) within a sleek minimalist cubic envelope. Warm natural travertine stone, shaded teak louvers, and floor-to-ceiling double-glazed apertures.",
    technicalDetails: "Complete 3D spatial development in SketchUp and detailed floor plans & elevations in AutoCAD. Photorealistic materials, water reflections, and natural lighting simulated in Lumion.",
    practicalNote: "Incorporated site finishing specifications: polished micro-cement flooring, thermal insulation wall sandwiches, and concealed drainage scuppers."
  },
  {
    id: "bim-residential-complex",
    title: "Al-Andalus Mixed-Use: BIM Working Drawing Package",
    subtitle: "Technical Architecture & Quantity Surveying",
    category: "bim",
    year: "2024",
    location: "Nasr City, Cairo",
    role: "BIM Modeler & Quantity Surveyor Trainee",
    tools: ["Autodesk Revit", "AutoCAD", "Excel (BOQ Extraction)"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A comprehensive working drawings set and construction documentation for a 6-story residential building with ground-level retail. Focused on precision coordination between architectural plans, structural frames, and MEP services.",
    concept: "Translating architectural design into buildable, error-free site documentation with complete schedules, wall assemblies, and waterproofing details.",
    technicalDetails: "Revit modeling with automated schedule take-offs: door/window schedules, room finish schedules, and wall partition types. Generated 1:20 stair details, expansion joints, and parapet waterproofing sections.",
    practicalNote: "Direct site application: Extracted precise Bill of Quantities (BOQ) for masonry blocks, internal plastering areas (m²), and ceramic floor tiling, assisting site cost estimation."
  },
  {
    id: "corporate-interior",
    title: "Zenith Tech Executive Headquarters",
    subtitle: "Interior Architecture & Finishing Supervision",
    category: "interior",
    year: "2023 - 2024",
    location: "Smart Village, Cairo",
    role: "Interior Designer & Finishing Coordinator",
    tools: ["Autodesk Revit", "AutoCAD", "Lumion", "Photoshop"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A high-performance corporate workplace featuring flexible collaboration zones, executive boardrooms, and acoustic breakout spaces engineered for modern agile workflows.",
    concept: "Biophilic architectural interior blending warm oak timber slats, acoustic felt baffles, and linear architectural LED coves with ergonomic zoning.",
    technicalDetails: "Reflected Ceiling Plans (RCP) coordinated with AC diffusers, sprinkler heads, and recessed light troughs. Detailed millwork shop drawings for reception desks and bespoke meeting pods.",
    practicalNote: "Hands-on site experience: Checked site level benchmarks, inspected gypsum board joint tape and skim coating, and verified acoustic door drop-seal installations."
  },
  {
    id: "azhar-innovation-pavilion",
    title: "Al-Azhar Campus Innovation Pavilion",
    subtitle: "Academic Design Studio Project",
    category: "academic",
    year: "2023",
    location: "Al-Azhar University, Cairo",
    role: "Architectural Student & Designer",
    tools: ["SketchUp", "Photoshop", "AutoCAD", "Physical Modeling"],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A dedicated academic incubator designed to provide architecture and engineering students with collaborative maker spaces, digital presentation zones, and outdoor critique terraces.",
    concept: "Interlocking modular pavilions wrapped in a perforated dynamic mashrabiya skin that balances thermal comfort with Cairo's intense solar exposure.",
    technicalDetails: "Developed solar shade angle calculations, physical scale model at 1:100, and architectural presentation boards using Adobe Photoshop post-production.",
    practicalNote: "Evaluated modular pre-cast concrete columns and light-gauge steel roof framing to ensure rapid erection and minimum disruption to campus operations."
  },
  {
    id: "luxury-penthouse-fitout",
    title: "The Sky Residence: Finishing & Fit-out Execution",
    subtitle: "Residential Interior & Site Execution",
    category: "interior",
    year: "2024",
    location: "New Cairo, Egypt",
    role: "Finishing & Site Trainee",
    tools: ["AutoCAD", "Site Inspection Logs", "Revit", "BOQ Templates"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Full turnkey interior finishing package for a 350 m² luxury penthouse. Required strict quality assurance across porcelain tile alignments, concealed sanitary fixtures, and custom veneer paneling.",
    concept: "Minimalist luxury defined by precision junctions: shadow gaps (reveal beads) instead of traditional baseboards, frameless pivot doors, and hidden mood lighting.",
    technicalDetails: "Prepared accurate shop drawings for wet areas (bathrooms/kitchens), slope coordinates for shower drains, and MEP coordination overlays.",
    practicalNote: "Managed snagging lists (punch lists) on-site: verified moisture levels before parquet flooring laying, inspected wall plumbness, and tracked finishing material deliveries."
  }
];

// ==========================================
// 2. DOM Ready Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initProjectsFilter();
  initProjectModal();
  initCVModal();
  initClipboard();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
});

// ==========================================
// 3. Theme Toggle (Dark / Light)
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("ah_theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ah_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  if (!sunIcon || !moonIcon) return;
  
  if (theme === "light") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

// ==========================================
// 4. Project Filtering
// ==========================================
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // update active state
      filterButtons.forEach(b => {
        b.classList.remove("bg-sky-500", "text-white", "border-sky-500");
        b.classList.add("border-neutral-700", "text-neutral-400");
      });
      btn.classList.add("bg-sky-500", "text-white", "border-sky-500");
      btn.classList.remove("border-neutral-700", "text-neutral-400");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 300);
        }
      });
    });
  });
}

// ==========================================
// 5. Project Case Study Modal
// ==========================================
let currentActiveProject = null;

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const triggerBtns = document.querySelectorAll(".open-project-modal");

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = btn.getAttribute("data-project-id");
      openProjectDetails(projId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeCVModal();
    }
  });
}

function openProjectDetails(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  currentActiveProject = project;

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  // Populate data
  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-subtitle").innerText = project.subtitle;
  document.getElementById("modal-year").innerText = project.year;
  document.getElementById("modal-location").innerText = project.location;
  document.getElementById("modal-role").innerText = project.role;
  document.getElementById("modal-overview").innerText = project.overview;
  document.getElementById("modal-concept").innerText = project.concept;
  document.getElementById("modal-technical").innerText = project.technicalDetails;
  document.getElementById("modal-practical").innerText = project.practicalNote;

  // Tools Badges
  const toolsContainer = document.getElementById("modal-tools");
  toolsContainer.innerHTML = "";
  project.tools.forEach(tool => {
    const badge = document.createElement("span");
    badge.className = "text-xs font-mono px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full";
    badge.innerText = tool;
    toolsContainer.appendChild(badge);
  });

  // Gallery Images
  const galleryContainer = document.getElementById("modal-gallery");
  galleryContainer.innerHTML = "";
  project.gallery.forEach((imgUrl, idx) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "overflow-hidden rounded-lg border border-neutral-800 relative group aspect-video bg-neutral-900";
    imgWrapper.innerHTML = `
      <img src="${imgUrl}" alt="${project.title} - view ${idx + 1}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <span class="absolute bottom-2 left-2 text-[10px] uppercase font-mono px-2 py-0.5 bg-black/60 backdrop-blur rounded text-neutral-300">Plate 0${idx + 1}</span>
    `;
    galleryContainer.appendChild(imgWrapper);
  });

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 6. CV Modal & Print Handler
// ==========================================
function initCVModal() {
  const cvModal = document.getElementById("cv-modal");
  const openCVBtns = document.querySelectorAll(".open-cv-btn");
  const closeCVBtn = document.getElementById("cv-close-btn");
  const printCVBtn = document.getElementById("cv-print-btn");

  openCVBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (closeCVBtn) {
    closeCVBtn.addEventListener("click", closeCVModal);
  }

  if (cvModal) {
    cvModal.addEventListener("click", (e) => {
      if (e.target === cvModal) closeCVModal();
    });
  }

  if (printCVBtn) {
    printCVBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

function closeCVModal() {
  const cvModal = document.getElementById("cv-modal");
  if (cvModal) {
    cvModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 7. Clipboard Copy Helper
// ==========================================
function initClipboard() {
  const copyBtns = document.querySelectorAll(".copy-email-btn");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const email = btn.getAttribute("data-email") || "ayahassan200257@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-4 h-4 inline-block mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!`;
        btn.classList.add("text-emerald-400");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("text-emerald-400");
        }, 2200);
      });
    });
  });
}

// ==========================================
// 8. Contact Form Handling (Direct Email Delivery via FormSubmit AJAX)
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitBtn = document.getElementById("contact-submit-btn");
  const btnText = document.getElementById("submit-btn-text");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const subject = document.getElementById("contact-subject")?.value.trim() || "Architectural Inquiry";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = "text-xs font-mono text-center p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400";
        feedback.innerText = "Please fill in all required fields.";
        feedback.classList.remove("hidden");
      }
      return;
    }

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.innerText = "Sending Message...";
    if (feedback) {
      feedback.className = "text-xs font-mono text-center p-3 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center gap-2";
      feedback.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Dispatching email directly to Aya Hassan...`;
      feedback.classList.remove("hidden");
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/ayahassan200257@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          message: message,
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        // Success state
        form.reset();
        if (feedback) {
          feedback.className = "text-xs font-mono text-center p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400";
          feedback.innerHTML = `<span class="font-bold">✓ Message delivered successfully!</span><br/>Thank you, your message has been sent directly to Aya Hassan's inbox (ayahassan200257@gmail.com).`;
        }
      } else {
        throw new Error(result.message || "Failed to deliver message via form service.");
      }
    } catch (err) {
      console.warn("Direct form delivery encountered an issue, offering mailto fallback:", err);
      // Fallback: offer mailto link
      const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
      const mailtoLink = `mailto:ayahassan200257@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
      
      if (feedback) {
        feedback.className = "text-xs font-mono text-center p-3 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300";
        feedback.innerHTML = `Could not reach form gateway. <a href="${mailtoLink}" class="underline font-bold text-sky-400 hover:text-sky-300 ml-1">Click here to send directly via your Email Client</a>`;
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.innerText = "Send Message to Aya Hassan";
    }
  });
}

// ==========================================
// 9. Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const menuLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener("click", () => {
      menuDrawer.classList.toggle("hidden");
    });

    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuDrawer.classList.add("hidden");
      });
    });
  }
}

// ==========================================
// 10. Scroll Spy for Nav Highlighting
// ==========================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-sky-400", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-sky-400", "font-semibold");
      }
    });
  });
}
