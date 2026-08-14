import { motion } from "framer-motion";

/* =========================================
   CIERRE FINAL — REBECA & ROBERTO
   Foto completa + fondo marmoleado
========================================= */

const palette = {
  white: "#FFFFFF",
  black: "#000000",
  gold: "#B79A62",
};

export default function CierreFinal() {
  return (
    <section
      className="
        fondo-marmoleado
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
    >
      {/* =========================================
          FOTO COMPLETA
          object-contain = NO RECORTA LA FOTO
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
          SOMBRA INFERIOR
          SOLO PARA LEGIBILIDAD DEL TEXTO
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[42%]
        "
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.62), transparent)",
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
          px-6
          pb-16
          text-center
          sm:px-8
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
            text-[48px]
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
            mt-5
            max-w-xl
            font-serif
            text-[13px]
            uppercase
            leading-7
            tracking-[0.15em]
            sm:mt-6
            sm:text-[17px]
          "
          style={{
            color: palette.gold,
            textShadow: "0 2px 10px rgba(0,0,0,0.35)",
          }}
        >
          NUESTRO PARA SIEMPRE COMIENZA AQUÍ
        </p>
      </motion.div>
    </section>
  );
}