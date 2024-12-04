// *** LIGHTBOX ***
const lightbox = document.getElementById('lightbox');
    const images = document.querySelectorAll('ul img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        const fullImgSrc = img.dataset.fullImg;
        lightbox.querySelector('img').src = fullImgSrc;
        lightbox.showModal();
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.close();
    });