import { globalStyles } from '@/styles/global-styles'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
    propiedad1?: string,

    children: number,

    variant?: 'h1' | 'h2',
}

const ThemeText = ({ children, ...textProps }: Props) => {
    return (
        <Text style={[{ color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.
        ]}
            {...textProps}>{children}</Text >
    )
}

export default ThemeText



