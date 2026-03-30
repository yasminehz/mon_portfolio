"use client";

import { useState } from "react";
import { imagesParProjet, type CleImageProjet } from "@/lib/donnees-portfolio";

interface ProjetCarouselProps {
    readonly images: readonly CleImageProjet[];
    readonly projetId?: number;
    readonly compact?: boolean;
}

const classeIconeDetailParCle: Record<CleImageProjet, string> = {
    biblio: "icon-pixel-projet-biblio",
    recherche: "icon-pixel-detail-recherche",
    lecture: "icon-pixel-detail-lecture",
    utilisateur: "icon-pixel-detail-utilisateur",
    sante: "icon-pixel-projet-rdv",
    calendrier: "icon-pixel-detail-calendrier",
    soignant: "icon-pixel-detail-soignant",
    traitement: "icon-pixel-detail-traitement",
    cupcake: "icon-pixel-detail-cupcake",
    prix: "icon-pixel-detail-prix",
    statistiques: "icon-pixel-detail-statistiques",
    gateau: "icon-pixel-detail-gateau",
    vitrine: "icon-pixel-projet-vitrine",
    dessert: "icon-pixel-detail-dessert",
    avis: "icon-pixel-detail-avis",
    contact: "icon-pixel-detail-contact",
    panier: "icon-pixel-detail-panier",
    mobile: "icon-pixel-projet-course",
    validation: "icon-pixel-detail-validation",
    partage: "icon-pixel-detail-partage",
};

const PREFIXE_BASE = "/mon_portfolio";

export default function ProjetCarousel({ images, projetId, compact = false }: ProjetCarouselProps) {
    const [indexCurrente, setIndexCurrente] = useState(0);
    const cheminsImages = projetId ? imagesParProjet[projetId] ?? [] : [];
    const utiliseImagesReelles = cheminsImages.length > 0;
    const nombreSlides = utiliseImagesReelles ? cheminsImages.length : images.length;
    const clesSlides = (utiliseImagesReelles ? cheminsImages : images) as readonly string[];
    const urlImageCourante = utiliseImagesReelles
        ? `${PREFIXE_BASE}${cheminsImages[indexCurrente]}`
        : "";

    const allerPrecedent = () => {
        setIndexCurrente((prev) => (prev === 0 ? nombreSlides - 1 : prev - 1));
    };

    const allerSuivant = () => {
        setIndexCurrente((prev) => (prev === nombreSlides - 1 ? 0 : prev + 1));
    };

    const allerAIndex = (index: number) => {
        setIndexCurrente(index);
    };

    return (
        <div className={`carousel-container ${compact ? "carousel-compact" : ""}`}>
            <div className={`carousel-main ${utiliseImagesReelles ? "carousel-main-real" : ""}`}>
                <div className="carousel-slide">
                    {nombreSlides > 0 ? (
                        <div className="carousel-image-placeholder">
                            {utiliseImagesReelles ? (
                                <img
                                    src={encodeURI(urlImageCourante)}
                                    alt={`Capture ${indexCurrente + 1} du projet`}
                                    className="carousel-photo"
                                />
                            ) : (
                                <span
                                    className={`icon-pixel-projet ${classeIconeDetailParCle[images[indexCurrente]]}`}
                                    aria-label={`Image ${indexCurrente + 1} de ${images.length}`}
                                />
                            )}
                        </div>
                    ) : (
                        <div className="carousel-empty">
                            <p>Aucune photo pour le moment</p>
                        </div>
                    )}
                </div>

                {nombreSlides > 1 && (
                    <>
                        <button
                            className="carousel-nav carousel-prev"
                            onClick={allerPrecedent}
                            aria-label={`Image précédente (${indexCurrente}/${nombreSlides})`}
                        >
                            ‹
                        </button>
                        <button
                            className="carousel-nav carousel-next"
                            onClick={allerSuivant}
                            aria-label={`Image suivante (${indexCurrente + 2}/${nombreSlides})`}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {nombreSlides > 0 && (
                <div className="carousel-indicators">
                    {clesSlides.map((cleSlide, index) => (
                        <button
                            key={`slide-${cleSlide}`}
                            className={`carousel-dot ${index === indexCurrente ? "active" : ""}`}
                            onClick={() => allerAIndex(index)}
                            aria-label={`Aller à l'image ${index + 1}`}
                            aria-current={index === indexCurrente ? "true" : undefined}
                        />
                    ))}
                </div>
            )}

            {nombreSlides > 0 && (
                <div className="carousel-counter">
                    {indexCurrente + 1} / {nombreSlides}
                </div>
            )}
        </div>
    );
}
