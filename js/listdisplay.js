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

const datas_to_zone = ()=>{
    List.style.display = "none";
    ListBtn.style.display = "none";
    for (i=0; i<cardsListed.length; i++) {
        const CL = cardsListed[i];
        if (CL.classList.value == listedClass) {
            const CLchil = CL.children;
            allMoveDatas(List.children,CLchil[0]);
            CLchil[0].style.backgroundColor = "whitesmoke";
            listedClass=null
        };
    };
}  

for (i=0; i<cardsListed.length; i++) {
    const CL = cardsListed[i];
    CL.addEventListener("click",(event)=>{
        if (List.style.display != "inline-block" && event.target.classList.contains("card")) {
            alert("余白をクリックしてリストを表示")
        }
        if (List.style.display != "inline-block" && event.target.classList.contains("cardZone")) {
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


ListBtn.addEventListener("click",()=>{
    datas_to_zone();
});

document.addEventListener("keydown", (event)=>{
    if (event.key == "q" && List.style.display == "inline-block") {
        datas_to_zone()
    }
});
