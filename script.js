// Données des projets
const projects = [
    {
        id: 1,
        title: "Calculatrice Interactive",
        description: "Une calculatrice web moderne avec interface intuitive et support des opérations basiques.",
        tags: ["HTML", "CSS", "JavaScript"],
        emoji: "🧮",
        github: "#",
        live: "#"
    },
    {
        id: 2,
        title: "Todo List App",
        description: "Application de gestion de tâches avec ajout, suppression et marquage de complétude en temps réel.",
        tags: ["HTML", "CSS", "JavaScript"],
        emoji: "✅",
        github: "#",
        live: "#"
    },
    {
        id: 3,
        title: "Météo en Temps Réel",
        description: "Application météo utilisant une API publique pour afficher la météo actuelle et les prévisions.",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        emoji: "🌤️",
        github: "#",
        live: "#"
    },
    {
        id: 4,
        title: "Jeu du Pendu",
        description: "Jeu de devinettes interactif avec interface élégante et feedback en temps réel.",
        tags: ["HTML", "CSS", "JavaScript"],
        emoji: "🎮",
        github: "#",
        live: "#"
    },
    {
        id: 5,
        title: "Portfolio Personnel",
        description: "Site portfolio moderne présentant mes projets et compétences en développement web.",
        tags: ["HTML", "CSS", "JavaScript"],
        emoji: "💼",
        github: "#",
        live: "#"
    },
    {
        id: 6,
        title: "Quiz Interactif",
        description: "Application de quiz avec questions multiples, score en direct et résultats détaillés.",
        tags: ["HTML", "CSS", "JavaScript"],
        emoji: "🧠",
        github: "#",
        live: "#"
    }
];

// Fonction pour créer les cartes de projets
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">Code</a>
                    <a href="${project.live}" target="_blank">Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Fonction pour ajouter des event listeners aux liens de navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Fonction pour mettre en surbrillance le lien de navigation actif
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').substring(1) === current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupNavigation();
    updateActiveNavLink();
});

// Animation d'apparition des cartes au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de projets
setTimeout(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
}, 100);
