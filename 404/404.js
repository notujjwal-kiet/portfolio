// ============================================
// 404 — LAVENDER SHADER PARALLAX
// Same effect as landingPage.js, re-run for
// this document since it's a separate page.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const shaderBg = document.getElementById('shaderBg');
    if (!shaderBg) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Third lavender blob (same as landing)
    const thirdBlob = document.createElement('div');
    thirdBlob.classList.add('blob-third');
    shaderBg.appendChild(thirdBlob);

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const ease = 0.08;

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth) * 2 - 1;
        targetY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    function animateShader() {
        mouseX += (targetX - mouseX) * ease;
        mouseY += (targetY - mouseY) * ease;
        shaderBg.style.transform = `translate(${mouseX * 8}px, ${mouseY * 8}px)`;
        shaderBg.style.transition = 'transform 0.1s linear';
        requestAnimationFrame(animateShader);
    }
    animateShader();
});