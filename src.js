
function dragMouseDown(e){
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e){
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt = document.getElementById("reactionSquare");
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

}

function closeDragElement(){
    document.onmouseup = null;
    document.onmousemove = null;
}

window.addEventListener('load', (event) => {
    let reactionSquare = document.createElement("div");
    reactionSquare.id = "reactionSquare";
    reactionSquare.style.backgroundColor = "f1f1f1"; 
    reactionSquare.style.border = "1px solid #d3d3d3"; 
    reactionSquare.style.textAlign = "center";
    reactionSquare.style.zIndex = "9"; 
    reactionSquare.style.position = "absolute"; 
    reactionSquare.style.resize = "both";
    reactionSquare.style.overflow = "auto";


    let reactionSquareHeader = document.createElement("div");
    reactionSquareHeader.id = "reactionSquareHeader";
    reactionSquareHeader.innerHTML = "Click here to move";

    reactionSquareHeader.style.padding = "10px"; 
    reactionSquareHeader.style.cursor = "move"; 
    reactionSquareHeader.style.zIndex = "10" 
    reactionSquareHeader.style.backgroundColor = "#2196F3"; 
    reactionSquareHeader.style.color = "#fff";

    reactionSquare.appendChild(reactionSquareHeader);

    let reaction = document.createElement("img");
    reaction.src = "https://media.tenor.com/sERfpbPKaukAAAAd/xqc-eat-chips.gif";
    reaction.alt = "reacting in progress";
    reaction.style.width = "400px";
    reaction.style.height = "400px";

    reactionSquare.appendChild(reaction);


    reactionSquareHeader.onmousedown = dragMouseDown;
    reactionSquare.ondblclick = dragMouseDown;
    
    document.body.prepend(reactionSquare);
});
