function encodeRLE(chain: string) : string | undefined {
        if (chain.search(/^[A-Z]/gi)) {
                return undefined
        }
        let result : string = ""
        while (chain !== "") {
                let counter: number = 0
                let char: string = chain[0]
                for (let i = 0; i < chain.length; ++i) {
                        if (chain[i] === char) {
                                counter += 1
                        }
                        else {
                                break;
                        }
                }
                for (let i = 0; i < counter; ++i) {
                        chain = chain.replace(char,"")
                }
                if (counter === 1) {
                        result = result + char
                } else  {
                        result = result + counter.toString() + char
                }
        }
        
        return result
}

function decodeRLE(chain: string): string | undefined {
        if (!chain.search(/a-zA-z0-9/gi)) {
                return undefined
        }
        let result: string = ""
        let array: string[] = chain.split("")
        return result
}

console.log(encodeRLE('AAAAAAAAABGGGGGGGGTHHHHHHHB'))
console.log(encodeRLE('1AAAAAAAAABGGG1GGGGGTHHHHHHHB1'))

let encoded_chain: string = encodeRLE('AAAAAAAAABGGGGGGGGTHHHHHHHB')
console.log(decodeRLE(encoded_chain));