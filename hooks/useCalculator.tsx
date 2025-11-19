import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multipy = 'x',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
        //TODO: calcular subResultado
        const subResult = calculateSubResult();
        setPrevNumber(subResult.toString());
    }, [formula]);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace("-", ""));
        } else {
            setNumber("-" + number);
        }
    };

    const deleteLast = () => {
        if ((number.length === 1 && prevNumber === '0') || (number.length === 2 && number.includes('-'))) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, number.length - 1));
        }
    }

    const setLastNumber = () => {
        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multipy;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        if (isNaN(num2)) return num1;

        let resultado;
        switch (operation) {
            case Operator.add:
                resultado = num1 + num2;
                break;

            case Operator.multipy:
                resultado = num1 * num2;
                break;

            case Operator.substract:
                resultado = num1 - num2;
                break;

            case Operator.divide:
                resultado = num1 / num2;
                break;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }


        return resultado;
    }

    const calculateResult = () => {
        setPrevNumber('0');

        lastOperation.current = undefined;

        setFormula(calculateSubResult().toString());
    }


    const buildNumber = (numberString: string) => {

        //Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return;

        //Condiciones que se dan si el número actual es el 0
        if (number.startsWith('0') || number.startsWith('-0')) {
            //Si se pulsa de nuevo el 0 
            if (numberString === '0') {
                if (number === '0') return;
                //Si el número pulsado no es un 0 (ni un .), debe sustituir al 0 actual
            } else if (!number.includes('.') && numberString !== '.') {
                return setNumber(numberString);
            }
        };

        setNumber(number + numberString);
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Métodos
        buildNumber,
        clean,
        toggleSign,
        deleteLast,

        divideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,

        calculateSubResult,
        calculateResult,

        //////////ELIMINAR ↓↓↓
        lastOperation,
        //////////ELIMINAR ↑↑↑
    };
    // } as const;
}