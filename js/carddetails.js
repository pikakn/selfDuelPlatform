const card_Field = document.getElementsByClassName("cardZone");
const viewWindow = document.getElementById("cardView");

for (i=0; i<card_Field.length; i++) {
    const FieldEach = card_Field[i];
    FieldEach.oncontextmenu = function(event) {
        event.preventDefault();
        console.log(event.target);
        if (event.target.classList.contains("card")) {
            viewWindow.innerHTML = "";
            viewWindow.style.display = "inline-block";
            viewWindow.appendChild(event.target.cloneNode());
            
        }
    };
}

viewWindow.addEventListener("click",()=>{
    viewWindow.style.display = "none";
})
viewWindow.oncontextmenu =function() {
    event.preventDefault();
    viewWindow.style.display = "none";
}

document.addEventListener("keydown",(event)=>{
    if (event.key == "q") {
        viewWindow.style.display = "none";
    };
});
