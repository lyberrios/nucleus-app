const ScrollRevealEffect = (() => {
    let items = [];

    const init = () => {
        items = document.querySelectorAll('.flip-right, .fade-down-right, .fade-up, .fade-left');
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecuta al cargar para elementos visibles desde el inicio
    };

    const handleScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', ScrollRevealEffect.init);
