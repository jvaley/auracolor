const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace header logo
html = html.replace(
    /<a href="#inicio" class="header-logo">[\s\S]*?<\/a>/,
    `<a href="#inicio" class="header-logo">
                <img src="wordmark.png" alt="Aura Color Serigrafía" style="width: auto; height: 38px; border-radius: 0; border: none; box-shadow: none; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(14, 149, 236, 0.4));">
            </a>`
);

// 2. Change Hero copy
html = html.replace(
    /Tu Diseño\.<br>[\s\S]*?<span class="gradient-text">Tu Identidad\.<\/span>/,
    `Potencia tu <span class="highlight">Marca</span><br>
                        con Calidad <span class="gradient-text">Premium</span>`
);

html = html.replace(
    /Creamos prendas personalizadas y artículos publicitarios de máxima calidad\. Diseños vibrantes,[\s\S]*?única\./,
    `Fabricamos prendas personalizadas y artículos publicitarios que generan impacto. Aumenta tus ventas y fideliza a tus clientes con nuestra serigrafía y sublimación de primer nivel.`
);

// 3. Change Hero buttons to be more sales-focused
html = html.replace(
    /<div class="hero-cta-group">[\s\S]*?<\/div>\s*<div class="hero-socials">/,
    `<div class="hero-cta-group" style="gap: 1rem; flex-wrap: wrap;">
                        <a href="https://wa.me/50255554444?text=Hola%20Aura%20Color%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n"
                            target="_blank" class="btn-primary" style="font-size: 1.1rem; padding: 16px 36px; box-shadow: 0 10px 30px rgba(14, 149, 236, 0.4);">
                            <i class="fa-brands fa-whatsapp" style="font-size:1.4rem"></i>
                            <span>Cotizar mi Pedido</span>
                            <i class="fa-solid fa-arrow-right arrow"></i>
                        </a>
                        <a href="#productos" class="btn-secondary" style="font-size: 1.1rem; padding: 16px 36px;">
                            Ver Catálogo
                        </a>
                    </div>

                    <div class="hero-socials">`
);

// 4. Add "Cómo funciona" section below Hero
const howItWorksSection = `
    <!-- ============ CÓMO FUNCIONA ============ -->
    <section class="how-it-works" style="padding: 4rem 0; background: linear-gradient(to bottom, var(--dark-950), var(--dark-900)); border-bottom: 1px solid rgba(2, 118, 202, 0.1);">
        <div class="container">
            <div class="section-header reveal" style="margin-bottom: 3rem;">
                <h2 class="section-title" style="font-size: 2.2rem; text-align: center;">¿Cómo cotizar con nosotros?</h2>
                <div class="section-divider" style="margin: 1.5rem auto;"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; text-align: center;">
                <div class="reveal" style="padding: 2rem; background: rgba(8, 9, 12, 0.5); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="width: 60px; height: 60px; background: var(--brand-500); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.5rem; color: white; box-shadow: 0 0 20px rgba(14, 149, 236, 0.3);">1</div>
                    <h3 style="font-family: var(--font-outfit); font-size: 1.3rem; margin-bottom: 1rem; font-weight: 600;">Elige tu producto</h3>
                    <p style="color: #9ca3af; font-size: 0.95rem;">Selecciona playeras, sudaderas o accesorios de nuestro catálogo.</p>
                </div>
                <div class="reveal" style="padding: 2rem; background: rgba(8, 9, 12, 0.5); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="width: 60px; height: 60px; background: var(--brand-500); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.5rem; color: white; box-shadow: 0 0 20px rgba(14, 149, 236, 0.3);">2</div>
                    <h3 style="font-family: var(--font-outfit); font-size: 1.3rem; margin-bottom: 1rem; font-weight: 600;">Envía tu diseño</h3>
                    <p style="color: #9ca3af; font-size: 0.95rem;">Mándanos tu logo por WhatsApp y te asesoramos al instante.</p>
                </div>
                <div class="reveal" style="padding: 2rem; background: rgba(8, 9, 12, 0.5); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="width: 60px; height: 60px; background: var(--brand-500); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.5rem; color: white; box-shadow: 0 0 20px rgba(14, 149, 236, 0.3);">3</div>
                    <h3 style="font-family: var(--font-outfit); font-size: 1.3rem; margin-bottom: 1rem; font-weight: 600;">Recibe tu pedido</h3>
                    <p style="color: #9ca3af; font-size: 0.95rem;">Producción rápida y envíos seguros a toda Guatemala.</p>
                </div>
            </div>
        </div>
    </section>
`;

html = html.replace('<!-- ============ VALUES ============ -->', howItWorksSection + '\n    <!-- ============ VALUES ============ -->');

// 5. Enhance product links (make them look more like buttons)
html = html.replace(/class="card-link"/g, 'class="card-link" style="background: rgba(14, 149, 236, 0.1); border: 1px solid rgba(14, 149, 236, 0.3); padding: 10px 15px; border-radius: 8px; justify-content: center; font-weight: 600; color: #7cc8fc;" onmouseover="this.style.background=\'rgba(14, 149, 236, 0.2)\'" onmouseout="this.style.background=\'rgba(14, 149, 236, 0.1)\'"');

// 6. Contact and Footer (Sales CTA)
html = html.replace(
    /¿Listo para iniciar tu proyecto\?/,
    `¿Listo para aumentar tus ventas?`
);

html = html.replace(
    /Envíanos un mensaje o contáctanos por WhatsApp para obtener una cotización personalizada sin compromiso\./,
    `Contáctanos hoy mismo y recibe asesoría gratuita para tu primer pedido. ¡Destaca tu marca por encima de la competencia!`
);

html = html.replace(
    /<h2 class="contact-title">Hablemos de tu Idea<\/h2>/,
    `<h2 class="contact-title">Cotiza tu Proyecto Hoy</h2>`
);

fs.writeFileSync('index.html', html);
console.log('Update complete.');
