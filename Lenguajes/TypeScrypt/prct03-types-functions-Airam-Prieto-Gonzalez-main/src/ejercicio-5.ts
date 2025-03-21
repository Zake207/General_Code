function GetTriplets (number: number): string | undefined {
    number = Math.trunc(number);
    if (number < 0) {
        return;
    }
    let tripletas: string = "("
    let have_triplets: boolean = false;
    for (let a = 0; a < number/2; ++a) {
        for (let b = a + 1; b < number/2; ++b) {
            for (let c = b + 1; c < number/2; ++c) {
                if(((a < b) && (b < c)) && ((a**2 + b**2) == c**2) && (a + b + c == number)) {
                    have_triplets = true;
                    tripletas += a.toString() + ", " + b.toString() + ", " + c.toString() + ") ("
                }
            }
        }
    }
    if (have_triplets) {
        tripletas += "a";
        tripletas = tripletas.replace(" (a", "");
        return tripletas;
    }
    return;
}

console.log(GetTriplets(1000));
console.log(GetTriplets(-153));
console.log(GetTriplets(3));
console.log(GetTriplets(120));

