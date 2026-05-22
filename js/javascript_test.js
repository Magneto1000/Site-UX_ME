// Seleção dos Nós do Core da Camada Principal
const wrapper = document.getElementById('avatar-wrapper');
const container = document.getElementById('avatar-container');
const img = document.getElementById('avatar-static');
const overlay = document.getElementById('overlay');

// Repositório de Dados dos Modais (Injeção Segura e Limpa)
const info = {
    ux: { 
        t: 'Habilidades UX DESIGNER', 
        d: `
            <div style="display: grid; gap: 12px; margin-top: 10px;">
                <div class="projeto-card">
                    <strong>Estudo de caso: App de Trailers de filmes, séries e animes</strong>
                    <p>Estudo de caso focado em sociabilidade, praticidade e lazer (Projeto Claquette).</p>
                    <a href="pages/estudo_caso_appclaquette.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Case</a>
                </div>
                <div class="projeto-card">
                    <strong>Aplicativo de Desenvolvimento Pessoal</strong>
                    <p>Mockup de gerenciamento de tarefas com foco em micro-tarefas e gamificação (Project Over Power).</p>
                    <a href="pages/index_project_over_power.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
                <div class="projeto-card">
                    <strong>Projeto UX Design para jovens</strong>
                    <p>Estudo de caso focado em acessibilidade e inclusão social.</p>
                    <a href="pages/index_projetoux_social.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
                <div class="projeto-card">
                    <strong>Minhas criações (Sites, app e inspirações)</strong>
                    <p>Interfaces projetadas no Figma e codadas de forma responsiva.</p>
                    <a href="pages/sites_projects.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
            </div>
        ` 
    },
    full: { 
        t: 'Habilidades Full-stack', 
        d: `
            <div style="display: grid; gap: 12px; margin-top: 10px;">
                <div class="projeto-card">
                    <strong>Python & APIs</strong>
                    <p>Explorando o ecossistema de Python, automações e integrações inteligentes.</p>
                    <a href="pages/estudo_python.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
                <div class="projeto-card">
                    <strong>E-commerce Retro</strong>
                    <p>Interface pixel-art integrada com regras de banco de dados SQL e manipulação de carrinho.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
                <div class="projeto-card">
                    <strong>App de Finanças</strong>
                    <p>Sistema de controle de entradas e saídas construído em JavaScript e PHP.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Status</a>
                </div>
            </div>
        ` 
    },
    arq: { 
        t: 'Arquitetura de Software', 
        d: `
            <div style="display: grid; gap: 12px; margin-top: 10px;">
                <div class="projeto-card">
                    <strong>Padronização de Projetos</strong>
                    <p>Modelagem de systems utilizando padrões de projeto e visões de arquitetura de software.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Case</a>
                </div>
                <div class="projeto-card">
                    <strong>Estruturação Cloud & Microserviços</strong>
                    <p>Visão sistêmica de barramentos de mensageria e separação de escopo técnico de APIs.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Case</a>
                </div>
            </div>
        ` 
    },
    management: { 
        t: 'Project Management', 
        d: `
            <div style="display: grid; gap: 12px; margin-top: 10px;">
                <div class="projeto-card">
                    <strong>Projeto de Extensão Acadêmica</strong>
                    <p>Liderança e gerenciamento do workshop prático de programação web para alunos da rede pública de CIEP.</p>
                    <a href="pages/index_project_management.html" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Case</a>
                </div>
                <div class="projeto-card">
                    <strong>Metodologias Ágeis</strong>
                    <p>Aplicação prática de Scrum e Kanban para otimizar entregas e manter a consistência técnica.</p>
                    <a href="#" class="btn" style="display:inline-block; margin-top:5px; text-decoration:none;">Ver Case</a>
                </div>
            </div>
        ` 
    },
    video: {
        t: 'Vídeo de Apresentação', 
        d: `
            <div class="sidebar-video-container">
                <video controls autoplay>
                    <source src="midias/video_de_apresentacao.mp4" type="video/mp4">
                    Seu navegador não suporta vídeos.
                </video>
                <div class="video-hint">JN TITO NETO - PORTFOLIO 2026</div>
            </div>
        `
    },
    chat: { 
        t: 'Vamos bater um papo?',
        d: `
            <div class="chat-container" id="chat-container-id">
                <div class="chat-messages" id="chat-box">
                <div class="chat-mobile-header">
                    <span class="chat-mobile-close" onclick="fecharModal(null)">&times; RETORNAR</span>
                </div>
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
            <div class="game-wrapper" style="position: relative; width: 100%;">
                <div id="game-alert" class="bubble-dialogo" style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); z-index: 9999; width: 90%; box-shadow: 6px 6px 0px #000;">
                     <span onclick="fecharAlertaJogo()" style="position:absolute; top:5px; right:12px; cursor:pointer; font-family:'Press Start 2P'; font-size:12px;">&times;</span>
                     <h4 style="font-family:'Press Start 2P'; font-size: 0.65rem; color: var(--accent-casual); margin-bottom: 8px;">⚠️ CONTRATO DE RISCO</h4>
                     <p style="font-size: 1.1rem; margin-bottom: 10px; line-height: 1.2;">
                        Se você <strong>perder</strong> para mim, o contrato é claro: <strong>VOCÊ ME CONTRATA!</strong> Fechado?
                     </p>
                    <button class="btn" style="background: var(--accent-casual); color: #000; text-align:center;" onclick="fecharAlertaJogo()">ACEITO O DESAFIO!</button>
                </div>
                <div class="score-board" id="scoreBoard" style="text-align:center;">00 : 00</div>
                <canvas id="pingPong" width="500" height="300"></canvas>
                <div id="ranking-container" style="margin-top:15px; border:2px dashed var(--glass-border); padding:10px; border-radius:12px; background: var(--glass);">
                    <h4 style="font-family:'Press Start 2P'; font-size:0.55rem; margin-bottom:5px;">🏆 TOP 3 VENCEDORES</h4>
                    <ol id="ranking-list" style="font-size:1.1rem; list-style-position:inside; padding-left:5px;"></ol>
                </div>
            </div>`
    }
};

// ==========================================
// OPERAÇÃO FÍSICA DE TRANSLADO DE CAMADAS 3D
// ==========================================
function mudarFoco(destino) {
    const quadroPro = document.getElementById('quadro-pro');
    const quadroCasual = document.getElementById('quadro-casual');
    const camadaAvatar = document.getElementById('camada-avatar');

    // Executa o feedback sonoro de navegação
    if (destino === 'pro') {
        const audioPro = document.getElementById('audio-pro');
        if (audioPro) audioPro.play().catch(() => {});
    } else {
        const audioCasual = document.getElementById('audio-casual');
        if (audioCasual) audioCasual.play().catch(() => {});
    }

    if (destino === 'pro') {
        // Quadro Profissional ganha o 1º Plano centralizado
        quadroPro.className = "quadro-flutuante plano-frente quadro-centralizado-pro";
        
        // Avatar vai para o 2º Plano recuado para a direita da tela
        camadaAvatar.className = "quadro-avatar plano-fundo";
        camadaAvatar.style.left = "80%";
        
        // Quadro oposto vai para o 3º Plano de desfoque máximo
        quadroCasual.className = "quadro-flutuante plano-afastado";
    } else {
        // Quadro Casual ganha o 1º Plano centralizado
        quadroCasual.className = "quadro-flutuante plano-frente quadro-centralizado-casual";
        
        // Avatar vai para o 2º Plano recuado para a esquerda da tela
        camadaAvatar.className = "quadro-avatar plano-fundo";
        camadaAvatar.style.left = "20%";
        
        // Quadro oposto vai para o 3º Plano de desfoque máximo
        quadroPro.className = "quadro-flutuante plano-afastado";
    }
}

function resetarFoco() {
    const quadroPro = document.getElementById('quadro-pro');
    const quadroCasual = document.getElementById('quadro-casual');
    const camadaAvatar = document.getElementById('camada-avatar');

    // Devolve o avatar para o 1º plano focado na posição centralizada original
    camadaAvatar.style.left = "50%";
    camadaAvatar.className = "quadro-avatar plano-frente";
    
    // Retorna os painéis laterais de habilidades para suas posições de repouso desfocadas
    quadroPro.className = "quadro-flutuante plano-fundo";
    quadroCasual.className = "quadro-flutuante plano-fundo";
}

// ==========================================
// REGRAS INTERNAS DOS MODAIS E CHAT
// ==========================================
function abrirModal(tipo) {
    document.getElementById('modal-text').innerHTML = `<h3>${info[tipo].t}</h3><div>${info[tipo].d}</div>`;
    overlay.style.display = 'flex';
    
    if (tipo === 'chat' && window.innerWidth <= 768) {
        const chatContainer = document.getElementById('chat-container-id');
        if (chatContainer) chatContainer.classList.add('janela-ia-mobile-fs');
    }

    if (tipo === 'game') {
        setTimeout(() => {
            iniciarPingPong();
            atualizarRankingVisual();
        }, 120);
    }
}

function fecharModal(e) {
    if (!e || e.target === overlay || e.target.className === 'close-modal') {
        const videoElement = overlay.querySelector('video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        document.getElementById('modal-text').innerHTML = "";
        overlay.style.display = 'none';
    }
}

function toggleTheme() {
    const b = document.body;
    const isDark = b.getAttribute('data-theme') === 'dark';
    b.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

// ==========================================
// MOTOR DO JOGO PING PONG
// ==========================================
function iniciarPingPong() {
    const canvas = document.getElementById('pingPong');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const colorPlayer = "#4ade80"; 
    const colorAI = "#38bdf8"; 
    let paddleHeight = 60, paddleWidth = 10;
    let playerY = canvas.height / 2 - paddleHeight / 2;
    let aiY = playerY;
    let ballX = canvas.width / 2, ballY = canvas.height / 2;
    let ballSpeedX = 5, ballSpeedY = 5;
    let playerScore = 0, aiScore = 0;
    let active = false;
    let limiteVitoria = 20;

    let efeitoLinhaReta = false;
    let raqueteDividida = false;
    let velocidadeBase = 5;

    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        efeitoLinhaReta = false;
        ballSpeedX = (ballSpeedX > 0 ? -velocidadeBase : velocidadeBase);
        ballSpeedY = velocidadeBase * (Math.random() > 0.5 ? 1 : -1);
    }

    function checarFim() {
        if (playerScore >= limiteVitoria || aiScore >= limiteVitoria) {
            active = false;
            clearInterval(gameLoop);
            let vitoria = playerScore >= limiteVitoria;
            alert(vitoria ? "VITÓRIA EXCEPCIONAL! 🏆" : "GAME OVER! 🤖 O contrato é claro: Me contrate!");
            if (!vitoria) window.location.href = "mailto:titojneto@gmail.com";
            fecharModal(null);
        }
    }

    function checarGatilhos() {
        let total = playerScore + aiScore;
        if (total % 5 === 0 && total !== 0) {
            efeitoLinhaReta = true;
            raqueteDividida = true;
        } else {
            raqueteDividida = false;
        }
        if (total % 10 === 0 && total !== 0) {
            velocidadeBase += 2;
        }
    }

    function update() {
        if (!active) return;

        if (efeitoLinhaReta) {
            ballX += (ballSpeedX > 0 ? 4 : -12); 
        } else {
            ballX += ballSpeedX;
            ballY += ballSpeedY;
        }

        if (!efeitoLinhaReta) {
            if (ballY < 0 || ballY > canvas.height) ballSpeedY *= -1;
        }

        let aiCenter = aiY + paddleHeight / 2;
        if (aiCenter < ballY - 2) aiY += 5.5; 
        else if (aiCenter > ballY + 2) aiY -= 5.5;

        if (ballX < 20 + paddleWidth) {
            let colidiu = false;
            if (raqueteDividida) {
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

        if (ballX > canvas.width - 20 - paddleWidth && ballY > aiY && ballY < aiY + paddleHeight) {
            ballSpeedX = -Math.abs(ballSpeedX) - 0.2;
            efeitoLinhaReta = false;
        }

        if (ballX < 0) { 
            aiScore++; 
            checarGatilhos(); 
            resetBall(); 
            checarFim();
        }
        if (ballX > canvas.width) { 
            playerScore++; 
            checarGatilhos(); 
            resetBall(); 
            checarFim();
            if (playerScore >= limiteVitoria) salvarVencedor();
        }

        const scoreEl = document.getElementById("scoreBoard");
        if(scoreEl) scoreEl.textContent = `${playerScore} : ${aiScore}`;
    }

    function draw() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colorPlayer;
        if (raqueteDividida) {
            ctx.fillRect(10, playerY, paddleWidth, 15);
            ctx.fillRect(10, playerY + 45, paddleWidth, 15);
        } else {
            ctx.fillRect(10, playerY, paddleWidth, paddleHeight);
        }

        ctx.fillStyle = colorAI;
        ctx.fillRect(canvas.width - 20, aiY, paddleWidth, paddleHeight);

        ctx.fillStyle = efeitoLinhaReta ? "#ff0044" : "#ffffff";
        ctx.fillRect(ballX - 5, ballY - 5, 10, 10);
    }

    const gameLoop = setInterval(() => {
        const el = document.getElementById('pingPong');
        if (el) { update(); draw(); } else { clearInterval(gameLoop); }
    }, 1000 / 60);

    canvas.addEventListener("mousemove", e => {
        let rect = canvas.getBoundingClientRect();
        playerY = e.clientY - rect.top - paddleHeight / 2;
    });

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        active = true;
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        let touch = e.touches[0];
        let rect = canvas.getBoundingClientRect();
        playerY = touch.clientY - rect.top - paddleHeight / 2;
    }, { passive: false });

    canvas.addEventListener("mouseenter", () => active = true);
    canvas.addEventListener("mouseleave", () => active = false);
}

function atualizarRankingVisual() {
    const listElement = document.getElementById('ranking-list');
    if (!listElement) return;
    const ranking = JSON.parse(localStorage.getItem('pingPongRanking')) || [];
    listElement.innerHTML = "";
    ranking.slice(0, 3).forEach((nome, index) => {
        listElement.innerHTML += `<li>${index + 1}º - ${nome}</li>`;
    });
    if (ranking.length === 0) listElement.innerHTML = "<li>Ainda sem vencedores...</li>";
}

function salvarVencedor() {
    let nome = prompt("INCRÍVEL! Você venceu a IA! Digite seu nome:");
    if (nome) {
        nome = nome.split(" ")[0].toUpperCase();
        let ranking = JSON.parse(localStorage.getItem('pingPongRanking')) || [];
        ranking.push(nome);
        localStorage.setItem('pingPongRanking', JSON.stringify(ranking));
        atualizarRankingVisual();
    }
}

function fecharAlertaJogo() {
    const alerta = document.getElementById('game-alert');
    if (alerta) alerta.style.display = 'none';
}

// ==========================================
// INICIALIZAÇÃO E EVENTOS DE SESSÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup-zoom");
    const btnFechar = document.getElementById("btn-fechar-popup");

    const audioWelcome = document.getElementById('audio-welcome');
    if (audioWelcome) {
        document.body.addEventListener('click', () => {
            if(audioWelcome.paused && !sessionStorage.getItem("welcomePlayed")) {
                audioWelcome.play().catch(() => {});
                sessionStorage.setItem("welcomePlayed", "true");
            }
        }, { once: true });
    }

    if (popup && btnFechar) {
        if (!sessionStorage.getItem("popupExibido")) {
            popup.style.display = "flex";
        }
        btnFechar.addEventListener("click", function() {
            popup.style.display = "none";
            sessionStorage.setItem("popupExibido", "true");
        });
    }
});