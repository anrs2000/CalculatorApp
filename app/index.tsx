import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/*Resultados*/}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant='h1'>50 x 50</ThemeText>
                <ThemeText variant='h1'>250</ThemeText>
            </View>


            {/* Filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='C'></CalculatorButton>
                <CalculatorButton label='+/-'></CalculatorButton>
                <CalculatorButton label='del'></CalculatorButton>
                <CalculatorButton label='÷'></CalculatorButton>
            </View>

        </View>
    )
}

export default CalculatorApp