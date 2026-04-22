/* ==========================================
   ARQUIVO DE LÓGICA DO CHAT (chat.js)
   ========================================== */

// 1. BANCO DE DADOS DA IA (Amplie aqui facilmente)
const bancoDeRespostas = {
    "formação": "Estou cursando Engenharia de Software (5º período) e fiz cursos como Google Project Management, UX design e Python.",
    "faculdade": "Estou cursando Engenharia de Software (5º período) e fiz cursos como Google Project Management, UX design e Python.",
    "projetos": "Desenvolvi simuladores em Python, a plataforma Clean City e o jogo Magman. Atualmente foco no Over Power.",
    "contato": "Você pode me contatar em titojneto@gmail.com ou pelo LinkedIn e GitHub.",
    "nome": "Meu nome é Tito Neto, mas pode me chamar de John Tyto. Prazer!",
    "idade": "Tenho 33 anos, nasci em Julho 1992.",
    "skills": "Domino HTML, CSS, JavaScript, Python, UX Design e Gestão de Projetos.",
    "oi": "Oi! Tudo bem? Eu sou a IA do Tito. Pergunte-me sobre meus projetos ou formação!",
    "olá": "Oi! Tudo bem? Eu sou a IA do Tito. Pergunte-me sobre meus projetos ou formação!",
    "ajuda": "Você pode perguntar sobre 'projetos', 'formação', 'contato' ou 'hobbies'.",
    "Habilidades sociais": "Tenho muitas, só tenho isso a dizer!",
    
    // ADICIONE NOVAS CHAVES AQUI ABAIXO:
    "xadrez": "Sou um grande entusiasta de xadrez! Adoro analisar aberturas e táticas.",
};

// 2. FUNÇÃO PRINCIPAL DE ENVIO
function enviarMensagem() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (!input || !chatBox || input.value.trim() === "") return;

    const mensagemUsuario = input.value.toLowerCase();
    
    // Renderiza mensagem do usuário
    const userDiv = document.createElement('div');
    userDiv.style.alignSelf = 'flex-end';
    userDiv.style.color = 'var(--text-main)';
    userDiv.style.marginBottom = '10px';
    userDiv.innerHTML = `> ${input.value}`;
    chatBox.appendChild(userDiv);

    input.value = ""; // Limpa campo

    // Resposta da IA com delay
    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'message-ai';
        
        // Busca a melhor resposta
        let resposta = buscarResposta(mensagemUsuario);
        
        aiDiv.innerHTML = resposta;
        chatBox.appendChild(aiDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Opcional: Faz a IA falar a resposta
        // tocarAudioTexto(resposta); 
    }, 600);
}

// 3. LÓGICA DE BUSCA (Aprimorada)
function buscarResposta(texto) {
    // Procura se alguma palavra-chave do banco está contida na frase do usuário
    for (let chave in bancoDeRespostas) {
        if (texto.includes(chave)) {
            return bancoDeRespostas[chave];
        }
    }
    return "Interessante! Não tenho uma resposta específica para isso, mas tente perguntar sobre minha 'formação' ou 'projetos'.";
}