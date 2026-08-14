import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   GALERÍA EDITORIAL CLÁSICA
========================================= */

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  marble: "#F5F3EE",
  gold: "#B79A62",
};

const images = [
  "/Carrusel01.PNG",
  "/Carrusel02.JPEG",
  "/Carrusel03.JPEG",
  "/Carrusel04.PNG",
  "/Carrusel05.JPEG",
  "/Carrusel06.JPEG",
  "/Carrusel07.JPEG",
  "/Carrusel08.JPEG",
  "/Carrusel09.JPEG",
  "/Carrusel10.JPG",
  "/Carrusel11.JPG",
  "/Carrusel12.JPG",
  "/Carrusel13.JPG",
  "/Carrusel14.JPG",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

/* =========================================
   RAMA BOTÁNICA
========================================= */

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{ backgroundColor: palette.gold }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{ borderColor: palette.gold }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{ backgroundColor: palette.gold }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function PreviousIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = images.length;



  useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      setDirection(1);

      setIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalImages]);

  const nextImage = () => {
    setDirection(1);

    setIndex((previousIndex) => {
      return (previousIndex + 1) % totalImages;
    });
  };

  const previousImage = () => {
    setDirection(-1);

    setIndex((previousIndex) => {
      return previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1;
    });
  };

  const goToImage = (imageIndex) => {
    setDirection(imageIndex > index ? 1 : -1);
    setIndex(imageIndex);
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        backgroundColor: palette.marble,
      }}
    >
      {/* MARCO GENERAL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: palette.gold,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: palette.gold,
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-10
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
            lg:mb-20
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div>
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              text-[44px]
              font-normal
              italic
              leading-[1.05]
              tracking-[-0.015em]
              sm:text-[58px]
              md:text-[68px]
            "
            style={{
              color: palette.black,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Nuestra historia
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[12px]
              italic
              leading-7
              sm:text-sm
            "
            style={{
              color: palette.black,
            }}
          >
            Un recorrido por los instantes que han dado forma a nuestra
            historia y que hoy nos conducen hasta este día.
          </p>
        </motion.div>

        {/* ÁLBUM PRINCIPAL */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
          "
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* MARCO DE PAPEL */}

          <div
            className="
              relative
              border
              p-3
              sm:p-5
              lg:p-7
            "
            style={{
              backgroundColor: palette.white,
              borderColor: palette.gold,
              
            }}
          >
            {/* BORDE INTERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
              "
              style={{
                borderColor: palette.gold,
              }}
            />

            {/* FOTOGRAFÍA */}

            <div
              className="
                relative
                h-[500px]
                overflow-hidden
                bg-white
                sm:h-[620px]
                md:h-[700px]
                lg:h-[760px]
              "
            >
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.img
                  key={images[index]}
                  custom={direction}
                  src={images[index]}
                  alt={`Momento ${index + 1} de ${totalImages}`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                    object-center
                  "
                  initial={{
                    opacity: 0,
                    zIndex: 1,
                  }}
                  animate={{
                    opacity: 1,
                    zIndex: 2,
                  }}
                  exit={{
                    opacity: 0,
                    zIndex: 1,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.55,
                    },
                  }}
                />
              </AnimatePresence>

            </div>

            {/* PIE DE FOTO */}

            <div
              className="
                relative
                flex
                flex-col
                items-center
                px-4
                pb-3
                pt-7
                text-center
                sm:px-8
                sm:pb-5
                sm:pt-8
              "
            >
              <motion.p
                key={`counter-${index}`}
                className="
                  font-serif
                  text-[22px]
                  sm:text-[26px]
                "
                style={{
                  color: palette.black,
                }}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                {String(index + 1).padStart(2, "0")}
                <span
                  className="
                    mx-2
                    text-sm
                  "
                  style={{
                    color: palette.black,
                  }}
                >
                  /
                </span>
                <span
                  className="
                    text-base
                    sm:text-lg
                  "
                  style={{
                    color: palette.black,
                  }}
                >
                  {String(totalImages).padStart(2, "0")}
                </span>
              </motion.p>

              {/* NAVEGACIÓN — FUERA DE LA FOTO */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-4
                  sm:gap-5
                "
              >
                <motion.button
                  type="button"
                  onClick={previousImage}
                  aria-label="Mostrar fotografía anterior"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    bg-white
                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    borderColor: palette.gold,
                    color: palette.black,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <PreviousIcon />
                </motion.button>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.gold,
                  }}
                >
                  Navegar
                </span>

                <motion.button
                  type="button"
                  onClick={nextImage}
                  aria-label="Mostrar siguiente fotografía"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    bg-white
                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    borderColor: palette.gold,
                    color: palette.black,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <NextIcon />
                </motion.button>
              </div>

              {/* INDICADORES */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {images.map((_, imageIndex) => {
                  const isActive = index === imageIndex;

                  return (
                    <motion.button
                      key={`indicator-${imageIndex}`}
                      type="button"
                      onClick={() => goToImage(imageIndex)}
                      aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className="
                        h-[7px]
                        border
                      "
                      animate={{
                        width: isActive ? 32 : 7,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        backgroundColor: isActive
                          ? palette.black
                          : "transparent",
                        borderColor: isActive
                          ? palette.black
                          : "rgba(183,154,98,0.45)",
                      }}
                    />
                  );
                })}
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  uppercase
                  tracking-[0.32em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.black,
                }}
              >
                La galería avanza automáticamente
              </p>
            </div>
          </div>
        </motion.div>

        {/* CIERRE NARRATIVO */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            sm:mt-14
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor: palette.gold,
            }}
          />

        </motion.div>
      </div>
    </motion.section>
  );
}