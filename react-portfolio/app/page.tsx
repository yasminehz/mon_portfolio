import Link from "next/link";
import {
  lienTableauCompetences,
  parcoursPortfolio,
  projetsPortfolio,
  veilleTechnologiquePortfolio,
} from "@/lib/donnees-portfolio";
import ProjetCarousel from "@/components/ProjetCarousel";

function extraireLienDepuisDescription(descriptionLongue: string): string | null {
  const resultat = /https?:\/\/\S+/.exec(descriptionLongue);
  return resultat?.[0] ?? null;
}

export default function Home() {
  const idsProjetsPerso = new Set([3, 4]);
  const projetsPerso = projetsPortfolio.filter((projet) => idsProjetsPerso.has(projet.id));
  const projetsAcademiques = projetsPortfolio.filter(
    (projet) => !idsProjetsPerso.has(projet.id),
  );

  const renderProjet = (projet: (typeof projetsPortfolio)[number]) => {
    const lienDemo = extraireLienDepuisDescription(projet.descriptionLongue);

    return (
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
          {lienDemo && (
            <div className="project-links">
              <a
                href={lienDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                Demo
              </a>
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="portfolio-page">
      <section id="accueil" className="hero">
        <div className="container">
          <h1>Mon portfolio professionnel</h1>
          <p>Mon parcours en BTS SIO</p>
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
          <div className="projects-group">
            <h3 className="projects-group-title">Projets académiques</h3>
            <div className="projects-grid">{projetsAcademiques.map(renderProjet)}</div>
          </div>

          <div className="projects-group">
            <h3 className="projects-group-title">Projets perso</h3>
            <div className="projects-grid">{projetsPerso.map(renderProjet)}</div>
          </div>
        </div>
      </section>

      <section id="competences" className="competences">
        <div className="container">
          <h2>Tableau de compétence</h2>
          <p>Accède à mon tableau de compétence complet via le lien ci-dessous.</p>
          <a
            href={lienTableauCompetences}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ouvrir le tableau de compétence
          </a>
        </div>
      </section>

      <section id="veille" className="veille">
        <div className="container">
          <div className="veille-header">
            <span className="veille-badge">Veille 2026</span>
            <h2>Veille Technologique : IA et Médecine</h2>
            <p className="veille-intro">
              Je fais ma veille avec Feedly sur l'IA appliquée à la santé, avec des sources comment ScienceDaily, The Verge, Le Monde Informatique et bien d'autres sources.
              J'utilise également Google Scholar pour suivre les publications scientifiques récentes sur le sujet.
            </p>
            <a
              href="https://docs.google.com/document/d/1EfGdjQxKPnP_6yLA0QC7XOVosBGAtRjJv3bljSUgzg0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Voir ma synthèse
            </a>
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

      <section id="contact" className="contact">
        <div className="container">
          <h2>Me Contacter</h2>
          <div className="contact-content">

            <div className="contact-links">
              <a href="mailto:yasminehenniz@gmail.com" className="contact-btn">
                Email
              </a>
              <a
                href="https://github.com/yasminehz"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yasmine-henni-zourgui"
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
