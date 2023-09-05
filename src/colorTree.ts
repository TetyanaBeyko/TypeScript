// let star: string = "\x1b[32m*\x1b[0m";
// const space: string = " "
// const trunk: string = "|";
// const earth: string = "_";
// const base_padding: number = 11;
// const max_height: number = 11;

// let yellowTree: string = ""
// yellowTree += " ".repeat(base_padding) + " "+ star + "\n"


// for (let height: number = 1; height < max_height; height++) {
    
//     let row = "";
//     for (let index = 0; index <= height; index++){
//         star = index % 5 == 0 ? "\x1b[33mo\x1b[0m" : "\x1b[32m*\x1b[0m";
//         row = row + star;
        
//     }
//     // star.repeat(height) + trunk + star.repeat(height)

//     let layer = (space.repeat(base_padding - height) + row + trunk + row);
//     yellowTree += layer + "\n";

// }
// let root: string = (trunk + earth + trunk);
// root = root.padStart(base_padding + Math.floor(root.length / 2) + 2)
// yellowTree += root;

// let redTree: string = ""
// redTree += " ".repeat(base_padding) + " "+ star + "\n"


// for (let height: number = 1; height < max_height; height++) {
    
//     let row = "";
//     for (let index = 0; index <= height; index++){
//         star = index % 5 == 0 ? "\x1b[31mo\x1b[0m" : "\x1b[32m*\x1b[0m";
//         row = row + star;
//     }
//     // star.repeat(height) + trunk + star.repeat(height)

//     let layer = (space.repeat(base_padding - height) + row + trunk + row);
//     redTree += layer + "\n";
// }

// redTree += root;

// setTimeout(() => {
//     console.log(yellowTree);
// }, 1000);
// setTimeout(() => {
//     console.log(redTree);
// }, 2000);

