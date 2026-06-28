/* =================================================================
   DANIEL DEEPAK — GROWTH PORTFOLIO · vanilla JS, no dependencies
   ================================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- nav ---------- */
  function bindNav() {
    var t = $("#navToggle"), m = $("#navMenu");
    if (!t || !m) return;
    t.addEventListener("click", function () {
      var open = m.classList.toggle("is-open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("a", m).forEach(function (a) {
      a.addEventListener("click", function () { m.classList.remove("is-open"); t.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---------- scroll: progress, totop, spy ---------- */
  function bindScroll() {
    var prog = $("#scrollProgress"), top = $("#toTop");
    var links = $$('#navMenu a[href^="#"]');
    var secs = links.map(function (a) { return $(a.getAttribute("href")); });
    function on() {
      var st = window.pageYOffset, dh = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = (dh > 0 ? st / dh * 100 : 0) + "%";
      if (top) top.classList.toggle("is-visible", st > 600);
      var idx = -1, mid = st + window.innerHeight * 0.3;
      secs.forEach(function (s, i) { if (s && s.offsetTop <= mid) idx = i; });
      links.forEach(function (a, i) { a.classList.toggle("is-current", i === idx); });
    }
    window.addEventListener("scroll", on, { passive: true }); on();
  }

  /* ---------- reveal ---------- */
  function bindReveal() {
    var els = $$(".reveal");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- count-up stats ---------- */
  function bindCount() {
    var nums = $$("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count")), dur = 1100, t0 = null;
      if (reduce) { el.textContent = target; return; }
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- project card motifs (SVG backgrounds tinted by --accent) ---------- */
  function motifSVG(type, color) {
    var c = color, o = "stroke='" + c + "' fill='none' stroke-width='1.4'";
    var dots = "fill='" + c + "'";
    var inner = {
      report: "<polyline points='10,80 40,66 70,72 100,40 130,48 160,18' " + o + " opacity='.85'/><rect x='10' y='92' width='14' height='16' " + dots + " opacity='.4'/><rect x='34' y='84' width='14' height='24' " + dots + " opacity='.5'/><rect x='58' y='74' width='14' height='34' " + dots + " opacity='.6'/><circle cx='160' cy='18' r='4' " + dots + "/>",
      ai: "<circle cx='30' cy='30' r='4' " + dots + "/><circle cx='110' cy='22' r='4' " + dots + "/><circle cx='150' cy='70' r='4' " + dots + "/><circle cx='60' cy='90' r='4' " + dots + "/><circle cx='95' cy='60' r='5' " + dots + "/><line x1='30' y1='30' x2='95' y2='60' " + o + " opacity='.5'/><line x1='110' y1='22' x2='95' y2='60' " + o + " opacity='.5'/><line x1='150' y1='70' x2='95' y2='60' " + o + " opacity='.5'/><line x1='60' y1='90' x2='95' y2='60' " + o + " opacity='.5'/>",
      pulse: "<polyline points='6,70 40,70 54,40 66,96 82,24 96,70 130,70 146,52 162,70 190,70' " + o + " opacity='.9' stroke-linejoin='round' stroke-linecap='round'/>",
      bars: "<rect x='16' y='70' width='18' height='40' " + dots + " opacity='.4'/><rect x='46' y='54' width='18' height='56' " + dots + " opacity='.55'/><rect x='76' y='38' width='18' height='72' " + dots + " opacity='.7'/><rect x='106' y='24' width='18' height='86' " + dots + " opacity='.85'/><rect x='136' y='12' width='18' height='98' " + dots + "/>",
      grid: "<g opacity='.6'>" + (function () { var s = ""; for (var x = 20; x < 180; x += 26) for (var y = 16; y < 110; y += 24) s += "<circle cx='" + x + "' cy='" + y + "' r='2.4' " + dots + "/>"; return s; })() + "</g>"
    }[type] || "";
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120' preserveAspectRatio='xMidYMid slice'>" + inner + "</svg>";
    return "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
  }
  function bindMotifs() {
    $$(".proj__media[data-motif]").forEach(function (media) {
      var proj = media.closest(".proj");
      var accent = (proj && getComputedStyle(proj).getPropertyValue("--accent").trim()) || "#C9A84C";
      media.style.setProperty("--motif", motifSVG(media.getAttribute("data-motif"), accent));
    });
  }

  /* ---------- hero constellation canvas ---------- */
  function heroCanvas() {
    var cv = $("#heroCanvas");
    if (!cv || reduce) return;
    var ctx = cv.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2), parts = [], raf;
    function size() {
      var r = cv.parentElement.getBoundingClientRect();
      cv.width = r.width * dpr; cv.height = r.height * dpr;
      cv.style.width = r.width + "px"; cv.style.height = r.height + "px";
      var n = Math.min(64, Math.floor(r.width / 22));
      parts = [];
      for (var i = 0; i < n; i++) parts.push({
        x: Math.random() * cv.width, y: Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.18 * dpr, vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.6 + 0.6) * dpr
      });
    }
    function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      var link = 130 * dpr;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > cv.width) p.vx *= -1;
        if (p.y < 0 || p.y > cv.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = "rgba(201,168,76,0.55)"; ctx.fill();
        for (var j = i + 1; j < parts.length; j++) {
          var q = parts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(201,168,76," + (0.16 * (1 - d / link)).toFixed(3) + ")";
            ctx.lineWidth = dpr; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    size(); draw();
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(size, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(draw);
    });
  }

  function init() {
    bindNav(); bindScroll(); bindReveal(); bindCount(); bindMotifs(); heroCanvas();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
