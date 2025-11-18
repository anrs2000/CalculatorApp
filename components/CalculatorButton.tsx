import React from 'react';
import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
    doubleSized?: boolean;
}

const CalculatorButton = ({ label,
    color = Colors.darkGray,
    blackText = false,
    onPress,
    doubleSized = false,
}: Props) => {
    return (
        // <Pressable style={[globalStyles.button, { backgroundColor: color }]}
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSized ? 190 : 80,
        })}
            onPress={() => {
                // async () => {
                //TODO: haptics
                Haptics.selectionAsync();

                onPress();
            }
            }
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white'
            }}>
                {label}
            </Text>
        </Pressable >
    )
}

export default CalculatorButton