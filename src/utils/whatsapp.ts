interface WhatsappMessage {
  nombre: string;
  empresa: string;
  mensaje: string;
}

interface PaqueteMessage {
  paquete: string;
  precio: string;
}

export const sendWhatsappMessage = async (message: WhatsappMessage) => {
  const { nombre, empresa, mensaje } = message;
  const formateadoMessage = `
    *NUEVO MENSAJE - CP.360°*

    *Cliente:* ${nombre}
    *Empresa:* ${empresa}
    *Mensaje:* ${mensaje}
  `;
  const phoneNumber = "51971419928";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formateadoMessage)}`;

  window.open(whatsappUrl, '_blank');

  return whatsappUrl;
}

export const sendPaqueteWhatsappMessage = async (message: PaqueteMessage) => {
  const { paquete, precio } = message;
  
  const formateadoMessage = `
    Hola, requiero más información sobre su plan ${paquete} (${precio}). 
    Me gustaría recibir más detalles y una propuesta personalizada.
  `;
  
  const phoneNumber = "51971419928";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formateadoMessage)}`;

  window.open(whatsappUrl, '_blank');

  return whatsappUrl;
}
