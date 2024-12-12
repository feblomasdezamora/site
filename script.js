// Mostrar lightbox al hacer clic en una imagen
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (galleryImages.length > 0 && lightbox && lightboxImg) {
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}
