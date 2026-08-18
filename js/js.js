document.addEventListener('DOMContentLoaded', () => {
    
    // Base de Dados de Serviços
    const database = {
        'product-management': {
        // 1. GESTÃO DE PRODUTOS
            icon: '💼',
            title: 'Product Management & Agilidade',
            tech: ['Scrum Framework', 'Product Backlog Refinement', 'User Stories', 'Jira / Confluence'],
            image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
            text: '💡 "Gerenciar produtos é transformar caos em valor tangível através de backlogs limpos, rituais ágeis e governança baseada em ROI."\n\nLiderança estratégica focada em traduzir requisitos complexos de negócios e dores reais de usuários em backlogs altamente estruturados e priorizados (RICE/MOSCOW). Experiência sólida na facilitação de rituais Scrum, escrita de User Stories acionáveis com critérios de aceite rigorosos e governança ágil voltada para a entrega contínua de valor.',
            link: 'https://drive.google.com/drive/folders/1-eXmQNyc6nnpLboz3JEBETfjL5tW-S10?usp=sharing'
        },

        // 2. DESIGN DE INTERFACE & DESCOBERTA
        'ux-ui-design': {
            icon: '🎨',
            title: 'UX / UI Design & Product Discovery',
            tech: ['Design Thinking', 'Double Diamond', 'Prototipagem de Alta Fidelidade', 'Diretrizes WCAG'],
            image: 'https://images.unsplash.com/photo-1627757757997-369fb38812e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
            text: '💡 "O design invisível é o mais eficiente. Projeto interfaces focadas em eliminar a fricção cognitiva e garantir acessibilidade digital."\n\nArquitetura de experiências imersivas focada estritamente na eliminação de fricções e na mitigação de carga cognitiva. Especialista na condução de processos completos de Product Discovery, mapeamento de jornadas de usuário, auditorias de concorrência e protótipos interativos com micro-animações, garantindo interfaces acessíveis (WCAG) e livres de dark patterns.',
            link: 'pages/estudo_caso_appclaquette.html'
            
        },

        // 3. ARQUITETURA DE SOFTWARE
        'software-architecture': {
            icon: '⚡',
            title: 'Software Engineering & Dev',
            tech: ['React.js', 'Node.js', 'JavaScript / Python', 'SQL Databases'],
            image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
            text: '💡 "Código performático é aquele que resolve regras de negócio complexas mantendo uma esteira de deploy limpa e escalabilidade sã."\n\nDesenho, modelagem UML e codificação de sistemas ponta a ponta (Full-Stack). Atuação com controle de versão rigoroso via Git/GitHub por linha de comando, estruturando arquiteturas de software escaláveis e esteiras de deploy limpas que casam perfeitamente as regras de negócio com uma renderização fluida na interface.',
            link: 'https://github.com/Magneto1000'
            
        },

        // 4. ANÁLISE DE DADOS
        'data-analytics': {
            icon: '📊',
            title: 'Technical Support & Customer Experience (CX)',
            tech: ['💡 "A eficiência do suporte não está apenas em resolver chamados, mas em transformar a dor do usuário em evolução contínua para o produto."'],
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            text: 'Atuação estratégica na gestão do ciclo completo de chamados e suporte ao cliente, combinando triagem assertiva, priorização por SLAs e comunicação humanizada via canais digitais. Diagnóstico técnico de incidentes e identificação de gargalos operacionais diretamente na ponta, traduzindo o feedback do usuário final em melhorias contínuas, otimização de fluxos e redução de chamados recorrentes.',
            link: ''
        },

        // 5. LABORATÓRIO E WORKSHOPS
        'labs-workshops': {
            icon: '🛠️',
            title: 'Labs, Games & Workshops',
            tech: ['Gamificação', 'HTML5 Canvas', 'Product Lifecycle', 'Mentoria Técnica'],
            image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 
            text: '💡 "O conhecimento só é pleno quando compartilhado. Concipio ecossistemas próprios disruptivos e atuo moldando mentes para o mercado."\n\nAmbiente prático de inovação e engenharia. Compreende a gestão do ciclo de vida de aplicações próprias disruptivas (como o Over Power e o Magman) e atuação em workshops de extensão educacional, lecionando design centrado no usuário e melhores práticas de entrega de software corporativo para o mercado.',
            link: 'https://github.com/Magneto1000'
        }
    };

 
    const slides = [document.getElementById('slide-1'), document.getElementById('slide-2'), document.getElementById('slide-3')];
    const sliderContainer = document.getElementById('slider-container');
    const serviceBg = document.getElementById('service-bg');
    
    const heroContent = document.getElementById('hero-content');
    const serviceContent = document.getElementById('service-content');
    const serviceTitle = document.getElementById('service-title');
    const serviceDesc = document.getElementById('service-desc');
    const serviceCta = document.getElementById('service-cta');
    
    const hubOverlay = document.getElementById('hub-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-overlay');

 
    let currentSlide = 0;
    let rotationInterval;

    function startRotation() {
        rotationInterval = setInterval(() => {
            if (slides[currentSlide]) {
                slides[currentSlide].classList.remove('opacity-100', 'scale-100');
                slides[currentSlide].classList.add('opacity-0', 'scale-105');
            }
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            if (slides[currentSlide]) {
                slides[currentSlide].classList.remove('opacity-0', 'scale-105');
                slides[currentSlide].classList.add('opacity-100', 'scale-100');
            }
        }, 5000);
    }
    startRotation();
 
    window.toggleMobileMenu = (open) => {
        if (!mobileDrawer) return;
        if (open) {
            mobileDrawer.classList.remove('-translate-x-full');
            mobileOverlay.classList.remove('hidden');
            setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
        } else {
            mobileDrawer.classList.add('-translate-x-full');
            mobileOverlay.classList.add('opacity-0');
            setTimeout(() => mobileOverlay.classList.add('hidden'), 500);
        }
    };

   
    window.selectService = (key) => {
        const data = database[key];
        if (!data) return;
        
        // Fecha o menu hambúrguer automaticamente se estiver no mobile
        window.toggleMobileMenu(false);

        // Atualiza UI dos botões (Desktop e Mobile)
        document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn').forEach(btn => btn.classList.remove('active-nav'));
        
 
        if (window.event && window.event.currentTarget) {
            window.event.currentTarget.classList.add('active-nav');
        }

 
        clearInterval(rotationInterval);
        if (sliderContainer) sliderContainer.classList.add('opacity-0');
        
        if (serviceBg) {
            serviceBg.style.backgroundImage = `url('${data.image}')`;
            serviceBg.classList.remove('opacity-0', 'scale-105');
            serviceBg.classList.add('opacity-100', 'scale-100');
        }

 
        if (heroContent) {
            heroContent.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            heroContent.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
        }

        setTimeout(() => {
            if (serviceTitle) serviceTitle.textContent = data.title;
            if (serviceDesc) serviceDesc.textContent = data.text;
            
     
            if (serviceCta) {
                serviceCta.href = data.link;
                
         
                if (data.link.startsWith('http')) {
                    serviceCta.setAttribute('target', '_blank');
                    serviceCta.setAttribute('rel', 'noopener noreferrer');
                    serviceCta.textContent = 'Ver mais ➜';
                } else {
                    serviceCta.removeAttribute('target');
                    serviceCta.removeAttribute('rel');
                    serviceCta.textContent = 'Acessar Estudo de Caso ➜';
                }
            }
            
            if (serviceContent) {
                serviceContent.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
                serviceContent.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        }, 400);
    };

 
    window.resetToHero = () => {
        document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn').forEach(btn => btn.classList.remove('active-nav'));

        if (serviceContent) {
            serviceContent.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            serviceContent.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
        }

        setTimeout(() => {
            if (heroContent) {
                heroContent.classList.remove('opacity-0', '-translate-y-8', 'pointer-events-none');
                heroContent.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
            
            if (serviceBg) {
                serviceBg.classList.remove('opacity-100', 'scale-100');
                serviceBg.classList.add('opacity-0', 'scale-105');
            }
            if (sliderContainer) sliderContainer.classList.remove('opacity-0');
            startRotation();
        }, 400);
    };

 
    window.toggleHub = (open) => {
        window.toggleMobileMenu(false); // Fecha o menu mobile se estiver aberto
        
        if (open) {
            if (hubOverlay) {
                hubOverlay.classList.remove('hidden');
                setTimeout(() => hubOverlay.classList.remove('translate-y-full'), 10);
            }
        } else {
            if (hubOverlay) {
                hubOverlay.classList.add('translate-y-full');
                setTimeout(() => hubOverlay.classList.add('hidden'), 700);
            }
        }
    };
});

 
const sliderStates = {};

window.moveSlider = (trackId, direction) => {
    const track = document.getElementById(trackId);
    if (!track) return;
    
 
    if (!sliderStates[trackId]) {
        sliderStates[trackId] = {
            current: 0,
            total: track.children.length
        };
    }
    
    let state = sliderStates[trackId];
    
 
    state.current += direction;
    
    if (state.current < 0) {
        state.current = state.total - 1;  
    } else if (state.current >= state.total) {
        state.current = 0;  
    }
    
    
    track.style.transform = `translateX(-${state.current * 100}%)`;
};


 
setInterval(() => {
    const video = document.getElementById('card-presentation-video');
    const bar = document.getElementById('card-video-progress-bar');
    if (!video || !bar || video.paused) return;
    bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
}, 200);


