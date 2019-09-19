// We have an object

const person = {
    generalData: {
        name: "Yevhenii",
        age: 29
    }
}
// get person data like name

const name = person.generalData.name

// checking if value exists

 if(person && person.generalData && person.generalData.name) {
     const name = person.generalData.name
 }

 // new solution is Optional Chaining

const name = person?.generalData?.name

// with default value

const name = person?.generalData?.name ?? "no name"

// dynamic parameter

let param = "name"
const name = person?.generalData?.[param] ?? "no name"

// check for the method

const method = person?.generalData?.method_name.() ?? "not method"


