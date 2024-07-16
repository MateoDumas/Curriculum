document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('download-resume').addEventListener('click', function () {
    window.open('Curriculum.pdf', '_blank');
});

// Animación al hacer scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
}
window.__lc = window.__lc || {};
window.__lc.license = YOUR_LICENSE_NUMBER;
(function (n, t, c) {
    function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = { _q: [], _h: null, _v: "2.0" };
    n[c] = n[c] || e;
    n[c].asyncInit = function () {
        e._h = c;
        e._q.forEach(function (n) { n() });
    };
    var a = t.createElement("script");
    a.async = !0;
    a.src = "https://cdn.livechatinc.com/tracking.js";
    var s = t.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(a, s);
})(window, document, "LC_API");