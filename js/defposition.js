const monstersField = document.getElementsByClassName("monster");

for (i=0; i<monstersField.length; i++) {
    const monsters = monstersField[i].children;
    for (j=0; j<monsters.length; j++) {
        monsters[j].addEventListener("click",(event)=>{
            const clickMonster = event.target;
            if (clickMonster.classList.contains("card")) {
                clickMonster.parentNode.classList.toggle("def");
            };
        });
    };
};