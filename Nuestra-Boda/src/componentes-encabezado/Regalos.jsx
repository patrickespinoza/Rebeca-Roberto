import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================
   MESA DE REGALOS — REBECA & ROBERTO
   Transferencia bancaria · clásico · moka/otoñal
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
  mochaDark: "#3B2D27",

  autumn: "#A7684A",
  autumnDark: "#80604C",

  warmGray: "#806F64",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
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

function DecorativeDivider({ compact = false, light = false }) {
  const gold = light
    ? "rgba(216,194,154,0.76)"
    : "rgba(183,154,98,0.72)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to right, transparent, ${gold})`,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: gold,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to left, transparent, ${gold})`,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function GiftIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="8" width="18" height="13" />
      <path d="M12 8v13" />
      <path d="M3 12h18" />
      <path d="M7.5 8C5.6 8 4 6.7 4 5.2 4 4 5 3 6.3 3 9.2 3 12 8 12 8" />
      <path d="M16.5 8C18.4 8 20 6.7 20 5.2 20 4 19 3 17.7 3 14.8 3 12 8 12 8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

/* =========================================
   DATO BANCARIO
========================================= */

function BankInfoRow({
  label,
  value,
  accent = false,
  copyKey,
  copiado,
  onCopy,
}) {
  const estaCopiado = copiado === copyKey;

  return (
    <div
      className="
        grid
        gap-3
        border-b
        py-5
        text-left
        sm:grid-cols-[160px_1fr_auto]
        sm:items-center
        sm:gap-5
      "
      style={{
        borderColor: "rgba(183,154,98,0.16)",
      }}
    >
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.32em]
          sm:text-[9px]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {label}
      </p>

      <p
        className={`
          min-w-0
          break-all
          font-serif
          ${accent ? "text-[19px] sm:text-[21px]" : "text-[17px] sm:text-[19px]"}
        `}
        style={{
          color: accent ? palette.mocha : palette.inkSoft,
        }}
      >
        {value}
      </p>

      <motion.button
        type="button"
        onClick={() => onCopy(value, copyKey)}
        className="
          inline-flex
          w-fit
          items-center
          justify-center
          border
          px-4
          py-2
          text-[8px]
          uppercase
          tracking-[0.2em]
          sm:justify-self-end
        "
        style={{
          backgroundColor: estaCopiado
            ? palette.mocha
            : palette.paperLight,
          borderColor: estaCopiado
            ? palette.mocha
            : "rgba(183,154,98,0.45)",
          color: estaCopiado
            ? palette.paperLight
            : palette.mocha,
        }}
        whileHover={{
          y: -1,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        {estaCopiado ? "Copiado ✓" : "Copiar"}
      </motion.button>
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState("");

  /* =========================================
     DATOS BANCARIOS
     CAMBIAR DESPUÉS POR LOS DATOS REALES
  ========================================= */

  const cuentaInterbancaria = "021700065739756091";
  const numeroTarjeta = "4910897093382927";
  const titularTarjeta = "ROBERTO VELÁZQUEZ";

  const conceptoPrincipal = "Boda Rebeca y Roberto";
  const conceptoAlternativo = "Boda R y R";

  const copiarDato = async (texto, campo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(campo);

      window.setTimeout(() => {
        setCopiado("");
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };

  /* BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO */

  useEffect(() => {
    if (!mostrarModal) return undefined;

    const bodyOverflowAnterior = document.body.style.overflow;
    const htmlOverflowAnterior = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflowAnterior;
      document.documentElement.style.overflow = htmlOverflowAnterior;
    };
  }, [mostrarModal]);

  /* CERRAR CON ESCAPE */

  useEffect(() => {
    if (!mostrarModal) return undefined;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [mostrarModal]);

  return (
    <>
      {/* =========================================
          SECCIÓN PRINCIPAL
      ========================================= */}

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
          flex
          min-h-[680px]
          w-full
          items-center
          justify-center
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
            radial-gradient(
              circle at 14% 15%,
              rgba(183,154,98,0.1),
              transparent 30%
            ),

            radial-gradient(
              circle at 86% 82%,
              rgba(167,104,74,0.13),
              transparent 34%
            ),

            linear-gradient(
              145deg,
              ${palette.mochaDark} 0%,
              ${palette.mocha} 48%,
              ${palette.autumnDark} 100%
            )
          `,
        }}
      >
        {/* TEXTURA */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.18]
          "
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(255,255,255,0.025) 0px,
                rgba(255,255,255,0.025) 1px,
                transparent 1px,
                transparent 6px
              )
            `,
          }}
        />

        {/* MARCOS */}

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
            borderColor: "rgba(216,194,154,0.3)",
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
            borderColor: "rgba(216,194,154,0.1)",
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
            text-[#D8C29A]/30
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
            text-[#D8C29A]/30
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
            text-[#D8C29A]/30
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
            text-[#D8C29A]/30
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
            text-[#D8C29A]/10
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
            text-[#D8C29A]/10
            sm:h-[310px]
            sm:w-[180px]
            lg:right-2
          "
        />

        {/* CONTENIDO */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >
          <motion.div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              sm:h-20
              sm:w-20
            "
            style={{
              color: "#D8C29A",
              borderColor: "rgba(216,194,154,0.42)",
            }}
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <GiftIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>


          <div className="mt-5">
            <DecorativeDivider light />
          </div>

          <motion.h2
            className="
              mt-8
              text-[44px]
              font-normal
              italic
              leading-tight
              tracking-[-0.01em]
              sm:text-[58px]
              md:text-[68px]
            "
            style={{
              color: palette.paperLight,
              fontFamily: '"Dancing Script", cursive',
            }}
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.12,
            }}
          >
            Mesa de regalos
          </motion.h2>

          <motion.p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[13px]
              leading-7
              sm:text-[16px]
              sm:leading-8
            "
            style={{
              color: "rgba(252,251,248,0.72)",
            }}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.18,
            }}
          >
            Su presencia en este día es el regalo más importante para nosotros.
            Si desean tener un detalle adicional, ponemos a su disposición
            nuestros datos para transferencia bancaria.
          </motion.p>


          {/* BOTÓN */}

          <motion.button
            type="button"
            onClick={() => setMostrarModal(true)}
            className="
              mt-10
              inline-flex
              min-w-[240px]
              items-center
              justify-center
              gap-3
              border
              px-8
              py-4
              sm:min-w-[280px]
              sm:px-10
            "
            style={{
              backgroundColor: palette.paperLight,
              borderColor: "rgba(216,194,154,0.78)",
              color: palette.mochaDark,
              boxShadow: "0 14px 34px rgba(20,14,12,0.2)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: palette.paper,
            }}
            whileTap={{
              scale: 0.985,
            }}
          >
            <GiftIcon className="h-4 w-4" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Ver datos bancarios
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
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
              bg-[#241C18]/82
              px-4
              py-5
              backdrop-blur-sm
              sm:px-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setMostrarModal(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-modal-title"
          >
            <motion.div
              className="
                relative
                max-h-[92dvh]
                w-full
                max-w-2xl
                overflow-y-auto
                border
                px-6
                py-14
                text-center
                sm:px-10
                sm:py-16
                md:px-14
              "
              style={{
                backgroundColor: palette.paperLight,
                borderColor: "rgba(183,154,98,0.48)",
                boxShadow: "0 30px 100px rgba(0,0,0,0.34)",
              }}
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* TEXTURA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.18]
                "
                style={{
                  backgroundImage: `
                    radial-gradient(
                      circle at 18% 12%,
                      rgba(183,154,98,0.06),
                      transparent 30%
                    ),
                    repeating-linear-gradient(
                      0deg,
                      rgba(90,70,59,0.018) 0px,
                      rgba(90,70,59,0.018) 1px,
                      transparent 1px,
                      transparent 6px
                    )
                  `,
                }}
              />

              {/* BORDE INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7px]
                  border
                "
                style={{
                  borderColor: "rgba(183,154,98,0.15)",
                }}
              />

              {/* CERRAR */}

              <motion.button
                type="button"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar datos de regalos"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  bg-[#FCFBF8]
                  sm:right-6
                  sm:top-6
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(183,154,98,0.42)",
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: palette.paper,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <CloseIcon />
              </motion.button>

              {/* CONTENIDO */}

              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  flex-col
                  items-center
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                    borderColor: "rgba(183,154,98,0.42)",
                  }}
                >
                  <GiftIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Un detalle para nosotros
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h2
                  id="gift-modal-title"
                  className="
                    mt-7
                    text-[40px]
                    font-normal
                    italic
                    tracking-[-0.01em]
                    sm:text-[50px]
                  "
                  style={{
                    color: palette.mocha,
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                  }}
                >
                  Datos para transferencia
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-lg
                    font-serif
                    text-[14px]
                    leading-7
                    sm:text-base
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Gracias por acompañarnos y por querer formar parte de esta
                  nueva etapa de nuestra historia.
                </p>

                {/* DATOS BANCARIOS */}

                <div
                  className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-xl
                    border
                    px-5
                    py-3
                    sm:px-7
                  "
                  style={{
                    backgroundColor: "rgba(247,245,240,0.72)",
                    borderColor: "rgba(183,154,98,0.28)",
                  }}
                >
                  <BankInfoRow
                    label="Cuenta interbancaria"
                    value={cuentaInterbancaria}
                    accent
                    copyKey="cuenta"
                    copiado={copiado}
                    onCopy={copiarDato}
                  />

                  <BankInfoRow
                    label="Número de tarjeta"
                    value={numeroTarjeta}
                    accent
                    copyKey="tarjeta"
                    copiado={copiado}
                    onCopy={copiarDato}
                  />

                  <BankInfoRow
                    label="Titular"
                    value={titularTarjeta}
                    copyKey="titular"
                    copiado={copiado}
                    onCopy={copiarDato}
                  />

                  <div className="py-5 text-left">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.32em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.antiqueGoldDark,
                      }}
                    >
                      Concepto sugerido
                    </p>

                    <p
                      className="
                        mt-3
                        text-[23px]
                        italic
                        sm:text-[27px]
                      "
                      style={{
                        color: palette.mocha,
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      {conceptoPrincipal}
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[13px]
                        leading-6
                        sm:text-[14px]
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      También puedes utilizar:{" "}
                      <span style={{ color: palette.inkSoft }}>
                        {conceptoAlternativo}
                      </span>
                    </p>
                  </div>
                </div>

                {/* NOTA */}

                <div className="mt-9">
                  <DecorativeDivider compact />
                </div>

                <p
                  className="
                    mt-6
                    max-w-lg
                    text-[20px]
                    italic
                    leading-7
                    sm:text-[22px]
                  "
                  style={{
                    color: palette.inkSoft,
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
                  }}
                >
                  Su presencia siempre será nuestro mejor regalo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regalos;