const sections = document.querySelectorAll('section');
const icons = document.querySelectorAll('.mobiusIconContainer img');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the ID of the intersecting section
            const sectionId = entry.target.id;

            // Find the corresponding icon for this section
            const icon = document.querySelector(`#${sectionId} .mobiusIconContainer img`);

            // Remove spin from all icons and add to the current one
            icons.forEach(i => i.classList.remove('mobius-spin'));
            if (icon) {
                icon.classList.add('mobius-spin');
            }
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold to trigger when the section is halfway visible

sections.forEach(section => {
    observer.observe(section);
});