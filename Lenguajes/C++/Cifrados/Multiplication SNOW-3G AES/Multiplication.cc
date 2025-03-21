#include <iostream>
#include <string>
#include <bitset>

using namespace std;

void FormatNumber(int number, bitset<8>& result) {
        int first_digit = number / 10;
        int second_digit = number % 10;
        bitset<4> first_digit_binary(first_digit);
        bitset<4> second_digit_binary(second_digit);
        for (int i = 0; i < 4; i++) {
                result[i + 4] = first_digit_binary[i];
                result[i] = second_digit_binary[i];
        }
}

int main() {
        int number_a, number_b;
        cout << "Enter the two numbers to make the product: ";
        cin >> number_a >> number_b;
        if (number_a < 0 || number_b < 0 || number_a > 99 || number_b > 99) {
                cout << "Invalid numbers" << endl;
                return 1;
        }
        string module{""};
        cout << "Enter the module: ";
        cin >> module;
        if (module != "AES" && module != "SNOW-3G") {
                cout << "Invalid module" << endl;
                return 1;
        }
        bitset<8> number_a_binary;
        bitset<8> number_b_binary;
        bitset<8> module_binary{module == "AES" ? 0x1B : 0xA9};
        // FormatNumber(number_a, number_a_binary);
        // FormatNumber(number_b, number_b_binary);
        cout << "Primer byte: " << number_a_binary << endl;
        cout << "Segundo byte: " << number_b_binary << endl;
        cout << "Byte Algoritmo: " << module_binary << endl;
        bitset<8> result{};
        // Multiplicación
        for (int i = 0; i < 8; ++i) {
                bitset<8> a_pivot = number_a_binary;
                if (number_b_binary[i] == 1) {
                        // Desplazo segun la posición del bit
                        for (int j = 0; j < i; ++j) {
                                bool msb = a_pivot[7];
                                a_pivot <<= 1;
                                if (msb) {
                                        a_pivot ^= module_binary;
                                }
                        }
                        result ^= a_pivot;
                }
                
        }
        cout << "Multiplicación: " << result << endl;
}
