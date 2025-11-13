import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Text, View } from 'react-native';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult}>
                50x50000000000000
            </Text>
            <Text style={globalStyles.subResult}>250</Text>

            <ThemeText propiedad1='ejemplo de texto para la propiedad 1' numberOfLines={1}>Mi textoefi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmi textoefjshfujdfdskjfdslkfjskdjfdsmjshfujdfdskjfdslkfjskdjfdsmf</ThemeText>
            <ThemeText propiedad1='ejemplo de texto para la propiedad 1' numberOfLines={1}>{12}</ThemeText>
        </View>
    )
}

export default CalculatorApp