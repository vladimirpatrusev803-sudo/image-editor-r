const DOWNLOAD_CONFIG = {
  setupExeUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases/download/image-editor/Premium-Image-Editor-0.1.0-x64-setup.exe",
  msiUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases/download/image-editor/Premium-Image-Editor-0.1.0-x64.msi",
  releasesUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases",
};

const I18N = {
  en: {
    "nav.studios": "7 Studios",
    "nav.local": "Local Engine",
    "nav.cloud": "Cloud & Ranks",
    "nav.download": "Download",
    "nav.cta": "Download .exe",
    "hero.eyebrow": "IMAGE TOOLS, MADE LOCAL · WINDOWS 10/11 X64",
    "hero.title": "Everything for images & motion stories — <span class='accent'>locally on your PC</span>",
    "hero.subtitle":
      "7 specialized studios in one fast desktop app powered by Rust, Tauri v2, WebGPU, Zig SIMD, and ONNX Runtime. Your files never leave your machine.",
    "hero.downloadExe": "Download for Windows (.exe · 10.1 MB)",
    "hero.explore": "Explore all 7 studios →",
    "hero.spec1": "⚡ 100% local processing",
    "hero.spec2": "✦ AI without subscriptions",
    "hero.spec3": "🔌 Built-in MCP for AI agents",
    "hero.spec4": "☁ Cloud presets & leaderboard",
    "studios.kicker": "WORKSPACES",
    "studios.title": "7 studios for every workflow",
    "filter.all": "All (7)",
    "filter.ai": "AI & Video",
    "filter.pro": "Graphics & Color",
    "filter.ecom": "Marketplaces",
    "s1.tag": "LOCAL AI",
    "s1.title": "Background Removal",
    "s1.desc":
      "ONNX / withoutBG neural cutout right on your device. Crisp edges, transparent PNG, or custom background without uploading photos.",
    "s1.b1": "Unlimited cutouts",
    "s1.b2": "Smooth halo suppression",
    "s2.tag": "DIMENSIONS",
    "s2.title": "Resize & Smart Crop",
    "s2.desc":
      "Exact scaling with aspect-ratio lock, social & store presets, and batch processing for hundreds of images.",
    "s2.b1": "Social & marketplace aspect presets",
    "s2.b2": "High-quality resampling",
    "s3.tag": "FORMATS & DDS",
    "s3.title": "Format Converter & DDS",
    "s3.desc":
      "Convert PNG, JPEG, WebP, BMP, TIFF, GIF, quantize PNG palettes, and export game textures in DDS (BC1/BC3/BC7).",
    "s3.b1": "Native mipmap generation",
    "s3.b2": "Batch folder conversion",
    "s4.tag": "EFFECTS & LUT",
    "s4.title": "70+ Effects & Color Grading",
    "s4.desc":
      "Real-time WebGPU preview, 3D .cube LUTs, film looks, AI sharpening, effect stack, collages, and watermarks.",
    "s4.b1": "Double-click slider reset",
    "s4.b2": "Instant Before / After split",
    "s5.tag": "OPTIMIZATION",
    "s5.title": "Target-KB Compression",
    "s5.desc":
      "Set an exact target file size (e.g., under 200 KB) and let the engine tune quality and palette automatically.",
    "s5.b1": "Live encoded size estimation",
    "s5.b2": "PNG quant + WebP + JPEG",
    "s6.tag": "MARKETPLACES + MCP",
    "s6.title": "Marketplace Card Builder",
    "s6.desc":
      "Design product cards for WB & Ozon: AI cutout, shadows, backgrounds, badges, infographics, and built-in MCP AI chat.",
    "s6.b1": "7 MCP tools for AI assistant",
    "s6.b2": "Batch slide export",
    "s7.tag": "AI VIDEO 1–3M",
    "s7.title": "SVG Story Studio & Voiceover",
    "s7.desc":
      "Animated vector video studio (30s–3m): 8 scene templates, built-in MCP script generator, TTS voiceover, live captions, and 60 FPS video export.",
    "s7.b1": "BYOK & local AI models",
    "s7.b2": "Clean export with no watermarks",
    "local.kicker": "ARCHITECTURE",
    "local.title": "Why local-first is faster and safer",
    "local.desc":
      "All heavy pixel math runs in native Rust with Zig SIMD and WebGPU shaders. Your photos and project history stay strictly on your disk.",
    "local.f1t": "Instant response without queues",
    "local.f1d": "No busy cloud servers — works offline anywhere.",
    "local.f2t": "Private by default",
    "local.f2d": "Zero image telemetry, zero file history tracking, zero training on your art.",
    "local.f3t": "Ctrl+K Command Palette & Shortcuts",
    "local.f3d": "Jump to any of 70+ effects, batch export, backups, and undo history instantly.",
    "cloud.kicker": "ACCOUNT & COMMUNITY",
    "cloud.title": "Optional Cloud Sync & Community Hub",
    "cloud.desc": "Create a free account inside the app (verified via Gmail):",
    "cloud.c1": "✓ Sync your color presets and settings",
    "cloud.c2": "✓ Activity points, daily sparks, and 10 achievements",
    "cloud.c3": "✓ Global leaderboard and Community Hub preset sharing",
    "cloud.c4": "✓ Full editor works offline without signing in",
    "cloud.status": "Frankfurt Server (eu-central-1) · Online 24/7",
    "dl.kicker": "RELEASE v0.1.0",
    "dl.title": "Download Premium Image Editor for Windows",
    "dl.desc":
      "Recommended: standard Windows installer (.exe) — sets up shortcuts and prepares everything automatically.",
    "dl.setupBtn": "Windows Installer (.exe · 10.1 MB)",
    "dl.msiBtn": "MSI Package (.msi · 24.6 MB)",
    "dl.allReleases": "All Releases →",
    "dl.smartTitle": "💡 If Windows SmartScreen appears on first launch:",
    "dl.smartText":
      "this is normal for new indie apps without a paid EV certificate. Click «More info» → «Run anyway».",
    "dl.osLabel": "Platform",
    "dl.verLabel": "Version",
    "dl.licLabel": "License",
    "dl.pubLabel": "Publisher",
    "footer.co": "Co-developer (AI): Antigravity AI (Google DeepMind)",
    "footer.legal": "EULA · Privacy · Terms inside the app",
  },
};

function applyDownloadLinks() {
  const setupBtn = document.getElementById("btnSetupExe");
  const msiBtn = document.getElementById("btnMsi");
  const releasesBtn = document.getElementById("btnReleasesPage");
  if (setupBtn) setupBtn.setAttribute("href", DOWNLOAD_CONFIG.setupExeUrl);
  if (msiBtn) msiBtn.setAttribute("href", DOWNLOAD_CONFIG.msiUrl);
  if (releasesBtn) releasesBtn.setAttribute("href", DOWNLOAD_CONFIG.releasesUrl);
}

function setupFilters() {
  const pills = Array.from(document.querySelectorAll(".filter-pills .pill"));
  const cards = Array.from(document.querySelectorAll(".studio-card"));
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const cat = pill.getAttribute("data-filter") || "all";
      pills.forEach((p) => p.classList.toggle("active", p === pill));
      cards.forEach((card) => {
        const show = cat === "all" || card.getAttribute("data-cat") === cat;
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

function setupLanguageToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  const ruCache = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) ruCache[key] = el.innerHTML;
  });

  let lang = "ru";
  btn.addEventListener("click", () => {
    lang = lang === "ru" ? "en" : "ru";
    document.documentElement.lang = lang;
    btn.textContent = lang === "ru" ? "🌐 RU" : "🌐 EN";
    const dict = lang === "en" ? I18N.en : ruCache;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  });
}

applyDownloadLinks();
setupFilters();
setupLanguageToggle();
