// https://jsonlint.com
// string
// number
// object (JSON object)
// array
// boolean
// null

// JSON doesn't suppoer undefined, date, function
var person1 = {
    "name": "Sujon", // string
    "age": 23, // number
    "hometown": "Gaibandha"

};
var person1_json = JSON.stringify(person1);
console.log(person1_json);
var person1_obj = JSON.parse(person1_json);
console.log(person1_obj);
console.log(person1.name);
