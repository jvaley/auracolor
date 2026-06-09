const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace nav-desktop CSS
const navDesktopRegex = /\/\* Desktop Nav \*\/[\s\S]*?(?=\.btn-whatsapp-header)/;
const newNavDesktopCSS = `/* Desktop Nav */
        .nav-desktop {
            display: none;
            align-items: center;
            gap: 1.5rem;
        }

        .nav-desktop a {
            font-family: var(--font-outfit);
            font-size: 0.95rem;
            font-weight: 600;
            color: #9ca3af;
            padding: 8px 16px;
            border-radius: 20px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 1;
        }

        .nav-desktop a::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(56, 174, 249, 0.15);
            border-radius: 20px;
            z-index: -1;
            transform: scale(0.8);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-desktop a:hover {
            color: var(--brand-200);
            text-shadow: 0 0 15px rgba(56, 174, 249, 0.6);
        }

        .nav-desktop a:hover::before {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 20px rgba(56, 174, 249, 0.2);
        }

        `;
html = html.replace(navDesktopRegex, newNavDesktopCSS);

// Add logo CSS
const logoCSS = `
        .header-logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
            padding: 5px 0;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-logo-container:hover {
            transform: scale(1.03);
        }

        .logo-icon-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-glow {
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, var(--brand-400), var(--brand-700));
            border-radius: 50%;
            filter: blur(10px);
            opacity: 0.6;
            z-index: 0;
            transition: all 0.5s;
        }

        .header-logo-container:hover .logo-glow {
            opacity: 1;
            filter: blur(14px);
            transform: scale(1.1);
            background: linear-gradient(135deg, var(--brand-300), var(--brand-500));
        }

        .logo-icon-img {
            position: relative;
            z-index: 1;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.2);
            background: var(--dark-950);
            object-fit: contain;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-logo-container:hover .logo-icon-img {
            transform: rotate(360deg);
        }

        .logo-divider {
            width: 2px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(56, 174, 249, 0.5), transparent);
        }

        .logo-wordmark {
            width: auto;
            height: 38px;
            object-fit: contain;
            filter: drop-shadow(0 4px 12px rgba(14, 149, 236, 0.4));
            transition: filter 0.3s;
        }

        .header-logo-container:hover .logo-wordmark {
            filter: drop-shadow(0 4px 15px rgba(14, 149, 236, 0.8));
        }
`;

// Insert logoCSS just before /* Desktop Nav */
html = html.replace('/* Desktop Nav */', logoCSS + '\n        /* Desktop Nav */');

// Replace the header HTML
const headerLogoRegex = /<a href="#inicio" class="header-logo"[\s\S]*?<\/a>/;
const newHeaderLogo = `<a href="#inicio" class="header-logo-container">
                <div class="logo-icon-wrapper">
                    <div class="logo-glow"></div>
                    <img src="logo_transparent.png" alt="Aura Color Logo" class="logo-icon-img">
                </div>
                <div class="logo-divider"></div>
                <img src="wordmark.png" alt="Aura Color Serigrafía" class="logo-wordmark">
            </a>`;

html = html.replace(headerLogoRegex, newHeaderLogo);

// Increase header-inner height to give more room for the interactive logo
html = html.replace(/height: 76px;/, 'height: 90px;');

fs.writeFileSync('index.html', html);
console.log('Done.');
