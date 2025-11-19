import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorApp = () => {

    const {
        //Variables
        formula, prevNumber,

        //Métodos
        buildNumber, clean, toggleSign, deleteLast,
        divideOperation, multiplyOperation, addOperation, substractOperation,

        calculateResult,

    } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                {(formula === prevNumber && formula === '0') ? (
                    <ThemeText variant='h2'></ThemeText>
                ) : (
                    <ThemeText variant='h2'>{prevNumber}</ThemeText>

                )}
            </View>

            {/* Fila 1 de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='C'
                    blackText
                    color={Colors.lightGray}
                    onPress={clean}
                />
                <CalculatorButton
                    label='+/-'
                    blackText
                    color={Colors.lightGray}
                    onPress={toggleSign}
                />
                <CalculatorButton
                    label='del'
                    blackText
                    color={Colors.lightGray}
                    onPress={deleteLast}
                />
                <CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={divideOperation}
                />
            </View>

            {/* Fila 2 de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='7' onPress={() => buildNumber('7')} />
                <CalculatorButton label='8' onPress={() => buildNumber('8')} />
                <CalculatorButton label='9' onPress={() => buildNumber('9')} />
                <CalculatorButton
                    label='x'
                    color={Colors.orange}
                    onPress={multiplyOperation}
                />
            </View>

            {/* Fila 3 de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='4' onPress={() => buildNumber('4')} />
                <CalculatorButton label='5' onPress={() => buildNumber('5')} />
                <CalculatorButton label='6' onPress={() => buildNumber('6')} />
                <CalculatorButton
                    label='-'
                    color={Colors.orange}
                    onPress={substractOperation}
                />
            </View>

            {/* Fila 4 de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='1' onPress={() => buildNumber('1')} />
                <CalculatorButton label='2' onPress={() => buildNumber('2')} />
                <CalculatorButton label='3' onPress={() => buildNumber('3')} />
                <CalculatorButton
                    label='+'
                    color={Colors.orange}
                    onPress={addOperation}
                />
            </View>

            {/* Fila 5 de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='0' doubleSized onPress={() => buildNumber('0')} />
                <CalculatorButton label='.' onPress={() => buildNumber('.')} />
                <CalculatorButton
                    label='='
                    color={Colors.orange}
                    onPress={calculateResult}
                />
            </View>

        </View>
    )
}

export default CalculatorApp