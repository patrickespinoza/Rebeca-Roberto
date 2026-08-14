import { motion } from "framer-motion";

/* =========================================
   FRASE PREMIUM — REBECA & ROBERTO
   Marmoleado global + dorado + blanco + negro
========================================= */

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  gold: "#B79A62",
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

function SmallDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
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
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: palette.gold,
        }}
      />
    </div>
  );
}

export default function FrasePremium() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="
        fondo-marmoleado
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        text-center
        sm:min-h-[700px]
        sm:px-8
        sm:py-28
        lg:min-h-[680px]
        lg:px-12
        lg:py-32
      "
    >
      {/* =========================================
          MARCO EXTERIOR
      ========================================= */}

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

      {/* =========================================
          DETALLES BOTÁNICOS
      ========================================= */}

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-5
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

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -right-5
          -top-10
          h-[210px]
          w-[130px]
          rotate-[168deg]
          text-[#B79A62]
          sm:-right-1
          sm:h-[260px]
          sm:w-[160px]
          lg:right-8
          lg:h-[310px]
          lg:w-[190px]
        "
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mt-5">
            <SmallDivider />
          </div>
        </motion.div>

        <motion.span
          className="
            mt-8
            block
            font-serif
            text-[68px]
            font-light
            leading-[0.65]
            sm:mt-10
            sm:text-[86px]
          "
          style={{
            color: palette.gold,
          }}
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
            delay: 0.12,
          }}
        >
          “
        </motion.span>

        <motion.blockquote
          className="
            mx-auto
            mt-3
            max-w-4xl
            text-[32px]
            font-normal
            italic
            leading-[1.35]
            tracking-[0.005em]
            sm:text-[43px]
            sm:leading-[1.32]
            md:text-[50px]
            lg:text-[58px]
            lg:leading-[1.28]
          "
          style={{
            color: palette.black,
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          He hallado al que ama mi alma
        </motion.blockquote>

        <motion.div
          className="
            my-9
            sm:my-11
          "
          initial={{
            opacity: 0,
            scaleX: 0.65,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.32,
          }}
        >
          <SmallDivider />
        </motion.div>

        <motion.p
          className="
            text-[11px]
            uppercase
            tracking-[0.28em]
            sm:text-[13px]
            sm:tracking-[0.4em]
          "
          style={{
            color: palette.black,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.4,
          }}
        >
          Cantares 3:4
        </motion.p>

        <motion.div
          className="
            mt-12
            max-w-lg
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
            delay: 0.5,
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