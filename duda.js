/* Por qué esto no funciona
-> No era equalTo && .then must be outside returning an obj

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employeeFound = employees.find(e => e.id === id);
        if (employeeFound !== undefined) {
           return promise1 = Promise.resolve(employeeFound);
        } else {
            reject(onmessageerror(`Error`));
        }
    })
        .then(
        promise1.then((res) => {
            console.log(res);
        })
        )
}


 */