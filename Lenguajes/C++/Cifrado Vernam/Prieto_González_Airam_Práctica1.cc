/*
  Airam Prieto González
  alu0101546377@ull.edu.es
  Implementación del cifrado de Vernam

*/

#include <bitset>
#include <iostream>
#include <random>
#include <string>

using namespace std;

/// @brief Function that traduces a string var into a binary format var
/// @param text the string that will be encrypted
/// @param result the encrypted string in binary
void StringToBinary(const string& text, string& result) {
  for (int i = 0; i < text.size(); i++) {
    bitset<8> binary(text[i]);
    result += binary.to_string();
  }
}

/// @brief Function that traduces a binary format var into a string var
/// @param text the string that will be decrypted
/// @param result the decrypted string in binary
void BinaryToString(const string& binary, string& result) {
  for (int i = 0; i < binary.size(); i += 8) {
    bitset<8> ascii(binary.substr(i, 8));
    result += char(ascii.to_ulong());
  }
}


/// @brief Function that applies the Vernam Algorithm to the binary string using the key to encrypt/decrypt the message
/// @param bin_original_text the message to encrypt in binary
/// @param kSize the size of the string
/// @param key the key in binary
/// @param encrypted_text the result of the encrypting algorithm
void GenerateEncryptedText(const string& bin_original_text, const int kSize, const string& key, string& encrypted_text) {
  for (int i = 0; i < kSize; i++) {
    if (bin_original_text[i] == key[i])
      encrypted_text += '0';
    else
      encrypted_text += '1';
  }
}

int main(int argc, char* argv[]) {
  // Seed the random number generator.
  srand(time(NULL));
  cout << "/// VERNAM ENCRYPTING ///" << endl;

  // Ask the user for the plaintext.
  cout << "Enter the plaintext: ";
  string original_text;
  getline(cin, original_text);

  // Translate the original text into binary.
  string binary_original_text{""};
  StringToBinary(original_text, binary_original_text);
  int binary_size = binary_original_text.size();

  // Print the binary representation of the original text.
  cout << "Binary: " << binary_original_text << endl;
  cout << "Size: " << binary_size << endl;

  // Ask the user for the key or to generate a random one.
  string key{""};
  cout << "Enter the key or press ENTER to generate a random one: ";
  getline(cin, key);
  if (key.empty()) {
    for (int i = 0; i < binary_size; i++) {
      key += to_string(rand() % 2);
    }
  }
  cout << "Random key: " << key << endl;

  // XOR the original text with the key.
  string encrypted_text{""};
  GenerateEncryptedText(binary_original_text, binary_size, key, encrypted_text);
  cout << "Encrypted text: " << encrypted_text << endl;

  // Translate the encrypted text into ASCII.
  string ascii_encrypted_text{""};
  BinaryToString(encrypted_text, ascii_encrypted_text);
  cout << "Encrypted message: " << ascii_encrypted_text << endl;
}