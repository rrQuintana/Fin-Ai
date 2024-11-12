import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomTouchable from '@components/general/CustomTouchable'

const Card = ({ title, description, icon, onPress }: { title: string, description: string, icon: any, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} className='ml-4'>
      <View className='w-64 h-64 bg-gray-200 rounded-3xl mr-4 shadow-sm'>
        <View className='h-1/2 bg-black rounded-t-3xl justify-center items-center'>
          <Text className='text-6xl text-white'>{icon}</Text>
        </View>
        <View className='h-1/2 px-4 py-3 overflow-hidden'>
          <Text className='text-lg font-semibold'>{title}</Text>
          <Text className='text-gray-500 mt-1 line-clamp-4'>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const DiscoverMore = ({ title, data }: { title: string, data: any }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const handleCardPress = (item: any) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedItem(null)
  }

  return (
    <View className='flex-1 mb-4'>
      <Text className='text-2xl font-semibold mb-3 px-4'>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card key={item.title} {...item} onPress={() => handleCardPress(item)} />}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black/30">
          <ScrollView contentContainerStyle={{ alignItems: 'center' }} className="w-full">
            <View className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg mt-12">
              <View className="bg-gradient-to-r from-gray-800 to-gray-600 p-6 my-6 rounded-full self-center">
                <Text className="text-white text-6xl text-center">{selectedItem?.icon}</Text>
              </View>

              <Text className="text-3xl font-bold text-gray-800 mb-2 text-center">{selectedItem?.title}</Text>
              <Text className="text-gray-600 mb-6 text-base text-justify">{selectedItem?.description}</Text>

              {selectedItem?.content?.paraphs.map((para: any, index: any) => (
                <Text key={index} className="text-gray-700 mb-5 text-justify text-sm leading-relaxed">
                  {para}
                </Text>
              ))}

              <CustomTouchable
                text="Close"
                whiteText={true}
                color="black"
                onPress={closeModal}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}

export default DiscoverMore