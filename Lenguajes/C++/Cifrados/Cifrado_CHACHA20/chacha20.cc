/*
        Universidad de La Laguna
        Escuela Superior de Ingeniería y Tecnología
        Grado en Ingeniería Informática
        Seguridad en Sistemas Informáticos
        Curso: 3º
        Práctica 3 Seguridad en Sistemas de Información
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
                string sbin_key, sbin_counter, sbin_nonce;
                SetParameters(sbin_key, sbin_counter, sbin_nonce, input_file);
                bitset<256> key(sbin_key);
                bitset<32> counter(sbin_counter);
                bitset<96> nonce(sbin_nonce);
                // MATRIX CREATION
                vector<bitset<32>> bin_array(16);
                MatrixCreator(bin_array, key, counter, nonce);
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