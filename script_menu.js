document.getElementById("burgerIcon").onclick = function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
};

document.addEventListener("click", function(event) {
    var isClickInsideMenu = document.getElementById("burgerMenu").contains(event.target);

    if (!isClickInsideMenu) {
        document.getElementById("menu").style.display = "none";
    }
});