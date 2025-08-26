function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.up = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    const colors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-yellow)', 'var(--neon-green)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 25000);
    }
}

setInterval(createParticle, 800);

for (let i = 0; i < 8; i++) {
    setTimeout(createParticle, i * 300);
}

function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPath.includes(href.replace('/index.html', '')) || 
            (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/index.html')))) {
            link.classList.add('active');
        }
    });
}

function observeCards() {
    const cards = document.querySelectorAll('.card');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    observeCards();
    
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
      const currentPath = window.location.pathname;
      document.querySelectorAll(".nav-link").forEach(link => {
        if (currentPath.includes(link.getAttribute("href"))) {
          link.classList.add("active");
        }
      });
    });
});


function loadHeader() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('header');
            if (headerContainer) {
                headerContainer.innerHTML = data;

                setActiveNav();
            }
        })
        .catch(err => console.error('Error loading header:', err));
    fetch("/footer.html")
        .then(res => res.text())
        .then(data => document.querySelector("footer").innerHTML = data);

}



function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            // Random colors
            const colors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-yellow)', 'var(--neon-green)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            document.getElementById('particles').appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 25000);
        }

        setInterval(createParticle, 500);
        
        for (let i = 0; i < 10; i++) {
            setTimeout(createParticle, i * 200);
        }

function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        let normalizedHref = href.replace('/index.html', '').replace('index.html', '');
        let normalizedPath = currentPath.replace('/index.html', '').replace('index.html', '');

        if (normalizedPath === normalizedHref) {
            link.classList.add('active');
        }
    });
}

function observeCards() {
    const cards = document.querySelectorAll('.card');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    observeCards();

    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
});


function loadCSS() {
    files = ['/styles/main.css', '/styles/layout.css', '/styles/pdf.css'];
    files.forEach(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
    });
}


