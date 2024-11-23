let fileInput = null;
const cardInput = document.getElementById('cardInput');
cardInput.addEventListener('change', (event)=> {
    fileInput = event.target;
    let addElement = "";
    for (i=0; i<fileInput.files.length; i++) {
        let fileName = fileInput.files[i].name;
        addElement += "<img src=\"images/" + fileName +"\" class=\"card\">" + "\n"; 
    }
    addElement.slice(0,addElement.length-2);
    const cardContainer = document.getElementById("firstContainer");
    console.log(addElement);
    cardContainer.children[0].innerHTML = addElement;
});