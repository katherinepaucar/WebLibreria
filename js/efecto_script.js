function mouseOver() {
    let enlacesMenu = document.getElementsByClassName("nav-link");
    console.log(enlacesMenu);
    for (var item of enlacesMenu)
        item.addEventListener("mouseover", function(event) {
            event.target.style = "box-shadow: 2px 2px gray; background-color: #005cb2; transition: 0.5s; border-radius: 5px;color: white;";
        });
} 

function mouseOut() {
    let enlacesMenu = document.getElementsByClassName("nav-link");
    for (var item of enlacesMenu) {
        item.addEventListener("mouseout", function(event) {
            event.target.style = "none";
        });
    }
}

