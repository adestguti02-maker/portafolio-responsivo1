// 1. Menú hamburguesa
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  btnMenu.setAttribute('aria-expanded', abierto);
});

// Cerrar el menú al tocar un enlace (en móvil)
menu.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    btnMenu.setAttribute('aria-expanded', 'false');
  });
});

// 2. Tarjetas desplegables
document.querySelectorAll('.btn-detalle').forEach(boton => {
  boton.addEventListener('click', () => {
    const detalle = boton.nextElementSibling;
    const visible = detalle.classList.toggle('visible');
    boton.textContent = visible ? 'Ver menos' : 'Ver más';
    boton.setAttribute('aria-expanded', visible);
  });
});

// 3. Validación del formulario
const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  formulario.querySelectorAll('input, textarea').forEach(campo => {
    const vacio = campo.value.trim() === '';
    const correoMalo = campo.type === 'email' && !campo.value.includes('@');
    if (vacio || correoMalo) {
      campo.classList.add('error');
      valido = false;
    } else {
      campo.classList.remove('error');
    }
  });

  if (valido) {
    respuesta.style.color = 'green';
    respuesta.textContent = '¡Mensaje enviado correctamente!';
    formulario.reset();
  } else {
    respuesta.style.color = '#dc2626';
    respuesta.textContent = 'Revisa los campos marcados en rojo.';
  }
});