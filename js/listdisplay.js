const cardsListed = document.getElementsByClassName("list");
const List = document.getElementById("cardList");
const ListBtn = document.getElementById("listClose");
let listedClass = null;

let moveCards = null;


const allMoveDatas =(source,destination)=> {
    for (j=0; j<source.length; j++) {
        destination.appendChild(source[j].cloneNode());
    };  
};

for (i=0; i<cardsListed.length; i++) {
    const CL = cardsListed[i];
    CL.addEventListener("click",(event)=>{
        if (List.style.display != "inline-block") {
            List.innerHTML = null;
            List.style.display = "inline-block";
            ListBtn.style.display = "inline-block";
            moveCards = event.target;
            moveCards.style.backgroundColor = "black";
            const cardList = moveCards.children;
            
            listedClass = moveCards.parentNode.classList.value;
            allMoveDatas(cardList,List);
            moveCards.innerHTML = null;       
            moveCards = null;
        };
    })
}


ListBtn.addEventListener("click", ()=>{
    List.style.display = "none";
    ListBtn.style.display = "none";
    for (i=0; i<cardsListed.length; i++) {
        const CL = cardsListed[i];
        if (CL.classList.value == listedClass) {
            const CLchil = CL.children;
            CLchil[0].innerHTML = null;
            allMoveDatas(List.children,CLchil[0]);
            CLchil[0].style.backgroundColor = "whitesmoke";
        };
    };
});