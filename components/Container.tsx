import { containerProps } from '@/types'
import { View } from './Themed'

function Container({ children, className, style }: containerProps) {
    return (
        <View
            className={`px-6 py-4 min-h-full ${className}`}
            style={style}

        >
            {children}
        </View>
    )
}

export default Container