/*
        Alumno : Airam Prieto González
        Alu : alu0101546377
        Correo : alu0101546377@ull.edu.es
        
        Práctica 3 : Cifrado CHACHA20 
*/

#include "Utils.cc"

int main(int argc, char* argv[]) {
        // CHECK THE PARAMETERS
        int parser_return{Parser(argc, argv)};
        switch (parser_return) {
        case 0:
                break;
        case 1:
                cout << "/// ERROR: Número de parámetros incorrecto, pruebe --help para más ayuda."
                << endl;
                return 1;
        case 2:
                cout << "/// ERROR: no se pudo abrir el archivo de ayuda." << endl;
                return 2;
        case 3:
                return 0;
        default:
                cout << "/// ERROR: Unkown error in the function Parser" << endl;
                return -1;
        }
        cout << "CIFRADO CHACHA20" << endl;
        // VAR DECLARATION
        string file_name(argv[1]);
        ifstream input_file(file_name);
        if (input_file.is_open()) {
                string message {""};
                getline(input_file, message);
                string sbin_key, sbin_counter, sbin_nonce;
                SetParameters(sbin_key, sbin_counter, sbin_nonce, input_file);
                bitset<256> key(sbin_key);
                bitset<32> counter(sbin_counter);
                bitset<96> nonce(sbin_nonce);
                // STANDAR WORD CREATION
                string sconst1, sconst2, sconst3, sconst4;
                StringToBinary("expa", sconst1);
                StringToBinary("nd 3", sconst2);
                StringToBinary("2-by", sconst3);
                StringToBinary("te k", sconst4);
                bitset<32> const_1(sconst1);
                bitset<32> const_2(sconst2);
                bitset<32> const_3(sconst3);
                bitset<32> const_4(sconst4);
                // MATRIX CREATION
                vector<bitset<32>> bin_array(16);
                MatrixCreator(bin_array, const_1, const_2, const_3, const_4, key, counter, nonce);
                cout << "\n\tOriginal Matrix\n\n"; 
                PrintBinArray(bin_array);
                QRMatrix(bin_array);
                cout << "\n\tDefinitive Matrix\n\n"; 
                PrintBinArray(bin_array);
        } else {
                cout << "/// ERROR: no se pudo abrir el archivo de ayuda." << endl;
                return 2;
        }
        input_file.close();
        return 0;
}