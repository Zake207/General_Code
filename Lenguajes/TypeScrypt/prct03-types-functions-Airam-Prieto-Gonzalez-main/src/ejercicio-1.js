"use strict";
function OnePunch(...chains) {
    if (chains.length == 0) {
        return '¡Broken!';
    }
    let result = chains.sort().reduce((total, chain) => total + " " + chain).replaceAll("a", "").replaceAll("e", "");
    if (result.replaceAll(" ", "").length == 0) {
        return '¡Broken!';
    }
    return result;
}
console.log(OnePunch('Beard', 'Jeans', 'Hairbrush', 'Knuckleduster', 'Sand'));
console.log(OnePunch('Sock', 'Beard', 'Vest', 'Lady', 'Sage'));
console.log(OnePunch('Beard', 'Sack', 'Gun', 'Parachute', 'Face-Kicking-Shoes'));
console.log(OnePunch('Snot', 'Snow', 'Soda', 'Tank', 'Beard'));
console.log(OnePunch(''));
console.log(OnePunch('', ''));
console.log(OnePunch());
