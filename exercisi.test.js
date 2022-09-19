// Ex. 1 Part.1

const mult = require('./exercisi-1-operacions');

describe('sumar,restar-mult,div', () => {
    it('should return true if operation is completed', () => {
        const result = mult.sumar(10,5)
        expect(result).toBe(15)
    })
    it('should return NaN if value is missing', () => {
        const result = mult.restar(5, undefined)
        expect(result).toBe(NaN)
    })
    it('should return true if operation is correct', () => {
        const result = mult.multiplicar(10,5)
        expect(result).toBe(50)
    })
    it('should return NaN if value is null', () => {
        const result = mult.dividir(null, null)
        expect(result).toBe(NaN)
    })

})


// Ex. 1 Part 2
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises
// i Callbacks N2 E1 i Promises

const exercisiuDos = require("./e1part2");
test('Segon test', () => {
    expect(exercisiuDos.funcioDos('Pepito', exercisiuDos.invocada)).toBe('Te llamas Pepito');
})

//i Callbacks N2 E2 (getEmployee() i getSalary()).

let employees = [{
    id: 1,
    name: 'Pepito Testeaito'
}];
let salaries = [{
    id:1,
    salary: 1000
}];



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