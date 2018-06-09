if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
};
window.sr = ScrollReveal();
sr.reveal('.minombre',{
    duration: 2000,
    origin: 'top'
});
sr.reveal('.midato',{
    duration: 2500,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.mifoto',{
    duration: 3000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.misocial',{
    duration: 2000,
    origin: 'bottom',
    delay: 2000
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*
window.onload = function(){
    var contenedor = document.getElementById('contenedor-carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
};
*/
jQuery(function($) { 
  $('.aparecer').waypoint(function() {
      $(this).toggleClass( 'bounceIn animated' );
  },
  {
      offset: '70%',
      triggerOnce: true
  });
  
  $('.aparecer_2').waypoint(function() {
      $(this).toggleClass( 'fadeInLeft animated' );
  },
  {
      offset: '70%',
      triggerOnce: true
  });        
  
  $('.milogo2').waypoint(function() {
      $(this).toggleClass( 'rotateIn animated' );
  },
  {
      offset: '100%',
      triggerOnce: true
  });        
});
