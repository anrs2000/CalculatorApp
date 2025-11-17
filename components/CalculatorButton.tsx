import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Pressable, Text } from 'react-native'

interface Props {
    label: string,
}

const CalculatorButton = ({ label }: Props) => {
    return (
        <Pressable>
            <Text style={globalStyles.button}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton