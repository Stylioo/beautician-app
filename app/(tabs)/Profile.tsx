import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '@/components/Themed'

import { Link, useRouter } from 'expo-router'

export default function Profile() {
  return (
    <View >
      <Link className='text-[16px] font-semibold text-center mt-12 text-red-600' href='/auth/SignIn'>Logout</Link>
    </View>
  )
}



