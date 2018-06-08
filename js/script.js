if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
};
window.sr = ScrollReveal();
sr.reveal('.minombre',{
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.mifoto',{
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.midato',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.misocial',{
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onload = function(){
    var contenedor = document.getElementById('contenedor-carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}