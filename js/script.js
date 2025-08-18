window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 6290); 
});

const sections = document.querySelectorAll('section');
const icons = document.querySelectorAll('.mobiusIconContainer img');
let lastActiveIndex = 0; // Start with the first section

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        const contentToAnimate = entry.target.querySelectorAll(`
            #landingSectionTitleContainer, #landingSectionNavBarContainer,
            #aboutSectionTitleContainer, #aboutSectionSubTitleContainer, #aboutSectionParaContainer, #aboutSectionNavBarContainer,
            #workSectionTitleContainer, #workSectionSubTitleContainer, #workSectionParaContainer, #workSectionNavBarContainer,
            #contactSectionTitleContainer, #contactSectionSubTitleContainer, #contactSectionParaContainer

        `);

        if (entry.isIntersecting) {

            if (contentToAnimate.forEach(el =>{
                el.classList.add("fade-in");
            }));
            
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
        } else {
            // Remove the class when it's out of view to reset the animation
            if (contentToAnimate.forEach(el =>{
                el.classList.remove("fade-in");
            }));
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

