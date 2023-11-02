let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let inputValue = this.value.trim();
        if (inputValue !== "") {
            addItem(inputValue);
            this.value = "";
        } else {
            alert("Please enter a non-empty value.");
        }
    }
});

function addItem(inputValue) {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputValue + "<i></i>";

    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });

    list.appendChild(listItem);
}


