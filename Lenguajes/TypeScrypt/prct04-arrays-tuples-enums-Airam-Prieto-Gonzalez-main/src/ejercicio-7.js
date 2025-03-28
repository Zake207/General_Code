"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAttack = void 0;
/**
 * Function that receives a table and returns a boolean indicating if the white queen is attacking the black queen.
 * @param table Table with the characters '-' (empty box), 'B' (black queen) and 'W' (white queen).
 * @returns A boolean indicating if the white queen is attacking the black queen, undefined if the table is not valid.
 *
 * ```typescript
 * CheckAttack([
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', 'B', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', 'W']
 * ]) // Returns true
 * ```
 *
 */
function CheckAttack(table) {
    if (table.length !== 8) {
        return undefined;
    }
    table.forEach((row) => {
        if (row.length !== 8) {
            return undefined;
        }
    });
    let white_queen = 0;
    let black_queen = 0;
    let white_queen_position = [0, 0];
    let black_queen_position = [0, 0];
    table.forEach((row, x) => {
        row.forEach((box, y) => {
            switch (box) {
                case "B":
                    black_queen_position = [x, y];
                    ++black_queen;
                    break;
                case "W":
                    white_queen_position = [x, y];
                    ++white_queen;
                    break;
                default:
                    break;
            }
        });
    });
    if (black_queen !== white_queen || black_queen !== 1 || white_queen !== 1) {
        return undefined;
    }
    // Check Row
    for (let i = 0; i < 8; ++i) {
        if (table[black_queen_position[0]][i] === "W") {
            return true;
        }
    }
    // Check Colunm
    for (let i = 0; i < 8; ++i) {
        if (table[i][black_queen_position[1]] === "W") {
            return true;
        }
    }
    // Check diagonals
    for (let i = black_queen_position[0], j = black_queen_position[1]; i < 8 && j < 8; ++i, ++j) {
        if (table[i][j] === "W") {
            return true;
        }
    }
    for (let i = black_queen_position[0], j = black_queen_position[1]; i < 8 && j >= 0; ++i, --j) {
        if (table[i][j] === "W") {
            return true;
        }
    }
    for (let i = black_queen_position[0], j = black_queen_position[1]; i >= 0 && j < 8; --i, ++j) {
        if (table[i][j] === "W") {
            return true;
        }
    }
    for (let i = black_queen_position[0], j = black_queen_position[1]; i >= 0 && j >= 0; --i, --j) {
        if (table[i][j] === "W") {
            return true;
        }
    }
    return false;
}
exports.CheckAttack = CheckAttack;
console.log(CheckAttack([])); // Returns true
