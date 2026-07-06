/* ==========================================================================
   APP LOGIC FOR LM INSTRUMENTOS MUSICALES
   ========================================================================== */

// 1. PRODUCTS DATA WITH DYNAMIC SVG ILLUSTRATIONS
const PRODUCTS = [
    {
        id: 1,
        title: "Violín Eléctrico LM Silent-String Carbon",
        category: "violines",
        price: 890000,
        tag: "Nuevo",
        desc: "Violín eléctrico de fibra de carbono con preamplificador activo y salida de audífonos. Ideal para práctica silenciosa y presentaciones en vivo.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <path d="M50 15C48 15 46.5 17 46.5 19V25C43 26 40 28.5 40 31.5C40 34 42 35 44 36.5C47.5 39 46.5 44 43 45C37 46.7 33 52 33 58C33 66 40.5 73.5 50 73.5C59.5 73.5 67 66 67 58C67 52 63 46.7 57 45C53.5 44 52.5 39 56 36.5C58 35 60 34 60 31.5C60 28.5 57 26 53.5 25V19C53.5 17 52 15 50 15Z" fill="#d4af37" opacity="0.85"/>
            <line x1="48.5" y1="20" x2="48.5" y2="78" stroke="#10121a" stroke-width="2"/>
            <line x1="51.5" y1="20" x2="51.5" y2="78" stroke="#10121a" stroke-width="2"/>
            <circle cx="50" cy="12" r="3" fill="#d4af37"/>
            <path d="M43 55C41 55 38 56.5 38 58.5C38 60 41 61.5 43 61.5" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
            <path d="M57 55C59 55 62 56.5 62 58.5C62 60 59 61.5 57 61.5" stroke="#d4af37" stroke-width="2" stroke-linecap="round"/>
            <path d="M45 68L50 78L55 68H45Z" fill="#252833"/>
        </svg>`
    },
    {
        id: 2,
        title: "Guitarra Electroacústica Taylor 114ce Grand Auditorium",
        category: "guitarras",
        price: 950000,
        tag: "Nuevo",
        desc: "Guitarra electroacústica premium con tapa de abeto macizo y aros/fondo de nogal en capas. Sistema de expresión ES2 integrado.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <path d="M50 25C46 25 43.5 28 43.5 31.5C43.5 36 47.5 37 40.5 44C35.5 49 32.5 56.5 32.5 65C32.5 75.5 40 84 50 84C60 84 67.5 75.5 67.5 65C67.5 56.5 64.5 49 59.5 44C52.5 37 56.5 36 56.5 31.5C56.5 28 54 25 50 25Z" fill="#a0522d" opacity="0.8"/>
            <circle cx="50" cy="58" r="10" fill="#181c26" stroke="#d4af37" stroke-width="2"/>
            <rect x="48.5" y="10" width="3" height="20" fill="#d4af37"/>
            <rect x="47" y="5" width="6" height="6" rx="1" fill="#8e95a5"/>
            <path d="M45 8L45 14M55 8L55 14M45 18L45 22M55 18L55 22" stroke="#d4af37" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: 3,
        title: "Violín Clásico Cremona SV-500 Premier Artist 4/4",
        category: "violines",
        price: 320000,
        tag: "Nuevo",
        desc: "Violín acústico tallado a mano con maderas tonales seleccionadas, diapasón de ébano y cuerdas Prelude de D'Addario.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <path d="M50 25C47 25 45 27.5 45 30.5C45 34.5 49 35.5 41.5 41C36.5 44.5 34 50.5 34 58C34 67.5 41 75 50 75C59 75 66 67.5 66 58C66 50.5 63.5 44.5 58.5 41C51 35.5 55 34.5 55 30.5C55 27.5 53 25 50 25Z" fill="#cd853f" opacity="0.85"/>
            <circle cx="50" cy="52" r="6" fill="#181c26"/>
            <rect x="49" y="12" width="2" height="15" fill="#8b5a2b"/>
            <path d="M41 52C39.5 52 38 53 38 54.5C38 56 39.5 57 41 57" stroke="#d4af37" stroke-width="1.5"/>
            <path d="M59 52C60.5 52 62 53 62 54.5C62 56 60.5 57 59 57" stroke="#d4af37" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: 4,
        title: "Guitarra Eléctrica Ibanez RG421EX Matte Black",
        category: "guitarras",
        price: 480000,
        tag: "Usado",
        desc: "Excelente estado. Cuerpo de caoba, mástil de arce Wizard III ultra cómodo y cápsulas humbucker Quantum. Versátil y potente.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <path d="M50 40C43 40 40 44 38 48C36 52 32 54 32 64C32 74 40 82 50 82C60 82 68 74 68 64C68 54 64 52 62 48C60 44 57 40 50 40Z" fill="#111317" stroke="#252833" stroke-width="2"/>
            <path d="M38 48L32 40L35 34L41 42" fill="#111317"/>
            <path d="M62 48L68 40L65 34L59 42" fill="#111317"/>
            <rect x="48" y="15" width="4" height="27" fill="#8e95a5"/>
            <rect x="46" y="8" width="8" height="8" fill="#d4af37"/>
            <rect x="47" y="55" width="6" height="4" fill="#d4af37"/>
            <rect x="47" y="62" width="6" height="4" fill="#d4af37"/>
        </svg>`
    },
    {
        id: 5,
        title: "Amplificador de Tubos Fender Blues Junior IV 15W",
        category: "audio",
        price: 720000,
        tag: "Usado",
        desc: "Sonido icónico a tubos. 15W de potencia pura con parlante Celestion de 12 pulgadas, reverb de resorte modificada y overdrive suave.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <rect x="25" y="25" width="50" height="50" rx="4" fill="#1e222d" stroke="#d4af37" stroke-width="2"/>
            <rect x="30" y="30" width="40" height="8" fill="#0f1118"/>
            <circle cx="35" cy="34" r="2" fill="#d4af37"/>
            <circle cx="42" cy="34" r="2" fill="#d4af37"/>
            <circle cx="49" cy="34" r="2" fill="#d4af37"/>
            <rect x="30" y="44" width="40" height="24" fill="#12141c" stroke="#252833" stroke-dasharray="2,2"/>
            <circle cx="50" cy="56" r="10" fill="#181c26" stroke="#d4af37" stroke-width="1"/>
            <rect x="45" y="20" width="10" height="5" fill="#10121a" rx="1"/>
        </svg>`
    },
    {
        id: 6,
        title: "Pedal de Doble Bombo LM Drums Elite-Pro Series",
        category: "percursion",
        price: 180000,
        tag: "Nuevo",
        desc: "Doble pedal de bombo con transmisión por cadena doble, base metálica sólida, mazos ajustables de fieltro/plástico y respuesta ultra veloz.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <rect x="35" y="40" width="12" height="35" rx="2" transform="rotate(-10 35 40)" fill="#353b48" stroke="#d4af37" stroke-width="2"/>
            <rect x="55" y="40" width="12" height="35" rx="2" transform="rotate(-10 55 40)" fill="#353b48" stroke="#d4af37" stroke-width="2"/>
            <rect x="25" y="70" width="50" height="8" rx="2" fill="#12141c" stroke="#8e95a5"/>
            <line x1="42" y1="20" x2="42" y2="40" stroke="#d4af37" stroke-width="3"/>
            <line x1="58" y1="20" x2="58" y2="40" stroke="#d4af37" stroke-width="3"/>
            <circle cx="42" cy="18" r="4" fill="#8e95a5"/>
            <circle cx="58" cy="18" r="4" fill="#8e95a5"/>
            <line x1="38" y1="72" x2="62" y2="72" stroke="#d4af37" stroke-width="2"/>
        </svg>`
    },
    {
        id: 7,
        title: "Saxofón Alto Yamaha YAS-280 Estudiante Avanzado",
        category: "viento",
        price: 1150000,
        tag: "Usado",
        desc: "Perfecto estado y calibrado por luthier. Un clásico confiable con afinación precisa, llaves ergonómicas y tudel rediseñado.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <path d="M45 20C45 20 48 10 52 10C55 10 55 15 50 18L46 22L46 55C46 64 53 70 60 62C65 56 68 48 68 40" stroke="#d4af37" stroke-width="4" stroke-linecap="round"/>
            <path d="M42 58C42 68 50 76 60 76C70 76 76 68 76 58V50" stroke="#d4af37" stroke-width="5" stroke-linecap="round"/>
            <circle cx="46" cy="30" r="3" fill="#d4af37"/>
            <circle cx="46" cy="38" r="3" fill="#d4af37"/>
            <circle cx="46" cy="46" r="3" fill="#d4af37"/>
            <path d="M72 46H80V52H72V46Z" fill="#d4af37"/>
        </svg>`
    },
    {
        id: 8,
        title: "Batería Acústica Gretsch Catalina Maple Satin Gold (5 pzas)",
        category: "percursion",
        price: 1290000,
        tag: "Nuevo",
        desc: "No incluye platillos. Vasos de arce de 7 capas, bordes de 30 grados Gretsch y aros triple flange. Sonido cálido, dinámico y proyectado.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <ellipse cx="50" cy="40" rx="30" ry="12" fill="#1c202e" stroke="#d4af37" stroke-width="3"/>
            <rect x="20" y="40" width="60" height="30" fill="#252833" stroke="#d4af37" stroke-width="2"/>
            <ellipse cx="50" cy="70" rx="30" ry="12" fill="#1c202e" stroke="#d4af37" stroke-width="3"/>
            <line x1="23" y1="41" x2="23" y2="69" stroke="#8e95a5" stroke-width="2"/>
            <line x1="38" y1="42" x2="38" y2="71" stroke="#8e95a5" stroke-width="2"/>
            <line x1="62" y1="42" x2="62" y2="71" stroke="#8e95a5" stroke-width="2"/>
            <line x1="77" y1="41" x2="77" y2="69" stroke="#8e95a5" stroke-width="2"/>
        </svg>`
    },
    {
        id: 9,
        title: "Pack de Cuerdas de Violín D'Addario Kaplan Amo 4/4 Med",
        category: "violines",
        price: 75000,
        tag: "Oferta",
        desc: "Juego de cuerdas premium para violín acústico. Aporta calidez y riqueza armónica a instrumentos brillantes, tensión media.",
        icon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#181c26"/>
            <circle cx="50" cy="50" r="32" stroke="#d4af37" stroke-width="2"/>
            <circle cx="50" cy="50" r="28" stroke="#8e95a5" stroke-width="1" opacity="0.6"/>
            <circle cx="50" cy="50" r="24" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="10 5"/>
            <rect x="42" y="30" width="16" height="40" rx="2" fill="#12141c" stroke="#d4af37" stroke-width="1" transform="rotate(30 50 50)"/>
            <text x="50" y="53" font-family="'Montserrat'" font-size="8" font-weight="bold" fill="#d4af37" text-anchor="middle">KAPLAN</text>
        </svg>`
    }
];

// 2. LUTHIER SERVICES CONFIG
const ESTIMATOR_DATA = {
    guitarra_el: {
        label: "Guitarra Eléctrica",
        services: {
            calibracion: {
                label: "Calibración Completa",
                price: "$35.000 - $45.000 CLP",
                details: "Incluye: Ajuste del alma del mástil, octavación (entonación), nivelación de altura de cuerdas, limpieza y acondicionamiento del diapasón, pulido de trastes, y revisión general de circuitos."
            },
            electronica: {
                label: "Reparación de Electrónica",
                price: "$25.000 - $50.000 CLP (+ repuestos)",
                details: "Incluye: Reparación de soldaduras frías, cambio de potenciómetros, llave selectora, jack de entrada, apantallado conductivo de cavidades y blindaje contra ruidos (Hum)."
            },
            cuerdas: {
                label: "Cambio de Cuerdas e Hidratación",
                price: "$15.000 CLP (No incluye cuerdas)",
                details: "Incluye: Retiro de cuerdas viejas, limpieza profunda de cuerpo y mástil, hidratación de diapasón con aceites naturales, colocación y afinación de nuevas cuerdas."
            },
            luthier: {
                label: "Rectificado y Coronado de Trastes",
                price: "$75.000 - $110.000 CLP",
                details: "Incluye: Nivelado de trastes desgastados mediante limado micrométrico, recoronado y pulido de trastes para eliminar trasteos y mejorar sustancialmente el tacto (playability)."
            }
        }
    },
    bajo: {
        label: "Bajo Eléctrico",
        services: {
            calibracion: {
                label: "Calibración Completa",
                price: "$38.000 - $48.000 CLP",
                details: "Incluye: Calibración precisa para tensiones pesadas, curvatura de mástil, altura en selletas del puente, entonación cromática, limpieza y lubricación general."
            },
            electronica: {
                label: "Reparación de Electrónica",
                price: "$25.000 - $60.000 CLP (+ repuestos)",
                details: "Incluye: Diagnóstico y reparación de circuitos activos/pasivos, reemplazo de jacks de barril o portabaterías de 9V, y balanceo de volumen de cápsulas."
            },
            cuerdas: {
                label: "Cambio de Cuerdas e Hidratación",
                price: "$15.000 CLP (No incluye cuerdas)",
                details: "Incluye: Limpieza total, nutrición de maderas del diapasón con aceites de luthier, montaje y afinación del set de bajo."
            },
            luthier: {
                label: "Cambio de Cejuela (Nut) a Medida",
                price: "$30.000 - $45.000 CLP",
                details: "Incluye: Fabricación a mano de cejuela en hueso natural seleccionado o TUSQ, ranurado preciso por cuerda para mejorar resonancia, afinación y sostén."
            }
        }
    },
    violin: {
        label: "Violín / Viola / Cello",
        services: {
            calibracion: {
                label: "Puesta a Punto y Calibración",
                price: "$40.000 - $65.000 CLP",
                details: "Incluye: Ajuste y colocación correcta del puente acústico, colocación y ajuste de presión del alma interior, lubricación y ajuste de clavijas para afinación fluida."
            },
            electronica: {
                label: "Instalación de Pickups (Piezoeléctricos)",
                price: "$45.000 - $80.000 CLP (+ pickup)",
                details: "Incluye: Adaptación física del puente para insertar el transductor, ruteo del jack carpintero/lateral e instalación de preamplificador si corresponde."
            },
            cuerdas: {
                label: "Cambio de Cuerdas y Limpieza de Barniz",
                price: "$20.000 CLP (No incluye cuerdas)",
                details: "Incluye: Remoción segura de cuerdas, limpieza con productos específicos para no dañar el barniz tradicional (goma laca/aceite), montaje y ajuste de microafinadores."
            },
            luthier: {
                label: "Ajuste / Rectificado de Diapasón",
                price: "$80.000 - $140.000 CLP",
                details: "Incluye: Cepillado del diapasón de ébano para recuperar la curvatura y concavidad longitudinal idónea, eliminando desniveles y marcas de cuerdas."
            }
        }
    },
    guitarra_ac: {
        label: "Guitarra Acústica / Clásica",
        services: {
            calibracion: {
                label: "Calibración Completa",
                price: "$32.000 - $42.000 CLP",
                details: "Incluye: Ajuste del tensor (si posee), calibración de altura lijando selleta del puente y ranuras de la cejuela, hidratación del diapasón y puente, y pulido de trastes."
            },
            electronica: {
                label: "Instalación de Sistema de Captación",
                price: "$45.000 - $75.000 CLP (+ sistema)",
                details: "Incluye: Instalación bajo la selleta de micrófono piezoeléctrico, perforación de jack e instalación del módulo preamplificador en el aro de la guitarra."
            },
            cuerdas: {
                label: "Cambio de Cuerdas e Hidratación",
                price: "$15.000 CLP (No incluye cuerdas)",
                details: "Incluye: Limpieza de maderas, hidratación de la madera del puente y diapasón, y colocación de cuerdas con amarre clásico o de pines."
            },
            luthier: {
                label: "Reparación de Fisuras / Encolados",
                price: "Bajo Evaluación ($45.000 - $120.000+ CLP)",
                details: "Incluye: Reparación estructural de grietas en tapa, aros o fondo mediante encolado de alta resistencia caliente, instalación de taquetes internos y retoques localizados de acabado."
            }
        }
    }
};

// 3. STATE MANAGER
let cart = [];

// WhatsApp phone target (Mockup Business Number)
const WHATSAPP_PHONE = "56987654321"; // Representative Chilean number

// 4. DOM ELEMENTS
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const searchInput = document.getElementById("search-input");
const filterTabsContainer = document.getElementById("filter-tabs");
const productsGrid = document.getElementById("products-grid");

// Cart Drawer elements
const cartDrawerBtn = document.getElementById("cart-drawer-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalText = document.getElementById("cart-total");
const cartCheckoutBtn = document.getElementById("cart-checkout-btn");

// Estimator elements
const instSelect = document.getElementById("estimator-instrument");
const serviceSelect = document.getElementById("estimator-service");
const estimatorResult = document.getElementById("estimator-result");
const estPriceRange = document.getElementById("est-price-range");
const estDetails = document.getElementById("est-details");
const estBookBtn = document.getElementById("est-book-btn");

// Contact form elements
const contactForm = document.getElementById("contact-form");

// Testimonials Slider elements
const testimonialsWrapper = document.getElementById("testimonials-wrapper");
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const indicatorsContainer = document.getElementById("carousel-indicators");

// Toast Container
const toastContainer = document.getElementById("toast-container");

// 5. HEADER SCROLL AND NAVIGATION ACTIVE STATES
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    highlightNavLink();
});

function highlightNavLink() {
    let scrollPosition = window.scrollY + 100;
    document.querySelectorAll("section").forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
            const currentId = section.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// 6. HAMBURGER MOBILE MENU
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if (navMenu.classList.contains("active")) {
        icon.className = "fas fa-times";
    } else {
        icon.className = "fas fa-bars";
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.querySelector("i").className = "fas fa-bars";
    });
});

// 7. TOAST NOTIFICATION UTILITY
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    const iconClass = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";
    toast.innerHTML = `
        <i class="${iconClass} toast-icon"></i>
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add("show"), 10);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// 8. PRODUCT RENDERING & FILTERS
let activeFilter = "todos";
let searchQuery = "";

function renderProducts() {
    productsGrid.innerHTML = "";
    
    const filtered = PRODUCTS.filter(prod => {
        const matchesCategory = activeFilter === "todos" || prod.category === activeFilter;
        const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.1;"></i>
                <p>No encontramos instrumentos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        let tagClass = "tag-new";
        if (prod.tag === "Usado") tagClass = "tag-used";
        if (prod.tag === "Oferta") tagClass = "tag-offer";

        const isInCart = cart.some(item => item.id === prod.id);
        const cartBtnClass = isInCart ? "btn-card-icon added" : "btn-card-icon";
        const cartBtnIcon = isInCart ? "fas fa-check" : "fas fa-plus";
        const cartBtnTitle = isInCart ? "Añadido a cotización" : "Añadir a cotización";

        // Format price in CLP
        const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(prod.price);

        card.innerHTML = `
            <div class="product-img-wrapper">
                ${prod.icon}
                <span class="product-tag ${tagClass}">${prod.tag}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${prod.category}</span>
                <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 15px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 38px;">${prod.desc}</p>
                <div class="product-price">${formattedPrice}</div>
                <div class="product-actions">
                    <button class="btn-card-buy" onclick="consultProduct('${prod.title}', '${formattedPrice}')">
                        <i class="fab fa-whatsapp"></i> Consultar
                    </button>
                    <button class="${cartBtnClass}" onclick="toggleCartItem(${prod.id})" title="${cartBtnTitle}">
                        <i class="${cartBtnIcon}"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Handler for direct product Whatsapp consultation
window.consultProduct = function(title, price) {
    const text = encodeURIComponent(`Hola LM Instrumentos Musicales, me gustaría recibir más información sobre el producto "${title}" de valor ${price} que vi en su sitio web.`);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`, "_blank");
};

// Filter clicking
filterTabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-tab")) {
        document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");
        activeFilter = e.target.getAttribute("data-filter");
        renderProducts();
    }
});

// Search typing
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// 9. CART / QUOTE DRAWER FUNCTIONS
function toggleCartItem(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const index = cart.findIndex(item => item.id === id);
    
    if (index > -1) {
        // Remove
        cart.splice(index, 1);
        showToast(`Eliminado de la cotización: ${product.title}`, "error");
    } else {
        // Add
        cart.push(product);
        showToast(`Añadido a tu cotización: ${product.title}`, "success");
    }
    
    updateCartUI();
    renderProducts(); // Re-render to update the button status
}

window.toggleCartItem = toggleCartItem; // Expose globally

function updateCartUI() {
    // Badge
    cartBadge.textContent = cart.length;
    cartBadge.style.display = cart.length > 0 ? "flex" : "none";
    
    // Items list
    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <i class="fas fa-shopping-basket"></i>
                <p>Tu lista de cotización está vacía.</p>
                <p style="font-size: 0.8rem;">Añade instrumentos del catálogo para solicitar cotización formal.</p>
            </div>
        `;
        cartTotalText.textContent = "$0 CLP";
        cartCheckoutBtn.disabled = true;
        cartCheckoutBtn.style.opacity = "0.5";
        return;
    }
    
    cartCheckoutBtn.disabled = false;
    cartCheckoutBtn.style.opacity = "1";
    
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(item.price);
        const itemRow = document.createElement("div");
        itemRow.className = "cart-item";
        itemRow.innerHTML = `
            <div class="cart-item-img">
                ${item.icon}
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${formattedPrice}</div>
            </div>
            <button class="cart-item-remove" onclick="toggleCartItem(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemRow);
    });
    
    cartTotalText.textContent = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(total);
}

// Open/Close Drawer
cartDrawerBtn.addEventListener("click", () => {
    cartOverlay.classList.add("open");
});

cartCloseBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("open");
});

cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.classList.remove("open");
    }
});

// WhatsApp Send Quote Checklist
cartCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    
    let total = 0;
    let messageText = "Hola LM Instrumentos Musicales, me gustaría cotizar los siguientes instrumentos de su catálogo web:\n\n";
    
    cart.forEach((item, index) => {
        total += item.price;
        const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(item.price);
        messageText += `${index + 1}. *${item.title}* - ${formattedPrice}\n`;
    });
    
    const formattedTotal = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(total);
    messageText += `\n*Total Estimado:* ${formattedTotal}\n`;
    messageText += "\n¿Tienen stock disponible y cuáles son los tiempos de entrega/despacho? ¡Gracias!";
    
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(messageText)}`;
    window.open(url, "_blank");
});

// 10. REPAIR SERVICE ESTIMATOR LOGIC
instSelect.addEventListener("change", populateServices);
serviceSelect.addEventListener("change", calculateEstimation);

function populateServices() {
    const instKey = instSelect.value;
    serviceSelect.innerHTML = '<option value="" disabled selected>-- Selecciona un servicio --</option>';
    estimatorResult.style.display = "none";
    
    if (!instKey) {
        serviceSelect.disabled = true;
        return;
    }
    
    const services = ESTIMATOR_DATA[instKey].services;
    for (const key in services) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = services[key].label;
        serviceSelect.appendChild(option);
    }
    
    serviceSelect.disabled = false;
}

function calculateEstimation() {
    const instKey = instSelect.value;
    const serviceKey = serviceSelect.value;
    
    if (!instKey || !serviceKey) {
        estimatorResult.style.display = "none";
        return;
    }
    
    const instLabel = ESTIMATOR_DATA[instKey].label;
    const serviceObj = ESTIMATOR_DATA[instKey].services[serviceKey];
    
    estPriceRange.textContent = serviceObj.price;
    estDetails.textContent = serviceObj.details;
    estimatorResult.style.display = "block";
    
    // Set custom booking button click
    estBookBtn.onclick = () => {
        const messageText = `Hola LM Instrumentos Musicales, me gustaría agendar el servicio de "${serviceObj.label}" para mi "${instLabel}". Me informaron un valor estimado de ${serviceObj.price} en su cotizador web.`;
        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(messageText)}`, "_blank");
    };
}

// 11. FAQ ACCORDION LOGIC
document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        const item = q.parentElement;
        const isOpen = item.classList.contains("open");
        
        // Close all first
        document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("open"));
        
        // Toggle current
        if (!isOpen) {
            item.classList.add("open");
        }
    });
});

// 12. TESTIMONIALS CAROUSEL SLIDER
let currentSlide = 0;
let slideInterval;

function createCarouselIndicators() {
    indicatorsContainer.innerHTML = "";
    testimonialSlides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = `indicator ${i === 0 ? "active" : ""}`;
        dot.addEventListener("click", () => goToSlide(i));
        indicatorsContainer.appendChild(dot);
    });
}

function updateCarousel() {
    testimonialsWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll(".indicator").forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoplay();
}

function startAutoplay() {
    slideInterval = setInterval(nextSlide, 6000);
}

function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
}

// Event Listeners for slide navigation
if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoplay();
    });
    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoplay();
    });
}

// Pause slider on mouse hover
const carouselContainer = document.querySelector(".carousel-container");
if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", () => clearInterval(slideInterval));
    carouselContainer.addEventListener("mouseleave", startAutoplay);
}

// Initialize Slider
if (testimonialSlides.length > 0) {
    createCarouselIndicators();
    startAutoplay();
}

// 13. CONTACT FORM SUBMISSION
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const phone = document.getElementById("contact-phone").value.trim();
        const msg = document.getElementById("contact-message").value.trim();
        
        if (!name || !email || !msg) {
            showToast("Por favor completa los campos requeridos.", "error");
            return;
        }
        
        // Mock success
        showToast(`¡Gracias ${name}! Tu mensaje ha sido enviado. Nos contactaremos a la brevedad.`, "success");
        contactForm.reset();
    });
}

// 14. INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
    initMap();
    initInteractiveSlider();
});

// 15. INITIALIZE MAP (LEAFLET.JS)
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Coordinate of Av. Libertador Bernardo O'Higgins 340, Santiago
    const santiagoCoord = [-33.4414, -70.6436];
    
    // Initialize map
    const map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView(santiagoCoord, 16);

    // Add standard OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom Marker with a dark-gold theme popup
    const marker = L.marker(santiagoCoord).addTo(map);
    marker.bindPopup(`
        <div style="text-align: center; font-family: 'Montserrat', sans-serif; padding: 5px;">
            <strong style="color: #d4af37; font-size: 0.95rem; display: block; margin-bottom: 3px;">LM Instrumentos Musicales</strong>
            <span style="font-size: 0.8rem; color: #8e95a5;">Av. O'Higgins 340, Local 194</span><br/>
            <a href="https://maps.google.com/?q=Av.+Libertador+Bernardo+O'Higgins+340,+Santiago" target="_blank" style="color: #d4af37; text-decoration: underline; font-size: 0.8rem; font-weight: 600; display: inline-block; margin-top: 6px;">Abrir en Google Maps</a>
        </div>
    `).openPopup();
}

// 16. LUTHIER BEFORE/AFTER INTERACTIVE SLIDER
function initInteractiveSlider() {
    const rangeSlider = document.getElementById('range-slider-1');
    const beforeImg = document.getElementById('before-img-1');
    const sliderHandle = document.getElementById('slider-handle-1');

    if (rangeSlider && beforeImg && sliderHandle) {
        rangeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            beforeImg.style.width = `${value}%`;
            sliderHandle.style.left = `${value}%`;
        });
    }
}

// 17. INSTAGRAM STORIES HIGHLIGHTS DATA & CONTROLLER
const STORIES_DATA = {
    taller: {
        title: "Taller Luthier",
        time: "3h",
        content: `
            <div style="text-align: center; font-family: 'Montserrat';">
                <i class="fas fa-tools" style="font-size: 4rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 15px;">Luthería de Precisión</h3>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 15px;">Calibramos tu instrumento ajustando alma, trastes, electrónica y puente para lograr la máxima comodidad al tocar.</p>
                <div style="background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.2); padding: 15px; border-radius: 8px;">
                    <strong>🔥 ¡Agenda tu calibración hoy!</strong><br/>
                    Tiempos de entrega promedio de 3 a 5 días.
                </div>
            </div>
        `
    },
    ingresos: {
        title: "Nuevos Ingresos",
        time: "5h",
        content: `
            <div style="text-align: center; font-family: 'Montserrat';">
                <i class="fas fa-guitar" style="font-size: 4rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 15px;">Guitarras Electroacústicas</h3>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 15px;">Ingresó un set de guitarras Taylor 114ce nuevas listas para entrega inmediata con funda original Taylor.</p>
                <div style="background: rgba(46,204,113,0.1); border: 1px solid rgba(46,204,113,0.2); padding: 10px; border-radius: 8px; color: var(--success);">
                    <strong>Afinadas y revisadas por luthier.</strong>
                </div>
            </div>
        `
    },
    violin: {
        title: "Violines Eléctricos",
        time: "8h",
        content: `
            <div style="text-align: center; font-family: 'Montserrat';">
                <i class="fas fa-music" style="font-size: 4rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 15px;">Silent Strings</h3>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 15px;">Nuestros violines eléctricos de fibra de carbono ofrecen salida de audífonos para práctica silenciosa y preamplificador activo para vivo.</p>
                <span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-gold); display: block; margin-top: 10px;">Desde $890.000 CLP</span>
            </div>
        `
    },
    clientes: {
        title: "Comunidad",
        time: "1d",
        content: `
            <div style="text-align: center; font-family: 'Montserrat';">
                <i class="fas fa-user-friends" style="font-size: 4rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 15px;">Músicos de la Casa</h3>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 15px;">Gracias a todos los músicos y bandas que confían en nuestro taller para mantener sus instrumentos listos para tocar en vivo.</p>
                <div style="font-style: italic; color: var(--text-muted); margin-top: 10px;">🎸 "¡El mejor servicio técnico de Santiago!" - Andrés V.</div>
            </div>
        `
    },
    local: {
        title: "Visita la Tienda",
        time: "2d",
        content: `
            <div style="text-align: center; font-family: 'Montserrat';">
                <i class="fas fa-store" style="font-size: 4rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 15px;">Santiago Centro</h3>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 15px;">Estamos ubicados en Av. O'Higgins 340, Local 194. Te esperamos con asesoría especializada y una grata conversación.</p>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-top: 10px;">Lunes a Viernes: 10:00 - 19:00 hrs | Sábados: 10:30 - 14:30 hrs</span>
            </div>
        `
    }
};

let storyTimer = null;
let storyStart = 0;
const STORY_DURATION = 5000; // 5 seconds per story

function openStory(key) {
    const data = STORIES_DATA[key];
    if (!data) return;

    const modal = document.getElementById('story-modal');
    const modalBody = document.getElementById('story-modal-body');
    const modalTime = modal.querySelector('.story-modal-time');
    const modalTitle = modal.querySelector('.story-modal-username');
    const progressFill = document.getElementById('story-progress');

    modalTitle.textContent = `lminstrumentos_musicales • ${data.title}`;
    modalTime.textContent = data.time;
    modalBody.innerHTML = data.content;

    modal.classList.add('open');

    // Reset progress and start timer
    progressFill.style.width = '0%';
    clearInterval(storyTimer);

    storyStart = Date.now();
    storyTimer = setInterval(() => {
        const elapsed = Date.now() - storyStart;
        const percent = Math.min((elapsed / STORY_DURATION) * 100, 100);
        progressFill.style.width = `${percent}%`;

        if (elapsed >= STORY_DURATION) {
            closeStory();
        }
    }, 30);
}

function closeStory() {
    const modal = document.getElementById('story-modal');
    if (modal) {
        modal.classList.remove('open');
    }
    clearInterval(storyTimer);
}

window.openStory = openStory;
window.closeStory = closeStory;

// 18. WEB AUDIO API SYNTHESIZER (SOUND DEMOS)
let audioCtx = null;

function playSound(type) {
    // Lazy initialize AudioContext on user interaction
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Resume context if suspended (common browser security rule)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'guitar') {
        // Guitar Strum: play 3 notes in a chord (G Major-ish: G3, B3, D4) with slight delays
        const freqs = [196.00, 246.94, 293.66]; // G3, B3, D4
        freqs.forEach((freq, index) => {
            const strumDelay = index * 0.08;
            playGuitarNote(freq, now + strumDelay);
        });
        showToast("Reproduciendo acorde de guitarra electroacústica...", "success");
    } else if (type === 'violin') {
        // Violin Note: Sustained note with subtle vibrato
        playViolinNote(440.00, now); // A4
        showToast("Reproduciendo tono de violín eléctrico...", "success");
    } else if (type === 'bass') {
        // Bass Note: Deep note slide (E1 to E2)
        playBassNote(41.20, 82.41, now); // E1 to E2 slide
        showToast("Reproduciendo línea de bajo activo...", "success");
    }
}

function playGuitarNote(frequency, startTime) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'triangle'; // Triangle gives a warm acoustic tone
    osc.frequency.setValueAtTime(frequency, startTime);

    // Filter to cut high frequency harshness
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, startTime);
    filter.Q.setValueAtTime(1, startTime);

    // Volume Envelope: Strum attack and decay
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.4, startTime + 0.02); // Strum attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 1.8); // Long ring out

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + 1.8);
}

function playViolinNote(frequency, startTime) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    const vibrato = audioCtx.createOscillator();
    const vibratoGain = audioCtx.createGain();

    osc.type = 'sawtooth'; // Sawtooth represents bowed string rich harmonics
    osc.frequency.setValueAtTime(frequency, startTime);

    // Lowpass filter to emulate the violin body dampening
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, startTime);

    // Vibrato: modulate oscillator frequency
    vibrato.frequency.value = 6; // 6 Hz vibrato speed
    vibratoGain.gain.value = 4; // vibrato depth (Hz)
    
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    // Envelope
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.15); // Bow attack
    gainNode.gain.linearRampToValueAtTime(0.25, startTime + 1.2); // Sustained bow
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 1.8); // Bow release

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    vibrato.start(startTime);
    osc.start(startTime);
    
    vibrato.stop(startTime + 1.8);
    osc.stop(startTime + 1.8);
}

function playBassNote(startFreq, endFreq, startTime) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine'; // Sine wave for deep sub-bass
    osc.frequency.setValueAtTime(startFreq, startTime);
    // Slide / pitch bend up
    osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + 0.8);

    filter.type = 'lowpass';
    filter.frequency.value = 180; // Cut off high frequencies

    // Volume Envelope
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.6, startTime + 0.05); // Quick thumb attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 1.5); // Warm decay

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + 1.5);
}

window.playSound = playSound;
