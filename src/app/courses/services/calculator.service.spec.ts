import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerSpyService', ['log'])

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        })

        calculator = TestBed.inject<CalculatorService>(CalculatorService);
    })

    it('should add two numbers', () => {
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    })

    it('should rest two numbers', () => {
        const result = calculator.subtract(2, 2);
        expect(result).toBe(0, 'Se jodio el test')
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)

    })
})