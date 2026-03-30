import Link from "next/link";
import { notFound } from "next/navigation";
import ProjetCarousel from "@/components/ProjetCarousel";
import {
  projetsPortfolio,
  type ProjetPortfolio,
} from "@/lib/donnees-portfolio";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

function extraireLienDepuisDescription(descriptionLongue: string): string | null {
  const resultat = /https?:\/\/\S+/.exec(descriptionLongue);
  return resultat?.[0] ?? null;
}

function nettoyerDescriptionLongue(descriptionLongue: string): string {
  const lienTrouve = /https?:\/\/\S+/.exec(descriptionLongue)?.[0] ?? "";
  return descriptionLongue
    .replace(lienTrouve, "")
    .replaceAll(/\s+/g, " ")
    .trim();
}

export function generateStaticParams() {
  return projetsPortfolio.map((projet) => ({ id: String(projet.id) }));
}

function trouverProjet(id: string): ProjetPortfolio | undefined {
  return projetsPortfolio.find((projet) => projet.id === Number(id));
}

export default async function DetailProjetPage({ params }: PageProps) {
  const { id } = await params;
  const projet = trouverProjet(id);

  if (!projet) {
    notFound();
  }

  const lienDemo = extraireLienDepuisDescription(projet.descriptionLongue);
  const descriptionAffichee = nettoyerDescriptionLongue(projet.descriptionLongue);

  return (
    <main className="project-detail-page">
      <section className="project-detail">
        <div className="container detail-container">
          <ProjetCarousel images={projet.images} projetId={projet.id} />

          <article className="project-info">
            <h1>{projet.titre}</h1>

            <div className="project-tags">
              {projet.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-description-long">
              <h2>Description</h2>
              <p>{descriptionAffichee}</p>
            </div>

            <div className="project-features">
              <h2>Fonctionnalités</h2>
              <ul>
                {projet.fonctionnalites.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-links-detail">
              {lienDemo && (
                <a
                  className="btn-live"
                  href={lienDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}


              <Link className="btn btn-secondary" href="/#projets">
                Retour aux projets
              </Link>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Yasmine Henni-Zourgui. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
