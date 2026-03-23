import Link from "next/link";
import {
  parcoursPortfolio,
  projetsPortfolio,
  todosPortfolio,
  veilleTechnologiquePortfolio,
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

      <section id="todo" className="todo">
        <div className="container">
          <h2>#TODO</h2>
          {todosPortfolio.map((todo) => (
            <p key={todo}>{todo}</p>
          ))}
        </div>
      </section>

      <section id="veille" className="veille">
        <div className="container">
          <div className="veille-header">
            <span className="veille-badge">Veille 2026</span>
            <h2>Veille Technologique : IA et Médecine</h2>
            <p className="veille-intro">
              Cette veille suit les usages concrets de l&apos;IA en santé, leurs apports
              pour les soignants et les conditions nécessaires pour un usage fiable et éthique.
            </p>
          </div>

          <div className="veille-points-cles" aria-label="Points de suivi de la veille">
            <span>🔎 Cas d&apos;usage</span>
            <span>🧪 Validation clinique</span>
            <span>🛡️ Éthique & données</span>
          </div>

          <div className="veille-grid">
            {veilleTechnologiquePortfolio.map((itemVeille, index) => (
              <article className="veille-card" key={itemVeille.titre}>
                <div className="veille-card-top">
                  <span className="veille-card-index">0{index + 1}</span>
                  <span className="veille-card-tag">IA Santé</span>
                </div>
                <h3>{itemVeille.titre}</h3>
                <p>{itemVeille.resume}</p>
                <ul>
                  {itemVeille.pointsCles.map((pointCle) => (
                    <li key={pointCle}>{pointCle}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
            {projetsPortfolio.map((projet) => {
              return (
                <article className="project-card" key={projet.id}>
                  <div className="project-content">
                    <h3 className="project-title">{projet.titre}</h3>
                    <div className="project-image">
                      <ProjetCarousel images={projet.images} compact />
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
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Me Contacter</h2>
          <div className="contact-content">
            <p>Je suis disponible pour discuter de projets passionnants.</p>
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
          <p>© 2026 Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
