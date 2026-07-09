// ==========================================================
// 1. MOTOR INTERATIVO DE ABAS DE NAVEGAÇÃO
// ==========================================================
// ONDE: Substitua a função switchTab antiga (geralmente no topo do arquivo) por esta

function switchTab(event, tabId) {
    // Remove o estado ativo de todos os botões de abas
    const triggers = document.querySelectorAll('.tab-trigger');
    triggers.forEach(trigger => trigger.classList.remove('active'));

    // Remove a visualização de todos os conteúdos de abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-content'));

    // Ativa a aba e o conteúdo selecionado
    event.currentTarget.classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active-content');

    // UX MOBILE: Fecha o menu hambúrguer automaticamente após o clique do usuário
    const nav = document.querySelector('.tabs-navigation');
    const toggle = document.querySelector('.menu-toggle');
    if (nav && toggle) {
        nav.classList.remove('mobile-open');
        toggle.classList.remove('open');
    }
}
// ONDE: Cole logo abaixo da função switchTab para controlar o clique do hambúrguer

function toggleMobileMenu() {
    const nav = document.querySelector('.tabs-navigation');
    const toggle = document.querySelector('.menu-toggle');
    
    if (nav && toggle) {
        nav.classList.toggle('mobile-open');
        toggle.classList.toggle('open');
    }
}
// ==========================================================
// 2. CONTROLADOR DOS MODAIS GERAIS DA INTERFACE
// ==========================================================
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// ==========================================================
// 3. SCRIPT REATIVO DO CHATBOT DE CONTEXTO
// ==========================================================
function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (!input || !chatBox) return;
    const msgText = input.value.trim();
    if (!msgText) return;

    // Cria e insere balão do usuário
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user-msg';
    userDiv.innerText = msgText;
    chatBox.appendChild(userDiv);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'msg ai-msg';
        aiDiv.innerText = processarIA(msgText);
        chatBox.appendChild(aiDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 450);
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function processarIA(query) {
    if (typeof buscarRespostaIA === 'function') {
        return buscarRespostaIA(query); 
    } else {
        console.error("Erro: A função buscarRespostaIA não foi encontrada. Verifique a ordem dos scripts no HTML.");
        return "Desculpe, meu banco de respostas externo não foi carregado corretamente.";
    }
}

// ==========================================================
// 4. ARQUITETURA DE DADOS (PILARES UUP & PROJETOS LABS)
// ==========================================================
const databaseProjetos = {
    // --- PILARES EXCLUSIVOS: UUP SOFTWARE SOLUTIONS ---
    'uup-cognitiva': {
        icon: '🧠',
        title: 'Carga Cognitiva Mínima',
        tech: ['UI/UX Design', 'Cognitive Psychology', 'Conversion Rate Optimization (CRO)', 'Figma'],
        description: 'Abordagem focada em engenharia de usabilidade para mitigar o esforço mental do usuário final. Através do mapeamento de fluxos simplificados, arquitetura de informação limpa e sistemas de checkouts preditivos, removemos barreiras de decisão, convertendo fluxos complexos em experiências intuitivas de alta conversão.',
        link: 'https://github.com/Magneto1000'
    },
    'uup-liquido': {
        icon: '💧',
        title: 'Design Líquido & Performance',
        tech: ['Software Architecture', 'CSS Grid', 'Flexbox', 'Frontend Optimization'],
        description: 'Desenvolvimento de interfaces adaptáveis construídas rigorosamente sobre estruturas fluidas de Grid e Flexbox. Os ecossistemas são projetados para garantir renderização de altíssima velocidade (carregamento instantâneo), eliminando gargalos de processamento gráfico e operando perfeitamente em qualquer dispositivo ou limitação de hardware.',
        link: 'https://github.com/Magneto1000'
    },

    // --- PROJETOS E JOGOS: LABS & GAMES ---
    'magman': {
        icon: '🧲',
        title: 'Magman',
        tech: ['JavaScript', 'HTML5 Canvas', 'Game Design'],
        description: 'Um jogo de exploração lógica para navegadores focado em mecânicas magnéticas. O jogador controla campos de atração e repulsão para solucionar quebra-cabeças em cenários espaciais e coletar minerais raros.',
        link: 'pages/estudo_caso_appclaquette.html'
    },
    'projeto-exemplo': {
        icon: '🎮',
        title: 'Over Power App',
        tech: ['Vue.js', 'Node.js', 'Tailwind'],
        description: 'Uma aplicação web focada em produtividade gamificada. Transforma rotinas de desenvolvimento e estudos em missões com desbloqueio de conquistas, níveis e rastreamento consistente de micro-tarefas.',
        link: 'https://github.com/Magneto1000/overpower'
    }
};

// ==========================================================
// 5. MOTOR DO MODAL DINÂMICO DE DETALHES
// ==========================================================
function openProjectModal(idProjeto) {
    const projeto = databaseProjetos[idProjeto];
    if (!projeto) return; // Segurança caso o ID não exista

    const containerConteudo = document.getElementById('project-modal-content');
    
    // Monta o HTML dinâmico herdando as classes e a estética premium da página
    containerConteudo.innerHTML = `
        <div class="project-modal-header">
            <span style="font-size: 2.5rem;">${projeto.icon}</span>
            <h3 class="project-modal-title">${projeto.title}</h3>
        </div>
        
        <div style="margin-bottom: 20px; display: flex; gap: 8px; flex-wrap: wrap;">
            ${projeto.tech.map(t => `<span class="project-modal-tech-tag">${t}</span>`).join('')}
        </div>
        
        <p class="profile-description" style="font-size: 1rem; margin-bottom: 30px;">
            ${projeto.description}
        </p>
        
        <div class="cta-group">
            <a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-align: center; text-decoration: none;">
                Ver Código no GitHub ➜
            </a>
        </div>
    `;

    // Exibe o modal na tela usando flexbox
    document.getElementById('modal-project-details').style.display = 'flex';
}

function closeProjectModal(event) {
    if (event.target.classList.contains('modal-overlay')) {
        document.getElementById('modal-project-details').style.display = 'none';
    }
}

// ==========================================================
// 6. MOTOR REATIVO DO TEXTO DINÂMICO (TYPEWRITER LOOP)
// ==========================================================
const frasesTypewriter = [
    "Ousadia para sonhar.",
    "Seriedade para projetar.",
    "Criatividade para construir."
];

let indiceFraseAtual = 0;
let indiceLetraAtual = 0;
let estaApagando = false;

function rodarAnimacaoTypewriter() {
    const elementoTexto = document.getElementById("typewriter-text");
    if (!elementoTexto) return; // Segurança caso o elemento suma da tela

    const fraseCompleta = frasesTypewriter[indiceFraseAtual];

    if (!estaApagando) {
        // Digitando: Adiciona uma letra por vez
        elementoTexto.textContent = fraseCompleta.substring(0, indiceLetraAtual + 1);
        indiceLetraAtual++;

        // Verifica se terminou de digitar a frase
        if (indiceLetraAtual === fraseCompleta.length) {
            estaApagando = true;
            // Tempo de espera com a frase estática na tela antes de começar a apagar (2 segundos)
            setTimeout(rodarAnimacaoTypewriter, 2000);
            return;
        }
        // Velocidade da digitação (100ms por letra)
        setTimeout(rodarAnimacaoTypewriter, 100);
    } else {
        // Apagando: Remove uma letra por vez
        elementoTexto.textContent = fraseCompleta.substring(0, indiceLetraAtual - 1);
        indiceLetraAtual--;

        // Verifica se terminou de apagar toda a frase
        if (indiceLetraAtual === 0) {
            estaApagando = false;
            // Avança para a próxima frase da lista (e volta pro zero se chegar no final)
            indiceFraseAtual = (indiceFraseAtual + 1) % frasesTypewriter.length;
            // Pequena pausa antes de começar a digitar a nova frase (500ms)
            setTimeout(rodarAnimacaoTypewriter, 500);
            return;
        }
        // Velocidade ao apagar (50ms por letra - mais rápido para dinâmica de UX)
        setTimeout(rodarAnimacaoTypewriter, 50);
    }
}

// Inicializa a animação assim que a janela do navegador carregar os elementos
window.addEventListener("DOMContentLoaded", rodarAnimacaoTypewriter);