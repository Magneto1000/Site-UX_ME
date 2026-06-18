// MOTOR INTERATIVO DE ABAS DE NAVEGAÇÃO
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
}

// CONTROLADOR DO MODAL DA IA
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// SCRIPT REATIVO DO CHATBOT DE CONTEXTO
function sendMessage() {
    const input = document.getElementById('user-input');
    const msgText = input.value.trim();
    if (!msgText) return;

    const chatBox = document.getElementById('chat-box');

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
    const q = query.toLowerCase();
    if (q.includes('uup') || q.includes('empresa')) {
        return "A UUP Software Solutions foca em engenharia robusta multiplataforma e otimização de fluxos para mitigar a fricção e carga cognitiva do usuário final.";
    }
    if (q.includes('over power') || q.includes('produtividade')) {
        return "O Over Power é uma solução de gerenciamento comportamental gamificado estruturado através de micro-tarefas e desbloqueio progressivo de zonas.";
    }
    if (q.includes('ux') || q.includes('design')) {
        return "Minha metodologia de design unifica heurísticas de usabilidade com desenvolvimento front-end elástico baseado em layouts matemáticos fluidos.";
    }
    return "Como Engenheiro e UX Designer, estruturei este ecossistema dinâmico para aliar estética de alto nível e performance. O que gostaria de analisar na minha stack?";
}