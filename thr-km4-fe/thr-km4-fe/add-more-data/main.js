function addMoreData(object, key, value) {
  // return {...object, [key]: value}
  const newObject = {[key]: value};
  return Object.assign(object, newObject)
}

const Biodata = {
  nama: 'farhan',
  NIM: '20200120033',
  age: 22,
}

console.log(addMoreData(Biodata, 'address', 'Temanggung'));
console.log(addMoreData(Biodata, 'isMarried', false));


/* 
input: { name: 'Edo', age: 20 }, 'address', 'Jakarta'
output: { name: 'Edo', age: 20, address: 'Jakarta' }

input: { name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading']
output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

input: { name: 'Edo', age: 20 }, 'isMarried', false
output: { name: 'Edo', age: 20, isMarried: false }
*/