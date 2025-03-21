function CheckCreditCard (CreditNumber: string | number): string | undefined {
    let credit_string: string = CreditNumber.toString();
    credit_string = credit_string.replaceAll(" ", "");
    if (credit_string.length === 16) {
        const credit_array: string[] = credit_string.split("");
        let credit_number: number[] = [];
        let aux_num: number = 0;
        for (let i = 0; i < 16; ++i) {
            aux_num = Number(credit_array[i]);
            if (i % 2 == 0) {
                aux_num *= 2;
                if (aux_num > 9) {
                    aux_num -= 9;
                } 
            }
            credit_number.push(aux_num);
        }
        let result: number = 0;
        credit_number.forEach(element => {
            result += element
        });
        if (result % 10 == 0) {
            return 'valid';
        } else {
            return 'not valid'
        }

    }
    return;
}

console.log(CheckCreditCard('8273 1232 7352 0569 0123'));
console.log(CheckCreditCard('8273 0569'));
console.log(CheckCreditCard('82730569'));
console.log(CheckCreditCard('4539 3195 0343 6467'));
console.log(CheckCreditCard(4539319503436467));
console.log(CheckCreditCard('8273 1232 7352 0569'));
console.log(CheckCreditCard(8273123273520569));
