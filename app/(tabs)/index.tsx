import { useState } from 'react';
import { Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { services, beautyBrands } from '@/data/services'
import Container from '@/components/Container';


export default function Appointments() {

  const [ongoing, setOngoing] = useState(false)

  const handleAbsent = () => {
    alert('Absent')
    setOngoing(false)


  }

  const handleStart = () => {
    alert('Start')
    setOngoing(true)

  }

  return (
    <>
      <View className={`${ongoing ? 'bg-red-500' : 'bg-red-500'} h-[150] flex-row p-8 gap-x-4`}>
        <Image
          source={{
            uri: 'https://stylioo.blob.core.windows.net/images/chirasi.jpg',
          }}
          className='w-24 h-24 rounded-full'
        />
        <View className=''>
          <Text className='text-2xl font-semibold text-white'>Chirasi Amaya</Text>
          <View className='my-3 flex-row gap-x-2'>
            <Text className='px-4 py-1 text-[12px] border-white border text-white rounded-2xl'>Seat 2</Text>
            <Text className='px-4 py-1 text-[12px] border-white border text-white rounded-2xl'>90 min</Text>
          </View>
        </View>
      </View>

      <Container>

        <View className='flex-row my-3 shadow-lg  justify-between gap-x-4'>
          {
            ongoing ?
              <>
                <View className='flex-row '>
                  <TouchableOpacity
                    className='px-4 py-1 mr-3 border border-red-600 rounded-2xl flex items-center justify-center'
                  >
                    <Text className='text-red-600 text-lg'>Scan a Product</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className='px-4 py-1 border border-red-600 rounded-2xl flex items-center justify-center'
                  >
                    <Text className='text-red-600 text-lg'>Add New Service</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    className='px-4 py-2 bg-red-600 border border-red-600 rounded-2xl flex items-center justify-center'
                  >
                    <Text className='text-white font-bold'>Scan Product </Text>
                  </TouchableOpacity> */}
                </View >
              </>
              :
              (
                <>
                  <Text className='text-2xl font-bold'>01/10/2023</Text>
                  <Text className='text-2xl font-bold'>09:00 AM</Text>
                </>
              )
          }
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View className='mt-4'>
            <Text className='text-xl font-semibold text-gray-800 pb-2 border-b border-gray-300'>
              Services
            </Text>
            <View className='mt-4'>
              {
                services.map((item, index) => (
                  <View key={index} className='px-4 py-2 mb-2'>
                    <Text>{item.name}</Text>
                  </View>
                ))
              }
            </View>
          </View>
          <View className='mt-4'>
            <Text className='text-xl font-semibold text-gray-800 pb-2 border-b border-gray-300'>
              Preferred Brands
            </Text>
            <View className='mt-4 flex-row flex-wrap gap-x-2'>
              {
                beautyBrands.slice(0, 10).map((item, index) => (
                  <View key={index} className='px-4 py-2 mb-2 border rounded-xl'>
                    <Text>{item}</Text>
                  </View>
                ))
              }
            </View>
          </View>
          <View className='h-[300px]'></View>
        </ScrollView>

      </Container>
      {
        ongoing ?

          <View
            className='absolute bg-white pb-4 bottom-0 left-0 right-0 px-8 flex-row justify-between'
          >
            {/* <TouchableOpacity
              className='flex-1 mt-4 px-4 py-2 mr-2 border border-red-600 rounded-2xl flex items-center justify-center'
              onPress={handleAbsent}
            >
              <Text className='text-red-600 text-lg'>Cancel</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              className='flex-1 mt-4 px-4 py-2 bg-red-600 border border-red-600 rounded-2xl flex items-center justify-center'
              onPress={handleAbsent}
            >
              <Text className='text-white text-xl font-bold'>FINISH</Text>
            </TouchableOpacity>
          </View >

          :
          <View className='absolute  bg-white pb-4 bottom-0 left-0 right-0 px-8 flex-row justify-between'>
            {/* <TouchableOpacity
              className='flex-1 mt-4 px-4 py-2 mr-3 border border-red-600 rounded-2xl flex items-center justify-center'
              onPress={handleAbsent}
            >
              <Text className='text-red-600 text-lg'>Absent</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              className='flex-1 mt-4 px-4 py-2 bg-red-600 border border-red-600 rounded-2xl flex items-center justify-center'
              onPress={handleStart}
            >
              <Text className='text-white text-xl font-bold'>START</Text>
            </TouchableOpacity>
          </View >
      }
    </>

  );
}
