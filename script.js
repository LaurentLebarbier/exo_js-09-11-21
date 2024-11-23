const form = document.querySelector("form");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const name = document.querySelector('input[type="text"]');
    const number = document.querySelector('input[type="number"]');
    const errorName = document.querySelector(".container_name p");
    const errorNumber = document.querySelector(".container_note p");

    if (!name.validity.valid){
        errorName.hidden = false;
    }
    else {
        errorName.hidden = true;
    }

    if (!number.validity.valid){
        errorNumber.hidden = false;
    }
    else {
        errorNumber.hidden = true;
    }

})