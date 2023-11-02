const carousel = document.querySelector('.carousel');
const numImages = 30; // Número total de imagens
let currentImage = 0;

function loadImages() {
    for (let i = 0; i < 3; i++) {
        const imageIndex = (currentImage + i) % numImages;
        const image = document.createElement('div');
        image.classList.add('slide');
        image.innerHTML = `<img src="image${imageIndex + 1}.jpg" alt="Imagem ${
            imageIndex + 1
        }">`;
        carousel.appendChild(image);
    }
    currentImage = (currentImage + 1) % numImages;
}

loadImages(); // Carrega as primeiras imagens

// Inicia a animação
carousel.style.animation = 'scroll 10s linear infinite';

// Pausa a animação ao passar o mouse
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

// Reinicia a animação quando o mouse sai
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
