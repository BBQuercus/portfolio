document.addEventListener("readystatechange", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.querySelector("#favicon").setAttribute("href", "images/fav_dark.ico");
        document.querySelector("#sun-icon").classList.remove("hidden");
        document.querySelector("#moon-icon").classList.add("hidden");
    }
    if (document.readyState == "complete") {
        document.querySelector(".page-loader").classList.add("hidden");
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});