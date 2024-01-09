let myLink = document.querySelector("#myLink");
myLink.addEventListener("click", function(event) {
    event.preventDefault();
    let newText = prompt("Введите новый текст для ссылки:");
    if (newText !== null) {
        myLink.textContent = newText;
    }
});
