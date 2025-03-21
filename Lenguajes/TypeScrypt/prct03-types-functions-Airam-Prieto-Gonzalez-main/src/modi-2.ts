function hammingDist(chain1: string, chain2: string) : number | undefined {
        let operator1: string = chain1
        let operator2: string = chain2
        if (chain1.length !== chain2.length) {
                return undefined
        }
        operator1 = operator1.replaceAll(/A|G|C|T/g, "")
        operator2 = operator2.replaceAll(/A|G|C|T/g, "")

        if (operator1.length !== 0 || operator2.length !== 0) {
                return undefined
        }
        let chain_length: number = chain1.length
        let result: number = 0
        for (let i = 0; i < chain_length; ++i) {
                if (chain1[i] !== chain2[i]) {
                        result += 1
                }
        }
        return result
}       

console.log(hammingDist('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'));
console.log(hammingDist('GAGCCTACTAACGGGAT', 'CATCGTAA'));
console.log(hammingDist('GAGCCTAZTAACGGGAT', 'CATCGTAATGACGZCCT'));