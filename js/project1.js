// Banco de dados simples para a página
const projetosData = {
    'pingpong': {
        titulo: "Ping Pong Pro",
        descricao: "Simulação de jogo retro com física avançada e IA imbatível. Desenvolvido para testar colisões e lógica de estados.",
        link: "figma.com/tito-ping-pong"
    },
    'uxcase': {
        titulo: "UX Case Mobile",
        descricao: "Estudo de caso focado em Dark Patterns e acessibilidade para usuários idosos em apps de banco.",
        link: "figma.com/tito-ux-case"
    }
};

function carregarDados() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetosData[id];

    if (data) {
        document.getElementById('projeto-titulo').innerText = data.titulo;
        document.getElementById('projeto-descricao').innerText = data.descricao;
        document.getElementById('projeto-link').innerText = data.link;
        document.getElementById('projeto-link').href = "https://" + data.link;
    }
}

window.onload = carregarDados;

/**
 * Função para ampliar a imagem
 * @param {string} src - O caminho da imagem que foi clicada
 */
function ampliarImagem(src) {
    const lightbox = document.getElementById('lightbox');
    const imgAmpliada = document.getElementById('img-ampliada');
    
    imgAmpliada.src = src;
    lightbox.style.display = 'flex';
}

/**
 * Fecha a janela de ampliação
 */
function fecharJanela(e) {
    const lightbox = document.getElementById('lightbox');
    // Só fecha se clicar no fundo ou no 'X', não na imagem em si
    if (e.target.id !== 'img-ampliada') {
        lightbox.style.display = 'none';
    }
}