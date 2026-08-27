const backToTop = document.getElementById("backToTop");

// Show button after scrolling
window.addEventListener("scroll", () =>  {
    if (window.scrollY > 400 ) {
        backToTop.classList.add("show");
    }  else {
        backToTop.classList.remove("show");
    }
});

//scroll to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});