// Variables globales
let confettiInterval;
let velasSopladas = false;

// Verificar contraseña
function verificarPassword() {
    const input = document.getElementById('password-input');
    const password = input.value.trim().toUpperCase();
    const errorMsg = document.getElementById('error-message');
    
    if (password === 'BBSAURIO') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        crearConfeti();
        iniciarConfettiContinuo();
    } else {
        input.classList.add('error');
        errorMsg.classList.add('show');
        
        setTimeout(() => {
            input.classList.remove('error');
            errorMsg.classList.remove('show');
        }, 2000);
    }
}

// Permitir Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('password-input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verificarPassword();
            }
        });
        
        // Focus automático en el input
        input.focus();
    }
});

// Crear confeti
function crearConfeti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#ff9ff3', '#54a0ff'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(confetti);
        
        // Eliminar confeti después de la animación
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Iniciar confeti continuo
function iniciarConfettiContinuo() {
    confettiInterval = setInterval(crearConfeti, 5000);
}

// Soplar velas (cambiar pastel)
function soplarVelas() {
    const cake = document.getElementById('cake');
    if (!velasSopladas) {
        cake.textContent = '🍰';
        cake.style.animation = 'none';
        setTimeout(() => {
            cake.style.animation = 'float 3s ease-in-out infinite';
        }, 100);
        velasSopladas = true;
        crearConfeti();
        
        // Volver a poner las velas después de 3 segundos
        setTimeout(() => {
            cake.textContent = '🎂';
            velasSopladas = false;
        }, 3000);
    }
}

// Explotar globo
function explotarGlobo(globo) {
    globo.classList.add('popped');
    crearConfeti();
    
    // Restaurar el globo después de 2 segundos
    setTimeout(() => {
        globo.classList.remove('popped');
        globo.style.display = 'inline-block';
    }, 2000);
}

// Mostrar video
function mostrarVideo() {
    const videoSection = document.getElementById('video-section');
    videoSection.classList.remove('hidden');
    videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    crearConfeti();
}

// Mostrar deseos
function mostrarDeseos() {
    const deseos = document.getElementById('deseos');
    const videoButton = document.getElementById('video-button');
    deseos.classList.remove('hidden');
    deseos.scrollIntoView({ behavior: 'smooth', block: 'center' });
    crearConfeti();
    
    // Mostrar el botón del video después de mostrar los deseos
    setTimeout(() => {
        videoButton.style.display = 'inline-flex';
    }, 500);
}

// Abrir regalo
let regalosAbiertos = [];

function abrirRegalo(elemento, index) {
    // Evitar abrir el mismo regalo dos veces
    if (regalosAbiertos.includes(index)) return;
    
    const giftWrap = elemento.querySelector('.gift-wrap');
    const giftContent = elemento.querySelector('.gift-content');
    
    // Animar el desenvolvimiento
    giftWrap.classList.add('unwrapping');
    
    // Crear confeti
    crearConfeti();
    
    // Después de la animación, mostrar el contenido
    setTimeout(() => {
        giftWrap.style.display = 'none';
        giftContent.classList.remove('hidden');
        giftContent.classList.add('show');
        regalosAbiertos.push(index);
    }, 800);
}

// Pausar video cuando se hace scroll fuera de la vista (opcional)
// COMENTADO: Para que el video no se pause al hacer scroll
/*
window.addEventListener('scroll', function() {
    const video = document.getElementById('video-cumpleanos');
    if (video && !isElementInViewport(video)) {
        video.pause();
    }
});

// Función auxiliar para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
*/
