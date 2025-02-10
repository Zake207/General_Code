#include <bitset>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <string>

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
//     cout << result.length() << endl;
//     cout << result << endl;
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
