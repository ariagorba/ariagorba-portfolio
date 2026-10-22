"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./CaseStudyLightbox.module.css";

export default function CaseStudyLightbox() {
  const [activeImage, setActiveImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Handle global click on figure images
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement) || target.tagName !== "IMG") {
        return;
      }

      // Check if this image is a case study figure image
      const isFigureImage =
        (target.className && typeof target.className === "string" && target.className.includes("figureImage")) ||
        Boolean(target.closest('[class*="figure"]'));

      // Skip icons, navbar, footer, or non-content images
      if (!isFigureImage || target.closest("nav") || target.closest("footer")) {
        return;
      }

      e.preventDefault();

      // Extract full resolution master src
      const rawSrc = target.currentSrc || target.getAttribute("src") || "";
      let fullResSrc = rawSrc;
      if (rawSrc.includes("url=")) {
        try {
          const urlParam = rawSrc.split("url=")[1].split("&")[0];
          fullResSrc = decodeURIComponent(urlParam);
        } catch {
          fullResSrc = rawSrc;
        }
      }

      const alt = target.getAttribute("alt") || "";

      // Extract caption if available in parent figure
      let caption = "";
      const figureContainer = target.closest('[class*="figure"]');
      if (figureContainer) {
        const captionEl = figureContainer.querySelector('[class*="caption"]');
        if (captionEl) {
          caption = captionEl.textContent?.trim() || "";
        }
      }

      setActiveImage({
        src: fullResSrc,
        alt,
        caption,
      });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Handle Escape key and scroll lock
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeLightbox]);

  if (!activeImage || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={styles.overlay}
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Image view"
    >
      <button
        type="button"
        className={styles.closeButton}
        onClick={closeLightbox}
        aria-label="Close image lightbox"
      >
        <svg
          className={styles.closeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className={styles.image}
            onClick={closeLightbox}
            style={{ cursor: "zoom-out" }}
          />
        </div>

        {activeImage.caption ? (
          <div className={styles.caption}>
            {activeImage.caption}
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
