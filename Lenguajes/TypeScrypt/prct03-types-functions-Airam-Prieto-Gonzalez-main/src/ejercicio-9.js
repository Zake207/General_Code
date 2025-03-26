"use strict";
function MCD(num_x, num_y) {
    while (num_x !== num_y) {
        if (num_x > num_y) {
            num_x = num_x - num_y;
        }
        else if (num_x < num_y) {
            num_y = num_y - num_x;
        }
    }
    return num_x;
}
function AddRational(num_a, den_a, num_b, den_b) {
    if ((typeof num_a === "number") && (typeof num_b === "number") && (typeof den_a === "number") && (typeof den_b === "number")) {
        return (num_a / den_a) + (num_b / den_b);
    }
    else if ((typeof num_a === "string") && (typeof num_b === "string") && (typeof den_a === "string") && (typeof den_b === "string")) {
        const num = Number(Number(num_a) * Number(den_b) + Number(num_b) * Number(den_a));
        const den = Number(Number(den_a) * Number(den_b));
        const mcd = MCD(num, den);
        let result = String(num / mcd) + "/" + String(den / mcd);
        return result;
    }
    else {
        return;
    }
}
function SubRational(num_a, den_a, num_b, den_b) {
    if ((typeof num_a === "number") && (typeof num_b === "number") && (typeof den_a === "number") && (typeof den_b === "number")) {
        return (num_a / den_a) - (num_b / den_b);
    }
    else if ((typeof num_a === "string") && (typeof num_b === "string") && (typeof den_a === "string") && (typeof den_b === "string")) {
        const num = Number(Number(num_a) * Number(den_b) - Number(num_b) * Number(den_a));
        const den = Number(Number(den_a) * Number(den_b));
        const mcd = MCD(num, den);
        let result = String(num / mcd) + "/" + String(den / mcd);
        return result;
    }
    else {
        return;
    }
}
function MulRational(num_a, den_a, num_b, den_b) {
    if ((typeof num_a === "number") && (typeof num_b === "number") && (typeof den_a === "number") && (typeof den_b === "number")) {
        return (num_a / den_a) * (num_b / den_b);
    }
    else if ((typeof num_a === "string") && (typeof num_b === "string") && (typeof den_a === "string") && (typeof den_b === "string")) {
        const num = Number(Number(num_a) * Number(num_b));
        const den = Number(Number(den_a) * Number(den_b));
        const mcd = MCD(num, den);
        let result = String(num / mcd) + "/" + String(den / mcd);
        return result;
    }
    else {
        return;
    }
}
function DivRational(num_a, den_a, num_b, den_b) {
    if ((typeof num_a === "number") && (typeof num_b === "number") && (typeof den_a === "number") && (typeof den_b === "number")) {
        return (num_a / den_a) / (num_b / den_b);
    }
    else if ((typeof num_a === "string") && (typeof num_b === "string") && (typeof den_a === "string") && (typeof den_b === "string")) {
        const num = Number(Number(num_a) * Number(den_b));
        const den = Number(Number(num_b) * Number(den_a));
        const mcd = MCD(num, den);
        let result = String(num / mcd) + "/" + String(den / mcd);
        return result;
    }
    else {
        return;
    }
}
console.log("/// ADD");
console.log(AddRational('356', '49', '64', '994'));
console.log(AddRational(1, 4, 1, 2));
console.log("/// SUBSTRACT");
console.log(SubRational('356', '49', '64', '994'));
console.log(SubRational(1, 2, 1, 4));
console.log("/// MULTIPLICATION");
console.log(MulRational('356', '49', '64', '994'));
console.log(MulRational(1, 4, 1, 2));
console.log("/// DIVISION");
console.log(DivRational('356', '49', '64', '994'));
console.log(DivRational(1, 4, 1, 2));
