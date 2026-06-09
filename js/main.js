        // ---- Header scroll effect ----
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // ---- Mobile menu ----
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            menuIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuIcon.className = 'fa-solid fa-bars';
            });
        });

        // ---- Contact form ----
        function handleContactSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const email = document.getElementById('contact-email').value;
            const msg = document.getElementById('contact-msg').value;

            const textMessage = `¡Hola Aura Color Serigrafía! Soy ${name}.\n` +
                `Mi correo: ${email}\n` +
                `Mi teléfono: ${phone}\n\n` +
                `Mensaje: ${msg}`;
            window.open(`https://wa.me/50255554444?text=${encodeURIComponent(textMessage)}`, '_blank');

            e.target.reset();

            const toast = document.getElementById('contact-success-toast');
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 6000);
        }

        // ---- Scroll reveal animations ----
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // ---- Laser scan animation on product cards ----
        document.querySelectorAll('.product-card .card-image-wrapper, .product-card-hero, .showcase-item').forEach(target => {
            // Create laser beam element
            const beam = document.createElement('div');
            beam.className = 'laser-beam';
            target.appendChild(beam);

            // Trigger animation on hover
            const triggerEl = target.closest('.product-card') || target.closest('.product-card-hero') || target;
            triggerEl.addEventListener('mouseenter', () => {
                beam.classList.remove('laser-firing');
                void beam.offsetWidth; // force reflow
                beam.classList.add('laser-firing');
            });
            triggerEl.addEventListener('mouseleave', () => {
                beam.classList.remove('laser-firing');
            });
        });
