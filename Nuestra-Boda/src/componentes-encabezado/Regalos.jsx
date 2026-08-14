import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================
   MESA DE REGALOS — REBECA & ROBERTO

   DISEÑO:
   - Marmoleado = fondo principal
   - Dorado = detalles y acentos
   - Negro = textos
   - Blanco = contraste

   Sin moka
   Sin otoñal
   Sin degradados
   Sin flores ni ramas
========================================= */

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  marble: "#F5F3EE",
  gold: "#B79A62",
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
   SEPARADOR
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={
          compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"
        }
        style={{
          backgroundColor: palette.gold,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: palette.gold,
        }}
      />

      <span
        className={
          compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"
        }
        style={{
          backgroundColor: palette.gold,
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
        borderColor: palette.gold,
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
          color: palette.gold,
        }}
      >
        {label}
      </p>

      <p
        className={`
          min-w-0
          break-all
          font-serif
          ${
            accent
              ? "text-[19px] sm:text-[21px]"
              : "text-[17px] sm:text-[19px]"
          }
        `}
        style={{
          color: palette.black,
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
            ? palette.gold
            : palette.white,
          borderColor: palette.gold,
          color: estaCopiado
            ? palette.white
            : palette.black,
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
    const htmlOverflowAnterior =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflowAnterior;
      document.documentElement.style.overflow =
        htmlOverflowAnterior;
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
      window.removeEventListener(
        "keydown",
        cerrarConEscape
      );
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
          backgroundColor: palette.marble,
        }}
      >
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
              bg-white
              sm:h-20
              sm:w-20
            "
            style={{
              color: palette.gold,
              borderColor: palette.gold,
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
            <DecorativeDivider />
          </div>

          <motion.h2
            className="
              mt-8
              text-[44px]
              font-normal
              leading-tight
              tracking-[-0.01em]
              sm:text-[58px]
              md:text-[68px]
            "
            style={{
              color: palette.black,
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
              color: palette.black,
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
            Su presencia en este día es el regalo más importante
            para nosotros. Si desean tener un detalle adicional,
            ponemos a su disposición nuestros datos para
            transferencia bancaria.
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
              backgroundColor: palette.gold,
              borderColor: palette.gold,
              color: palette.white,
            }}
            whileHover={{
              y: -2,
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
              bg-black
              px-4
              py-5
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
                backgroundColor: palette.marble,
                borderColor: palette.gold,
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
                  bg-white
                  sm:right-6
                  sm:top-6
                "
                style={{
                  color: palette.black,
                  borderColor: palette.gold,
                }}
                whileHover={{
                  scale: 1.04,
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
                    bg-white
                  "
                  style={{
                    color: palette.gold,
                    borderColor: palette.gold,
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
                    color: palette.gold,
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
                    color: palette.black,
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
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
                    color: palette.black,
                  }}
                >
                  Gracias por acompañarnos y por querer formar
                  parte de esta nueva etapa de nuestra historia.
                </p>

                {/* DATOS BANCARIOS */}

                <div
                  className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-xl
                    border
                    bg-white
                    px-5
                    py-3
                    sm:px-7
                  "
                  style={{
                    borderColor: palette.gold,
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
                        color: palette.gold,
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
                        color: palette.black,
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
                        color: palette.black,
                      }}
                    >
                      También puedes utilizar:{" "}
                      <span
                        style={{
                          color: palette.black,
                        }}
                      >
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
                    color: palette.black,
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