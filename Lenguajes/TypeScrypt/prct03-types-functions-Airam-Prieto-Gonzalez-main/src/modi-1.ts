function manhattanDist(dimension: number, ...coordinates: number[]) : number | undefined {
        if (coordinates.length !== 2 * dimension) {
                return undefined;
        } else {
                let dist: number = 0;
                for (let i = 0; i < dimension; ++i) {
                        dist = dist + Math.abs(coordinates[i] - coordinates[i+dimension])
                }
                return dist;
        }
}

console.log(manhattanDist(2, 1, 3, 4, 10));
console.log(manhattanDist(2, 1, 1, 1, 1));
console.log(manhattanDist(3, -1, 3, 7, -5, 8, 7));
console.log(manhattanDist(4,1,1,1,2,2,2,2))