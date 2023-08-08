import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Platform, StyleSheet, Image, TextInput } from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import Container from '@/components/Container';
import { Text, View } from '@/components/Themed';
import { } from 'react-native-gesture-handler';

export default function SignIn() {
    return (
        <Container
            className='flex-1 flex-col justify-center items-stretch px-8'
        >
            <View className='' >
                <View className='mb-6'>
                    <Image
                        source={{
                            uri: 'https://stylioo.blob.core.windows.net/images/stylio-old-logo-transparent.png',
                        }}
                        className='w-56 h-56 mx-auto'
                    />
                </View>
                <View className='mb-8'>
                    <Text className='mb-1 text-center text-3xl text-gray-900 font-semibold'>Welcome Back!</Text>
                    <Text className='text-center text-md text-gray-500'>Sign in to your account</Text>
                </View>
                <View className='mb-6'>
                    <View className='mb-4'>
                        <Text className='text-lg text-gray-500 mb-1'>Email Address</Text>
                        <TextInput
                            className='w-full h-[45px]  px-4 border border-gray-300 rounded-md'
                            placeholder='user@example.com'
                        />
                    </View>
                    <View>
                        <View>
                            <Text className='text-lg text-gray-500 mb-1'>Password</Text>
                            <TextInput
                                secureTextEntry={true}
                                className='w-full h-[45px]  px-4 border border-gray-300 rounded-md'
                            />
                        </View>

                    </View>
                    <View className='my-4'>
                        <Link className='text-[16px] font-semibold text-right text-red-600' href='/'>Forgot Password?</Link>
                    </View>
                    <View>
                        <TouchableOpacity
                            className='w-full h-[50px]  px-4 border justify-center items-center border-gray-300 bg-red-600 rounded-md'
                        >
                            <Text className='text-center text-lg font-semibold text-white'>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
