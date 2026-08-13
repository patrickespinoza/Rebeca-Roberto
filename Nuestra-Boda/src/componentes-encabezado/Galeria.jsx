import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   GALERÍA EDITORIAL CLÁSICA
========================================= */

const palette = {
  ink: "#241C18",
  inkSoft: "#5A463B",
  paper: "#F7F5F0",
  paperLight: "#FCFBF8",
  paperDark: "#E5DED5",
  antiqueGold: "#B79A62",
  antiqueGoldDark: "#8A6B3F",
  mocha: "#5A463B",
  autumn: "#A7684A",
  warmGray: "#806F64",
};

const images = [
  "/carrusel01.jpeg",
  "/carusel02.jpeg",
  "/carusel03.jpeg",
  "/carusel04.jpeg",
  "/carusel05.jpeg",
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

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(183,154,98,0.72))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(183,154,98,0.72)",
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(183,154,98,0.72))",
        }}
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
        background: `
          radial-gradient(circle at 14% 15%, rgba(183,154,98,0.055), transparent 30%),
          radial-gradient(circle at 86% 78%, rgba(90,70,59,0.04), transparent 34%),
          linear-gradient(120deg, transparent 0%, transparent 36%, rgba(128,111,100,0.045) 37%, transparent 39%, transparent 66%, rgba(183,154,98,0.03) 67%, transparent 69%),
          linear-gradient(180deg, ${palette.paperLight} 0%, ${palette.paper} 58%, ${palette.paperLight} 100%)
        `,
      }}
    >
      {/* TEXTURA DE PAPEL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(36,28,24,0.025) 0px,
              rgba(36,28,24,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

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
          borderColor: "rgba(183,154,98,0.25)",
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
          borderColor: "rgba(183,154,98,0.1)",
        }}
      />

      {/* ORNAMENTOS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#B79A62]/25
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#B79A62]/25
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#B79A62]/25
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#B79A62]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#B79A62]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#B79A62]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
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
              color: palette.mocha,
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
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
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
              backgroundColor: palette.paperLight,
              borderColor: "rgba(183,154,98,0.34)",
              boxShadow: "0 28px 70px rgba(36,28,24,0.12)",
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
                borderColor: "rgba(183,154,98,0.12)",
              }}
            />

            {/* FOTOGRAFÍA */}

            <div
              className="
                relative
                h-[390px]
                overflow-hidden
                bg-[#E5DED5]
                sm:h-[540px]
                md:h-[620px]
                lg:h-[680px]
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
                    object-cover
                    object-center
                  "
                  initial={{
                    opacity: 0,
                    scale: 1.025,
                    x: direction > 0 ? 18 : -18,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    zIndex: 2,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.012,
                    x: direction > 0 ? -16 : 16,
                    zIndex: 1,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.55,
                    },
                    scale: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    x: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              </AnimatePresence>

              {/* OVERLAY MUY DISCRETO */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                "
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 55%,
                      rgba(36,28,24,0.22) 100%
                    )
                  `,
                }}
              />

              {/* NUMERACIÓN */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  z-20
                  border
                  bg-[#FCFBF8]/90
                  px-4
                  py-2
                  sm:bottom-6
                  sm:left-6
                "
                style={{
                  borderColor: "rgba(183,154,98,0.34)",
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Fotografía {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* BOTÓN ANTERIOR */}

              <motion.button
                type="button"
                onClick={previousImage}
                aria-label="Mostrar fotografía anterior"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  bg-[#FCFBF8]/92
                  sm:left-5
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(183,154,98,0.4)",
                  color: palette.ink,
                  boxShadow: "0 8px 20px rgba(36,28,24,0.08)",
                }}
                whileHover={{
                  y: "-50%",
                  scale: 1.04,
                  backgroundColor: palette.paperLight,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <PreviousIcon />
              </motion.button>

              {/* BOTÓN SIGUIENTE */}

              <motion.button
                type="button"
                onClick={nextImage}
                aria-label="Mostrar siguiente fotografía"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  border
                  bg-[#FCFBF8]/92
                  sm:right-5
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(183,154,98,0.4)",
                  color: palette.ink,
                  boxShadow: "0 8px 20px rgba(36,28,24,0.08)",
                }}
                whileHover={{
                  y: "-50%",
                  scale: 1.04,
                  backgroundColor: palette.paperLight,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <NextIcon />
              </motion.button>
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
                sm:pt-9
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
                  color: palette.ink,
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
                    color: palette.warmGray,
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
                    color: palette.warmGray,
                  }}
                >
                  {String(totalImages).padStart(2, "0")}
                </span>
              </motion.p>

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
                          ? palette.ink
                          : "transparent",
                        borderColor: isActive
                          ? palette.ink
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
                  color: palette.warmGray,
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
              backgroundColor: "rgba(183,154,98,0.48)",
            }}
          />

        </motion.div>
      </div>
    </motion.section>
  );
}