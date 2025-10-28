document.addEventListener('DOMContentLoaded', () => {
  //  estado //
  let index = 0;
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider'); 
  let interval = null;

  //  pintar el slide actual //
  function showSlide() {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }

  //  navegación //
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
  }
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
  }

  //  autoplay //
  function startAuto() {
    stopAuto(); // evita duplicar intervalos
    interval = setInterval(nextSlide, 8000); // tiempo en ms entre cambio de imagenes //
  }
  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  // el banner se pausa al pasar el mouse//
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  // botones //
  const prevBtn = document.createElement('button');
  prevBtn.className = 'prev-btn';
  prevBtn.type = 'button';
  prevBtn.setAttribute('aria-label', 'Anterior');
  prevBtn.textContent = '⟨';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-btn';
  nextBtn.type = 'button';
  nextBtn.setAttribute('aria-label', 'Siguiente');
  nextBtn.textContent = '⟩';

  slider.append(prevBtn, nextBtn);

  // eventos de los botones //
  prevBtn.addEventListener('click', () => { stopAuto(); prevSlide(); });
  nextBtn.addEventListener('click', () => { stopAuto(); nextSlide(); });

  // inicio //
  showSlide();
  startAuto();
});
