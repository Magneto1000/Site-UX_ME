/* ==========================================
   ARQUIVO DE LÓGICA DO CHAT (chat.js)
   ========================================== */

// 1. BANCO DE DADOS DA IA (Amplie aqui facilmente)
const bancoDeRespostas = {
   // Identidade e Apresentação
   "Oi,oi": "Oi! Tudo bem? Eu sou a IA do Tito. Pergunte-me sobre os projetos dele, formação ou habilidades!",
   "Olá,olá": "Oi! Tudo bem? Eu sou a IA do Tito. Pergunte-me sobre os projetos dele, formação ou habilidades!",
   "Nome,nome": "Meu nome é Juraci Nunes Tito Neto, mas pode me chamar apenas de Tito, ou Neto, se preferir. Todos me chamam assim. A propósito, muito prazer!",
   "Sobrenome, sobrenome": "Meu nome completo é Juraci Nunes Tito Neto. O 'Neto' vem de família, mas no mercado sou mais conhecido como Tito Neto.",
   "Apelido, apelido": "Pode me chamar de Tito ou de Neto! Fique à vontade, respondo super bem a ambos.",
   "Idade, idade": "Tenho 33 anos, nasci no dia 27 de Julho de 1992.",
   "Nascimento, nascimento": "Nasci em 27 de julho de 1992. Sou leonino, se você ligar para esse tipo de coisa! Haha.",
   "Cidade, cidade": "Moro em Conceição de Macabu, no estado do Rio de Janeiro. É daqui que comando minhas operações de desenvolvimento.",
   "Localidade, localização": "Estou sediado em Conceição de Macabu - RJ, mas atuo perfeitamente de forma remota para qualquer lugar do mundo.",

   // Formação e Educação
   "Formação, formação": "Estou cursando Engenharia de Software (5º período) e fiz cursos de destaque como Google Project Management, Google UX Design e Python pelo Programa da Michigan University através do COURSERA.",
   "Faculdade, faculdade": "Estou cursando Engenharia de Software (5º período) na Estácio. É um curso excelente que me deu uma base sólida de engenharia e processos.",
   "Estudo, estudos": "No momento, divido meus estudos entre as disciplinas do 5º período de Engenharia de Software e o aperfeiçoamento prático em arquitetura e design de produtos.",
   "Coursera, coursera": "No Coursera especializei meu perfil! Concluí as certificações profissionais do Google (UX Design e Project Management) e a trilha de Python da University of Michigan.",
   "Michigan, michigan": "Fiz o renomado programa 'Python for Everybody' da University of Michigan via Coursera, o que solidificou muito minha lógica e manipulação de dados.",
   "Futuro, futuro": "Pretendo começar uma Pós Graduação em Arquitetura de Software assim que terminar Engenharia de Software, e emendá-la com uma formação paralela em Ciência da Computação.",
   "Planos, planos": "Meus planos acadêmicos são ambiciosos: finalizar Engenharia, obter o título em Ciência da Computação para dominar a matemática computacional, e me especializar como Arquiteto de Software.",
   "Ambição, ambição": " Meu plano de carreira inclui uma Pós-Graduação focada estritamente em Arquitetura de Software, com foco em microsserviços e sistemas escaláveis de alta performance.",

   // Projetos e Portfólio
   "Projetos, projetos": "Desenvolvi simuladores em Python, a plataforma Clean City e o jogo Magman. Atualmente meu foco total está no Over Power: um game de microgerenciamento de tarefas via gamificação.",
   "Aplicativos, aplicativos": "O Over Power é o meu projeto principal no momento. É um web app focado em desenvolvimento pessoal e gerenciamento de tarefas, que utiliza mecânicas de gamificação para manter o usuário engajado e consistente.",
   "Jogos, jogos, Jogo, jogo, Games, games, Game, game,": "O Magman é um jogo de lógica espacial focado em responsiveness que desenvolvi utilizando JavaScript puro. Um ótimo desafio de lógica e renderização.",
   "Mais projetos, mais projetos": "A Clean City é uma plataforma que idealizei para soluções de gerenciamento urbano, focando em como a tecnologia pode otimizar a organização e a sustentabilidade de ambientes municipais.",
   "claquette": "O Claquette é um aplicativo focado no consumo de trailers de filmes, séries e animes. Foi projetado com atenção cirúrgica à acessibilidade e à eliminação da fadiga de decisão do usuário.",
   "simuladores": "Tenho grande experiência construindo simuladores interativos e educacionais, principalmente em Python, cobrindo tópicos que vão de lógica algorítmica a simulações físicas do sistema solar.",
   "uup": "Sou a mente por trás da UUP Software Solutions, iniciativa onde atuo no design de interfaces, arquitetura de sistemas e implantação de sites institucionais modernos.",

   // Stack Técnica (Skills)
   "skills": "Tenho conhecimentos em HTML, CSS, JavaScript, Python, C, R, UX Design e Gestão de Projetos.",
   "habilidades": "Minhas habilidades combinam código e design: desenvolvimento com Python e JS, processos rigorosos de UX/UI, gerência de escopo com metodologias ágeis e arquitetura de sistemas.",
   "tecnologias": "Minha caixa de ferramentas inclui HTML5, CSS3, JavaScript (ES6+), Python (Pandas/Data Science), além de ferramentas de prototipagem como o Figma.",
   "linguagens": "Em termos de linguagens de programação, navego muito bem por Python, JavaScript, Java, PHP e possuo excelente familiaridade de base com C e R.",
   "python": "Python é uma das minhas grandes paixões. Uso para automações, desenvolvimento de simuladores, análise de dados com R/Pandas e lógica de back-end.",
   "javascript": "Uso JavaScript para dar vida e interatividade às interfaces front-end, manipulação dinâmica do DOM, consumo de APIs e lógica de jogos de navegador (como o Magman).",
   "figma": "O Figma é o meu braço direito para UX/UI. Uso para mapeamento de jornadas de usuários, wireframes de alta fidelidade e protótipos interativos testáveis.",

   // Filosofia de Trabalho e Soft Skills
   "ux": "Eu estou em constante processo de aperfeiçoamento no refinamento dos meus processos criativos. Meus conhecimentos de UX, sobretudo relacionados à priorização do usuário, me ajudaram a entender melhor como construir produtos, como projetá-los e como dar vida às minhas ideias.",
   "design": "Design para mim é função, não apenas estética. Minha abordagem de design foca em usabilidade, acessibilidade e na jornada que o usuário faz dentro da aplicação.",
   "habilidades sociais": "Acho que seria difícil dizer quais habilidades sociais eu não tenho, pois penso que se somos seres sociais, devemos ser exímios em nos relacionar. Eu vivo esta filosofia.",
   "pontos fortes": "Minhas principais habilidades sociais são assustadoras! Sou um líder nato, extremamente organizado, muito hábil em resolver conflitos, gerenciar o tempo e motivar meus companheiros de equipe.",
   "liderança": "Sou um líder focado em colaboração e motivação mútua. Acredito que a melhor liderança é aquela que remove barreiras e dá autonomia técnica para a equipe brilhar.",
   "pontos negativos": "Acredito que um dos meus pontos negativos é a falta de uma longa experiência prévia dentro de ambientes corporativos tradicionais e, às vezes, eu posso me superestimar um pouco devido ao meu entusiasmo criativo. Mas estou sempre calibrando isso através de feedbacks.",
   "defeitos": "Às vezes minha mente criativa quer abraçar muitas ideias de uma vez. Preciso me policiar usando frameworks de gerenciamento (como Kanban) para manter o foco rígido no MVP e no escopo inicial.",
   "vibe coding": "Opero muito bem na filosofia de Vibe Coding! Utilizo agentes de IA e ferramentas de automação para acelerar o boilerplate e focar na arquitetura e na experiência do produto.",
   "extensão": "Tenho forte engajamento social. Já organizei oficinas técnicas voluntárias para alunos do ensino médio de escolas públicas (como o CIEP 271), ensinando design de interfaces e front-end.",

   // Vida Pessoal e Interesses (Casual)
   "hobbies": "Gosto de ler, escrever, jogos eletrônicos e futebol (jogar e assistir).",
   "interesses": "Meus interesses giram em torno de alta tecnologia, xadrez competitivo, astrofísica, escrita de ficção e o estudo contínuo de design de comportamento.",
   "xadrez": "Sou um grande entusiasta de xadrez! Adoro analisar aberturas e táticas. Inclusive, disputo torneios online no Chess.com constantemente no bracket competitivo.",
   "futebol": "Sou torcedor do Manchester United! Adoro acompanhar os jogos da Premier League e também bater uma bola com os amigos sempre que possível.",
   "animes": "Sou fã de animes que desafiam a lógica ou têm grandes narrativas, como Re:Zero, Dragon Ball e outras grandes produções de fantasia e ficção.",
   "livro": "Além de programar, sou autor! Estou escrevendo um livro de ficção científica chamado TERRASER. Adoro construir mundos e conceitos futuristas através da escrita.",
   "inglês": "Estudo inglês já há algum tempo, pode-se dizer que leio, escrevo e entendo perfeitamente documentações e palestras. Segundo o Duolingo, sou nível INTERMEDIÁRIO!",
   "família": "Sou casado e pai orgulhoso! Minha esposa se chama Thayná Martins Ribeiro e temos uma linda filha chamada Julia. Eles são a base de tudo o que eu construo.",
   "casado": "Sim, sou casado com a Thayná! Construímos uma parceria incrível e ela super apoia minha jornada na Engenharia de Software.",

   // Profissional, Contato e Propostas
   "contato": "Você pode me contatar em titojneto@gmail.com ou pelos links do LinkedIn e GitHub que deixei fixados aqui no rodapé da página.",
   "email": "Meu e-mail direto é titojneto@gmail.com. Fique à vontade para me enviar propostas, feedbacks ou agendar um café técnico!",
   "salário": "Como tenho família (esposa e filha), busco uma remuneração justa e condizente com a realidade de mercado para o escopo da vaga. Porém, coloco a oportunidade de aprendizado e o plano de carreira na mesa e estou aberto a negociações.",
   "remuneração": "Acredito em um valor justo baseado no mercado atual, avaliando o nível do desafio técnico e o impacto do projeto. Falemos de números assim que eu te mostrar o valor que posso agregar ao time!",
   "ambição": "Eu acredito que tenho muito a oferecer. Sou uma pessoa altamente criativa em busca de oportunidades de fazer história em projetos que resolvam dores reais das pessoas.",
   "ajuda": "Você pode me perguntar sobre 'projetos' (como o Over Power), minha 'formação' acadêmica, minhas 'skills' em UX e programação, meus 'hobbies' (como xadrez e livros) ou formas de 'contato'.",
   
   // Fallback padrão
   "default": "Que pergunta interessante! Meu banco de dados não tem uma resposta exata para isso, mas tente me perguntar sobre minha formação em Engenharia de Software, meus projetos (como o Over Power) ou minhas habilidades em UX Design!"
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