import { StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { services, beautyBrands } from '@/data/services'

import { Text, View } from '@/components/Themed';
import Container from '@/components/Container';


export default function Appointments() {
  return (
    <Container>
      <View
      // className='border-b border-gray-300'
      >
        <FlatList
          data={[
            { key: "05/08/2023", title: '05 Aug' },
            { key: "06/08/2023", title: '06 Aug' },
            { key: "07/08/2023", title: 'Yesterday' },
            { key: "08/08/2023", title: 'Today' },
            { key: "09/08/2023", title: 'Tommorow' },
            { key: "10/08/2023", title: '10 Aug' },
            { key: "11/08/2023", title: '11 Aug' },
            { key: "12/08/2023", title: '12 Aug' },
            { key: "13/08/2023", title: '13 Aug' },
            { key: "14/08/2023", title: '14 Aug' },
          ]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity className='mr-3 py-2 px-4 border border-gray-400 rounded-2xl'>
                <Text className='text-xl font-semibold text-gray-700'>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

        />
      </View>
      <ScrollView className="mt-6">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <View key={item} className='mb-4 pb-6 border rounded-lg border-gray-300'>
              <View className='flex-row  px-4 py-4 rounded-t bg-red-500 items-center'>
                <Image
                  source={{
                    uri: 'https://stylioo.blob.core.windows.net/images/chirasi.jpg',
                  }}
                  className='w-14 h-14 mr-4 rounded-full'
                />
                <View className=''>
                  <Text className='text-2xl  font-semibold bg-red-500 text-white'>Chirasi Amaya</Text>
                  <View className='flex-row gap-x-2 bg-red-500'>
                    {/* <Text className='text-gray-500 border text-[12px] border-gray-400 px-3 rounded-2xl'>Seat 2</Text> */}
                    <Text className='text-gray-200 text-[12px]   border-gray-400 rounded-2xl'>90 min</Text>
                  </View>
                </View>
              </View>

              <View className='mt-6 px-4 flex-row justify-between'>
                <Text className='text-gray-700 text-lg'>07 Aug 2021</Text>
                <Text className='text-gray-700 text-xl'>10:00 AM</Text>
              </View>

              <View className='mt-4 px-4'>
                {/* <Text className='text-xl font-semibold text-gray-800 pb-2 border-b border-gray-300 mt-4'>
                  Services
                </Text> */}
                <View className='mt-2 border-t border-gray-100 pt-4 flex-row flex-wrap gap-x-2'>
                  {
                    services.map((item, index) => (
                      <View key={item.id} className='mb-2 border border-gray-300  px-4 py-2 rounded-2xl '>
                        <Text className=' font-semibold'>{item.name}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            </View>
          ))
        }
        <View className='h-[70px]'></View>

      </ScrollView>
    </Container>
  );
}

