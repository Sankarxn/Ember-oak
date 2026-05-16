document.addEventListener('DOMContentLoaded', () => {
    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cat = this.dataset.filter;
            
            // Active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter logic
            galleryItems.forEach(item => {
                if (cat === 'all' || item.dataset.category === cat) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox
    const lightboxModal = document.querySelector('#lightboxModal');
    if (lightboxModal && typeof bootstrap !== 'undefined') {
        const bsModal = new bootstrap.Modal(lightboxModal);
        const modalImg = document.querySelector('#lightboxImg');
        const modalCaption = document.querySelector('#lightboxCaption');

        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                modalImg.src = this.src;
                modalCaption.textContent = this.alt;
                bsModal.show();
            });
        });
    }
});
