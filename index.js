// const employee = {
//     key1: 'Bob',
//     key2: '123 Sesame St',
// }

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmp = { ...employee };
//     newEmp[key] = 'Rich';
//     newEmp[key] = 'the white house';
//     return newEmp
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = 'value'
//     return employee
// }

const employee = {
    key1: "Brenda Wise",
    key2: "123 Sesame St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = "Bob Dole";
    newEmployee[key] = "11 Broadway"
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employees, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {

    delete employee.name;
    return employee;


}

