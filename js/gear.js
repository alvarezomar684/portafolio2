let changedColorBtn = document.getElementById("color-btn");
let changedColor1 = document.getElementById("changed-color1")
let flagColor = false;



changedColorBtn.addEventListener("click", function() {
    
    if(flagColor === false) {
        changedColor1.classList.add("color-blue");
        flagColor = true;
    } else {
        changedColor1.classList.remove("color-blue");
        flagColor = false;
    }
})