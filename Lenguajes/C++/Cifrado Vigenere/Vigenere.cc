#include <iostream>
#include <string>
#include <random>
#include <algorithm>
#include <cctype>

using namespace std;

bool CapitalizeString(string& text, const int kSize) {
    for (int i = 0; i < kSize; ++i) {
        if (text[i] >= 97 && text[i] <= 122) {
            text[i] = text[i] - 32;
        }
        else if (text[i] >= 65 && text[i] <= 90) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

void DeleteSpaces(string& text, const int kSize) {
    text.erase(remove(text.begin(), text.end(), ' '), text.end());
}

void Vigenere(string& text, const string& kKey, const bool kMode) {
    int key_index{0};
    string result{""};
    if (kMode == true) {
        for (int i = 0; i < text.length(); ++i) {
            result += (char)((text[i] + kKey[key_index]) % 26 + 65);
            ++key_index;
            if (key_index == kKey.length()) {
                key_index = 0;
            }
        }
    } else {
        for (int i = 0; i < text.length(); ++i) {
            result += (char)((text[i] - kKey[key_index] + 26) % 26 + 65);
            ++key_index;
            if (key_index == kKey.length()) {
                key_index = 0;
            }
        }
    }
    text = result;
}

int main() {
    srand(time(NULL));
    bool flag_mode{true};
    cout << "Do you want to encrypt or decrypt the message? (1 for encrypt, 0 for decrypt): ";
    cin >> flag_mode;
    cin.ignore();
    cout << endl;
    cout << "/// VIGENERE ENCRYPTING ///" << endl;
    // Variables
    string key, text;
    // Input of the main variables
    cout << "Type the message you want to encrypt: ";
    getline(cin, text);
    // Convert the text to non-spaced capitalized text
    DeleteSpaces(text, text.length());
    if (!CapitalizeString(text, text.length())) {
        cout << "Error: You must introduce a text with only letters and without 'ñ'." << endl;
        return 1;
    }
    cout << "Now type the key, press enter if you want to generate a random one: ";
    getline(cin, key);
    if (key.empty()) {
        for (int i = 0; i < text.length(); i++) {
            key += (char)(rand() % 26 + 65);
        }
    }

    // Print the input
    cout << "Text : " << text << endl;
    cout << "Text lenght : " << text.length() << endl;
    cout << "Key : " << key << endl;
    cout << "Key lenght : " << key.length() << endl;

    // Encrypt the message using the Vigenere algorithm
    Vigenere(text, key, flag_mode);
    cout << "Encrypted message : " << text << endl;
    return 0;
}