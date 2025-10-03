// Tailwind custom config: must be defined BEFORE the Tailwind CDN is loaded
// We extend colors and fonts to match the brand palette.
/* global tailwind */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'urap-green': '#347C5E', // Hijau segar sayuran
        'urap-cream': '#FCF6F0', // Warna dasar / kelapa
        'urap-spice': '#D97706', // Aksen pedas/bumbu
        'urap-dark': '#292524',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};

// Small enhancement: toggle mobile navigation
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
