import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbwBTiaj7ebrD5-jpkRYbZpu6c-roHJkWQDnsAOgB_r1Or_ce1BOFiMOf4VwZsu0mEhV/exec";

const NUMERO_WHATSAPP = "524441144527";
const NOMBRE_CONTACTO = "Rebeca y Roberto";

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
   DECODIFICACIÓN DEL GENERADOR
========================================= */

/*
  Este decodificador es compatible con un generador que haga:

  1. JSON.stringify({ nombre, pases })
  2. invertir el texto
  3. convertir a Base64 con btoa()
  4. colocar el resultado en ?id=...

  También admite Base64 URL-safe:
  - en lugar de +
  _ en lugar de /
*/

function normalizeBase64(value) {
  const normalized = value
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const remainder = normalized.length % 4;

  if (remainder === 0) {
    return normalized;
  }

  return normalized + "=".repeat(4 - remainder);
}

function decodeBase64Utf8(value) {
  const binary = window.atob(normalizeBase64(value));

  /*
    IMPORTANTE:

    El generador actual usa btoa() directamente sobre el texto invertido.
    Para nombres como "Chávez", "Hernández", "Muñoz", etc., ese Base64
    contiene bytes Latin-1.

    Si intentamos decodificarlos siempre como UTF-8 con fatal:false,
    TextDecoder reemplaza esos caracteres por "�" y en pantalla pueden
    terminar viéndose como "?".

    Por eso:
    1. Intentamos UTF-8 estricto para mantener compatibilidad futura.
    2. Si NO es UTF-8 válido, devolvemos directamente el resultado de atob(),
       que conserva correctamente á, é, í, ó, ú, ñ, ü, etc. en los links
       generados actualmente.
  */

  try {
    const bytes = Uint8Array.from(binary, (character) =>
      character.charCodeAt(0)
    );

    return new TextDecoder("utf-8", {
      fatal: true,
    }).decode(bytes);
  } catch {
    return binary;
  }
}

function parseInvitationData(encodedId) {
  if (!encodedId) return null;

  const decodedValue = decodeURIComponent(encodedId);

  /*
    Intentamos varios formatos para que sea más resistente:

    1. Base64 → texto invertido → JSON.
    2. Base64 → JSON directo.
  */

  const decodedText = decodeBase64Utf8(decodedValue);

  const possibleValues = [
    decodedText.split("").reverse().join(""),
    decodedText,
  ];

  for (const possibleValue of possibleValues) {
    try {
      const parsedData = JSON.parse(possibleValue);

      if (parsedData && typeof parsedData === "object") {
        return parsedData;
      }
    } catch {
      // Continúa con el siguiente formato.
    }
  }

  throw new Error("El enlace de invitación no tiene un formato válido.");
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{ backgroundColor: palette.gold }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{ borderColor: palette.gold }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{ backgroundColor: palette.gold }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function WhatsAppIcon() {
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
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 7.8c.3-.4.6-.4.9-.1l1.1 1.5c.2.3.2.6 0 .9l-.6.8c-.2.3 0 .7.3 1.1.7 1 1.5 1.8 2.6 2.4.4.2.8.3 1.1 0l.8-.8c.3-.3.6-.3.9-.1l1.5 1c.4.2.4.6.2.9-.5 1-1.4 1.6-2.5 1.6-1.6 0-3.8-1.2-5.6-3-1.7-1.7-2.9-3.9-2.9-5.4 0-.9.4-1.9 1.2-2.8Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="5" y="10" width="14" height="10" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* =========================================
   CAMPO DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const isSelected = selectedValue === value;

  return (
    <label
      className="
        relative
        flex
        cursor-pointer
        items-start
        gap-4
        border
        px-5
        py-4
        text-left
        transition
      "
      style={{
        backgroundColor: isSelected
          ? palette.marble
          : palette.white,
        borderColor: palette.gold,
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor: palette.gold,
        }}
      >
        {isSelected && (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: palette.gold,
            }}
          />
        )}
      </span>

      <span>
        <span
          className="
            block
            font-serif
            text-[15px]
            sm:text-base
          "
          style={{
            color: palette.black,
          }}
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-[12px]
            leading-5
            sm:text-[13px]
          "
          style={{
            color: palette.black,
          }}
        >
          {description}
        </span>
      </span>
    </label>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [pasesAsignados, setPasesAsignados] = useState(1);
  const [datosDesdeGenerador, setDatosDesdeGenerador] = useState(false);

  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loadingSide, setLoadingSide] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [urlError, setUrlError] = useState("");

  /* =========================================
     LEER Y DECODIFICAR URL
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const encodedId = params.get("id");
    const visibleName = params.get("nombre");
    const visiblePasses = params.get("pases");

    try {
      let invitationData = null;

      if (encodedId) {
        invitationData = parseInvitationData(encodedId);
      } else if (visibleName || visiblePasses) {
        /*
          Respaldo temporal para enlaces anteriores:

          ?nombre=Familia%20López&pases=4
        */

        invitationData = {
          nombre: visibleName,
          pases: visiblePasses,
        };
      }

      if (!invitationData) {
        setDatosDesdeGenerador(false);
        return;
      }

      const decodedName =
        typeof invitationData.nombre === "string"
          ? invitationData.nombre.trim()
          : "";

      /*
        Aceptamos varias propiedades por compatibilidad:
        pases, invitados, cantidad o lugares.
      */

      const decodedPasses = Number.parseInt(
        invitationData.pases ??
          invitationData.invitados ??
          invitationData.cantidad ??
          invitationData.lugares ??
          1,
        10
      );

      if (decodedName) {
        setNombreInvitado(decodedName);
      }

      if (!Number.isNaN(decodedPasses) && decodedPasses > 0) {
        setPasesAsignados(decodedPasses);
        setInvitados(decodedPasses);
      }

      setDatosDesdeGenerador(Boolean(decodedName));
      setUrlError("");
    } catch (decodeError) {
      console.error("No se pudieron leer los datos del enlace:", decodeError);

      setUrlError(
        "No pudimos reconocer los datos personalizados de esta invitación."
      );

      setDatosDesdeGenerador(false);
    }
  }, []);

  /* =========================================
     AJUSTAR ASISTENTES SEGÚN ASISTENCIA
  ========================================= */

  useEffect(() => {
    if (asistencia === "No podré asistir") {
      setInvitados(0);
      return;
    }

    if (asistencia === "Sí asistiré" && invitados < 1) {
      setInvitados(1);
    }
  }, [asistencia, invitados]);

  const availablePasses = useMemo(() => {
    return Array.from(
      {
        length: pasesAsignados,
      },
      (_, index) => index + 1
    );
  }, [pasesAsignados]);

  /* =========================================
     MENSAJE DE WHATSAPP
  ========================================= */

  const createWhatsAppMessage = (recipientName) => {
    const attendanceText =
      asistencia === "Sí asistiré"
        ? `Sí asistiré con ${invitados} ${
            invitados === 1 ? "persona" : "personas"
          }.`
        : "Lamentablemente no podré asistir.";

    const optionalMessage = mensajeInvitado.trim()
      ? `\n\nMensaje: ${mensajeInvitado.trim()}`
      : "";

    return [
      `Hola ${recipientName}.`,
      "",
      `Soy ${nombreInvitado.trim()}.`,
      attendanceText,
      optionalMessage,
      "",
      "Gracias por la invitación.",
    ]
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
  };

  const openWhatsApp = (phoneNumber, recipientName) => {
    const message = createWhatsAppMessage(recipientName);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  /* =========================================
     ENVIAR CONFIRMACIÓN
  ========================================= */

  const enviarConfirmacion = async ({
    side,
    phoneNumber,
    recipientName,
  }) => {
    if (loadingSide) return;

    if (!nombreInvitado.trim()) {
      setError("Escribe el nombre del invitado.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si podrás acompañarnos.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 || invitados > pasesAsignados)
    ) {
      setError(
        `Puedes confirmar entre 1 y ${pasesAsignados} ${
          pasesAsignados === 1 ? "lugar" : "lugares"
        }.`
      );
      return;
    }

    setError("");
    setEnviado(false);
    setLoadingSide(side);

    const confirmationData = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
      lado: side,
      pasesAsignados,
    };

    try {
      /*
        No agregamos Content-Type: application/json porque la petición
        utiliza mode: "no-cors".

        Apps Script puede leer el contenido mediante:
        e.postData.contents
      */

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(confirmationData),
      });

      setEnviado(true);

      /*
        Conservamos nombre y pases porque vienen del generador.
        Solo limpiamos la respuesta y el mensaje.
      */

      window.setTimeout(() => {
        openWhatsApp(phoneNumber, recipientName);
      }, 650);
    } catch (requestError) {
      console.error("Error enviando la confirmación:", requestError);

      setError(
        "No pudimos enviar tu confirmación. Intenta nuevamente en unos momentos."
      );

      setLoadingSide("");
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        flex
        min-h-[820px]
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

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
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
          }}
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              color: palette.gold,
              borderColor: palette.gold,
            }}
          >
            <EnvelopeIcon />
          </div>

          <p
            className="
              mt-7
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.gold,
            }}
          >
            Nos encantará contar contigo
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              
              text-[36px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[51px]
              md:text-[61px]
            "
            style={{
              color: palette.black,
              fontFamily: '"Dancing Script", cursive',
              fontStyle: "italic",
            }}
          >
            Confirmación de asistencia
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
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
            Por favor, confirma tu asistencia y ayúdanos a preparar cada
            detalle de nuestra celebración.
          </p>
        </motion.div>

        {/* FORMULARIO */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
          "
          style={{
            backgroundColor: palette.white,
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.95,
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

          <div className="relative z-10">
            {/* NOMBRE */}

            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="confirmation-name"
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.34em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.gold,
                  }}
                >
                  Nombre del invitado
                </label>

                {datosDesdeGenerador && (
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                      sm:text-[8px]
                    "
                    style={{
                      color: palette.black,
                    }}
                  >
                    <LockIcon />
                    Invitación personalizada
                  </span>
                )}
              </div>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) => {
                  if (!datosDesdeGenerador) {
                    setNombreInvitado(event.target.value);
                  }
                }}
                readOnly={datosDesdeGenerador}
                placeholder="Nombre y apellido"
                autoComplete="name"
                className="
                  mt-4
                  w-full
                  border
                  bg-white
                  px-5
                  py-4
                  font-serif
                  text-base
                  outline-none
                  sm:text-lg
                "
                style={{
                  color: palette.black,
                  borderColor: palette.gold,
                  cursor: datosDesdeGenerador ? "not-allowed" : "text",
                }}
              />

              <AnimatePresence>
                {urlError && (
                  <motion.p
                    className="
                      mt-3
                      text-[12px]
                      leading-5
                    "
                    style={{
                      color: palette.black,
                    }}
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    {urlError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ASISTENCIA */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: palette.gold,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.gold,
                }}
              >
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* PASES */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="
                    mt-9
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor: palette.gold,
                  }}
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="confirmation-passes"
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.34em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.gold,
                      }}
                    >
                      Personas que asistirán
                    </label>

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
                      Máximo {pasesAsignados}
                    </span>
                  </div>

                  <select
                    id="confirmation-passes"
                    value={invitados}
                    onChange={(event) =>
                      setInvitados(Number(event.target.value))
                    }
                    className="
                      mt-4
                      w-full
                      appearance-none
                      border
                      bg-white
                      px-5
                      py-4
                      text-center
                      font-serif
                      text-base
                      outline-none
                      sm:text-lg
                    "
                    style={{
                      color: palette.black,
                      borderColor: palette.gold,
                    }}
                  >
                    {availablePasses.map((passNumber) => (
                      <option key={passNumber} value={passNumber}>
                        {passNumber}{" "}
                        {passNumber === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>

                  <p
                    className="
                      mt-3
                      text-center
                      font-serif
                      text-[12px]
                      italic
                      sm:text-[13px]
                    "
                    style={{
                      color: palette.black,
                    }}
                  >
                    Esta invitación tiene{" "}
                    {pasesAsignados === 1
                      ? "1 lugar reservado"
                      : `${pasesAsignados} lugares reservados`}.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: palette.gold,
              }}
            >
              <label
                htmlFor="confirmation-message"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.gold,
                }}
              >
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(event.target.value)
                }
                placeholder="Escribe un mensaje especial (opcional)"
                rows={4}
                maxLength={500}
                className="
                  mt-4
                  w-full
                  resize-none
                  border
                  bg-white
                  px-5
                  py-4
                  font-serif
                  text-[14px]
                  leading-7
                  outline-none
                  sm:text-[15px]
                "
                style={{
                  color: palette.black,
                  borderColor: palette.gold,
                }}
              />

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                "
                style={{
                  color: palette.black,
                }}
              >
                {mensajeInvitado.length}/500
              </p>
            </div>

            {/* MENSAJES */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="confirmation-error"
                  className="
                    mt-7
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.black,
                    borderColor: palette.gold,
                    backgroundColor: palette.white,
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  {error}
                </motion.div>
              )}

              {enviado && !error && (
                <motion.div
                  key="confirmation-success"
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.black,
                    borderColor: palette.gold,
                    backgroundColor: palette.white,
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <CheckIcon />
                  Confirmación registrada. Abriendo WhatsApp…
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÓN ÚNICO DE CONFIRMACIÓN */}

            <div className="mt-9">
              <motion.button
                type="button"
                onClick={() =>
                  enviarConfirmacion({
                    side: "Rebeca y Roberto",
                    phoneNumber: NUMERO_WHATSAPP,
                    recipientName: NOMBRE_CONTACTO,
                  })
                }
                disabled={Boolean(loadingSide)}
                className="
                  mx-auto
                  inline-flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  border
                  px-6
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:max-w-md
                "
                style={{
                  backgroundColor: palette.gold,
                  borderColor: palette.gold,
                  color: palette.white,
                }}
                whileHover={
                  loadingSide
                    ? undefined
                    : {
                        y: -2,
                        backgroundColor: palette.gold,
                      }
                }
                whileTap={
                  loadingSide
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
              >
                {loadingSide === "Rebeca y Roberto" ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/35
                      border-t-white
                    "
                  />
                ) : (
                  <WhatsAppIcon />
                )}

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    sm:text-[9px]
                  "
                >
                  {loadingSide === "Rebeca y Roberto"
                    ? "Enviando"
                    : "Confirmar asistencia"}
                </span>
              </motion.button>
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-center
                font-serif
                text-[12px]
                italic
                leading-6
                sm:text-[13px]
              "
              style={{
                color: palette.black,
              }}
            >
              Al confirmar, registraremos tu respuesta y te dirigiremos a
              WhatsApp para enviar el mensaje correspondiente.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Confirmacion;