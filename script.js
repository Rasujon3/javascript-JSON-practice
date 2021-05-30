// https://jsonlint.com
// string
// number
// object (JSON object)
// array
// boolean
// null

// JSON doesn't suppoer undefined, date, function
var person = {
    name: "Sujon", // string
    age: 23, // number
    hometown: "Gaibandha",
    married: false,// bool
    dob: "1997-05-12",//date
    test_null: null,//null
    test_underfined: undefined,//undefined
    greet: function(){//function
        console.log(`Hello ${this.name}`);
    }

}
var person_json = JSON.stringify(person);
console.log(person_json);
