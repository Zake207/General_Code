#include <iostream>
#include <bitset>
#include <map>
#include <vector>

using namespace std;

const map<int,pair<int,int>> TABLE_CA {
        {1, {2,6}},
        {2, {3,7}},
        {3, {4,8}},
        {4, {5,9}},
        {5, {1,9}},
        {6, {2,10}},
        {7, {1,8}},
        {8, {2,9}},
        {9, {3,10}},
        {10, {2,3}},
        {11, {3,4}},
        {12, {5,6}},
        {13, {6,7}},
        {14, {7,8}},
        {15, {8,9}},
        {16, {9,10}},
        {17, {1,4}},
        {18, {2,5}},
        {19, {3,6}},
        {20, {4,7}},
        {21, {5,8}},
        {22, {6,9}},
        {23, {1,3}},
        {24, {4,6}},
        {25, {5,7}},
        {26, {6,8}},
        {27, {7,9}},
        {28, {8,10}},
        {29, {1,6}},
        {30, {2,7}},
        {31, {3,8}},
        {32, {4,9}},
};

int main() {
        // Read the id that will be used
        int id_number {0};
        cout << "Introduzca el id (1-32): ";
        cin >> id_number;
        if (id_number < 1 || id_number > 32) {
                cout << "El id introducido no es válido" << endl;
                return 1;
        }
        // Inicialize the two bits that will be tapped in the second operand
        int first_tap {10 - TABLE_CA.at(id_number).first};
        int second_tap {10 - TABLE_CA.at(id_number).second};
        // Read the number of bits that will be generated
        int bits_number {0};
        cout << "Introduzca el número de bits a generar: ";
        cin >> bits_number;
        // Declare the two main operands and the result
        bitset<10> operand_a("1111111111");
        bitset<10> operand_b("1111111111");
        vector<int> result{};
        result.resize(bits_number);
        for (int i = 0; i < bits_number; ++i) {
                // Calculate the bit of the first operand
                cout << operand_a << "\t";
                bool bit_a = operand_a[7] ^ operand_a[0];
                cout << bit_a << "\t|\t";
                // Calculate the bit of the second operand
                cout << operand_b << "\t";
                bool bit_b = operand_b[0] ^ operand_b[1] ^ operand_b[2] ^ operand_b[4] ^ operand_b[7] ^ operand_b[8];
                cout << bit_b << "\t|\t";
                // Calculate the next result bit
                bool next_result_bit{static_cast<bool>(operand_a[0] ^ (operand_b[(first_tap)] ^ operand_b[second_tap]))};
                cout << next_result_bit << endl;

                // Update the operands
                operand_a >>= 1;
                operand_a[9] = bit_a;
                operand_b >>= 1;
                operand_b[9] = bit_b;
                result[i] = next_result_bit;
        }
        // Print the result
        cout << "\nResult ==>  ";
        for (int i = 0; i < bits_number; ++i) {
                cout << result[i] << " ";
        }
        cout << "\n\n";
        return 0;
}