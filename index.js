// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {
        ...obj // Spread the properties of the original object
    };
    newEmployee[key] = value; // Add/Update the key-value pair
    return newEmployee; // Return the new object
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; // Directly update the key-value pair on the original object
    return obj; // Return the updated object
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee // Spread the properties of the original object
    };
    delete newEmployee[key]; // Remove the key-value pair from the new object
    return newEmployee; // Return the new object
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]; // Directly delete the key-value pair from the original object
    return obj; // Return the updated object
}

console.log(employee);
