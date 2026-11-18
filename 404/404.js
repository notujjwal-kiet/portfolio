// ============================================
// 404 PAGE — shader parallax only.
//
// Duplicates the shader-parallax block from
// landingPage.js intentionally. The 404 page
// has no orbit and no scroll-to-projects
// button, so loading the full landingPage.js
// would add dead handlers.
//
// If the shader parallax logic changes,
// update both files. The block is ~20 lines.
//
// The orbit on this page is decorative and
// intentionally has no click-pulse.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const shaderBg = document.getElementById('shaderBg');
    if (!shaderBg) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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