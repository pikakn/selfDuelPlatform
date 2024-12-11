const card_Field = document.getElementsByClassName("cardZone");
const viewWindow = document.getElementById("cardView");
const View = document.getElementById("toggleView")
let toggle = 1;
let ViewCard = null;

for (i=0; i<card_Field.length; i++) {
    const FieldEach = card_Field[i];
    FieldEach.oncontextmenu = function(event) {
        event.preventDefault();

        if (event.target.classList.contains("card")) {
            viewWindow.innerHTML = "";
            viewWindow.style.display = "block";
            View.style.display = "inline-block";
            ViewCard = event.target.cloneNode(true)
            viewWindow.appendChild(ViewCard);
        }
        console.log(ViewCard)
        if (toggle == -1) {
            ViewCard.classList.add("focus");
        } else {
            ViewCard.classList.remove("focus");
        };
    };
}

viewWindow.addEventListener("click",()=>{
    viewWindow.style.display = "none";
    View.style.display = "none";
})
viewWindow.oncontextmenu =function(event) {
    event.preventDefault();
    viewWindow.style.display = "none";
    View.style.display = "none";
}

document.addEventListener("keydown",(event)=>{
    if (event.key == "q") {
        viewWindow.style.display = "none";
        View.style.display = "none";
    };
});

View.addEventListener("click",()=>{
    toggle *= -1
    if (toggle == -1) {
        ViewCard.classList.add("focus");
    } else {
        ViewCard.classList.remove("focus");
    };
})
