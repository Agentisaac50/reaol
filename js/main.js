// ===== Agentisaac256 Website Scripts =====

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle + close on link click
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked (important on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll reveal animations
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach(el => {
        if (el.classList.contains('visible')) return;
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 70) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    // Run once after a short delay so layout is ready
    setTimeout(revealOnScroll, 100);
    revealOnScroll();
  }

  // Animated counters (only on home page where .stats exists)
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length > 0) {
    let counted = false;
    const animateCounters = () => {
      if (counted) return;
      const statsSection = document.querySelector('.stats');
      if (!statsSection) return;

      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        counted = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1400; // ms
          const start = performance.now();

          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4);
            const value = Math.round(eased * target);
            counter.textContent = value + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = target + suffix;
            }
          };
          requestAnimationFrame(update);
        });
      }
    };
    window.addEventListener('scroll', animateCounters, { passive: true });
    animateCounters();
  }
});