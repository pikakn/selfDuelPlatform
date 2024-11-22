const cardField = document.getElementsByClassName("cardZone");
const draggedCards = document.querySelectorAll(".card");
let oneCard = null;

for (let i=0; i<draggedCards.length; i++) {
    draggedCards[i].draggable = true;
}

for (let i=0; i<cardField.length; i++) {
    const CF = cardField[i];
    CF.addEventListener("dragstart",(event)=>{
        oneCard = event.target

        if (oneCard.draggable != true) {
            event.dataTransfer.effectAllowed = "none";
        }
        else {
            event.dataTransfer.effectAllowed = "move";    
        }     
    });

    CF.addEventListener("dragover", (event)=>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "move";
    });

    CF.addEventListener("drop", (event)=> {
        event.preventDefault()
        if (oneCard) {
            const targetPalette = event.currentTarget; // ドロップ先のパレット
            // ドロップ先に要素を追加
            targetPalette.appendChild(oneCard);
  
            oneCard = null; // 状態をリセット
          }
    });
}




