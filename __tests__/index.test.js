import { getPercents } from '../src/index.js';

describe('getPercents function tests', () => { 
    it('should return persent from a number', () => {
        expect(getPercents(30, 200)).toBe(60);
    }),
        it('should operate with float percents', () => { 
            expect(getPercents(12.5, 200)).toBe(25)
        }),
        it('should return warning if arguments is negative numbers', () => {
            expect(getPercents(-20, 100)).toBe("Введены числа меньше 0");
            expect(getPercents(20, -100)).toBe("Введены числа меньше 0");
        }),
        it('should return warning if arguments is not numbers', () => { 
            expect(getPercents('a', true)).toBe("Вы ввели не числа");
            expect(getPercents(12, false)).toBe("Вы ввели не числа");
        }),
        it('should return warning if arguments equal NaN', () => { 
            expect(getPercents(NaN, 12)).toBe("Введено недопустимое значение");
        })
        

})