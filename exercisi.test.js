// Ex. 1 Part.1

const mult = require('./exercisi-1-operacions');


/*test('adds 3 x 3 to equal 9', () => {
    expect(mult(3, 3)).toBe(9);
});*/


// Ex. 1 Part 2
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises
// i Callbacks N2 E1 i Promises

const exercisiuDos = require("./e1part2");

test('Segon test', () => {
    expect(exercisiuDos.funcioDos('Pepito', exercisiuDos.invocada)).toBe('Te llamas Pepito');
})

//i Callbacks N2 E2 (getEmployee() i getSalary()).

/*let employees = [{
    id: 1,
    name: 'Pepito Testeaito'
}];
let salaries = [{
    id:1,
    salary: 1000
}];*/

test('Promise employee testing', () => {
    return exercisiuDos.getEmployee(1).then((res) => {
        expect(res).toStrictEqual({id: 1, name: 'Pepito Testeaito'})
    } )
    })

test('Promise salary testing', () => {
    return exercisiuDos.getSalary(1).then((res) => {
        expect(res).toStrictEqual({id:1, salary: 1000})
    } )
})
test('Async test', async () => {
    const data = await exercisiuDos.asyncFunc();
    expect(data).toStrictEqual(`I am resolved`);
})