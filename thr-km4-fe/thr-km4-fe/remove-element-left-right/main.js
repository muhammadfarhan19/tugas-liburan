function removeLeftRight(arr, position) {
  if (position !== 'left' && position !== 'right') return 'Invalid Input'
  if (position === 'left') arr.shift()
  if (position === 'right') arr.pop()
  return arr
}

const numArr = [1, 2, 3, 4, 5]
const stringArr = ["Edo", "Budi", "Joko", "Tono"]

console.log(removeLeftRight(numArr, 'left'));
console.log(removeLeftRight(stringArr, 'right'));

/* 
input: [1, 2, 3, 4, 5], 'left'
output: [2, 3, 4, 5]

input: [1, 2, 3, 4, 5], 'right'
output: [1, 2, 3, 4]

input: ["Edo", "Budi", "Joko", "Tono"], 'left'
output: ["Budi", "Joko", "Tono"]

input: ["Edo", "Budi", "Joko", "Tono"], 'right'
output: ["Edo", "Budi", "Joko"]
*/