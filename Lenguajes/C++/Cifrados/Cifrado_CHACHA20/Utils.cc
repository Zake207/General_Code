#include <bitset>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>
#include <vector>
#include <cstdint>

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

void PrintBinArray(vector<bitset<32>> vector) {
  for (int i = 0; i < 16; ++i) {
    cout << hex << setw(8) << setfill('0') << vector[i].to_ulong() << " ";
    if (i % 4 == 3) cout << endl;
  }
}

void StringToBinary(const string& text, string& result) {
  for (int i = 0; i < text.size(); i++) {
    bitset<8> binary(text[i]);
    result += binary.to_string();
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
void ExtractBits(bitset<32>& result, const bitset<N>& bits, int start) {
    for (int i = 0; i < 32; i++) {
        result[i] = bits[start + i];
    }
} 

void HexStringToBinary(const string& hex_string, string& result) {
    for (char c : hex_string) {
        if (c == ':') continue;
        int value;
        if (c >= '0' && c <= '9') value = c - '0';
        else if (c >= 'A' && c <= 'F') value = 10 + (c - 'A');
        else if (c >= 'a' && c <= 'f') value = 10 + (c - 'a');
        else cout << "Carácter hexadecimal no válido." << endl;
        
        bitset<4> bits(value);
        result += bits.to_string();
    }
}

void MatrixCreator(vector<bitset<32>>& bin_array, bitset<256>& key, bitset<32>& counter, bitset<96>& nonce) {
  // SETS THE CONST WORDS
  bitset<32> const_1(0x61707865); // "expa"
  bitset<32> const_2(0x3320646e); // "nd 3"
  bitset<32> const_3(0x79622d32); // "2-by"
  bitset<32> const_4(0x6b206574); // "te k"

  bin_array[0] = const_1;
  bin_array[1] = const_2;
  bin_array[2] = const_3;
  bin_array[3] = const_4;

  for (int i = 4, j = 224; i < 12; ++i, j -= 32) {
    ExtractBits<256>(bin_array[i], key, j);
    bin_array[i] = ToLittleEndian(bin_array[i]);
  }
  bin_array[12] = ToLittleEndian(counter);
  for (int i = 13, j = 64; i < 16; ++i, j -= 32) {
    ExtractBits<96>(bin_array[i], nonce, j);
    bin_array[i] = ToLittleEndian(bin_array[i]);
  }
}

void SetParameters(string& key, string& counter, string& nonce, ifstream& input_file) {
    string skey, scounter, snonce;
    getline(input_file, skey);
    getline(input_file, scounter);
    getline(input_file, snonce);
    HexStringToBinary(skey, key);
    HexStringToBinary(scounter, counter);
    HexStringToBinary(snonce, nonce);
}

// Función Quarter Round (QR)
void QR(bitset<32>& a, bitset<32>& b, bitset<32>& c, bitset<32>& d) {
    uint32_t a_val = a.to_ulong();
    uint32_t b_val = b.to_ulong();
    uint32_t c_val = c.to_ulong();
    uint32_t d_val = d.to_ulong();

    a_val = a_val + b_val; d_val ^= a_val; d_val = ((d_val << 16) | (d_val >> 16));
    c_val = c_val + d_val; b_val ^= c_val; b_val = ((b_val << 12) | (b_val >> 20));
    a_val = a_val + b_val; d_val ^= a_val; d_val = ((d_val << 8) | (d_val >> 24));
    c_val = c_val + d_val; b_val ^= c_val; b_val = ((b_val << 7) | (b_val >> 25));

    a = bitset<32>(a_val);
    b = bitset<32>(b_val);
    c = bitset<32>(c_val);
    d = bitset<32>(d_val);
}

// Función QRMatrix corregida
void QRMatrix(vector<bitset<32>>& bin_array) {
    vector<bitset<32>> bin_array_copy = bin_array;
    for (int i = 0; i < 10; ++i) { // 10 iteraciones = 20 rondas
        // Ronda de columnas
        QR(bin_array[0], bin_array[4], bin_array[8], bin_array[12]);
        QR(bin_array[1], bin_array[5], bin_array[9], bin_array[13]);
        QR(bin_array[2], bin_array[6], bin_array[10], bin_array[14]);
        QR(bin_array[3], bin_array[7], bin_array[11], bin_array[15]);

        // Ronda de diagonales
        QR(bin_array[0], bin_array[5], bin_array[10], bin_array[15]);
        QR(bin_array[1], bin_array[6], bin_array[11], bin_array[12]);
        QR(bin_array[2], bin_array[7], bin_array[8], bin_array[13]);
        QR(bin_array[3], bin_array[4], bin_array[9], bin_array[14]);     
    }

    cout << "\n\tIterated Matrix\n\n";
    PrintBinArray(bin_array);

    // Sumar estado original
    for (size_t i = 0; i < bin_array.size(); ++i) {
        uint32_t sum = bin_array[i].to_ulong() + bin_array_copy[i].to_ulong();
        bin_array[i] = bitset<32>(sum);
    }
}