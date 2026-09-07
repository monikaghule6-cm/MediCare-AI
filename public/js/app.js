// Minimal frontend boot
document.addEventListener('DOMContentLoaded',()=>{
  // small UX: announce JS is loaded
  const h = document.querySelector('.hero h1');
  if(h){h.classList.add('fade-in')}
  console.info('MediCare AI front-end initialized')
});
