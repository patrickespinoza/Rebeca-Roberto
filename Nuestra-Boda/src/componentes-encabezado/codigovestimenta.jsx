import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA — REBECA & ROBERTO

   DISEÑO:
   - Marmoleado = fondo principal
   - Dorado = detalles y acentos
   - Negro = textos
   - Blanco = contraste puntual

   NOTA:
   Azul marino, moka y blanco se conservan
   únicamente como colores reservados.
========================================= */

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  marble: "#F5F3EE",
  gold: "#B79A62",

  /* SOLO PARA MOSTRAR COLORES RESERVADOS */
  navyReserved: "#17243B",
  mochaReserved: "#5A463B",
  whiteReserved: "#FFFFFF",
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

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
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
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.gold,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONO ADULTOS
========================================= */

function AdultEventIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M7 4h10" />
      <path d="m8.5 4 1.2 6a4.3 4.3 0 0 0 8.5 0l1.2-6" />
      <path d="M14 14v6" />
      <path d="M10.5 20h7" />
      <path d="M9.5 8h9" />
    </svg>
  );
}

/* =========================================
   SILUETA
========================================= */

function SilhouettePlaceholder({ type }) {
  const isWoman = type === "woman";

  return (
    <div
      className="
        relative
        flex
        h-[480px]
        w-full
        items-center
        justify-center
        overflow-hidden
        border-b
        sm:h-[560px]
        lg:h-[650px]
      "
      style={{
        backgroundColor: palette.white,
        borderColor: palette.gold,
      }}
    >
      <img
        src={isWoman ? "/siluetaM.png" : "/siluetaH.png"}
        alt={
          isWoman
            ? "Silueta de dama con vestido largo"
            : "Silueta de caballero con traje formal"
        }
        className="
          relative
          z-10
          h-full
          w-full
          object-contain
          object-bottom
        "
      />
    </div>
  );
}

/* =========================================
   PANEL DE VESTIMENTA
========================================= */

function DressPanel({
  title,
  subtitle,
  description,
  details,
  type,
  index,
}) {
  return (
    <motion.article
      className="
        relative
        overflow-hidden
        border
      "
      style={{
        backgroundColor: palette.marble,
        borderColor: palette.gold,
      }}
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.9,
        delay: 0.12 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
 

      {/* IMAGEN */}

      <SilhouettePlaceholder
        type={type === "man" ? "man" : "woman"}
      />

      {/* INFORMACIÓN */}

      <div
        className="
          relative
          px-7
          pb-12
          pt-10
          text-center
          sm:px-10
          sm:pb-14
          sm:pt-12
        "
      >
        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.32em]
            sm:text-[14px]
          "
          style={{
            color: palette.gold,
          }}
        >
          {subtitle}
        </p>

        <h3
          className="
            mt-5
            text-[38px]
            font-normal
            italic
            leading-tight
            sm:text-[46px]
          "
          style={{
            color: palette.black,
            fontFamily:
              '"Cormorant Garamond", Georgia, serif',
          }}
        >
          {title}
        </h3>

        <div className="my-7">
          <DecorativeDivider />
        </div>

        {description && (
          <p
            className="
              mx-auto
              max-w-sm
              font-serif
              text-[15px]
              leading-7
              sm:text-base
            "
            style={{
              color: palette.black,
            }}
          >
            {description}
          </p>
        )}

        {details && (
          <p
            className="
              mx-auto
              mt-4
              max-w-sm
              text-[17px]
              italic
              leading-7
              sm:text-[19px]
            "
            style={{
              color: palette.black,
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
            }}
          >
            {details}
          </p>
        )}

        <p
          className="
            absolute
            bottom-5
            right-6
            font-serif
            text-[10px]
            tracking-[0.25em]
          "
          style={{
            color: palette.gold,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================
   COLOR RESERVADO
========================================= */

function ReservedColor({ color, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className="
          h-10
          w-10
          rounded-full
          border
          sm:h-12
          sm:w-12
        "
        style={{
          backgroundColor: color,
          borderColor: palette.gold,
        }}
      />

      <span
        className="
          text-[8px]
          uppercase
          tracking-[0.2em]
        "
        style={{
          color: palette.black,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const DressCodePremium = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        relative
        flex
        min-h-[760px]
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

      {/* ORNAMENTOS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#B79A62]
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
          text-[#B79A62]
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
          text-[#B79A62]
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
          text-[#B79A62]
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#B79A62]
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
          text-[#B79A62]
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
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-14
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
          <p
            className="
              text-[15px]
              uppercase
              tracking-[0.38em]
              sm:text-[18px]
            "
            style={{
              color: palette.gold,
            }}
          >
            Detalles de la celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              text-[44px]
              font-normal
              leading-tight
              sm:text-[58px]
              md:text-[68px]
            "
            style={{
              color: palette.black,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Código de vestimenta
          </h2>
        </motion.div>

        {/* CABALLEROS + DAMAS */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-7
            sm:gap-9
            md:grid-cols-2
          "
        >
          <DressPanel
            title="Caballeros"
            subtitle="Vestimenta formal"
            type="man"
            index={0}
          />

          <DressPanel
            title="Damas"
            subtitle="Vestimenta formal"
            type="woman"
            index={1}
          />
        </div>

        {/* COLORES RESERVADOS */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-3xl
            border-y
            px-5
            py-9
            text-center
            sm:mt-16
            sm:px-8
            sm:py-10
          "
          style={{
            borderColor: palette.gold,
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
            duration: 0.85,
            delay: 0.28,
          }}
        >
          <p
            className="
              text-[13px]
              uppercase
              tracking-[0.32em]
            "
            style={{
              color: palette.gold,
            }}
          >
            Colores reservados
          </p>

          <h3
            className="
              mt-4
              text-[28px]
              font-normal
              italic
              sm:text-[34px]
            "
            style={{
              color: palette.black,
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Azul marino · Moka · Blanco
          </h3>

          <div
            className="
              mx-auto
              mt-7
              flex
              items-center
              justify-center
              gap-5
              sm:gap-7
            "
          >
            <ReservedColor
              color={palette.navyReserved}
              label="Marino"
            />

            <ReservedColor
              color={palette.mochaReserved}
              label="Moka"
            />

            <ReservedColor
              color={palette.whiteReserved}
              label="Blanco"
            />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-[14px]
              leading-7
              sm:text-[15px]
            "
            style={{
              color: palette.black,
            }}
          >
            Agradecemos a nuestras invitadas elegir una tonalidad distinta a
            estos colores.
          </p>
        </motion.div>

        {/* SOLO ADULTOS */}

        <motion.div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-14
          "
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
            duration: 0.85,
            delay: 0.36,
          }}
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              borderColor: palette.gold,
              color: palette.gold,
            }}
          >
            <AdultEventIcon />
          </div>

          <p
            className="
              mt-5
              text-[13px]
              uppercase
              tracking-[0.32em]
            "
            style={{
              color: palette.gold,
            }}
          >
            Consideración especial
          </p>

          <p
            className="
              mt-3
              text-[25px]
              italic
              sm:text-[29px]
            "
            style={{
              color: palette.black,
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Celebración solo para adultos
          </p>

          <p
            className="
              mt-3
              max-w-md
              font-serif
              text-[13px]
              leading-7
              sm:text-[15px]
            "
            style={{
              color: palette.black,
            }}
          >
            Queremos que esta noche sea una ocasión para celebrar, brindar y
            disfrutar juntos. Por ello, nuestra celebración será
            exclusivamente para adultos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;