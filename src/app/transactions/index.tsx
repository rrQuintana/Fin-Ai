import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import MySpending from './MySpending'
import { GastoCategoria, GastoCategoriaInfo } from '@/logic/types/GastoCategoria';
import Expense from './Expense';
import RecentActivity from './RecentActivity';

const sampleData = [
  {
    name: 'Amazon',
    amount: 100,
    type: 'Gasto',
    date: '2021-09-01',
    category: GastoCategoriaInfo[GastoCategoria.COMPRAS_EN_LINEA],
  },
  {
    name: 'Uber',
    amount: 50,
    type: 'Gasto',
    date: '2021-09-02',
    category: GastoCategoriaInfo[GastoCategoria.TRANSPORTE_Y_VEHICULOS],
  },
  {
    name: 'Salario',
    amount: 1000,
    type: 'Ingreso',
    date: '2021-09-03',
    category: GastoCategoriaInfo[GastoCategoria.AHORRO_E_INVERSION],
  },
  {
    name: 'Spotify',
    amount: 10,
    type: 'Gasto',
    date: '2021-09-04',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  },
  {
    name: 'Netflix',
    amount: 150000,
    type: 'Gasto',
    date: '2021-09-05',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  },
  {
    name: 'Amazon',
    amount: 100,
    type: 'Gasto',
    date: '2021-09-01',
    category: GastoCategoriaInfo[GastoCategoria.COMPRAS_EN_LINEA],
  },
  {
    name: 'Uber',
    amount: 50,
    type: 'Gasto',
    date: '2021-09-02',
    category: GastoCategoriaInfo[GastoCategoria.TRANSPORTE_Y_VEHICULOS],
  },
  {
    name: 'Salario',
    amount: 1000,
    type: 'Ingreso',
    date: '2021-09-03',
    category: GastoCategoriaInfo[GastoCategoria.AHORRO_E_INVERSION],
  },
  {
    name: 'Spotify',
    amount: 10,
    type: 'Gasto',
    date: '2021-09-04',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  },
  {
    name: 'Netflix',
    amount: 15,
    type: 'Gasto',
    date: '2021-09-05',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  },
  {
    name: 'Amazon',
    amount: 100,
    type: 'Gasto',
    date: '2021-09-01',
    category: GastoCategoriaInfo[GastoCategoria.COMPRAS_EN_LINEA],
  },
  {
    name: 'Uber',
    amount: 50,
    type: 'Gasto',
    date: '2021-09-02',
    category: GastoCategoriaInfo[GastoCategoria.TRANSPORTE_Y_VEHICULOS],
  },
  {
    name: 'Salario',
    amount: 1000,
    type: 'Ingreso',
    date: '2021-09-03',
    category: GastoCategoriaInfo[GastoCategoria.AHORRO_E_INVERSION],
  },
  {
    name: 'Spotify',
    amount: 10,
    type: 'Gasto',
    date: '2021-09-04',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  },
  {
    name: 'Netflix',
    amount: 15,
    type: 'Gasto',
    date: '2021-09-05',
    category: GastoCategoriaInfo[GastoCategoria.SUSCRIPCIONES_Y_SERVICIOS],
  }
];

const Transactions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    name: '',
    amount: '',
    type: 'Gasto',
    date: '',
    category: GastoCategoriaInfo[GastoCategoria.COMPRAS_EN_LINEA],
  });

  const handleInputChange = (field, value) => {
    setNewTransaction({ ...newTransaction, [field]: value });
  };

  const handleSubmit = () => {
    // Aquí agregarías la lógica para actualizar el array de transacciones con la nueva entrada
    sampleData.push({ ...newTransaction, amount: parseFloat(newTransaction.amount) });
    setModalVisible(false);
    console.log('Transacción agregada:', newTransaction);
  };

  return (
    <SafeAreaView>
      <ScrollView className='p-3' showsVerticalScrollIndicator={false}>
        <Text className='text-3xl text-center p-3'>Transacciones</Text>
        <MySpending data={sampleData} />
        <Expense data={sampleData} />
        <RecentActivity data={sampleData} />
      </ScrollView>
      
      {/* Botón flotante "+" en la esquina inferior derecha */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: 'black',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            width: '80%',
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}>
            <Text className="text-xl text-center mb-4">Agregar Transacción</Text>
            
            <TextInput
              placeholder="Nombre"
              value={newTransaction.name}
              onChangeText={(text) => handleInputChange('name', text)}
              className="border-zinc-300 rounded-lg border p-4 mb-2"
            />
            <TextInput
              placeholder="Monto"
              keyboardType="numeric"
              value={newTransaction.amount}
              onChangeText={(text) => handleInputChange('amount', text)}
              className="border-zinc-300 rounded-lg border p-4 mb-2"
            />
            <TextInput
              placeholder="Fecha"
              value={newTransaction.date}
              onChangeText={(text) => handleInputChange('date', text)}
              className="border-zinc-300 rounded-lg border p-4 mb-2"
            />

            <Button title="Agregar" onPress={() => setModalVisible(false)} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Transactions;
