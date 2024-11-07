import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
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
  return (
    <SafeAreaView>
      <ScrollView className='p-3' showsVerticalScrollIndicator={false}>
        <Text className='text-3xl text-center p-3'>Transacciones</Text>
        <MySpending data={sampleData} />
        <Expense data={sampleData} />
        <RecentActivity data={sampleData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Transactions