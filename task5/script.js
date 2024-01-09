function printAndClear() {
    const inputField = document.getElementById("inputField");
    const duplicateField = document.getElementById("duplicateField");
    console.log(inputField.value);
    inputField.value = "";
    duplicateField.textContent = inputField.value;
}
