// 1. იპოვეთ ყველაზე გრძელი სიტყვა სტრინგში

let str = "The quick brown fox jumped over the lazy dog";
let strArr = str.split(" ");
let longest = "";
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length > longest.length) {
    longest = strArr[i];
  }
}

console.log(longest);
// 2. დააბრუნეთ დასორტირებული მასივი (რის მიხედვით?)
let arr = ["short", "medium", "longest", "tiny"];
arr.sort();
console.log(arr, 1);

let arr2 = ["short", "medium", "longest", "tiny"];
let first = arr2.pop();
arr2.unshift(first);
console.log(arr2, 2);

let arr3 = ["short", "medium", "longest", "tiny"];
arr3.sort((a, b) => a.length - b.length);
console.log(arr3, 3);
