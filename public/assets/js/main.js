/* Darklight Chess Academy — interactions
   NOTE: this script is loaded on every page (homepage, service pages, blog
   posts), but several features (testimonial slider, gallery/lightbox,
   enquiry form) only exist in the homepage markup. Each such block is
   guarded on its root element so the script degrades safely elsewhere
   instead of throwing and halting execution for the whole page. */
(function () {
  "use strict";

  /* ---------- Navbar: scroll style + mobile menu ---------- */
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Chessboard page-transition loader ---------- */
  const pageLoader = document.getElementById("pageLoader");
  const chessLoader = document.getElementById("chessLoader");
  const loaderText = document.getElementById("loaderText");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = document.createElement("div");
      sq.className = "sq " + ((r + c) % 2 === 0 ? "light" : "dark");
      sq.style.animationDelay = `${((r + c) % 8) * 0.09}s`;
      chessLoader.appendChild(sq);
    }
  }

  let loaderTimer;
  function navigateWithLoader(hash, label, scrollTarget) {
    const target = scrollTarget || document.querySelector(hash);
    if (!target) return;
    if (reducedMotion) {
      target.scrollIntoView();
      history.replaceState(null, "", hash);
      return;
    }
    clearTimeout(loaderTimer);
    loaderText.textContent = `Loading ${label}…`;
    pageLoader.classList.add("active");
    pageLoader.setAttribute("aria-hidden", "false");
    // Jump while the board covers the screen, then reveal the new section.
    // "instant" (not "auto") forces a true single-frame jump regardless of
    // the page's global smooth-scroll CSS — otherwise the browser still
    // animates the scroll, and on the homepage that means visibly scrolling
    // past the lazy-loaded gallery images further up the page. Those images
    // load in as they enter view and shift the layout mid-scroll, throwing
    // off the landing position (e.g. the contact form below).
    loaderTimer = setTimeout(() => {
      target.scrollIntoView({ behavior: "instant" });
      history.replaceState(null, "", hash);
      loaderTimer = setTimeout(() => {
        pageLoader.classList.remove("active");
        pageLoader.setAttribute("aria-hidden", "true");
      }, 450);
    }, 650);
  }

  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", (e) => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      // Nav links are real, crawlable "/#section" URLs. On the homepage we
      // intercept them for the loader + in-page jump; elsewhere the browser
      // simply follows the href to the homepage section.
      const href = a.getAttribute("href") || "";
      const hash = href.startsWith("/#") ? href.slice(1) : href.startsWith("#") ? href : null;
      if (hash) {
        // nav CTA can preselect a course before jumping to the form
        const course = a.dataset.course;
        if (course) {
          const sel = document.getElementById("fCourse");
          if (sel) sel.value = course;
        }
        if (!document.querySelector(hash)) return;
        e.preventDefault();
        // Demo/course CTAs (they carry data-course) should land straight on
        // the form fields, not just the top of the long contact section.
        const scrollTarget =
          course && hash === "#contact" ? document.getElementById("enquiryForm") : null;
        navigateWithLoader(hash, a.textContent.trim(), scrollTarget);
      }
    })
  );

  /* ---------- Active nav link on scroll ---------- */
  const sections = [...document.querySelectorAll("section[id]")];
  const linkFor = (id) => navLinks.querySelector(`a[href="/#${id}"]:not(.btn)`);
  const sectionSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.querySelectorAll("a:not(.btn)").forEach((a) => a.classList.remove("active"));
        const link = linkFor(e.target.id);
        if (link) link.classList.add("active");
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => sectionSpy.observe(s));

  /* ---------- Reveal-on-scroll animations ---------- */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------- Animated stat counters ---------- */
  const animateCount = (el) => {
    const target = +el.dataset.count;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          statObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll(".stat-num").forEach((el) => statObs.observe(el));

  /* ---------- Testimonial slider (homepage only) ---------- */
  const slides = document.getElementById("slides");
  const dotsWrap = document.getElementById("sliderDots");
  if (slides && dotsWrap) {
    const total = slides.children.length;
    let index = 0;
    let timer;

    for (let i = 0; i < total; i++) {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
      b.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(b);
    }
    const dots = [...dotsWrap.children];

    function goTo(i) {
      index = (i + total) % total;
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, k) => d.classList.toggle("active", k === index));
      restartAuto();
    }
    function restartAuto() {
      clearInterval(timer);
      timer = setInterval(() => goTo(index + 1), 5500);
    }
    document.getElementById("prevSlide").addEventListener("click", () => goTo(index - 1));
    document.getElementById("nextSlide").addEventListener("click", () => goTo(index + 1));
    goTo(0);
  }

  /* ---------- Gallery filter tabs (homepage only) ---------- */
  const galleryTabs = document.getElementById("galleryTabs");
  if (galleryTabs) {
    let activeFilter = "all";
    function applyGalleryFilter() {
      document.querySelectorAll(".gallery-grid img").forEach((img) => {
        const show = activeFilter === "all" || img.dataset.cat === activeFilter;
        img.classList.toggle("g-hidden", !show);
      });
    }
    galleryTabs.querySelectorAll(".g-tab").forEach((tab) =>
      tab.addEventListener("click", () => {
        galleryTabs.querySelectorAll(".g-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeFilter = tab.dataset.filter;
        applyGalleryFilter();
      })
    );
  }

  /* ---------- Gallery lightbox (homepage only) ---------- */
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = document.getElementById("lbImg");
    let galleryImgs = [...document.querySelectorAll(".gallery-grid img")];
    let lbIndex = 0;

    // Photos that aren't in assets/images yet simply disappear from the grid
    galleryImgs.forEach((img) =>
      img.addEventListener("error", () => {
        img.remove();
        galleryImgs = [...document.querySelectorAll(".gallery-grid img")];
      })
    );

    // The lightbox pages through the images visible under the current filter
    const visibleImgs = () =>
      [...document.querySelectorAll(".gallery-grid img:not(.g-hidden)")];

    function openLb(i) {
      const imgs = visibleImgs();
      if (!imgs.length) return;
      lbIndex = (i + imgs.length) % imgs.length;
      lbImg.src = imgs[lbIndex].src;
      lbImg.alt = imgs[lbIndex].alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeLb() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    galleryImgs.forEach((img) => img.addEventListener("click", () => openLb(visibleImgs().indexOf(img))));
    document.getElementById("lbClose").addEventListener("click", closeLb);
    document.getElementById("lbPrev").addEventListener("click", () => openLb(lbIndex - 1));
    document.getElementById("lbNext").addEventListener("click", () => openLb(lbIndex + 1));
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") openLb(lbIndex - 1);
      if (e.key === "ArrowRight") openLb(lbIndex + 1);
    });
  }

  /* ---------- "Book Now" / CTA buttons: preselect course + jump to form ---------- */
  // These links point to /#contact by default (real, crawlable hrefs). On the
  // homepage itself we intercept the click for a smooth in-page scroll and to
  // preselect the course dropdown; on any other page there's no #contact
  // section, so we skip and let the browser follow the href normally.
  const courseSelect = document.getElementById("fCourse");
  document.querySelectorAll(".book-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;
      e.preventDefault();
      const course = btn.dataset.course;
      if (course && courseSelect) {
        courseSelect.value = course;
        courseSelect.dispatchEvent(new Event("change"));
      }
      // Jump straight to the form fields, not just the top of the (long,
      // two-column-on-desktop/stacked-on-mobile) contact section — otherwise
      // mobile visitors land above the contact-info block and have to keep
      // scrolling to actually reach the form. Routed through the page-loader
      // helper so the jump is instant (under the loader cover) instead of an
      // animated scroll through the lazy-loaded gallery further up the page,
      // which shifts layout as its images load and throws off a plain
      // scrollIntoView({behavior:"smooth"}) mid-flight.
      const scrollTarget = document.getElementById("enquiryForm") || contactSection;
      navigateWithLoader("#contact", btn.textContent.trim(), scrollTarget);
    })
  );

  /* ---------- Enquiry form: validation + submission (homepage only) ---------- */
  const form = document.getElementById("enquiryForm");
  if (form) {
    const statusBox = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    // Submissions are emailed to the academy via FormSubmit (free service).
    // The first-ever submission sends an activation link to this inbox.
    const FORM_ENDPOINT = "https://formsubmit.co/ajax/darklightchess64@gmail.com";
    // Every enquiry is also pushed into the Darklight CRM as a new lead, via the
    // public lead-capture webhook (not the session-authed dashboard API — the
    // browser has no session). Authenticated by a per-branch shared secret instead.
    const CRM_ENDPOINT = "https://darklightchess-aios.vercel.app/api/webhooks/lead-capture";
    const CRM_SECRET = "dffb01de3549b163e0e4e1d69268816c7cc4c45699e58f91445e2fe1a9694c80";
    const WHATSAPP = "918300155259";

    // The CRM API only accepts international-format phone numbers (+91…),
    // but parents usually type local 10-digit numbers — normalize before sending.
    function normalizePhone(raw) {
      let p = String(raw).replace(/[\s().-]/g, "");
      if (p.startsWith("+")) return p;
      if (p.startsWith("00")) return "+" + p.slice(2);
      p = p.replace(/^0+/, "");
      if (/^91\d{10}$/.test(p)) return "+" + p;
      if (/^\d{10}$/.test(p)) return "+91" + p;
      return "+" + p;
    }

    function sendToCrm(data) {
      const lead = {
        name: data.name,
        email: data.email,
        phone: normalizePhone(data.phone),
        source: "website",
        // The webhook requires availability to run coach-matching; this form
        // doesn't collect it, so send a wide-open placeholder.
        available_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        available_time: "Flexible",
        notes: [
          `Course: ${data.course}`,
          `Mode: ${data.mode}`,
          `Age group: ${data.age}`,
          data.country ? `Country: ${data.country}` : "",
          data.timezone ? `Time zone: ${data.timezone}` : "",
          data.experience ? `Experience: ${data.experience}` : "",
          data.page ? `Page: ${data.page}` : "",
          data.message ? `Message: ${data.message}` : "",
        ].filter(Boolean).join(" | "),
      };
      return fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-lead-webhook-secret": CRM_SECRET,
        },
        body: JSON.stringify(lead),
      }).then((res) => {
        if (!res.ok) {
          res.json().then((body) => console.error("[CRM] lead push failed", res.status, body)).catch(() => {
            console.error("[CRM] lead push failed", res.status);
          });
        }
        return res;
      });
    }

    const validators = {
      name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
      phone: (v) => (/^[+()\-\s0-9]{7,16}$/.test(v.trim()) ? "" : "Enter a valid phone number."),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."),
      age: (v) => (v ? "" : "Please choose an age group."),
      mode: (v) => (v ? "" : "Please choose a mode."),
      course: (v) => (v ? "" : "Please choose a level."),
      country: (v) => (v ? "" : "Please choose a country."),
      experience: (v) => (v ? "" : "Please choose an experience level."),
      consent: (v, el) => (el.checked ? "" : "Please tick to agree before submitting."),
    };

    // Prefill the visitor's time zone (editable) so coaches can offer slots.
    const tzInput = document.getElementById("fTimezone");
    const prefillTimezone = () => {
      try {
        if (tzInput && !tzInput.value) tzInput.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      } catch (_) { /* Intl unavailable — leave blank */ }
    };
    prefillTimezone();

    function validateField(input) {
      const check = validators[input.name];
      if (!check) return true;
      const msg = check(input.value, input);
      const group = input.closest(".form-group");
      group.classList.toggle("invalid", !!msg);
      const err = group.querySelector(".err");
      if (err) err.textContent = msg;
      return !msg;
    }

    form.querySelectorAll("input, select").forEach((el) => {
      el.addEventListener("blur", () => validateField(el));
      el.addEventListener("input", () => validateField(el));
      el.addEventListener("change", () => validateField(el));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll("input, select")];
      const allValid = fields.map(validateField).every(Boolean);
      if (!allValid) {
        statusBox.className = "form-status fail";
        statusBox.textContent = "Please fill in all fields before submitting.";
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      // Honeypot filled in → almost certainly a bot. Pretend success, send nothing.
      const isBot = !!data._honey;
      delete data._honey;
      if (isBot) {
        statusBox.className = "form-status ok";
        statusBox.textContent = "✅ Thank you! Your enquiry has been sent.";
        form.reset();
        return;
      }
      data.submittedAt = new Date().toISOString();

      // Keep a local copy of every enquiry (viewable in DevTools > Application > Local Storage)
      try {
        const log = JSON.parse(localStorage.getItem("dlca_enquiries") || "[]");
        log.push(data);
        localStorage.setItem("dlca_enquiries", JSON.stringify(log));
      } catch (_) { /* storage unavailable — ignore */ }

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting…";
      statusBox.className = "form-status";
      statusBox.textContent = "";

      // Push the lead into the CRM (fire-and-forget — failures are logged, not surfaced to the user)
      try {
        sendToCrm(data).catch((err) => console.error("[CRM] lead push errored", err));
      } catch (_) { /* network unavailable — email still goes out */ }

      let delivered = false;
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New enquiry: ${data.course} — ${data.name}`,
            _template: "table",
            ...data,
          }),
        });
        delivered = res.ok;
      } catch (_) {
        delivered = false;
      }

      const waText = encodeURIComponent(
        `Hi Darklight Chess Academy! I'm ${data.name}${data.country ? ` from ${data.country}` : ""}. I'd like to enquire about "${data.course}" (${data.mode}, age group ${data.age}). ${data.message || ""}`
      );
      const waLink = `https://wa.me/${WHATSAPP}?text=${waText}`;

      // Conversion signal for analytics, if a tag manager / GA4 is added later.
      // No analytics script is loaded by the site today, so this is a no-op.
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: "generate_lead", lead_course: data.course, lead_mode: data.mode, lead_country: data.country, lead_page: data.page });
      }

      if (delivered) {
        statusBox.className = "form-status ok";
        statusBox.innerHTML =
          `✅ Thank you, <strong>${escapeHtml(data.name)}</strong>! Your enquiry has been sent. ` +
          `We'll get back to you within 24 hours.<br/>` +
          `Want a faster reply? <a href="${waLink}" target="_blank" rel="noopener"><strong>Message us on WhatsApp →</strong></a>`;
        form.reset();
        prefillTimezone();
      } else {
        statusBox.className = "form-status ok";
        statusBox.innerHTML =
          `✅ Thank you, <strong>${escapeHtml(data.name)}</strong>! Your enquiry has been recorded.<br/>` +
          `To reach us instantly, <a href="${waLink}" target="_blank" rel="noopener"><strong>send it on WhatsApp →</strong></a> ` +
          `or call <a href="tel:+918300155259">+91 83001 55259</a>.`;
        form.reset();
        prefillTimezone();
      }
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Enquiry ♞";
      statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }
  }

  /* ---------- Back to top ---------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener(
    "scroll",
    () => toTop.classList.toggle("show", window.scrollY > 700),
    { passive: true }
  );
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
