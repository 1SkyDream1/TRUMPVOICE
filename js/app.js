(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const heroTitle = document.querySelector(".hero__title");
    const texts = [ "New Meme?", "Are you ready?", "Follow us!" ];
    let currentIndex = 0;
    function changeText() {
        heroTitle.classList.add("fade-out");
        setTimeout((() => {
            currentIndex = (currentIndex + 1) % texts.length;
            heroTitle.textContent = texts[currentIndex];
            if (heroTitle.textContent === "Follow us!") heroTitle.classList.add("color"); else heroTitle.classList.remove("color");
            heroTitle.classList.remove("fade-out");
            heroTitle.classList.add("fade-in");
            setTimeout((() => {
                heroTitle.classList.remove("fade-in");
            }), 500);
        }), 500);
    }
    setInterval(changeText, 2e3);
    window["FLS"] = true;
    isWebp();
    addLoadedClass();
})();