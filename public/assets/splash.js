/* assets/splash.js
   - handles fireworks (canvas)
   - audio play on interaction (fallback if autoplay blocked)
   - smooth fade-out and removal
   - resize handling
*/

(function () {
  const SPLASH_ID = "site-splash";
  const FADE_MS = 1600;         // must match CSS transition
  const VISIBLE_MS = 5500;      // how long before we start fade
  const FIREWORK_INTERVAL = 650; // ms between bursts

  // Ensure script runs after DOM ready
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(() => {
    const splash = document.getElementById(SPLASH_ID);
    if (!splash) return; // nothing to do

    // Canvas setup
    const canvas = splash.querySelector("canvas.splash-canvas");
    const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // particle storage
    const particles = [];

    function createBurst(x, y, hueBase) {
      const count = 36 + Math.floor(Math.random() * 20);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = 1.8 + Math.random() * 4.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 80 + Math.random() * 40,
          radius: 1 + Math.random() * 2.3,
          hue: (hueBase + Math.random() * 60) % 360,
        });
      }
    }

    function updateParticles() {
      if (!ctx) return;
      // translucent overlay for motion blur
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // gravity
        p.vx *= 0.998;
        p.vy *= 0.998;
        p.life -= 1.8;
        const alpha = Math.max(0, p.life / 120);
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${alpha})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        if (p.life <= 0 || p.x < -50 || p.x > canvas.width + 50) {
          particles.splice(i, 1);
        }
      }
    }

    let animFrame = null;
    function loop() {
      updateParticles();
      animFrame = requestAnimationFrame(loop);
    }
    if (ctx) loop();

    // launch random bursts across the top half
    const burstTimer = setInterval(() => {
      const x = Math.random() * (canvas ? canvas.width : window.innerWidth);
      const y = 40 + Math.random() * ((canvas ? canvas.height : window.innerHeight) * 0.45);
      createBurst(x, y, Math.random() * 360);
    }, FIREWORK_INTERVAL);

    // Audio handling: try autoplay; else wait for user interaction
    const audioEl = splash.querySelector("audio.splash-audio") || splash.querySelector("audio");
    // create audio control button (mute/unmute)
    const audioControl = document.createElement("button");
    audioControl.className = "splash-audio-control";
    audioControl.type = "button";
    audioControl.innerHTML = "🔊 Play sound";
    audioControl.title = "Play/Pause sound";
    if (audioEl) {
      audioEl.volume = 0.45;
      audioEl.loop = false; // short clip preferred
      // try autoplay
      const attemptPlay = () => {
        const p = audioEl.play();
        if (p && p.catch) {
          p.catch(() => {
            // blocked — keep control visible and wait for interaction
            audioControl.innerHTML = "🔇 Tap to play sound";
          });
        } else {
          audioControl.innerHTML = "🔊 Sound on";
        }
      };
      attemptPlay();

      // toggle on button click
      audioControl.addEventListener("click", (ev) => {
        ev.stopPropagation();
        if (audioEl.paused) {
          audioEl.currentTime = 0;
          audioEl.play().catch(() => {});
          audioControl.innerHTML = "🔊 Sound on";
        } else {
          audioEl.pause();
          audioControl.innerHTML = "🔇 Muted";
        }
      });

      // Also enable sound on first user gesture anywhere if autoplay blocked
      const onFirstGesture = () => {
        if (audioEl.paused) {
          audioEl.currentTime = 0;
          audioEl.play().catch(() => {});
          audioControl.innerHTML = "🔊 Sound on";
        }
        window.removeEventListener("pointerdown", onFirstGesture);
        window.removeEventListener("keydown", onFirstGesture);
      };
      window.addEventListener("pointerdown", onFirstGesture, { once: true });
      window.addEventListener("keydown", onFirstGesture, { once: true });

      // attach control to splash area
      splash.appendChild(audioControl);
    }

    // small skip button for users
    const skipBtn = document.createElement("button");
    skipBtn.className = "splash-skip";
    skipBtn.type = "button";
    skipBtn.textContent = "Skip";
    skipBtn.title = "Skip animation";
    skipBtn.addEventListener("click", () => hideSplash());
    splash.appendChild(skipBtn);

    // Fade-out and removal
    let hideTimeout = null;
    function hideSplash() {
      // stop intervals & animation
      clearInterval(burstTimer);
      if (animFrame) cancelAnimationFrame(animFrame);
      // fade by adding class defined in splash.css
      splash.classList.add("splash-hidden");

      // stop audio
      if (audioEl && !audioEl.paused) {
        try { audioEl.pause(); } catch (e) {}
      }

      // remove node after fade finishes
      setTimeout(() => {
        try { splash.remove(); } catch (e) {}
      }, FADE_MS + 120);
    }

    // Start: auto-hide after VISIBLE_MS (user can skip earlier)
    hideTimeout = setTimeout(() => hideSplash(), VISIBLE_MS);

    // In case the user navigates/changes route in SPA before hide, ensure removal on visibilitychange/unload
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearTimeout(hideTimeout);
        hideSplash();
      }
    });
    window.addEventListener("pagehide", () => {
      clearTimeout(hideTimeout);
      hideSplash();
    });
  });
})();
