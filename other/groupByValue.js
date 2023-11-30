const x = [
  { name: "andres", value: "1" },
  { name: "asimov", value: "2" },
  { name: "bob", value: "2" },
  { name: "dav", value: "3" },
  { name: "juanito", value: "1" },
  { name: "gundry", value: "1" },
  { name: "berg", value: "1" },
  { name: "sinclair", value: "1" },
];

Array.prototype.groupBy = function (key) {
  let grouped = Object.create({});
  this.forEach((item) => {
    if (grouped.hasOwnProperty(item[key])) {
      grouped[item[key]].push(item);
    } else {
      grouped[item[key]] = [item];
    }
  });
  return grouped;
};
const grouped = x.groupBy("value");
console.log(grouped);

//native solution example
//function myCallback({ quantity }) {
//     return quantity > 5 ? "ok" : "restock";
// }

// const result2 = Object.groupBy(inventory, myCallback);
