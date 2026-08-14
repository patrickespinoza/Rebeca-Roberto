import React from "react";

import FrasePremium from "./componentes-encabezado/FrasePrincipal";
import EventoDireccion from "./componentes-encabezado/Ubicacion";
import Galeria from "./componentes-encabezado/Galeria";
import ItinerarioRelojCentral from "./componentes-encabezado/Itinerario";
import DressCodePremium from "./componentes-encabezado/codigovestimenta";
import Album from "./componentes-encabezado/albun";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import CierreFinal from "./componentes-encabezado/Finalp";

export default function PaginaPrincipal() {
  return (
    <>
      <FrasePremium />

      <EventoDireccion />

      <Galeria />

      <ItinerarioRelojCentral />

      <DressCodePremium />

      <Album />

      <Regalos />

      <Confirmacion />

      <CierreFinal />
    </>
  );
}