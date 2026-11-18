// ============================================
// LANDING PAGE — shader, orbit pulse, CTA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Respect reduced motion across the whole page
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- SHADER PARALLAX ----------
    const shaderBg = document.getElementById('shaderBg');
    if (shaderBg) {
        const thirdBlob = document.createElement('div');
        thirdBlob.classList.add('blob-third');
        shaderBg.appendChild(thirdBlob);

        if (!prefersReducedMotion) {
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
        }
    }

    // ---------- ORBIT CLICK PULSE ----------
    const orbitOuter = document.querySelector('.orbit-outer');
    if (orbitOuter && !prefersReducedMotion) {
        orbitOuter.addEventListener('click', () => {
            if (orbitOuter.classList.contains('pulsing')) return;
            orbitOuter.classList.add('pulsing');
            setTimeout(() => orbitOuter.classList.remove('pulsing'), 900);
        });
    }

    // ---------- "VIEW PROJECTS" SCROLL ----------
    const viewProjectsBtn = document.querySelector('.btn-primary');
    if (viewProjectsBtn && viewProjectsBtn.tagName !== 'A') {
        viewProjectsBtn.addEventListener('click', () => {
            const grid = document.querySelector('.preview-grid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});