let arr = getArray();
console.log("--- get last element ---");
console.log("arr.at(-1)) = " + arr.at(-1));
console.log("arr.at(-2)) = " + arr.at(-2));
console.log("--- delete last element ---");
console.log("arr.pop() = " + arr.pop());
console.log("arr = " + arr);
console.log("arr.pop() = " + arr.pop());
console.log("arr = " + arr);
console.log("--- add last element ---");
console.log("arr.push('8') = " + arr.push("8"));
console.log("arr = " + arr);
console.log("arr.push('9') = " + arr.push("9"));
console.log("arr = " + arr);
console.log("---------------------------------");

function getArray() {
    console.log("--- Array ---");
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
    console.log(arr);
    return arr;
}