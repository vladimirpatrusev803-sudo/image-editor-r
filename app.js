const DOWNLOAD_CONFIG = {
  setupExeUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases/download/v0.1.1/Premium-Image-Editor-0.1.1-x64-setup.exe",
  msiUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases/download/v0.1.1/Premium-Image-Editor-0.1.1-x64.msi",
  releasesUrl: "https://github.com/vladimirpatrusev803-sudo/image-editor-r/releases",
};

const I18N = {
  ru: {
    "nav.studios": "7 студий",
    "nav.local": "Локальный движок",
    "nav.cloud": "Облако и рейтинг",
    "nav.download": "Скачать",
    "nav.cta": "Скачать",
    "hero.eyebrow": "WINDOWS 10/11 X64 · ЛОКАЛЬНЫЙ ДВИЖОК",
    "hero.title": "Инструменты для графики и видео с обработкой на вашем ПК",
    "hero.subtitle":
      "Семь рабочих студий в одном нативном приложении для Windows на Rust, Tauri v2, WebGPU, Zig SIMD и ONNX Runtime. Файлы не покидают компьютер.",
    "hero.downloadExe": "Скачать для Windows (.exe · 11.6 МБ)",
    "hero.explore": "Все 7 студий",
    "hero.specline": "v0.1.1 · 11.6 МБ · Офлайн · Без телеметрии · MCP",
    "studios.kicker": "РАБОЧИЕ ПРОСТРАНСТВА",
    "studios.title": "7 студий под конкретные задачи",
    "filter.all": "Все (7)",
    "filter.ai": "ИИ и видео",
    "filter.pro": "Графика и цвет",
    "filter.ecom": "Маркетплейсы",
    "s1.tag": "ЛОКАЛЬНЫЙ ИИ",
    "s1.title": "Удаление фона",
    "s1.desc":
      "Нейросеть ONNX / withoutBG прямо на вашем устройстве. Чёткие края, прозрачный PNG или новый фон без отправки фото на сервер.",
    "s1.b1": "Без лимитов на вырезку",
    "s1.b2": "Мягкое сглаживание ореолов",
    "s2.tag": "РАЗМЕРЫ",
    "s2.title": "Размеры и кроп",
    "s2.desc":
      "Точное масштабирование с фиксацией пропорций, пресеты под соцсети и маркетплейсы, пакетная нарезка сотен кадров.",
    "s2.b1": "Пресеты под соцсети и сторы",
    "s2.b2": "Качественный ресемплинг",
    "s3.tag": "ФОРМАТЫ И DDS",
    "s3.title": "Смена формата и DDS",
    "s3.desc":
      "Конвертация PNG, JPEG, WebP, BMP, TIFF, GIF, квантование палитр PNG и экспорт игровых текстур DDS (BC1/BC3/BC7).",
    "s3.b1": "Нативная генерация мипмапов",
    "s3.b2": "Пакетная конвертация папок",
    "s4.tag": "ЭФФЕКТЫ И LUT",
    "s4.title": "60+ эффектов и цветокор",
    "s4.desc":
      "WebGPU-предпросмотр в реальном времени, 3D .cube LUT, плёночные луты, AI-резкость, стек эффектов, коллажи и водяные знаки.",
    "s4.b1": "Сброс ползунка двойным кликом",
    "s4.b2": "Сравнение «До / После» на лету",
    "s5.tag": "ОПТИМИЗАЦИЯ",
    "s5.title": "Сжатие в точный КБ",
    "s5.desc":
      "Укажите целевой вес файла (например, до 200 КБ), и движок автоматически подберёт качество и палитру.",
    "s5.b1": "Живая оценка размера до сохранения",
    "s5.b2": "PNG quant + WebP + JPEG",
    "s6.tag": "МАРКЕТПЛЕЙСЫ + MCP",
    "s6.title": "Конструктор карточек",
    "s6.desc":
      "Карточки товаров для WB и Ozon: ИИ-вырезка, контактные тени, фоны, бейджи, инфографика и встроенный MCP-чат.",
    "s6.b1": "7 MCP-инструментов для ИИ-агента",
    "s6.b2": "Пакетный экспорт слайдов",
    "s7.tag": "ИИ-ВИДЕО 1–3М",
    "s7.title": "SVG Story Studio и озвучка",
    "s7.desc":
      "Студия векторных видео-историй от 30 секунд до 3 минут: 11 шаблонов сцен, сценарии через MCP, озвучка TTS, субтитры и рендер 60 FPS.",
    "s7.b1": "BYOK и локальные модели",
    "s7.b2": "Чистый экспорт без водяных знаков",
    "s7.b3": "Рендер MP4 в 60 FPS через WebCodecs",
    "s7.b4": "Системная и ИИ-озвучка с таймингами",
    "local.kicker": "АРХИТЕКТУРА",
    "local.title": "Почему локальная обработка быстрее и безопаснее",
    "local.desc":
      "Пиксельные вычисления выполняются в нативном Rust с Zig SIMD и WebGPU-шейдерами. Фотографии и проекты остаются на вашем диске.",
    "local.f1t": "Мгновенный отклик без очередей",
    "local.f1d": "Не зависит от загруженности облачных серверов. Работает офлайн.",
    "local.f2t": "Приватность по умолчанию",
    "local.f2d": "Нет телеметрии изображений, трекинга файлов или обучения моделей на ваших снимках.",
    "local.f3t": "Палитра команд Ctrl+K",
    "local.f3d": "Быстрый переход к любому из 60+ эффектов, батч-экспорту, резервным копиям и истории.",
    "cloud.kicker": "АККАУНТ И СООБЩЕСТВО",
    "cloud.title": "Облачная синхронизация и Community Hub",
    "cloud.desc": "По желанию подключите бесплатный аккаунт внутри приложения (подтверждение по почте):",
    "cloud.c1": "Синхронизация цветовых пресетов и настроек",
    "cloud.c2": "Очки активности, ежедневные серии и 10 достижений",
    "cloud.c3": "Общий рейтинг и обмен пресетами в Community Hub",
    "cloud.c4": "Весь редактор работает офлайн без входа в аккаунт",
    "cloud.status": "EU-CENTRAL-1 (ФРАНКФУРТ) · ОНЛАЙН",
    "dl.kicker": "РЕЛИЗ v0.1.1",
    "dl.title": "Скачать Premium Image Editor для Windows",
    "dl.desc":
      "Рекомендуем стандартный установщик (.exe). Он сам создаст ярлыки и подготовит программу к запуску.",
    "dl.setupBtn": "Установщик Windows (.exe · 11.6 МБ)",
    "dl.msiBtn": "MSI-пакет (.msi · 26.7 МБ)",
    "dl.allReleases": "Релизы на GitHub →",
    "dl.smartTitle": "О предупреждении Windows SmartScreen:",
    "dl.smartText":
      "на новых инди-сборках без платного EV-сертификата система может спросить подтверждение при первом запуске. Нажмите «Подробнее» → «Выполнить в любом случае».",
    "dl.osLabel": "Система",
    "dl.verLabel": "Версия",
    "dl.licLabel": "Лицензия",
    "dl.pubLabel": "Издатель",
    "footer.co": "Соавтор (ИИ): Antigravity AI (Google DeepMind)",
    "footer.legal": "EULA · Privacy · Terms внутри приложения",
  },
};

function applyDownloadLinks() {
  const setupBtn = document.getElementById("btnSetupExe");
  const heroBtn = document.getElementById("heroDownloadExe");
  const msiBtn = document.getElementById("btnMsi");
  const releasesBtn = document.getElementById("btnReleasesPage");
  if (setupBtn) setupBtn.setAttribute("href", DOWNLOAD_CONFIG.setupExeUrl);
  if (heroBtn) heroBtn.setAttribute("href", DOWNLOAD_CONFIG.setupExeUrl);
  if (msiBtn) msiBtn.setAttribute("href", DOWNLOAD_CONFIG.msiUrl);
  if (releasesBtn) releasesBtn.setAttribute("href", DOWNLOAD_CONFIG.releasesUrl);
}

function setupFilters() {
  const pills = Array.from(document.querySelectorAll(".filter-pills .filter-pill"));
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
  const enCache = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) enCache[key] = el.innerHTML;
  });

  const applyLang = (nextLang) => {
    document.documentElement.lang = nextLang;
    btn.textContent = nextLang === "ru" ? "RU" : "EN";
    const dict = nextLang === "ru" ? I18N.ru : enCache;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  };

  // AI-GUARD: Default website language MUST remain "en". Do NOT change this back to "ru".
  let lang = localStorage.getItem("site_lang") === "ru" ? "ru" : "en";
  if (lang === "ru") applyLang("ru");

  btn.addEventListener("click", () => {
    lang = lang === "ru" ? "en" : "ru";
    localStorage.setItem("site_lang", lang);
    applyLang(lang);
  });
}

applyDownloadLinks();
setupFilters();
setupLanguageToggle();
