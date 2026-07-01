import Link from "next/link";
import {
  parcoursPortfolio,
  projetsPortfolio,
} from "@/lib/donnees-portfolio";
import ProjetCarousel from "@/components/ProjetCarousel";

export default function Home() {
  return (
    <div className="portfolio-page">
      <section id="accueil" className="hero">
        <div className="container">
          <h1>Développeuse Web</h1>
          <p>HTML • CSS • Symfony • Java • ReactNative</p>
          <a href="#projets" className="btn btn-primary">
            Voir mes projets
          </a>
        </div>
      </section>

      <section id="parcours" className="parcours">
        <div className="container">
          <h2>Mon Parcours</h2>
          <div className="parcours-grid">
            {/* Colonne Formations */}
            <div className="parcours-column formation-column">
              <h3>
                <span className="icon-pixel icon-pixel-livre" aria-hidden="true" />
                {' '}
                Formation
              </h3>
              <div className="timeline">
                {parcoursPortfolio
                  .filter((etape) => etape.type === "formation")
                  .map((etape, index) => (
                    <div className="timeline-item" key={`${etape.periode}-${index}`}>
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <div className="timeline-date">{etape.periode}</div>
                        <h3>{etape.titre}</h3>
                        <p>{etape.sousTitre}</p>
                        <p className="timeline-description">{etape.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Colonne Stages */}
            <div className="parcours-column stage-column">
              <h3>
                <span className="icon-pixel icon-pixel-mallette" aria-hidden="true" />
                {' '}
                Expérience
              </h3>
              <div className="timeline">
                {parcoursPortfolio
                  .filter((etape) => etape.type === "stage")
                  .map((etape, index) => (
                    <div className="timeline-item" key={`${etape.periode}-${index}`}>
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <div className="timeline-date">{etape.periode}</div>
                        <h3>{etape.titre}</h3>
                        <p>{etape.sousTitre}</p>
                        <p className="timeline-description">{etape.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="projects">
        <div className="container">
          <h2>Mes Projets</h2>
          <div className="projects-grid">
            {projetsPortfolio.map((projet) => (
              <article className="project-card" key={projet.id}>
                <div className="project-content">
                  <h3 className="project-title">{projet.titre}</h3>
                  <div className="project-image">
                    <ProjetCarousel images={projet.images} projetId={projet.id} compact />
                  </div>
                  <p className="project-description">{projet.description}</p>
                  <div className="project-tags">
                    {projet.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <Link href={`/projets/${projet.id}`} className="btn-detail">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Me Contacter</h2>
          <div className="contact-content">
            <div className="contact-links">
              <a href="mailto:votre.email@example.com" className="contact-btn">
                Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Yasmine Henni-Zourgui. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
