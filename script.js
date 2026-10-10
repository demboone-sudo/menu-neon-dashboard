//---Sintetizador de Áudio (web Audio API) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playHoverSound() {
    if (!document.getElementById('sound-toggle').checked) return;
    if (audioCtx.state === 'suspended') 
        audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    // Frequência rápida ascendente para efeito sci-fi
    osc.frequency.setValueAtTime(300, audioCtx.currentTime );
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.8);

    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime +0.08);
}

function playClickSound() {
    if (!document.getElementById('sound-toggle').checked) return;
    if(audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
}

// --- controle de Direção de Animação ---
const menu = document.getElementById('menu');
const animSelect = document.getElementById('anim-dir');

function updateDirection() {
    if (menu && animSelect) {
        menu.className = 'menu dir-' + animSelect.value;
    }    
}

 if (animSelect) {
    animSelect.addEventListener('change', updateDirection);
updateDirection(); // Difine inicial
 }

// --- Eventos do menu ---
const menuItems = document.querySelectorAll('ul.menu li a');

menuItems.forEach((item) =>{
    // Som no hover
    item.addEventListener('mouseenter', playHoverSound);

    // Clique/Ativação
    item.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();

        menuItems.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
    });
});