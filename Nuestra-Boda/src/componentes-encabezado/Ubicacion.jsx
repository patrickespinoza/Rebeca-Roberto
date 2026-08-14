import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN — REBECA & ROBERTO

   PALETA FINAL:
   - Marmoleado = color principal
   - Dorado = detalles y acentos
   - Negro = textos
   - Blanco = contraste puntual

   Sin moka
   Sin otoñal
   Sin degradados
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

function DecorativeDivider({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: light ? palette.white : palette.gold,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: light ? palette.white : palette.gold,
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: light ? palette.white : palette.gold,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONO UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   BLOQUE DE EVENTO
========================================= */

function EventBlock({
  eyebrow,
  time,
  place,
  address,
  href,
  delay = 0,
  accent = false,
}) {
  return (
    <motion.article
      className="
        relative
        flex
        min-h-[520px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        border
        px-7
        py-14
        text-center
        sm:min-h-[560px]
        sm:px-10
        sm:py-16
        lg:px-12
      "
      style={{
        backgroundColor: palette.marble,
        borderColor: accent ? palette.gold : palette.black,
      }}
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* DETALLE SUPERIOR */}

      <div
        className="
          absolute
          left-1/2
          top-8
          h-px
          w-16
          -translate-x-1/2
        "
        style={{
          backgroundColor: palette.gold,
        }}
      />

      {/* TIPO */}

      <p
        className="
          text-[23px]
          tracking-[0.05em]
          sm:text-[27px]
        "
        style={{
          color: palette.gold,
          fontFamily: '"Dancing Script", cursive',
        }}
      >
        {eyebrow}
      </p>

      <div className="my-7 sm:my-8">
        <DecorativeDivider />
      </div>

      {/* HORA */}

      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.36em]
          sm:text-[9px]
        "
        style={{
          color: palette.black,
        }}
      >
        Hora
      </p>

      <p
        className="
          mt-3
          font-serif
          text-[50px]
          font-normal
          leading-none
          tracking-[-0.035em]
          sm:text-[62px]
          lg:text-[68px]
        "
        style={{
          color: palette.black,
        }}
      >
        {time}
      </p>

      {/* UBICACIÓN */}

      <div className="mt-9 sm:mt-10">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.38em]
            sm:text-[9px]
          "
          style={{
            color: palette.black,
          }}
        >
          Ubicación
        </p>

        <p
          className="
            mx-auto
            mt-4
            max-w-md
            font-serif
            text-[22px]
            leading-relaxed
            sm:text-[25px]
          "
          style={{
            color: palette.black,
          }}
        >
          {place}
        </p>

        {address && (
          <p
            className="
              mx-auto
              mt-2
              max-w-md
              text-[12px]
              leading-6
              sm:text-[13px]
            "
            style={{
              color: palette.black,
            }}
          >
            {address}
          </p>
        )}
      </div>

      {/* BOTÓN */}

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ubicación de ${eyebrow} en Google Maps`}
        className="
          group
          mt-9
          inline-flex
          min-w-[220px]
          items-center
          justify-center
          gap-3
          border
          px-8
          py-4
          sm:min-w-[250px]
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
        <LocationIcon />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            sm:text-[10px]
            sm:tracking-[0.34em]
          "
        >
          Ver ubicación
        </span>
      </motion.a>
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function EventoDireccion() {
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

      {/* ESQUINAS */}

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

      {/* RAMAS */}



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
            max-w-3xl
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[20px]
              tracking-[0.05em]
              sm:text-[28px]
            "
            style={{
              color: palette.gold,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Nuestra celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              text-[44px]
              font-normal
              italic
              leading-[1.05]
              sm:text-[58px]
              md:text-[68px]
            "
            style={{
              color: palette.black,
              fontFamily: '"Cormorant Garamond", Georgia, serif',
            }}
          >
            Un día para recordar
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
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
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.div>

        {/* FECHA */}

        <motion.div
          className="
            relative
            mx-auto
            mb-8
            flex
            max-w-4xl
            flex-col
            items-center
            overflow-hidden
            border
            px-7
            py-12
            text-center
            sm:mb-10
            sm:px-10
            sm:py-14
          "
          style={{
            backgroundColor: palette.white,
            borderColor: palette.gold,
          }}
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
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

          <p
            className="
              text-[18px]
              tracking-[0.05em]
              sm:text-[22px]
            "
            style={{
              color: palette.gold,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Reserve la fecha
          </p>

          <div className="my-6">
            <DecorativeDivider />
          </div>

          <p
            className="
              font-serif
              text-lg
              uppercase
              tracking-[0.18em]
              sm:text-xl
            "
            style={{
              color: palette.black,
            }}
          >
            Sábado
          </p>

          <p
            className="
              my-2
              font-serif
              text-[92px]
              font-normal
              leading-none
              tracking-[-0.06em]
              sm:text-[118px]
            "
            style={{
              color: palette.black,
            }}
          >
            24
          </p>

          <p
            className="
              font-serif
              text-[12px]
              uppercase
              tracking-[0.4em]
              sm:text-sm
              sm:tracking-[0.52em]
            "
            style={{
              color: palette.gold,
            }}
          >
            Octubre · 2026
          </p>
        </motion.div>

        {/* CEREMONIA + RECEPCIÓN */}

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-6
            lg:grid-cols-2
          "
        >
          <EventBlock
            eyebrow="Ceremonia Religiosa"
            time="5:00 pm"
            place="Palacio Monumental (Segunda Planta)"
            address="Agustín de Iturbide 660, Centro Historico, 78000 San Luis Potosí, S.L.P."
            href="https://maps.app.goo.gl/aQm6SH3Y9Zx3fSfp9"
            delay={0.18}
            accent
          />

          <EventBlock
            eyebrow="Recepción"
            time="6:00 pm"
            place="Casa D Vian (Entrada por la Florida)"
            address="Real de Bernalejo 183, Real del Potosi, 78448 Real del Potosí, S.L.P."
            href="https://maps.app.goo.gl/kkV27aMqj1dUSYmc6"
            delay={0.26}
          />
        </div>

        {/* CIERRE */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            text-[18px]
            italic
            leading-8
            sm:mt-14
            sm:text-[20px]
          "
          style={{
            color: palette.black,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.52,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}