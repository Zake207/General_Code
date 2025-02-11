#include <bitset>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int Parser(int argc, char* argv[]) {
  if (argc != 2) {
    return 1;
  }
  const string first_parameter{argv[1]};
  if (first_parameter == "--help") {
    ifstream help_file("./HELP.txt");
    if (help_file.is_open()) {
      string line("");
      while (getline(help_file, line)) {
        cout << line << endl;
      }
      help_file.close();
      return 3;
    } else {
      return 2;
    }
}
return 0;
}

void StringToBinary(const string& text, string& result) {
  for (int i = 0; i < text.size(); i++) {
    bitset<8> binary(text[i]);
    result += binary.to_string();
  }
}

void PrintHex(const bitset<32>& bitset) {
  cout << hex << setw(8) << setfill('0') << bitset.to_ullong() << " ";
}

void PrintBinArray(vector<bitset<32>> vector) {
  for (int i = 0; i < 16; ++i) {
    PrintHex(vector[i]);
    if (i % 4 == 3) cout << endl;
  }
}

bitset<32> ToLittleEndian(bitset<32>& bits) {
    bitset<32> result;
    for (int byte = 0; byte < 4; byte++) {
        // Extraemos un byte (8 bits) y lo colocamos en su nueva posición
        for (int bit = 0; bit < 8; bit++) {
            result[bit + (3 - byte) * 8] = bits[bit + byte * 8];
        }
    }
    
    return result;
}


template<size_t N>
void ExtractBits(bitset<32>& result,const std::bitset<N>& bits, int start) {
    for (int i = 0; i < 32; i++) {
        result[i] = bits[start + i]; // Copiar bit por bit
    }
}

void MatrixCreator(vector<bitset<32>>& bin_array,
                  bitset<32>& const_1, bitset<32>& const_2,
                  bitset<32>& const_3, bitset<32>& const_4,
                  bitset<256>& key, bitset<32>& counter,
                  bitset<96>& nonce) {
  // SETS THE CONST WORDS
  bin_array[0] = ToLittleEndian(const_1);
  bin_array[1] = ToLittleEndian(const_2);
  bin_array[2] = ToLittleEndian(const_3);
  bin_array[3] = ToLittleEndian(const_4);
  for (int i = 4, j = 224; i < 12; ++i, j -= 32) {
    ExtractBits<256>(bin_array[i], key, j);
    bin_array[i] = ToLittleEndian(bin_array[i]);
  }
  bin_array[12] = counter;
  for (int i = 13, j = 64; i < 16; ++i, j -= 32) {
    ExtractBits<96>(bin_array[i], nonce, j);
    bin_array[i] = ToLittleEndian(bin_array[i]);
  }
}

void HexStringToBinary(const string& hex_string, string& result) {
        for (char c : hex_string) {
        // Convertir cada carácter hexadecimal a su valor decimal
        int valor;
        if (c >= '0' && c <= '9') {
            valor = c - '0';
        } else if (c >= 'A' && c <= 'F') {
            valor = 10 + (c - 'A');
        } else if (c >= 'a' && c <= 'f') {
            valor = 10 + (c - 'a');
        } else if (c == ':') {
                continue;
        } else {
            throw std::invalid_argument("Carácter hexadecimal no válido.");
        }
        // Convertir el valor decimal a binario (4 bits)
        std::bitset<4> bits(valor);
        result += bits.to_string();
    }
}

void SetParameters(string& key, string& counter, string& nonce, ifstream& input_file) {
        string skey, scounter, snonce;
        getline(input_file, skey);
        getline(input_file, scounter);
        getline(input_file, snonce);
        string sbin_key, sbin_counter, sbin_nonce;
        HexStringToBinary(skey, sbin_key);
        HexStringToBinary(scounter, sbin_counter);
        HexStringToBinary(snonce, sbin_nonce);
        key = sbin_key;
        counter = sbin_counter;
        nonce = sbin_nonce;
}

void QR(bitset<32>& op_a, bitset<32>& op_b, bitset<32>& op_c, bitset<32>& op_d) {
  
}

void QRMatrix(vector<bitset<32>> bin_array) {

}
