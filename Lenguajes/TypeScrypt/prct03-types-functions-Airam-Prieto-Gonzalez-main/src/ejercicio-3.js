"use strict";
function FromIntToActions(number) {
    if (number < 1 || number > 31) {
        return;
    }
    let binary_number = [];
    while (number != 0) {
        binary_number.unshift(number % 2);
        number = Math.trunc(number / 2);
    }
    while (binary_number.length < 5) {
        binary_number.unshift(0);
    }
    // console.log(binary_number);
    let result = "";
    let actions = ["saltar", "levantar las cejas", "mover la nariz", "parpadear dos veces", "parpadear"];
    for (let i = 5; i >= 0; --i) {
        if (binary_number[i] == 1) {
            result = result.concat(", ", actions[i]);
        }
    }
    result = result.replace(", ", "");
    return result;
}
console.log(FromIntToActions(9));
console.log(FromIntToActions(26));
console.log(FromIntToActions(-27));
console.log(FromIntToActions(33));
