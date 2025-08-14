const sections = document.querySelectorAll('section');
const icons = document.querySelectorAll('.mobiusIconContainer img');
let lastActiveIndex = 0; // Start with the first section

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const icon = document.querySelector(`#${sectionId} .mobiusIconContainer img`);

            const currentSectionIndex = parseInt(entry.target.dataset.index);

            // Determine scroll direction by comparing indices
            const isScrollingDown = currentSectionIndex > lastActiveIndex;

            icons.forEach(i => {
                i.classList.remove('mobius-spin', 'mobius-spin-reverse');
            });

            if (icon) {
                if (isScrollingDown) {
                    icon.classList.add('mobius-spin');
                } else {
                    icon.classList.add('mobius-spin-reverse');
                }
            }

            lastActiveIndex = currentSectionIndex;
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});