
const wrapper = document.getElementById('avatar-wrapper');
const container = document.getElementById('avatar-container');
const vdo = document.getElementById('avatar-video');
const img = document.getElementById('avatar-static');
const overlay = document.getElementById('overlay');

// Dados dos Modais
const info = {
    ux: { 
        t: 'Meus Projetos UX', 
        d: `
            <div style="display: grid; gap: 2px; margin-top: 20px;">
                <div class="projeto-card">
                    <strong>App de Treilers de filmes, séries e animes</strong>
                    <p>Estudo de caso focado em sociabilidade e lazer.</p>
                    <a href="estudo_caso_appclaquette.html" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
                <div class="projeto-card">
                    <strong>Aplicativo de Desenvolvimento Pessoal</strong>
                    <p>Mockup de aplicativo de gerenciamento de tarefas com foco em micro-tarefas e gamificação.</p>
                    <a href="index_project_over_power.html" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div style="display: grid; gap: 2px; margin-top: 10px;">
            <div class="projeto-card">
                <strong>App de Finanças</strong>
                <p>Estudo de caso focado em acessibilidade.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div class="projeto-card">
                <strong>E-commerce Retro</strong>
                <p>Interface pixel-art para loja de games.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
        </div>
        ` 
    },
    full: { 
        t: 'Meus Projetos Full-stack', 
        d: `
            <div style="display: grid; gap: 2px; margin-top: 20px;">
                <div class="projeto-card">
                    <strong>App de Finanças</strong>
                    <p>Estudo de caso focado em acessibilidade.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
                <div class="projeto-card">
                    <strong>E-commerce Retro</strong>
                    <p>Interface pixel-art para loja de games.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div style="display: grid; gap: 2px; margin-top: 10px;">
            <div class="projeto-card">
                <strong>App de Finanças</strong>
                <p>Estudo de caso focado em acessibilidade.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div class="projeto-card">
                <strong>E-commerce Retro</strong>
                <p>Interface pixel-art para loja de games.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
        </div>
        ` 
    },
    arq: { 
        t: 'Meus conhecimentos de Arquitetura de Software', 
        d: `
            <div style="display: grid; gap: 2px; margin-top: 20px;">
                <div class="projeto-card">
                    <strong>App de Finanças</strong>
                    <p>Estudo de caso focado em acessibilidade.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
                <div class="projeto-card">
                    <strong>E-commerce Retro</strong>
                    <p>Interface pixel-art para loja de games.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div style="display: grid; gap: 2px; margin-top: 10px;">
            <div class="projeto-card">
                <strong>App de Finanças</strong>
                <p>Estudo de caso focado em acessibilidade.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div class="projeto-card">
                <strong>E-commerce Retro</strong>
                <p>Interface pixel-art para loja de games.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
        </div>
        ` 
    },
    management: { 
        t: 'Meus Project Management', 
        d: `
            <div style="display: grid; gap: 2px; margin-top: 20px;">
                <div class="projeto-card">
                    <strong>Projeto de Extensão</strong>
                    <p>Projeto de Extensão baseado no ensino prático de programação web para alunos da rede pública.</p>
                    <a href="index_project_management.html" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
                <div class="projeto-card">
                    <strong>E-commerce Retro</strong>
                    <p>Interface pixel-art para loja de games.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div style="display: grid; gap: 2px; margin-top: 10px;">
            <div class="projeto-card">
                <strong>App de Finanças</strong>
                <p>Estudo de caso focado em acessibilidade.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
            <div class="projeto-card">
                <strong>E-commerce Retro</strong>
                <p>Interface pixel-art para loja de games.</p>
                <a href="#" class="btn" style="display:inline-block; margin-top:5px;">Ver Case</a>
        </div>
        ` 
    },
    video: {
        t: 'Vídeo de Apresentação', 
        d: `
    <div class="sidebar-video-container video-expande-plus">
        <video controls autoplay style="width:100%; display:block;">
            <source src="midias/video_de_apresentacao.mp4" type="video/mp4">
            Seu navegador não suporta vídeos.
        </video>
        <div class="video-hint">JN TITO NETO - PORTFOLIO 2026</div>
    </div>
    <p style="margin-top:15px; font-size:0.9rem; line-height:1.4;">
        Assista a uma breve introdução sobre minha trajetória e visão como desenvolvedor.
    </p>
`
},
    chat: { 
        t: 'Simulação de IA',
        d: `
    <div class="chat-container">
        <div class="chat-messages" id="chat-box">
            <div class="message-ai">Olá! Eu sou a IA do JN Tito Neto. Como posso ajudar?</div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="user-input" class="chat-input" placeholder="Digite algo...">
            <button class="chat-send-btn" onclick="enviarMensagem()">ENVIAR</button>
        </div>
    </div>
`
},
    game: { 
        t: 'Desafio Ping Pong',
        d: `
        <div class="game-wrapper" style="position: relative; width: 100%; display: flex; flex-direction: column; align-items: center;">

            <div id="game-alert" class="bubble" style="position: absolute; top: 110px; left: 50%; transform: translateX(-50%); z-index: 9999; width: 90%; text-align: center; border: 3px solid var(--accent-casual); background: var(--bg-page); display: block !important; opacity: 1 !important; pointer-events: all !important; box-shadow: 10px 10px 0px var(--glass-border);">
                 <span onclick="fecharAlertaJogo()" style="position:absolute; top:5px; right:12px; cursor:pointer; font-family:'Press Start 2P'; font-size:12px;">&times;</span>
                 <h4 style="font-family:'Press Start 2P'; font-size: 0.7rem; color: var(--accent-casual); margin-bottom: 10px; margin-top: 10px;">⚠️ CONTRATO DE RISCO</h4>
                 <p style="font-family:'VT323'; font-size: 1.2rem; margin: 10px 15px; line-height: 1.2;">
                    Se você <strong>perder</strong> para mim, o contrato é claro: <strong>VOCÊ ME CONTRATA!</strong> Fechado?
                </p>
                <button class="btn" style="background: var(--accent-casual); color: #000; margin-bottom: 15px; width: auto;" onclick="fecharAlertaJogo()">ACEITO O DESAFIO!</button>
            </div>

            <div class="score-board" id="scoreBoard" style="margin-bottom: 10px;">00 : 00</div>
            <canvas id="pingPong" width="500" height="300" style="max-width: 100%; border: 3px solid var(--glass-border); background: #000;"></canvas>

            <div id="ranking-container" style="margin-top:20px; border:3px solid var(--glass-border); padding:15px; width:100%; border-radius:12px; background: var(--glass); box-shadow: var(--shadow);">
                <h4 style="font-family:'Press Start 2P'; font-size:0.6rem; margin-bottom:10px;">🏆 TOP 3 VENCEDORES</h4>
                <ol id="ranking-list" style="font-family:'VT323'; font-size:1.3rem; text-align:left; list-style-position:inside;"></ol>
            </div>
        </div>`
},   
    welcome: { 
        t: 'Bem-vindo! <i class="fas fa-microphone mic-icon" onclick="tocarAudio(\'welcome\')"></i>', 
        d: 'Olá, eu sou o Tito! Explore meu portfólio navegando pelos menus.' 
    },
    pro: { 
        t: 'Profissional <i class="fas fa-microphone mic-icon" onclick="tocarAudio(\'pro\')"></i>', 
        d: 'Engenharia de Software e UX Design. Clique nos botões para saber mais.' 
    },
    casual: { 
        t: 'Casual <i class="fas fa-microphone mic-icon" onclick="tocarAudio(\'casual\')"></i>', 
        d: 'Aqui você encontra meus projetos de jogos e interações criativas.' 
},   
};

function mover(destino) {
    document.querySelectorAll('.bubble').forEach(b => b.classList.remove('visible'));
    img.style.opacity = "0";
    vdo.style.opacity = "1";
    vdo.play();

    if (destino === 'pro') {
        container.classList.add('olhar-esquerda');
        wrapper.style.left = "18%";
        setTimeout(() => parar('panel-pro'), 1500);
    } else {
        container.classList.remove('olhar-esquerda');
        wrapper.style.left = "82%";
        setTimeout(() => parar('panel-casual'), 1500);
    }
}

function parar(id) {
    vdo.pause(); vdo.style.opacity = "0"; img.style.opacity = "1";
    if(id) document.getElementById(id).classList.add('visible');
}

function voltar() {
    document.querySelectorAll('.bubble').forEach(b => b.classList.remove('visible'));
    img.style.opacity = "0"; vdo.style.opacity = "1"; vdo.play();
    
    if (wrapper.style.left === "18%") container.classList.remove('olhar-esquerda');
    else container.classList.add('olhar-esquerda');

    wrapper.style.left = "50%";
    setTimeout(() => { parar('main-menu'); container.classList.remove('olhar-esquerda'); }, 1500);
}

function abrirModal(tipo) {
    document.getElementById('modal-text').innerHTML = `<h3>${info[tipo].t}</h3><p>${info[tipo].d}</p>`;
    overlay.style.display = 'flex';
}

function fecharModal(e) {
    // Verifica se o usuário clicou fora da caixa ou no botão de fechar (X)
    if (e.target === overlay || e.target.className === 'close-modal') {
        
        // 1. Busca qualquer vídeo que esteja dentro do modal
        const videoElement = overlay.querySelector('video');
        
        // 2. Se encontrar um vídeo, pausa a reprodução
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0; // Opcional: Reseta o vídeo para o início
        }

        // 3. Limpa o conteúdo interno para garantir que processos (como o jogo) parem
        document.getElementById('modal-text').innerHTML = "";
        
        // 4. Esconde o modal
        overlay.style.display = 'none';
    }
}

function toggleTheme() {
    const b = document.body;
    const isDark = b.getAttribute('data-theme') === 'dark';
    b.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.querySelector('.theme-toggle').innerHTML = isDark ? '🌙' : '☀️';
}

function abrirModal(tipo) {
    // Injeta o conteúdo do objeto 'info'
    document.getElementById('modal-text').innerHTML = `<h3>${info[tipo].t}</h3><div>${info[tipo].d}</div>`;
    overlay.style.display = 'flex';
    
    // AJUSTE: Se o modal for o de jogo, inicia o script do canvas
    if (tipo === 'game') {
        setTimeout(iniciarPingPong, 100); 
    }
}
// 2. Funções de Movimento
function mover(destino) {
document.querySelectorAll('.bubble').forEach(b => b.classList.remove('visible'));
img.style.opacity = "0";
vdo.style.opacity = "1";
vdo.play();

if (destino === 'pro') {
container.classList.add('olhar-esquerda');
wrapper.style.left = "18%";
setTimeout(() => parar('panel-pro'), 1500);
} else {
container.classList.remove('olhar-esquerda');
wrapper.style.left = "82%";
setTimeout(() => parar('panel-casual'), 1500);
}
}

function parar(id) {
vdo.pause(); vdo.style.opacity = "0"; img.style.opacity = "1";
if(id) document.getElementById(id).classList.add('visible');
}

function voltar() {
// Esconde balões e dá play no vídeo
document.querySelectorAll('.bubble').forEach(b => b.classList.remove('visible'));
img.style.opacity = "0";
vdo.style.opacity = "1";
vdo.play();

// AJUSTE: Verifica a posição para virar o corpo ANTES de andar
const posicaoNoMomento = wrapper.style.left;

if (posicaoNoMomento === "18%") {
container.classList.remove('olhar-esquerda'); // Se está na esquerda, olha p/ direita
} else {
container.classList.add('olhar-esquerda');    // Se está na direita, olha p/ esquerda
}

// AJUSTE: O "pulo do gato" - espera 50ms para virar e SÓ DEPOIS move o left
setTimeout(() => {
wrapper.style.left = "50%";
}, 50);

setTimeout(() => {
parar('main-menu');
container.classList.remove('olhar-esquerda'); // Reseta ao chegar
}, 1550);
}

// 3. Abrir Modal (Ajustado para iniciar o jogo)
function abrirModal(tipo) {
document.getElementById('modal-text').innerHTML = `<h3>${info[tipo].t}</h3><div>${info[tipo].d}</div>`;
overlay.style.display = 'flex';

// SE FOR O JOGO, CHAMA A FUNÇÃO DE INICIALIZAÇÃO
if (tipo === 'game') {
setTimeout(() => {
    iniciarPingPong();
    atualizarRankingVisual(); // Garante que o ranking apareça ao abrir
}, 100);
}
}

function fecharModal(e) {
if (e.target === overlay || e.target.className === 'close-modal') overlay.style.display = 'none';
}

// 4. Lógica do Jogo (Corrigida e Imbatível)
function iniciarPingPong() {
const canvas = document.getElementById('pingPong');
if (!canvas) return;
const ctx = canvas.getContext('2d');

// Cores baseadas nas variáveis CSS
const colorPlayer = "#4ade80"; // Verde Casual
const colorAI = "#38bdf8";     // Azul Pro
const colorLine = "#ffffff";

// Variáveis de Estado
let paddleHeight = 60, paddleWidth = 10;
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = playerY;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSize = 10;
let ballSpeedX = 5, ballSpeedY = 5;
let playerScore = 0, aiScore = 0;
let active = false;
let limiteVitoria = 20;

// --- NOVAS VARIÁVEIS DE FÍSICA ---
let efeitoLinhaReta = false;
let raqueteDividida = false;
let velocidadeBase = 5;

function resetBall() {
ballX = canvas.width / 2;
ballY = canvas.height / 2;
efeitoLinhaReta = false; // Reseta o efeito ao marcar ponto
ballSpeedX = (ballSpeedX > 0 ? -velocidadeBase : velocidadeBase);
ballSpeedY = velocidadeBase * (Math.random() > 0.5 ? 1 : -1);
}
function checarFim() {
if (playerScore >= limiteVitoria || aiScore >= limiteVitoria) {
    active = false;
    let vitoria = playerScore >= limiteVitoria;
    alert(vitoria ? "VITÓRIA EXCEPCIONAL! 🏆" : "GAME OVER! 🤖 O contrato é claro: Me contrate!");
    if (!vitoria) window.location.href = "mailto:titojneto@gmail.com";
    document.getElementById('overlay').style.display = 'none';
}
}
function checarGatilhos() {
let total = playerScore + aiScore;

// A cada 5 pontos: Ativa Linha Reta e Raquete Dividida
if (total % 5 === 0 && total !== 0) {
    efeitoLinhaReta = true;
    raqueteDividida = true;
} else {
    raqueteDividida = false;
}

// A cada 10 pontos: Aumenta a velocidade
if (total % 10 === 0 && total !== 0) {
    velocidadeBase += 2;
}
}

function update() {
if (!active) return;

// Física 1: Linha Reta
if (efeitoLinhaReta) {
    ballX += (ballSpeedX > 0 ? 4 : -12); 
    // ballY não muda, fazendo a bola ir reto
} else {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

// Rebote Paredes
if (!efeitoLinhaReta) {
    if (ballY < 0 || ballY > canvas.height) ballSpeedY *= -1;
}

// IA Imbatível
let aiCenter = aiY + paddleHeight / 2;
if (aiCenter < ballY - 2) aiY += 5.5; 
else if (aiCenter > ballY + 2) aiY -= 5.5;

// Física 2: Colisão Raquete Dividida (Player)
if (ballX < 20 + paddleWidth) {
    let colidiu = false;
    if (raqueteDividida) {
        // Só colide nos 15px de cima ou nos 15px de baixo
        if ((ballY > playerY && ballY < playerY + 15) || (ballY > playerY + 45 && ballY < playerY + 60)) {
            colidiu = true;
        }
    } else {
        if (ballY > playerY && ballY < playerY + paddleHeight) colidiu = true;
    }

    if (colidiu) {
        ballSpeedX = Math.abs(ballSpeedX) + 0.2;
        efeitoLinhaReta = false;
    }
}

// Colisão Raquete IA
if (ballX > canvas.width - 20 - paddleWidth && ballY > aiY && ballY < aiY + paddleHeight) {
    ballSpeedX = -Math.abs(ballSpeedX) - 0.2;
    efeitoLinhaReta = false;
}

// Pontuação
if (ballX < 0) { aiScore++; checarGatilhos(); resetBall(); }
if (ballX > canvas.width) { playerScore++; checarGatilhos(); resetBall(); }

document.getElementById("scoreBoard").textContent = `${playerScore} : ${aiScore}`;
}

function draw() {
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Desenha Raquete Player (Verde)
ctx.fillStyle = colorPlayer;
if (raqueteDividida) {
    ctx.fillRect(10, playerY, paddleWidth, 15);
    ctx.fillRect(10, playerY + 45, paddleWidth, 15);
} else {
    ctx.fillRect(10, playerY, paddleWidth, paddleHeight);
}

// Desenha Raquete IA (Azul)
ctx.fillStyle = colorAI;
ctx.fillRect(canvas.width - 20, aiY, paddleWidth, paddleHeight);

// Desenha Bola
ctx.fillStyle = efeitoLinhaReta ? "#ff0044" : "#ffffff";
ctx.fillRect(ballX - 5, ballY - 5, 10, 10);
}

const loop = setInterval(() => {
const el = document.getElementById('pingPong');
if (el) { update(); draw(); } else { clearInterval(loop); }
}, 1000 / 60);

canvas.addEventListener("mousemove", e => {
let rect = canvas.getBoundingClientRect();
playerY = e.clientY - rect.top - paddleHeight / 2;
});
canvas.addEventListener("mouseenter", () => active = true);
canvas.addEventListener("mouseleave", () => active = false);
}
// Função para carregar e exibir o ranking
function atualizarRankingVisual() {
const listElement = document.getElementById('ranking-list');
if (!listElement) return;

// Recupera do localStorage ou cria um array vazio
const ranking = JSON.parse(localStorage.getItem('pingPongRanking')) || [];

// Limpa a lista e preenche com os 3 primeiros
listElement.innerHTML = "";
ranking.slice(0, 3).forEach((nome, index) => {
listElement.innerHTML += `<li>${index + 1}º - ${nome}</li>`;
});

if (ranking.length === 0) listElement.innerHTML = "<li>Ainda sem vencedores...</li>";
}

// Função para salvar um novo vencedor
function salvarVencedor() {
let nome = prompt("INCRÍVEL! Você venceu a IA! Digite seu primeiro nome para o Ranking:");

if (nome) {
nome = nome.split(" ")[0].toUpperCase(); // Pega apenas o primeiro nome e deixa em caixa alta
let ranking = JSON.parse(localStorage.getItem('pingPongRanking')) || [];

ranking.push(nome); // Adiciona o novo vencedor
localStorage.setItem('pingPongRanking', JSON.stringify(ranking)); // Salva

atualizarRankingVisual(); // Atualiza a tela
}
}
// Função para fechar o aviso de aposta e liberar o jogo
function fecharAlertaJogo() {
const alerta = document.getElementById('game-alert');
if (alerta) {
alerta.style.display = 'none';
// O jogo começará assim que o mouse entrar no canvas (lógica que já temos)
}
}

// Modificação na lógica de derrota (IA faz 100 pontos)
// Procure onde está o "if (ballX < 0) { aiScore++;" dentro da função update()
if (ballX < 0) { 
aiScore++; 
resetBall(); 

if (aiScore >= 20) {
active = false;
alert("VOCÊ PERDEU! Conforme o contrato, agora você deve entrar em contato para me contratar! 😉");
window.location.href = "mailto:titojneto@gmail.com"; // Opcional: abre o email direto
}
}
function ajustarEscala() {
const frame = document.querySelector('.viewport-frame');
const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;

// Calcula a escala baseada na largura (1200px é o nosso padrão)
let escala = larguraJanela / 1200;

// Se a altura for o limitador (ex: celular deitado), ajusta pela altura
if (alturaJanela < 675) { // 675 é a altura proporcional de 1200 em 16:9
escala = alturaJanela / 675;
}

// Aplica o zoom apenas se a tela for menor que o nosso quadro ideal
if (escala < 1) {
frame.style.transform = `scale(${escala * 0.95})`; // 0.95 para dar uma margem
} else {
frame.style.transform = `scale(1)`;
}
}
// --- SUPORTE PARA CELULAR (TOUCH) ---

function tratarTouch(e) {
// Impede o comportamento padrão (como scroll)
e.preventDefault();

// Pega as coordenadas do primeiro toque
let touch = e.touches[0];
let rect = canvas.getBoundingClientRect();

// Atualiza a posição da raquete do jogador
playerY = touch.clientY - rect.top - paddleHeight / 2;

// Ativa o jogo se for o primeiro toque
if (!active) active = true;
}

// Adiciona os eventos de toque ao canvas
canvas.addEventListener("touchstart", tratarTouch, { passive: false });
canvas.addEventListener("touchmove", tratarTouch, { passive: false });
canvas.addEventListener("touchend", () => {
// Opcional: manter o jogo ativo ou pausar quando soltar
});

// Escuta o redimensionamento da tela
window.addEventListener('resize', ajustarEscala);
window.addEventListener('load', ajustarEscala);

// Executa ao carregar e ao girar o celular
window.addEventListener('resize', aplicarZoomResponsivo);
window.addEventListener('load', aplicarZoomResponsivo);

function aplicarZoomResponsivo() {
const frame = document.querySelector('.viewport-frame');
if (!frame) return;

const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;

// Definimos a largura e altura "alvo" que queremos que caiba na tela
const larguraAlvo = 1200; // 1100 do frame + 100 de margem
const alturaAlvo = 750;  // 618 do frame + margem para o footer

// Calcula as proporções
const escalaLargura = larguraJanela / larguraAlvo;
const escalaAltura = alturaJanela / alturaAlvo;

// Escolhemos a menor escala para garantir que TUDO apareça na tela
// Removi a trava "if (escalaFinal < 1)" para que ele ajuste em qualquer tela
const escalaFinal = Math.min(escalaLargura, escalaAltura);

// Aplica a escala. Agora o site vai "distanciar" sozinho no celular para caber.
frame.style.transform = `scale(${escalaFinal})`;
}

// Garante que o ajuste ocorra em qualquer mudança
window.addEventListener('resize', aplicarZoomResponsivo);
window.addEventListener('load', aplicarZoomResponsivo);
// Adicionado para celulares quando mudam a orientação
window.addEventListener('orientationchange', () => {
setTimeout(aplicarZoomResponsivo, 200);
});

// Variável para controlar se o usuário quer o zoom real ou o reduzido
let userZoomAtivo = false;

function aplicarZoomResponsivo() {
const frame = document.querySelector('.viewport-frame');
if (!frame || userZoomAtivo) return; // Se o usuário deu zoom manual, não mexe

const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;

const larguraAlvo = 1200; 
const alturaAlvo = 800;  

const escalaLargura = larguraJanela / larguraAlvo;
const escalaAltura = alturaJanela / alturaAlvo;

// ESCOLHA DA ESCALA:
// Multiplicamos por 0.75 para que o palco comece com 75% do tamanho da tela (mais longe)
let escalaFinal = Math.min(escalaLargura, escalaAltura) * 0.75;

frame.style.transform = `scale(${escalaFinal})`;
}

// Função para o usuário clicar e alternar o zoom
document.querySelector('.viewport-frame').addEventListener('click', function() {
userZoomAtivo = !userZoomAtivo;

if (userZoomAtivo) {
this.classList.add('zoom-active');
this.style.transform = `scale(1)`; // Tamanho máximo
} else {
this.classList.remove('zoom-active');
aplicarZoomResponsivo(); // Volta ao tamanho reduzido
}
});

window.addEventListener('resize', aplicarZoomResponsivo);
window.addEventListener('load', aplicarZoomResponsivo);
// FUNÇÃO PARA O ÁUDIO
function tocarAudio(tipo) {
// OPÇÃO A: Se quiser que a voz do Google/Sistema fale o texto:
const mensagens = {
welcome: "",
pro: "Nesta seção você encontra minhas habilidades técnicas e formação em engenharia.",
casual: "Aqui estão meus projetos de games e experimentos de design."
};

const fala = new SpeechSynthesisUtterance(mensagens[tipo]);
fala.lang = 'pt-BR';
fala.rate = 1.1; // Velocidade
window.speechSynthesis.speak(fala);

}

/* Função para fechar o alerta de boas-vindas */
function fecharBoasVindas() {
    const welcome = document.getElementById('welcome-overlay');
    if (welcome) {
        welcome.style.display = 'none';
        
        // Opcional: Tocar o áudio de boas-vindas automaticamente após o clique
        if(typeof tocarAudio === 'function') {
            tocarAudio('welcome');
        }
    }
}

/* O "style="display: flex;" que colocamos no HTML garante que ele 
   apareça assim que a página for carregada ou atualizada (Refresh).
*/