//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const invocada = (n) => {return `Te llamas ${n}`};
const funcioDos = (name, callback) =>{
    return callback(name);
}

//console.log(funcioDos('Pepito', invocada));
module.exports.funcioDos = funcioDos;
module.exports.invocada = invocada;


//Segona part

let employees = [{
    id: 1,
    name: 'Pepito Testeaito'
}];
let salaries = [{
    id:1,
    salary: 1000
}];

/*const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employeeFound = employees.find(e => e.id === id);
        if (employeeFound !== null) {
            resolve(employeeFound);
        } else {
            reject(onmessageerror(`Error`));
        }
    })
        .then((res) => {
            return res;
        })
}*/
/*
const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employeeFound = employees.find(e => e.id === id);
        if (employeeFound !== undefined) {
            resolve(employeeFound);
        } else {
            reject(onmessageerror(`Error`));
        }
    })
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(e => e.id === id);
        salary !== undefined
            ? resolve(salary)
            :  reject(onmessageerror(`Rejected ${id}`));
    })
}*/

getEmployee = (id) => {
    return new Promise((resolve,reject) => { 
        let employeeFound = employees.find(e => e.id === id)
        employeeFound ? resolve(employeeFound) 
                    : reject(console.log(`Error on employeeFound ${employeeFound}`))
        .catch((err) => console.log(`Error ${err}`))} )
   
}
getSalary = (id) => {
    return new Promise((resolve,reject) => { 
        let salaryFound = salaries.find(e => e.id === id)
        salaryFound ? resolve(salaryFound) 
                    : reject(console.log(`Error on salaryFound ${salaryFound}`))
        .catch((err) => console.log(`Error ${err}`))})
}

module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;



//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.



function slowPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`I am resolved`);
        }, 2000);
    });
}
async function asyncFunc() {
    return result = await slowPromise();
}


module.exports.slowPromise = slowPromise;
module.exports.asyncFunc = asyncFunc;