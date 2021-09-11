// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"Park Ave",
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newemployee = {...employee};
    newemployee[key] = value
    return newemployee;

}
destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue();
function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee};
    delete newemployee.name;
    return newemployee;

}
deleteFromEmployeeByKey();
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
destructivelyDeleteFromEmployeeByKey();