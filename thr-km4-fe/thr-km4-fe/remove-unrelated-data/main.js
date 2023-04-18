function removeUnrelated(object, key) {
  delete object[`${key}`];
  return object;
}

const obj = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};

console.log(removeUnrelated(obj, "name"));
