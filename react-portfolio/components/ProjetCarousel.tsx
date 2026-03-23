"use client";

import { useState } from "react";
import type { CleImageProjet } from "@/lib/donnees-portfolio";

interface ProjetCarouselProps {
    images: CleImageProjet[];
    compact?: boolean;
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

export default function ProjetCarousel({ images, compact = false }: ProjetCarouselProps) {
    const [indexCurrente, setIndexCurrente] = useState(0);

    const allerPrecedent = () => {
        setIndexCurrente((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const allerSuivant = () => {
        setIndexCurrente((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const allerAIndex = (index: number) => {
        setIndexCurrente(index);
    };

    return (
        <div className={`carousel-container ${compact ? "carousel-compact" : ""}`}>
            <div className="carousel-main">
                <div className="carousel-slide">
                    {images.length > 0 ? (
                        <div className="carousel-image-placeholder">
                            <span
                                className={`icon-pixel-projet ${classeIconeDetailParCle[images[indexCurrente]]}`}
                                aria-label={`Image ${indexCurrente + 1} de ${images.length}`}
                            />
                        </div>
                    ) : (
                        <div className="carousel-empty">
                            <p>Aucune photo pour le moment</p>
                        </div>
                    )}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            className="carousel-nav carousel-prev"
                            onClick={allerPrecedent}
                            aria-label={`Image précédente (${indexCurrente}/${images.length})`}
                        >
                            ‹
                        </button>
                        <button
                            className="carousel-nav carousel-next"
                            onClick={allerSuivant}
                            aria-label={`Image suivante (${indexCurrente + 2}/${images.length})`}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {images.length > 0 && (
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === indexCurrente ? "active" : ""}`}
                            onClick={() => allerAIndex(index)}
                            aria-label={`Aller à l'image ${index + 1}`}
                            aria-current={index === indexCurrente ? "true" : undefined}
                        />
                    ))}
                </div>
            )}

            {images.length > 0 && (
                <div className="carousel-counter">
                    {indexCurrente + 1} / {images.length}
                </div>
            )}
        </div>
    );
}
