"use strict";
function RomanToDecimal(roman_number) {
    const roman_dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    // flitros de subcadenas
    const InvalidRomanCombinations = [
        // Repeticiones prohibidas
        "IIII", "VV", "XXXX", "LL", "CCCC", "DD", "MMMM",
        // Sustracciones inválidas (longitud 2)
        "IL", "IC", "ID", "IM",
        "VX", "VL", "VC", "VD", "VM",
        "XD", "XM",
        "LC", "LD", "LM",
        "DM",
        // Combinaciones inválidas de longitud 3
        "IVI", "IXI",
        "XLX", "XCX",
        "CDC", "CMC",
        "IIX", "IIV", "IXX",
        "XXL", "XXC", "CCD", "CCM",
        "VIV", "VIX", "VXL", "VXC",
        "XLVX", "XLXL", "XCXC",
        "IXL", "IXC", "IXD", "IXM",
        "XCD", "XCM",
        // Combinaciones de longitud 4 inválidas
        "XIXI", "XLXL", "XCXC", "CDCD", "CMCM"
    ];
    let is_valid = true;
    InvalidRomanCombinations.forEach(chain => {
        if (roman_number.includes(chain)) {
            is_valid = false;
        }
    });
    if (!is_valid) {
        return;
    }
    let same_symbol_iterator = 1;
    roman_number = roman_number.toUpperCase();
    let result = 0;
    for (let i = 0; i < roman_number.length; ++i) {
        // Inicialization of the actual number and the next number
        let actual_number = roman_dict[roman_number[i]];
        let next_number = roman_dict[roman_number[i + 1]];
        // Compare both of them and operates
        if (same_symbol_iterator === 4) {
            return;
        }
        if (actual_number < next_number) {
            same_symbol_iterator = 1;
            result -= actual_number;
        }
        if (actual_number > next_number) {
            same_symbol_iterator = 1;
            result += actual_number;
        }
        if (actual_number === next_number) {
            ++same_symbol_iterator;
            result += actual_number;
        }
    }
    result += roman_dict[roman_number[roman_number.length - 1]];
    return result;
}
;
function DecimalToRoman(decimal_number) {
    if (decimal_number < 0 || decimal_number > 3999) {
        return;
    }
    decimal_number = Math.trunc(decimal_number);
    const millar = {
        3: "MMM",
        2: "MM",
        1: "M"
    };
    const centenas = {
        9: "CM",
        8: "DCCC",
        7: "DCC",
        6: "DC",
        5: "D",
        4: "CD",
        3: "CCC",
        2: "CC",
        1: "C"
    };
    const decenas = {
        9: "XC",
        8: "LXXX",
        7: "LXX",
        6: "LX",
        5: "L",
        4: "XL",
        3: "XXX",
        2: "XX",
        1: "X"
    };
    const unidades = {
        9: "IX",
        8: "VIII",
        7: "VII",
        6: "VI",
        5: "V",
        4: "IV",
        3: "III",
        2: "II",
        1: "I"
    };
    let result = "";
    const index_m = Math.trunc(decimal_number / 1000);
    if (index_m != 0) {
        result = result + millar[index_m];
    }
    decimal_number = decimal_number % 1000;
    const index_c = Math.trunc(decimal_number / 100);
    if (index_c != 0) {
        result = result + centenas[index_c];
    }
    decimal_number = decimal_number % 100;
    const index_d = Math.trunc(decimal_number / 10);
    if (index_d != 0) {
        result = result + decenas[index_d];
    }
    decimal_number = decimal_number % 10;
    const index_u = decimal_number;
    if (index_u != 0) {
        result = result + unidades[index_u];
    }
    return result;
}
;
console.log(RomanToDecimal("MCMXCV"));
console.log(RomanToDecimal("MMXIV"));
console.log(RomanToDecimal("XIIII"));
console.log(RomanToDecimal("MDCCCLXXXIV"));
console.log(RomanToDecimal("MDCCCLXXXL"));
console.log("=========");
console.log(DecimalToRoman(1995));
console.log(DecimalToRoman(2014));
console.log(DecimalToRoman(-1995));
