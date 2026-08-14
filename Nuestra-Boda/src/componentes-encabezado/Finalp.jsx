 import { motion } from "framer-motion";

/* =========================================
   CIERRE FINAL — REBECA & ROBERTO
========================================= */

const palette = {
  white: "#FFFFFF",
  black: "#000000",
  marble: "#F5F3EE",
  gold: "#B79A62",
};

export default function CierreFinal() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
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
        backgroundColor: palette.marble,
      }}
    >
      {/* =========================================
          FOTO COMPLETA
      ========================================= */}

      <motion.img
        src="/final.jpg"
        alt="Rebeca y Roberto"
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
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />



      {/* =========================================
          SOMBRA INFERIOR PARA LEER EL TEXTO
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[48%]
        "
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.68), transparent)",
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
          pb-20
          text-center
          sm:pb-24
          lg:pb-28
        "
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >


        {/* =========================================
            NOMBRES
        ========================================= */}

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
            textShadow: "0 3px 18px rgba(0,0,0,0.35)",
          }}
        >
          Rebeca & Roberto
        </motion.h2>

        {/* =========================================
            FRASE FINAL
        ========================================= */}

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
            color: palette.gold,
            textShadow: "0 2px 10px rgba(0,0,0,0.35)",
          }}
        >
          NUESTRO PARA SIEMPRE COMIENZA AQUI
        </p>

      </motion.div>
    </motion.section>
  );
}