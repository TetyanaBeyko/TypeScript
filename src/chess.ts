let hash: string = "#";
let space: string = " ";
const max_height: number = 8;

// for (let height: number = 1; height < max_height; height++) {
//     if (height % 2 === 0) {
//         console.log((hash + space).repeat(max_height / 2));
//     } else {
//         console.log((space + hash).repeat(max_height / 2));
//     }
// }

let chessboard: string = "";
let layer1;

for (let height: number = 1; height < max_height; height++) {
    if (height % 2 === 0) {
        layer1 = (hash + space).repeat(max_height / 2);
    } else {
        layer1 = (space + hash).repeat(max_height / 2);
    }

    chessboard += layer1 + "\n";
}
console.log(chessboard);
