import { containerProps } from '@/types'
import { ScrollView } from 'react-native'

function ScrollContainer({ children, className, style }: containerProps) {
    return (
        <ScrollView
            className={`mx-6 my-4 min-h-full ${className}`}
            style={style}

        >
            {children}
        </ScrollView>
    )
}

export default ScrollContainer