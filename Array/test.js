let arr = getArray();
console.log('1. --- get last element ---');
console.log('arr.at(-1)) = ' + arr.at(-1));
console.log('arr.at(-2)) = ' + arr.at(-2));
console.log('2. --- delete last element ---');
console.log('arr.pop() = ' + arr.pop());
console.log('arr = ' + arr);
console.log('arr.pop() = ' + arr.pop());
console.log('arr = ' + arr);
console.log('3. --- add last element ---');
console.log('arr.push("9") = ' + arr.push("8"));
console.log('arr = ' + arr);
console.log('arr.push("9") = ' + arr.push("9"));
console.log('arr = ' + arr);
console.log('4. --- delete first element ---');
console.log('arr.shift() = ' + arr.shift());
console.log('arr = ' + arr);
console.log('arr.shift() = ' + arr.shift());
console.log('arr = ' + arr);
console.log('5. --- add first element ---');
console.log('arr.unshift("1") = ' + arr.unshift("1"));
console.log('arr = ' + arr);
console.log('arr.unshift("0") = ' + arr.unshift("0"));
console.log('arr = ' + arr);
console.log('6. --- delete and add element ---');
console.log('arr.splice(2, 1, "0",  "0",  "0") = ' + arr.splice(2, 1, "0",  "0",  "0"));
console.log('arr = ' + arr);
console.log('arr.splice(6, 5, "0",  "0",  "0") = ' + arr.splice(6, 5, "0",  "0",  "0"));
console.log('arr = ' + arr);
console.log('arr.splice(-1, 0, "0",  "0",  "0") = ' + arr.splice(-1, 0, "0",  "0",  "0"));
console.log('arr = ' + arr);
console.log('7. --- copy elements ---');
arr = getArray();
console.log('arr.slice(1, 3) = ' + arr.slice(1, 3));
console.log('arr.slice(1) = ' + arr.slice(1));
console.log('arr.slice(-2) = ' + arr.slice(-2));
console.log('arr.slice(-3, -1) = ' + arr.slice(-3, -1));
console.log('arr.slice(-4, 10) = ' + arr.slice(-4, 10));
console.log('arr.slice() = ' + arr.slice());
console.log('8. --- combining arrays ---');
let arr1 = ["0", "1", "2"];
let arr2 = ["3", "4", "5"];
let arr3 = ["6", "7", "8"];
console.log('arr1 = ' + arr1);
console.log('arr2 = ' + arr2);
console.log('arr3 = ' + arr3);
console.log('arr1.concat(arr2, arr3, "9") = ' + arr1.concat(arr2, arr3, "9"));
console.log('arr1 = ' + arr1);
console.log('arr2 = ' + arr2);
console.log('arr3 = ' + arr3);
console.log('9. --- forEach ---');
arr = ["e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9",];
arr.forEach((item, index, array) => {
    console.log(`element=${item}, index=${index} in array ${array}`);
  });
console.log('10. --- find ---');
arr = ["e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9",];
console.log('test 1: find "e6"');
console.log('find()=' + arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
    console.log('item='+item+", index="+index+" in array "+array);
    return item=="e6"
  }));
console.log('test 2: find "e10"');
console.log('find()=' + arr.find(item=>item=="e10"));
console.log('11. --- findIndex ---');
console.log('test 1: findIndex "e6"');
console.log('findIndex()=' + arr.findIndex(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
    console.log('item='+item+", index="+index+" in array "+array);
    return item=="e6"
  }));
console.log('test 2: findIndex "e10"');
console.log('findIndex()=' + arr.findIndex(item=>item=="e10"));
console.log('12. --- filter ---');
arr = getArray();
console.log('filter(item=>item % 2 == 1)=' + arr.filter(item=>item % 2 == 1));
console.log('13. --- map ---');
arr = getArray();
console.log('arr.map(item=>"<"+item+">")=' + arr.map(item=>"<"+item+">"));
console.log('14. --- sort ---');
let strArr = "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.";
console.log(strArr);
arr = strArr.split(" ");
console.log('sort()=' + arr.sort(function(a, b) {return a.length - b.length}));
console.log('15. --- reduce ---');
arr = getArray();
console.log('arr.reduce((sum, current) => sum + Number(current), 0)=' + arr.reduce((sum, current) => sum + Number(current), 0));
console.log('---------------------------------');


function getArray() {
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
    console.log('arr = ' + arr);
    return arr;
}