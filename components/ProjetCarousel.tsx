"use client";

import { useState } from "react";

interface ProjetCarouselProps {
    readonly images: readonly string[];
    readonly projetId?: number;
    readonly compact?: boolean;
}

export default function ProjetCarousel({ images, projetId, compact = false }: ProjetCarouselProps) {
    const [indexCurrente, setIndexCurrente] = useState(0);
    const nombreSlides = images.length;

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
            <div className="carousel-main carousel-main-real">
                <div className="carousel-slide">
                    {nombreSlides > 0 ? (
                        <div className="carousel-image-placeholder">
                            <img
                                src={encodeURI(images[indexCurrente])}
                                alt={`Capture ${indexCurrente + 1} du projet`}
                                className="carousel-photo"
                            />
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
                    {images.map((image, index) => (
                        <button
                            key={`slide-${image}`}
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
