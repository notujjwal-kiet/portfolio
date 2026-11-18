// ============================================
// WORK PAGE — page-specific behaviour
// landingPage.js already handles shader parallax.
// This file exists for work-page-only hooks.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Project links are placeholders for now — log so we know they're wired
    document.querySelectorAll('.project-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Project case study route not built yet:', link.closest('.preview-item')?.querySelector('h3')?.textContent);
        });
    });
});