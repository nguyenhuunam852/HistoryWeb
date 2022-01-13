var list_div = document.getElementById("list_div");
var alists = list_div.getElementsByClassName("list-group-item");
var list_divhori = document.getElementById("list_divhori");
var a_Listshori = list_divhori.getElementsByClassName("list-group-item");

for (var i = 0; i < alists.length; i++) {
    alists[i].addEventListener("click", function() {
        var cu = document.getElementsByClassName("active_hori");
        cu[0].classList.remove("active_hori");
        a_Listshori[0].classList.add("active_hori");
        var current = document.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.className += " active";
        for (j = 0; j < a_Listshori.length; j++) {
            a_Listshori[j].addEventListener("click", function() {
                var current1 = document.getElementsByClassName("active_hori");
                current1[0].classList.remove("active_hori");
                this.className += " active_hori";
            });
        }
    });
}