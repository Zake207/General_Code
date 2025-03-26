"use strict";
function FormatChain(chain) {
    chain = chain.toLowerCase();
    chain = chain.replaceAll(/[.,¿?¡!"'\[\]-_~<>\-{}#@$%&+*/]/g, '');
    if (chain.includes("á")) {
        chain = chain.replaceAll("á", "a");
    }
    if (chain.includes("é")) {
        chain = chain.replaceAll("é", "e");
    }
    if (chain.includes("í")) {
        chain = chain.replaceAll("í", "i");
    }
    if (chain.includes("ó")) {
        chain = chain.replaceAll("ó", "o");
    }
    if (chain.includes("ú")) {
        chain = chain.replaceAll("ú", "u");
    }
    if (chain.includes("ü")) {
        chain = chain.replaceAll("ü", "u");
    }
    return chain;
}
function CalculateMatrixSize(length) {
    const f_min = Math.floor(Math.sqrt(length));
    if (f_min * f_min >= length) {
        return [f_min, f_min];
    }
    else if (f_min * (f_min + 1) >= length) {
        return [f_min, f_min + 1];
    }
    else {
        return [f_min + 1, f_min + 1];
    }
}
function SquareEncoding(chain) {
    let encrypted_chain = "";
    chain = FormatChain(chain);
    // Calculate the size of the matrix
    const dimensions = CalculateMatrixSize(chain.length);
    const rows = dimensions[0];
    const columns = dimensions[1];
    let matrix = [];
    // Fill the matrix
    let index = 0;
    for (let i = 0; i < rows; ++i) {
        let row = "";
        for (let j = 0; j < columns; ++j) {
            if (index < chain.length) {
                row += chain[index];
                ++index;
            }
            else {
                row += " ";
            }
        }
        matrix.push(row);
    }
    for (let i = 0; i < columns; ++i) {
        for (let j = 0; j < rows; ++j) {
            if (matrix[j][i] !== " ") {
                encrypted_chain += matrix[j][i];
            }
        }
        encrypted_chain += " ";
    }
    return encrypted_chain;
}
let message = "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.";
console.log(SquareEncoding(SquareEncoding(message)));
