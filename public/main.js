document.addEventListener("readystatechange", () => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //     document.querySelector("#favicon").setAttribute("href", "/fav_dark.ico");
    //     document.querySelector("#sun-icon").classList.remove("hidden");
    //     document.querySelector("#moon-icon").classList.add("hidden");
    // }
    if (document.readyState == "complete") {
        document.querySelector(".page-loader").classList.add("hidden");
    }
});
