import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Card = ({ title, description, icon, onPress }: { title: string, description: string, icon: any, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} className='ml-4'>
      <View className='w-64 h-64 bg-gray-200 rounded-3xl mr-4'>
        <View className='h-1/2 bg-black rounded-t-3xl justify-center items-center'>
          <Text className='text-6xl text-white'>{icon}</Text>
        </View>
        <View className='h-1/2 p-3 overflow-hidden'>
          <Text className='text-lg font-semibold'>{title}</Text>
          <Text className='text-gray-500 mt-1 line-clamp-2'>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const DiscoverMore = ({title, data}: {title: string, data: any}) => {
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
        <View className='flex-1 justify-center items-center bg-white bg-opacity-50' >
          <ScrollView className='w-5/5 h-2/5'>
            <View className='bg-white p-5 rounded-lg pt-16 pb-12'>
              <View className="bg-black p-5 my-8">
                <Text className='text-white text-5xl text-center'>{selectedItem?.icon}</Text>
              </View>

              <Text className='text-4xl font-semibold mb-2'>{selectedItem?.title}</Text>
              <Text className='text-gray-500 mb-5'>{selectedItem?.description}</Text>

              {selectedItem?.content?.paraphs.map((para: any, index: any) => (
                <Text key={index} className='text-gray-700 mb-5 text-justify'>{para}</Text>
              ))}

              <TouchableOpacity onPress={closeModal} className='mt-4'>
                <Text className='text-blue-500 text-center'>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}

export default DiscoverMore