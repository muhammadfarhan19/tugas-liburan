function addNewElementUpDown(array, element, position) {
  if (array.length < 1) return 'Invalid array'
  if (position !== 'up' && position !== 'down') return 'Invalid position!';
  if (position === 'up') array.unshift(element)
  if (position === 'down') array.push(element)
  return array
}

const numArr = [1, 2, 3, 4, 5]
const stringArr = ["Edo", "Budi", "Joko", "Tono"]

console.log(addNewElementUpDown(numArr, 3, 'up'));
console.log(addNewElementUpDown(stringArr, 'Farhan', 'down'));
console.log(addNewElementUpDown(stringArr, 'Muhammad', 'left'));

/* 
input: [1, 2, 3, 4, 5], 6, 'up'
output: [6, 1, 2, 3, 4, 5]

input: [1, 2, 3, 4, 5], 6, 'down'
output: [1, 2, 3, 4, 5, 6]

input: ["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up'
output: ["Rudi", "Edo", "Budi", "Joko", "Tono"]

input: ["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down'
output: ["Edo", "Budi", "Joko", "Tono", "Rudi"]
*/