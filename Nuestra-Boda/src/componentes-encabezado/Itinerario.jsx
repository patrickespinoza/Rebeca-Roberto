import { motion } from "framer-motion";

/* =========================================
   ITINERARIO CLÁSICO EDITORIAL
   Fondo marmoleado global
========================================= */

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  gold: "#B79A62",
};

/* =========================================
   EVENTOS
   time = hora
   place = lugar
   title = evento
   description = descripción
========================================= */

const events = [
  {
    time: "5:00 pm",
    place: "(Palacio Monumental)",
    title: "Ceremonia",
    description: "Ceremonia religiosa.",
    icon: "rings",
  },
  {
    time: "6:00 pm",
    place: "(Casa D Vian)",
    title: "Recepción",
    description: "Bienvenida.",
    icon: "glass",
  },
  {
    time: "7:00 pm",
    place: "(Casa D Vian)",
    title: "Banquete",
    description: "Banquete con un menú especial.",
    icon: "dinner",
  },
  {
    time: "9:00 pm",
    place: "(Casa D Vian)",
    title: "Fiesta",
    description: "Una noche para celebrar juntos.",
    icon: "music",
  },
];

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
   ICONOS
========================================= */

function EventIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5 sm:h-6 sm:w-6",
    "aria-hidden": true,
  };

  if (type === "rings") {
    return (
      <svg {...commonProps}>
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
        <path d="M12 5.5 14 3l2 2.5" />
      </svg>
    );
  }

  if (type === "glass") {
    return (
      <svg {...commonProps}>
        <path d="M7 4h10l-1.2 7.2A4 4 0 0 1 12 14.5a4 4 0 0 1-3.8-3.3Z" />
        <path d="M12 14.5V21" />
        <path d="M8.5 21h7" />
        <path d="M8.5 8h7" />
      </svg>
    );
  }

  if (type === "dinner") {
    return (
      <svg {...commonProps}>
        <path d="M7 3v8" />
        <path d="M4.5 3v5a2.5 2.5 0 0 0 5 0V3" />
        <path d="M7 11v10" />
        <path d="M16 3v18" />
        <path d="M16 3c2.5 2 3.5 5.5 0 8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
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
   DETALLE BOTÁNICO
========================================= */

function BotanicalDetail({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 210"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M66 203C70 158 70 112 65 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M66 164C49 153 39 139 34 121"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M66 139C82 128 92 113 96 94"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 103C50 92 42 79 39 64"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 76C80 66 87 52 89 38"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M34 121C44 120 52 126 57 137C46 137 38 132 34 121Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M96 94C86 94 78 100 72 111C84 111 92 105 96 94Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 64C49 65 57 71 61 82C50 81 42 75 39 64Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M89 38C80 39 73 45 68 55C79 54 86 49 89 38Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle
        cx="65"
        cy="16"
        r="3"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   EVENTO DE LA CRONOLOGÍA
========================================= */

function TimelineEvent({ event, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        grid-cols-[44px_1fr]
        gap-5
        sm:grid-cols-[58px_1fr]
        sm:gap-7
        lg:grid-cols-[1fr_80px_1fr]
        lg:gap-10
      "
    >
      {/* LÍNEA VERTICAL EN MÓVIL */}

      {!isLast && (
        <div
          className="
            absolute
            left-[21px]
            top-11
            h-[calc(100%+28px)]
            w-px
            sm:left-[28px]
            lg:hidden
          "
          style={{
            backgroundColor: palette.gold,
          }}
        />
      )}

      {/* CONTENIDO IZQUIERDO EN COMPUTADORA */}

      <div
        className={`
          hidden
          lg:flex
          lg:flex-col
          lg:justify-center
          ${isEven ? "lg:items-end lg:text-right" : "lg:invisible"}
        `}
      >
        {isEven && <EventContent event={event} alignment="right" />}
      </div>

      {/* MARCADOR CENTRAL */}

      <div
        className="
          relative
          z-10
          col-start-1
          row-start-1
          flex
          justify-center
          lg:col-start-2
        "
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
            bg-white
            sm:h-14
            sm:w-14
          "
          style={{
            borderColor: palette.gold,
            color: palette.gold,
          }}
        >
          <EventIcon type={event.icon} />
        </div>

        {!isLast && (
          <div
            className="
              pointer-events-none
              absolute
              top-14
              hidden
              h-[calc(100%+50px)]
              w-px
              lg:block
            "
            style={{
              backgroundColor: palette.gold,
            }}
          />
        )}
      </div>

      {/* CONTENIDO MÓVIL Y DERECHO EN COMPUTADORA */}

      <div
        className={`
          col-start-2
          row-start-1
          pb-11
          sm:pb-14
          lg:col-start-3
          lg:flex
          lg:flex-col
          lg:justify-center
          ${isEven ? "lg:invisible" : "lg:items-start lg:text-left"}
        `}
      >
        <div className="lg:hidden">
          <EventContent event={event} alignment="left" />
        </div>

        {!isEven && (
          <div className="hidden lg:block">
            <EventContent event={event} alignment="left" />
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* =========================================
   CONTENIDO DE CADA EVENTO
========================================= */

function EventContent({ event, alignment }) {
  const isRight = alignment === "right";

  return (
    <div
      className={`
        w-full
        max-w-md
        ${isRight ? "lg:ml-auto" : "lg:mr-auto"}
      `}
    >
      {/* HORA */}

      <p
        className="
          font-serif
          text-[33px]
          leading-none
          tracking-[-0.025em]
          sm:text-[39px]
        "
        style={{
          color: palette.black,
        }}
      >
        {event.time}
      </p>

      {/* LUGAR */}

      {event.place && (
        <p
          className="
            mt-3
            text-[10px]
            uppercase
            tracking-[0.28em]
            sm:text-[11px]
          "
          style={{
            color: palette.black,
            opacity: 0.65,
          }}
        >
          {event.place}
        </p>
      )}

      {/* TÍTULO */}

      <h3
        className="
          mt-2
          text-[27px]
          font-normal
          italic
          sm:text-[31px]
        "
        style={{
          color: palette.gold,
          fontFamily: '"Cormorant Garamond", Georgia, serif',
        }}
      >
        {event.title}
      </h3>

      {/* DESCRIPCIÓN */}

      <p
        className="
          mt-4
          font-serif
          text-[14px]
          leading-7
          sm:text-[15px]
        "
        style={{
          color: palette.black,
        }}
      >
        {event.description}
      </p>
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function ItinerarioRelojCentral() {
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
        fondo-marmoleado
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

      {/* DETALLE BOTÁNICO */}

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-7
          h-[210px]
          w-[130px]
          -rotate-12
          text-[#B79A62]
          sm:-left-1
          sm:h-[260px]
          sm:w-[160px]
          lg:left-8
          lg:h-[310px]
          lg:w-[190px]
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
            mb-16
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-20
            lg:mb-24
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
              text-[15px]
              uppercase
              tracking-[0.44em]
              sm:text-[18px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.gold,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Itinerario
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              text-[38px]
              font-normal
              italic
              leading-tight
              tracking-[-0.01em]
              sm:text-[52px]
              md:text-[62px]
            "
            style={{
              color: palette.black,
              fontFamily: '"Cormorant Garamond", Georgia, serif',
            }}
          >
            El orden de nuestro día
          </h2>
        </motion.div>

        {/* FECHA CENTRAL */}

        <motion.div
          className="
            mx-auto
            mb-14
            flex
            max-w-sm
            flex-col
            items-center
            border-y
            px-5
            py-7
            text-center
            sm:mb-16
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.38em]
              sm:text-[9px]
            "
            style={{
              color: palette.gold,
            }}
          >
            Nuestra celebración
          </p>

          <p
            className="
              mt-3
              font-serif
              text-[42px]
              leading-none
              sm:text-[48px]
            "
            style={{
              color: palette.black,
            }}
          >
            24
          </p>

          <p
            className="
              mt-2
              text-[9px]
              uppercase
              tracking-[0.4em]
              sm:text-[10px]
            "
            style={{
              color: palette.black,
            }}
          >
            Octubre
          </p>
        </motion.div>

        {/* CRONOLOGÍA */}

        <div className="mx-auto max-w-5xl">
          {events.map((event, index) => (
            <TimelineEvent
              key={`${event.time}-${event.title}`}
              event={event}
              index={index}
              isLast={index === events.length - 1}
            />
          ))}
        </div>

        {/* CIERRE */}

        <motion.div
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-14
            lg:mt-16
          "
          initial={{
            opacity: 0,
            y: 14,
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
            delay: 0.25,
          }}
        >
          <DecorativeDivider />

          <p
            className="
              mt-6
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.black,
            }}
          >
            Esperamos vivir cada momento contigo.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}