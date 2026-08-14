import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./encabeza-cuenta";

/* =========================================
   PORTADA CLÁSICA EDITORIAL
========================================= */

const palette = {
  // Rebeca & Roberto — mármol blanco, moka y dorado envejecido.
  ink: "#241C18",
  inkSoft: "#5A463B",
  paper: "#F7F5F0",
  paperLight: "#FCFBF8",
  paperDark: "#DED7CE",
  antiqueGold: "#B79A62",
  antiqueGoldDark: "#8A6B3F",
  warmGray: "#806F64",
  line: "#D8D4CD",
};

const transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 76V25C4 13.4 13.4 4 25 4h51"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M13 64V29c0-8.8 7.2-16 16-16h35"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M25 4c0 11.6-9.4 21-21 21"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle cx="13" cy="13" r="1.8" fill="currentColor" />

      <path
        d="M18 18c10 3 17 10 20 20"
        stroke="currentColor"
        strokeWidth="0.65"
      />
    </svg>
  );
}

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] = useState(false);



useEffect(() => {
  if (!introActiva) return;

  const scrollAnterior = window.scrollY;

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    window.scrollTo({
      top: scrollAnterior > 0 ? 0 : scrollAnterior,
      left: 0,
      behavior: "auto",
    });
  };
}, [introActiva]);
  /* =========================================
     ABRIR INVITACIÓN
  ========================================= */

  const iniciarExperiencia = () => {
  if (procesandoApertura || abrirSobre) return;

  setProcesandoApertura(true);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  setAbrirSobre(true);

  window.setTimeout(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.45;

      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.warn("No se pudo reproducir el audio:", error);
      });
    }
  }, 400);

  window.setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setIntroActiva(false);
    setMostrarContenido(true);
    setProcesandoApertura(false);
  }, 1900);
};

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
      style={{
        backgroundColor: palette.paperLight,
        color: palette.ink,
      }}
    >
      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* =========================================
          INTRO DEL SOBRE
      ========================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
  key="intro-clasica"
  className="
    fixed
    inset-0
    z-[9999]
    flex
    h-[100dvh]
    w-full
    items-center
    justify-center
    overflow-hidden
    overscroll-none
    px-4
    py-3
    sm:px-8
    lg:px-12
  "
  style={{
    backgroundColor: palette.paperLight,
    backgroundImage: `
      radial-gradient(
        ellipse at 12% 18%,
        rgba(183,154,98,0.07) 0%,
        transparent 34%
      ),
      radial-gradient(
        ellipse at 88% 72%,
        rgba(90,70,59,0.055) 0%,
        transparent 38%
      ),
      linear-gradient(
        118deg,
        transparent 0%,
        transparent 34%,
        rgba(128,111,100,0.055) 35%,
        transparent 37%,
        transparent 61%,
        rgba(183,154,98,0.04) 62%,
        transparent 64%
      ),
      linear-gradient(
        164deg,
        rgba(255,255,255,0.72) 0%,
        rgba(247,245,240,0.92) 48%,
        rgba(252,251,248,0.98) 100%
      )
    `,
    touchAction: "none",
  }}
  initial={{ opacity: 1 }}
  exit={{
    opacity: 0,
    scale: 1.01,
  }}
  transition={{
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  }}
>
            {/* MARCO EXTERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-4
                border
                sm:inset-7
                lg:inset-9
              "
              style={{
                borderColor: "rgba(183,154,98,0.3)",
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-[21px]
                border
                sm:inset-[34px]
                lg:inset-[42px]
              "
              style={{
                borderColor: "rgba(183,154,98,0.12)",
              }}
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                left-5
                top-5
                h-16
                w-16
                text-[#B79A62]/50
                sm:left-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                h-16
                w-16
                rotate-90
                text-[#B79A62]/50
                sm:right-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                h-16
                w-16
                -rotate-90
                text-[#B79A62]/50
                sm:bottom-8
                sm:left-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                right-5
                h-16
                w-16
                rotate-180
                text-[#B79A62]/50
                sm:bottom-8
                sm:right-8
                sm:h-20
                sm:w-20
              "
            />

            <div
              className="
                relative
                z-10
                mx-auto
                flex
                w-full
                items-center
                justify-center
              "
            >
              {/* SOBRE */}



              <motion.div
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                "
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...transition,
                  delay: 0.15,
                }}
              >
                <div
                  onClick={iniciarExperiencia}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      iniciarExperiencia();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir invitación"
                  className="
                    group
                    relative
                    aspect-[350/235]
                    w-[76vw]
                    max-w-[300px]
                    sm:w-[88vw]
                    sm:max-w-[420px]
                    cursor-pointer
                    outline-none
                    lg:w-full
                    lg:max-w-[430px]
                  "
                  style={{
                    perspective: 2200,
                  }}
                >
                  {/* SOMBRA DEL SOBRE */}

                  <div
                    className="
                      absolute
                      -bottom-7
                      left-1/2
                      h-12
                      w-[72%]
                      -translate-x-1/2
                      rounded-full
                      bg-black/15
                      blur-2xl
                    "
                  />

                  {/* CARTA INTERIOR */}

                  <motion.div
                    className="
                      absolute
                      left-1/2
                      top-[9%]
                      z-10
                      flex
                      h-[78%]
                      w-[82%]
                      -translate-x-1/2
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      px-5
                      py-5
                      text-center
                    "
                    style={{
                      backgroundColor: palette.paperLight,
                      borderColor: "rgba(183,154,98,0.32)",
                      boxShadow: "0 14px 30px rgba(36,28,24,0.13)",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            y: -82,
                            scale: 1.015,
                          }
                        : {
                            y: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CornerOrnament
                      className="
                        absolute
                        left-2
                        top-2
                        h-10
                        w-10
                        text-[#B79A62]/35
                      "
                    />

                    <CornerOrnament
                      className="
                        absolute
                        bottom-2
                        right-2
                        h-10
                        w-10
                        rotate-180
                        text-[#B79A62]/35
                      "
                    />


                    <div
                      className="
                        my-4
                        h-px
                        w-12
                      "
                      style={{
                        backgroundColor: "rgba(183,154,98,0.65)",
                      }}
                    />

                    <p
                      className="
                        font-serif
                        text-[21px]
                        leading-tight
                        sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Rebeca
                    </p>

                    <span
                      className="
                        my-0.5
                        font-cursiveDancing
                        text-lg
                        sm:text-xl
                      "
                      style={{ color: palette.antiqueGold }}
                    >
                      &
                    </span>

                    <p
                      className="
                        font-serif
                        text-[21px]
                        leading-tight
                        sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Roberto
                    </p>

                    <p
                      className="
                        mt-4
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        sm:text-[8px]
                      "
                      style={{ color: palette.warmGray }}
                    >
                      24 · 10 · 2026
                    </p>
                  </motion.div>

                  {/* CUERPO DEL SOBRE */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      border
                    "
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          #EEE8DE 0%,
                          #DED4C6 52%,
                          #CBBEAD 100%
                        )
                      `,
                      borderColor: "rgba(138,107,63,0.25)",
                      boxShadow: `
                        0 28px 55px rgba(36,28,24,0.16),
                        inset 0 1px 0 rgba(255,255,255,0.65)
                      `,
                    }}
                    animate={
                      abrirSobre
                        ? {
                            scale: 1.012,
                            y: 6,
                          }
                        : {
                            scale: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* TEXTURA DE PAPEL */}

                    <div
                      className="absolute inset-0 opacity-[0.15]"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            90deg,
                            rgba(90,70,59,0.055) 0px,
                            rgba(90,70,59,0.055) 1px,
                            transparent 1px,
                            transparent 6px
                          ),
                          linear-gradient(
                            135deg,
                            rgba(255,255,255,0.12),
                            transparent 45%,
                            rgba(183,154,98,0.045)
                          )
                        `,
                      }}
                    />

                    {/* SOLAPAS INFERIORES */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(138,107,63,0.15)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.16), transparent)",
                      }}
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(138,107,63,0.15)",
                        background:
                          "linear-gradient(215deg, rgba(255,255,255,0.12), transparent)",
                      }}
                    />
                  </motion.div>

                  {/* TAPA DEL SOBRE */}

                  <motion.div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      h-[54%]
                      w-full
                      origin-top
                      overflow-hidden
                    "
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      background: `
                        linear-gradient(
                          180deg,
                          #EAE2D7 0%,
                          #D4C7B7 100%
                        )
                      `,
                      boxShadow: "0 13px 24px rgba(36,28,24,0.12)",
                      backfaceVisibility: "hidden",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            rotateX: -182,
                            y: -3,
                          }
                        : {
                            rotateX: 0,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* SELLO CLÁSICO */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-30
                      flex
                      items-center
                      justify-center
                    "
                    animate={
                      abrirSobre
                        ? {
                            scale: 0.7,
                            opacity: 0,
                            y: -16,
                          }
                        : {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.55,
                    }}
                  >
                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-full
                        sm:h-[86px]
                        sm:w-[86px]
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 35% 28%,
                            #C4A56B 0%,
                            #9A7744 45%,
                            #70522D 100%
                          )
                        `,
                        boxShadow: `
                          inset 0 2px 4px rgba(255,255,255,0.24),
                          inset 0 -5px 9px rgba(45,34,19,0.28),
                          0 10px 18px rgba(36,28,24,0.17)
                        `,
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-[7px]
                          rounded-full
                          border
                        "
                        style={{
                          borderColor: "rgba(245,241,232,0.28)",
                        }}
                      />

                      <div
                        className="
                          relative
                          z-10
                          font-serif
                          text-lg
                          italic
                          sm:text-2xl
                        "
                        style={{
                          color: "#F2E7D2",
                          textShadow: "0 1px 2px rgba(36,28,24,0.35)",
                        }}
                      >
                        R
                        <span className="mx-1 text-[11px] sm:text-sm">
                          &
                        </span>
                        R
                      </div>
                    </div>
                  </motion.div>

                  {/* TEXTO ABRIR */}

                  <motion.p
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-4
                      z-40
                      text-center
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      sm:text-[9px]
                    "
                    style={{ color: palette.inkSoft }}
                    animate={{
                      opacity: abrirSobre ? 0 : 0.75,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    Abrir
                  </motion.p>
                </div>

              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =========================================
          PORTADA PRINCIPAL
      ========================================= */}

      <section
        className="
          relative
          h-[100svh]
          min-h-[100svh]
          w-full
          overflow-hidden
        "
        style={{ backgroundColor: palette.ink }}
      >
        {/* FOTOGRAFÍA */}

        <img
          src="/portada.jpg"
          alt="Rebeca y Roberto"
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            max-w-none
            object-cover
          "
          style={{
            objectPosition: "-2% 50%",
            transform: "none",
          }}
          draggable="false"
        />
        {/* OVERLAY CINEMATOGRÁFICO DISCRETO */}

        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(24,18,15,0.46) 0%,
                rgba(24,18,15,0.12) 32%,
                rgba(24,18,15,0.20) 54%,
                rgba(24,18,15,0.82) 100%
              ),
              linear-gradient(
                90deg,
                rgba(24,18,15,0.18) 0%,
                transparent 35%,
                transparent 65%,
                rgba(24,18,15,0.18) 100%
              )
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        />

        {/* GRANO EDITORIAL */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
          "
          style={{
            backgroundImage: `
              radial-gradient(
                rgba(255,255,255,0.32) 0.5px,
                transparent 0.5px
              )
            `,
            backgroundSize: "5px 5px",
          }}
        />

        {/* MARCO */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-4
            z-10
            border
            sm:inset-7
            lg:inset-9
          "
          style={{
            borderColor: "rgba(245,241,232,0.34)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />

        {/* CONTENIDO */}

        <motion.div
          className="
relative
z-20
flex
min-h-[100svh]
w-full
flex-col
items-center
justify-start
px-5
pt-8
pb-5
text-center
sm:px-12
sm:pt-16
lg:px-16
lg:pt-20
"
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          {/* ENCABEZADO */}

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              ...transition,
              delay: 0.5,
            }}
          >
           
            <div
              className="
                mx-auto
                mt-2
                sm:mt-4
                h-px
                w-14
              "
              style={{
                backgroundColor: "rgba(245,241,232,0.7)",
              }}
            />


          </motion.div>

          {/* NOMBRES */}

          <motion.div
            className="
              flex
              max-w-4xl
              flex-col
              items-center
              
            "
            initial={{ opacity: 0, y: 24 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >


            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#FCFBF8]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.32)",
                fontFamily: '"Dancing Script", cursive',
              }}
            >
              Rebeca
            </h1>

            <div className="my-2 flex items-center gap-3 sm:my-4 sm:gap-6">
              <span
                className="
                  h-px
                  w-12
                  sm:w-20
                "
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(216,198,166,0.8))",
                }}
              />

              <span
                className="
                  font-cursiveDancing
                  text-2xl
                  text-[#D8C29A]
                  sm:text-4xl
                "
              >
                &
              </span>

              <span
                className="
                  h-px
                  w-12
                  sm:w-20
                "
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(216,198,166,0.8))",
                }}
              />
            </div>

            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#FCFBF8]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.32)",
                fontFamily: '"Dancing Script", cursive',
              }}
            >
              Roberto 
            </h1>

          </motion.div>

          {/* CONTADOR */}

          <motion.div
            className="
              w-full
              max-w-4xl
              mt-auto
              pt-3
              pb-1
              sm:pt-6
              sm:pb-4
            "
            initial={{ opacity: 0, y: 18 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >

            <Countdown targetDate="2026-10-24T00:00:00" />

            <motion.div
              className="
                mt-4
                flex
                flex-col
                items-center
                sm:mt-10
              "
              initial={{ opacity: 0 }}
              animate={{
                opacity: mostrarContenido ? 1 : 0,
              }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                  text-[#F7F5F0]/65
                  sm:text-[9px]
                "
              >
                Desliza para continuar
              </p>

              <div
                className="
                  mt-2
                  sm:mt-4
                  h-6
                  sm:h-9
                  w-px
                  overflow-hidden
                  bg-[#F7F5F0]/25
                "
              >
                <motion.span
                  className="
                    block
                    h-4
                    w-px
                    bg-[#F7F5F0]/80
                  "
                  animate={{
                    y: [-16, 36],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.25,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}