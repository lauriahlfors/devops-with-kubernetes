import { nanoid } from "nanoid";

const generateDateHash = (): string => {
    return `${new Date().toISOString()}: ${nanoid()}`;
};

console.log(`[LOG PROJECT]`);

// Initial hash
let hash = generateDateHash();
console.log(hash);

// Hash every 5 seconds
setInterval(() => {
    hash = generateDateHash();
    console.log(hash);
}, 5000);
