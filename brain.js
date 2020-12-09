var cont = document.getElementById('cont');
const button = document.getElementById("button")
let sq = document.getElementsByClassName("gg")
for (var i=0 ; i<16*16 ; i++){
    let cell = document.createElement("div")
    //cell.innerText = (i+1)
    cont.appendChild(cell).className = "gg"
}
var wws = document.querySelectorAll('div') 
wws.forEach(ww => ww.addEventListener('mouseover', () => {
    ww.style.backgroundColor = 'black'
}))


button.addEventListener('click', () => {
    for (var i = 0; i<sq.length; i++){
        sq[i].style.backgroundColor = "transparent"
    }
});
