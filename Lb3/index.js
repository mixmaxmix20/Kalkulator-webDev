function init() {
    element.innerHTML="key";
    for (let j = 0; j < 5; j++) {
        let element = document.createElement("div")
        element.setAttribute("id", "f_" + j) // generujemy id unikalne dla każdego elementu
        element.setAttribute("class", "field") // przypisujemy klasę 
        element.setAttribute("onclick", "user_input('f_" + j + "')") // omijamy konieczność referencji na funkcję
        document.getElementById("kontener").appendChild(element)
        //zagnieżdżamy utworzone elementy w div o id kontener
    }
} 