export const brand = {
  name: "ÁUREA",
  full: "ÁUREA · Arquitectura & Construcción",
  tagline: "Del concepto a la llave en mano.",
  established: 2006,
};

export const contact = {
  phoneDisplay: "+52 81 8765 4321",
  phoneHref: "tel:+528187654321",
  whatsapp: "528187654321",
  email: "proyectos@aurea.mx",
  address: "Av. Vasconcelos 104, Valle del Campestre",
  city: "San Pedro Garza García, N.L.",
  hours: "Lun a Vie · 9:00–19:00 · Sábado con cita",
};

const DEFAULT_MSG =
  "Hola ÁUREA, vi su página y me gustaría una cotización sin compromiso para mi proyecto.";

export function waLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reseñas", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const stats = [
  { value: 18, suffix: "+", label: "Años construyendo en Monterrey" },
  { value: 140, suffix: "+", label: "Proyectos entregados" },
  { value: 3400, prefix: "$", suffix: " M+", label: "Inversión construida (MDP)" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Calificación de clientes" },
];

export const badges = [
  "Cámara Mexicana de la Industria de la Construcción",
  "Colegio de Arquitectos de Nuevo León",
  "ONNCCE",
  "Director Responsable de Obra (DRO)",
  "ISO 9001 · Gestión de calidad",
  "PCM · Project Management",
];

export const features = [
  {
    icon: "layers",
    title: "Diseño y construcción, una sola firma",
    desc: "Un único equipo responsable del anteproyecto, los permisos y la obra. Sin intermediarios ni huecos de información.",
  },
  {
    icon: "shield",
    title: "Presupuesto cerrado, sin sorpresas",
    desc: "Cotizamos a precio alzado con total claridad. Lo que firma es lo que paga: todo cambio se controla y autoriza por escrito.",
  },
  {
    icon: "gem",
    title: "Acabados de primer nivel",
    desc: "Trabajamos con proveedores y marcas certificadas. Detalles que elevan el valor y la durabilidad real de su propiedad.",
  },
  {
    icon: "helmet",
    title: "Dirección de obra certificada",
    desc: "Residentes de obra y un Director Responsable de Obra con cédula profesional presentes en cada etapa del proyecto.",
  },
  {
    icon: "file",
    title: "Permisos y trámites incluidos",
    desc: "Gestionamos licencia de construcción, entrega al municipio y dictámenes ante las dependencias correspondientes.",
  },
  {
    icon: "chart",
    title: "Avance y transparencia semanal",
    desc: "Reportes fotográficos, minutas y control de presupuesto en tiempo real. Su obra, siempre visible y medible.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Conversación inicial",
    desc: "Entendemos su terreno, presupuesto y objetivos. Una llamada breve, sin compromiso ni costo.",
  },
  {
    n: "02",
    title: "Propuesta y presupuesto",
    desc: "Entregamos alcance, cronograma y precio cerrado en un máximo de 7 días hábiles.",
  },
  {
    n: "03",
    title: "Anteproyecto y diseño",
    desc: "Desarrollamos planos, renders fotorrealistas y especificaciones con usted al centro de cada decisión.",
  },
  {
    n: "04",
    title: "Permisos y trámites",
    desc: "Licitamos y gestionamos la licencia de obra, dictámenes municipales y firma del DRO.",
  },
  {
    n: "05",
    title: "Construcción y dirección",
    desc: "Ejecutamos la obra con residente, bitácora y reportes de avance semanales.",
  },
  {
    n: "06",
    title: "Entrega llave en mano",
    desc: "Reciba su propiedad terminada, probada y respaldada con contrato formal.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Conversación inicial",
    desc: "Llamada breve para entender su terreno, presupuesto y objetivos. Sin compromiso.",
    icon: "file",
  },
  {
    n: "02",
    title: "Propuesta y presupuesto cerrado",
    desc: "Alcance, cronograma y precio alzado en máximo 7 días hábiles.",
    icon: "shield",
  },
  {
    n: "03",
    title: "Diseño y permisos",
    desc: "Planos, renders fotorrealistas, licencia de obra y DRO firmado.",
    icon: "layers",
  },
  {
    n: "04",
    title: "Construcción llave en mano",
    desc: "Obra con reportes semanales, contrato formal y entrega final.",
    icon: "helmet",
  },
];

export const benefits = [
  "Valor de reventa superior: diseño atemporal y acabados que no envejecen.",
  "Costos y tiempos protegidos por contrato y bitácora de obra.",
  "Estructura calculada y respaldada por ingeniería civil colegiada.",
  "Confort térmico y eficiencia: iluminación, ventilación y aislamiento.",
  "Servicio de post-entrega y soporte a su obra.",
];

export const portfolio = [
  {
    title: "Residencia Mirasierra",
    category: "Residencial",
    location: "San Pedro Garza García",
    meta: "720 m² · Residencia unifamiliar",
    span: "lg",
    image:
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1000",
  },
  {
    title: "Casa del Valle",
    category: "Residencial",
    location: "Valle del Campestre",
    meta: "480 m² · Residencia contemporánea",
    span: "sm",
    image:
      "https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Casa Cumbres",
    category: "Residencial",
    location: "Cumbres",
    meta: "560 m² · Residencia de montaña",
    span: "sm",
    image:
      "https://images.pexels.com/photos/7031411/pexels-photo-7031411.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Torre Comercial Reforma",
    category: "Corporativo",
    location: "San Pedro Garza García",
    meta: "8,400 m² · Oficinas grado A",
    span: "sm",
    image: "/images/portfolio/torre-reforma-banana.jpg",
  },
  {
    title: "Oficinas Valle Oriente",
    category: "Corporativo",
    location: "Valle Oriente",
    meta: "5,200 m² · Corporate center",
    span: "sm",
    image: "/images/portfolio/oficinas-valle-oriente.jpg",
  },
  {
    title: "Penthouse Distrito.trace",
    category: "Interiorismo",
    location: "San Pedro Garza García",
    meta: "340 m² · Penthouse",
    span: "sm",
    image:
      "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Loft Centrito",
    category: "Interiorismo",
    location: "Monterrey Centro",
    meta: "280 m² · Loft contemporáneo",
    span: "sm",
    image: "/images/portfolio/loft-centrito.jpg",
  },
  {
    title: "Remodelación Centro",
    category: "Remodelación",
    location: "Monterrey Centro",
    meta: "210 m² · Oficinas remodeladas",
    span: "sm",
    image:
      "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Remodelación Cumbres",
    category: "Remodelación",
    location: "Cumbres",
    meta: "320 m² · Residencia renovada",
    span: "sm",
    image: "/images/portfolio/remodelacion-cumbres-banana.jpg",
  },
];

export const benefitsImage =
  "https://images.pexels.com/photos/6636314/pexels-photo-6636314.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1100";

export function avatarUrl(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200`;
}

export const trustAvatars = [28442318, 25651531, 7752803];

export const testimonials = [
  {
    quote:
      "ÁUREA entregó nuestra residencia dos semanas antes de lo pactado y dentro del presupuesto. La transparencia de cada reporte semanal marcó la diferencia: no es un constructor más, es un socio.",
    name: "Ing. Roberto Villarreal",
    role: "Director, Constructora Regiomontana",
    avatar: avatarUrl(28442318),
  },
  {
    quote:
      "Como arquitecta valoro el detalle. Su equipo respetó el proyecto ejecutivo al milímetro y los acabados superaron lo prometido. Recomiendo a ÁUREA sin reservas.",
    name: "Arq. Mariana Treviño",
    role: "Socia fundadora, Estudio Norte",
    avatar: avatarUrl(25651531),
  },
  {
    quote:
      "Llevábamos dos años buscando en quién confiar la remodelación de nuestras oficinas. Profesionalismo de principio a fin y cero dolores de cabeza. Una experiencia impecable.",
    name: "Arq. Alonso Peña",
    role: "Director, Grupo Inmobiliario Del Valle",
    avatar: avatarUrl(7752803),
  },
  {
    quote:
      "Compré un terreno en Cumbres y no sabía por dónde empezar. Me guiaron en cada paso y el resultado supera lo que imaginaba. Una inversión bien hecha.",
    name: "Daniela Cantú",
    role: "Cliente particular · Residencia Cumbres",
    avatar: avatarUrl(7752788),
  },
];

export const services = [
  {
    name: "Diseño & Proyecto Ejecutivo",
    tagline: "Para construir con quien usted elija.",
    price: "Cotización a medida",
    priceNote: "según alcance y m²",
    includes: [
      "Anteproyecto y proyecto arquitectónico",
      "Proyecto ejecutivo y memoria de cálculo",
      "Renders fotorrealistas",
      "Especificaciones y presupuesto de materiales",
    ],
    cta: "Cotizar este plan",
  },
  {
    name: "Diseño + Dirección de Obra",
    tagline: "Su proyecto, ejecutado a la perfección.",
    price: "Cotización a medida",
    priceNote: "según alcance y m²",
    badge: "Más solicitado",
    includes: [
      "Todo lo del plan Diseño",
      "Director Responsable de Obra (DRO)",
      "Residente de obra y bitácora",
      "Control de presupuesto y cronograma",
      "Reportes fotográficos semanales",
    ],
    cta: "Cotizar este plan",
  },
  {
    name: "Llave en Mano",
    tagline: "Del primer boceto a la entrega final.",
    price: "Cotización a medida",
    priceNote: "precio cerrado",
    includes: [
      "Todo lo del plan Dirección",
      "Construcción integral y acabados",
      "Gestión de permisos y trámites",
      "Mobiliario y entregables finales",
      "Servicio de post-entrega",
    ],
    cta: "Cotizar este plan",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta construir por metro cuadrado en Monterrey?",
    a: "Depende del nivel de acabados y la complejidad estructural. En residencial de medio-alto nivel trabajamos comúnmente entre $18,000 y $32,000 MXN por m². Le damos un estimado cerrado tras una primera conversación.",
  },
  {
    q: "¿Trabajan con presupuesto cerrado o por administración?",
    a: "Ambos modelos. Lo recomendamos según el tamaño y tipo de proyecto; en la mayoría de los casos residenciales ofrecemos precio alzado (cerrado) para que usted tenga certeza total desde el inicio.",
  },
  {
    q: "¿Cuánto tarda en construirse una residencia?",
    a: "Una residencia de 500 m² toma entre 9 y 12 meses desde el primer palo. Entregamos un cronograma detallado desde el principio y lo respetamos, con reportes de avance semanales.",
  },
  {
    q: "¿Gestionan los permisos y trámites municipales?",
    a: "Sí. Nos hacemos cargo de la licencia de construcción, la entrega al municipio, los dictámenes y trámites ante dependencias, incluida la firma del Director Responsable de Obra.",
  },
  {
    q: "¿Atienden en toda la zona metropolitana?",
    a: "Sí: San Pedro Garza García, Monterrey Centro, Cumbres, Valle, Apodaca, Santiago y el resto del Área Metropolitana de Monterrey.",
  },
  {
    q: "¿Cómo doy el primer paso?",
    a: "Escríbanos por WhatsApp. En una llamada de 15 minutos entendemos su proyecto y le enviamos una propuesta preliminar sin compromiso en menos de 7 días.",
  },
];

export const locations = [
  "San Pedro Garza García",
  "Monterrey Centro",
  "Cumbres",
  "Valle del Campestre",
  "Valle Oriente",
  "Apodaca",
  "Santiago",
  "San Nicolás",
  "Guadalupe",
  "General Escobedo",
  "Cadereyta",
  "Chipinque",
  "Las Lajas",
  "Contry",
  "Roma",
  "Mitras",
  "Barrio Antiguo",
  "Allende",
  "Los Chipes",
];

export const projectTypes = [
  "Residencial",
  "Corporativo",
  "Remodelación",
  "Terreno / Anteproyecto",
  "Otro",
];
