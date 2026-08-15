import { motion } from "framer-motion";

/* =========================================
   CIERRE FINAL — REBECA & ROBERTO
   Foto a pantalla completa
========================================= */

const palette = {
  white: "#FFFFFF",
  black: "#000000",
  gold: "#B79A62",
};

/* =========================================
   POSICIÓN DE LA IMAGEN

   PRIMER VALOR  = izquierda / derecha
   SEGUNDO VALOR = arriba / abajo

   Horizontal:
   0%   = muestra más la izquierda
   50%  = centro
   100% = muestra más la derecha

   Vertical:
   0%   = arriba
   50%  = centro
   100% = abajo
========================================= */

const imagePosition = {
  mobile: "77% 50%",
  desktop: "50% 30%",
};

/* =========================================
   COLOR DE LA FOTOGRAFÍA

   Ajustado para acercarse a la foto original:
   - ligeramente más oscura
   - tonos cálidos / tierra
   - saturación moderada
   - contraste más profundo
========================================= */

const imageColor = {
  filter:
    "brightness(0.88) contrast(1.08) saturate(0.82) sepia(0.10)",
};

export default function CierreFinal() {
  return (
    <section
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
        src="/final.png"
        alt="Rebeca y Roberto"
        className="
          cierre-final-imagen
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        style={{
          filter: imageColor.filter,
        }}
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

      {/* =========================================
          POSICIÓN RESPONSIVE
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
    </section>
  );
}