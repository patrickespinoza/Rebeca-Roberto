import { motion } from "framer-motion";

/* =========================================
   CIERRE FINAL — REBECA & ROBERTO
========================================= */

const palette = {
  white: "#FFFFFF",
  ivory: "#FCFBF8",
  gold: "#D8C29A",
};


const imagePosition = {
  mobile: "65% 50%",
  desktop: "50% 50%",
};

export default function CierreFinal() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        cierre-final
        relative
        flex
        min-h-[720px]
        w-full
        items-end
        justify-center
        overflow-hidden
        sm:min-h-[820px]
        lg:min-h-[900px]
      "
      style={{
        "--image-mobile": imagePosition.mobile,
        "--image-desktop": imagePosition.desktop,
      }}
    >
      {/* =========================================
          FOTO DE FONDO
      ========================================= */}

      <motion.img
        src="/final.jpg"
        alt="Rebeca y Roberto"
        className="
          cierre-final-imagen
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =========================================
          SOMBRA GENERAL
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* =========================================
          DEGRADADO INFERIOR
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 35%,
              rgba(20,14,12,0.12) 58%,
              rgba(20,14,12,0.72) 100%
            )
          `,
        }}
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <motion.div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          px-8
          pb-24
          text-center
          sm:pb-28
          lg:pb-32
        "
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* ORNAMENTO */}

        <div
          className="
            my-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-12
              sm:w-16
            "
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(216,194,154,0.85))",
            }}
          />

          <span
            className="
              h-[6px]
              w-[6px]
              rotate-45
              border
            "
            style={{
              borderColor: "rgba(216,194,154,0.9)",
            }}
          />

          <span
            className="
              h-px
              w-12
              sm:w-16
            "
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(216,194,154,0.85))",
            }}
          />
        </div>

        {/* NOMBRES */}

        <motion.h2
          className="
            text-[52px]
            font-medium
            leading-[1.05]
            sm:text-[72px]
            md:text-[84px]
          "
          style={{
            color: palette.white,
            fontFamily: '"Dancing Script", cursive',
            textShadow: "0 3px 18px rgba(0,0,0,0.28)",
          }}
        >
          Rebeca & Roberto
        </motion.h2>

        {/* FRASE FINAL */}

        <p
          className="
            mt-6
            max-w-xl
            font-serif
            text-[15px]
            leading-7
            sm:text-[17px]
          "
          style={{
            color: "rgba(255,255,255,0.88)",
            textShadow: "0 2px 10px rgba(0,0,0,0.25)",
          }}
        >
          Nos hará muy felices compartir este día tan especial con ustedes.
        </p>

        {/* CIERRE */}

        <p
          className="
            mt-8
            text-[9px]
            uppercase
            tracking-[0.32em]
            sm:text-[10px]
          "
          style={{
            color: "rgba(216,194,154,0.9)",
          }}
        >
          Nuestro para siempre comienza aquí
        </p>
      </motion.div>

      {/* =========================================
          POSICIÓN RESPONSIVE DE LA FOTO
      ========================================= */}

      <style>{`
        .cierre-final-imagen {
          object-position: var(--image-mobile);
        }

        @media (min-width: 1024px) {
          .cierre-final-imagen {
            object-position: var(--image-desktop);
          }
        }
      `}</style>
    </motion.section>
  );
}