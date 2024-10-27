// Write your solution in this file!
const employee = [
    "name: Sam",
    `streetAddress: 11 Broadway`
]

function updateEmployeeWithKeyAndValue (obj,key,value) {
const newEmployee = {
    ...employee };
    newEmployee [key] = value
    return newEmployee 
}

function destructivelyUpdateEmployeeWithKeyAndValue (key,value) {
    const Employee = 
        Employee [key] = value
        return Employee 
    }
        

function deleteFromEmployeeByKey (employee, key){
    const newemployee = {
        ...employee
    }
    delete [key];
    return [key];
}
  
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]; 
    return obj;
  }  

  console.log(employee);