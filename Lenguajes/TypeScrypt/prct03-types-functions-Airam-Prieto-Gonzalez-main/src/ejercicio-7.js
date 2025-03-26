"use strict";
function IsValidTriangle(side_a, side_b, side_c) {
    let condition_a = side_a < side_b + side_c;
    let condition_b = side_b < side_a + side_c;
    let condition_c = side_c < side_b + side_a;
    if (condition_a && condition_b && condition_c) {
        return true;
    }
    return false;
}
function GetTypeTriangle(side_a, side_b, side_c) {
    if (!IsValidTriangle(side_a, side_b, side_c)) {
        return;
    }
    if ((side_a === side_b) && (side_a === side_c)) {
        return "Equilátero";
    }
    let isosceles_cond_a = ((side_a === side_b) && (side_a !== side_c));
    let isosceles_cond_b = ((side_a === side_c) && (side_a !== side_b));
    let isosceles_cond_c = ((side_c === side_b) && (side_b !== side_a));
    if (isosceles_cond_a || isosceles_cond_b || isosceles_cond_c) {
        return "Isósceles";
    }
    return "Escaleno";
}
console.log(GetTypeTriangle(7, 7, 7));
console.log(GetTypeTriangle(5, 5, 9.5));
console.log(GetTypeTriangle(5, 6, 7));
console.log(GetTypeTriangle(3, 1, 1));
console.log(GetTypeTriangle(-3, 1, 1));
