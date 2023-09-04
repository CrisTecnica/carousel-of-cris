 // JavaScript para controlar o carrossel
 const carousel = document.querySelector('.carousel');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 let currentIndex = 0;

 function showImage(index) {
     const offset = -index * 400; // Largura da imagem
     carousel.style.transform = `translateX(${offset}px)`;
 }

 prevBtn.addEventListener('click', () => {
     currentIndex = Math.max(currentIndex - 1, 0);
     showImage(currentIndex);
 });

 nextBtn.addEventListener('click', () => {
     currentIndex = Math.min(currentIndex + 1, 2); // Altere para o número de imagens - 1
     showImage(currentIndex);
 });67k
 8o0u