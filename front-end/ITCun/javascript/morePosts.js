var list_divhori = document.getElementById("list_divhori");
var a_Listshori = list_divhori.getElementsByClassName("list-group-item");

function show_nameND() {
    var input = document.getElementById("inNameND");
    var h = document.getElementById("nameND");
    h.innerHTML = input.value;
}

function show_newND() {
    var input = document.getElementById("inNewND");
    var smal = document.getElementById("newND");
    smal.innerHTML = input.value;
}

for (j = 0; j < a_Listshori.length; j++) {
    a_Listshori[j].addEventListener("click", function() {
        var current1 = document.getElementsByClassName("active_hori");
        current1[0].classList.remove("active_hori");
        this.className += " active_hori";
    });
}