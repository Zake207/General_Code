#include <iostream>

void gmix_column(unsigned char *r) {
unsigned char a[4];
unsigned char b[4];
unsigned char c;
unsigned char h;
/* The array 'a' is simply a copy of the input array 'r'
* The array 'b' is each element of the array 'a' multiplied by 2
* in Rijndael's Galois field
* a[n] ^ b[n] is element n multiplied by 3 in Rijndael's Galois field */
for(c=0;c<4;c++) {
a[c] = r[c];
h = r[c] & 0x80; /* hi bit */
b[c] = r[c] << 1;
if(h == 0x80)
b[c] ^= 0x1b; /* Rijndael's Galois field */
}
r[0] = b[0] ^ a[3] ^ a[2] ^ b[1] ^ a[1]; /* 2 * a0 + a3 + a2 + 3 * a1 */
r[1] = b[1] ^ a[0] ^ a[3] ^ b[2] ^ a[2]; /* 2 * a1 + a0 + a3 + 3 * a2 */
r[2] = b[2] ^ a[1] ^ a[0] ^ b[3] ^ a[3]; /* 2 * a2 + a1 + a0 + 3 * a3 */
r[3] = b[3] ^ a[2] ^ a[1] ^ b[0] ^ a[0]; /* 2 * a3 + a2 + a1 + 3 * a0 */
}

int main() {
        // declaro una matriz de 4x4
        unsigned char r[4][4] = {
            {0xd4, 0xe0, 0xb8, 0x1e},
            {0xbf, 0xb4, 0x41, 0x27},
            {0x5d, 0x52, 0x11, 0x98},
            {0x30, 0xac, 0xf1, 0xc5}
        };
        // Imprime el resultado de la matriz tras aplicarle la operación
        for (int i = 0; i < 4; i++) {
            gmix_column(r[i]);
            for (int j = 0; j < 4; j++) {
                std::cout << std::hex << (int)r[i][j] << " ";
            }
            std::cout << std::endl;
        }
        return 0;
}