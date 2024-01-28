//Settings
window.onload = () => {
    const btn = document.getElementById("btn-browse-collection");
    btn.addEventListener("click", () => {
        document.getElementById("subscription-a").scrollIntoView({
            behavior: "smooth"
        });
    });
};