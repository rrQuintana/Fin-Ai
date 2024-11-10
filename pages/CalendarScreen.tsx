import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Agenda, CalendarList } from 'react-native-calendars';
import Ionicons from "@expo/vector-icons/Ionicons";
import { transactions_mock } from 'mocks/transactions';
import { Reminder, reminders_mock } from 'mocks/reminders';
import TransactionDetailsModal from '@components/general/TransactionDetailsModal';
import { Transaction } from '@src/utils/groupTransactions';

type Props = {};

const data = transactions_mock;

const CalendarScreen: React.FC<Props> = () => {
  const [items, setItems] = useState<{ [key: string]: (Transaction | Transaction)[] }>({});
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showAgenda, setShowAgenda] = useState<boolean>(false);
  const [transactionDetails, setTransactionDetails] = useState<Transaction | undefined>(undefined);

  useEffect(() => {
    const dates: { [key: string]: any } = {};
    const initialItems: { [key: string]: (Transaction | Transaction)[] } = {};

    // Añadir transacciones al calendario
    data.forEach((entry) => {
      const color = entry.type === 'Gasto' ? 'red' : 'green';
      dates[entry.date] = {
        ...(dates[entry.date] || {}),
        marked: true,
        dotColor: color,
      };

      if (!initialItems[entry.date]) {
        initialItems[entry.date] = [];
      }
      initialItems[entry.date].push(entry);
    });

    // Añadir recordatorios al calendario (círculos amarillos)
    reminders_mock.forEach((reminder) => {
      dates[reminder.date] = {
        ...(dates[reminder.date] || {}),
        marked: true,
        selected: true,
        selectedColor: '#FAB12FFF', // Círculo amarillo
      };

      if (!initialItems[reminder.date]) {
        initialItems[reminder.date] = [];
      }
      initialItems[reminder.date].push({
        name: reminder.name,
        amount: reminder.ammount,
        type: 'Reminder',
        date: reminder.date,
        category: {
          name: reminder.card.name,
          icon: 'alarm', // Usar un ícono por defecto para los recordatorios
        },
      }); // Añadir recordatorio a los items
    });

    setMarkedDates(dates);
    setItems(initialItems);
  }, [data]);

  const loadItems = (day: any) => {
    const newItems = { ...items };

    // Llenar los datos de cada día en el rango
    for (let i = -15; i < 15; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strDate = new Date(time).toISOString().split('T')[0];

      if (!newItems[strDate]) {
        newItems[strDate] = []; // Asegurar que todos los días tengan un array, incluso si está vacío
      }
    }
    setItems(newItems);
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setShowAgenda(true);

    // Cargar los items para el día seleccionado
    loadItems(day);
  };

  const renderTransactionItem = (item: Transaction) => (
    <TouchableOpacity
      key={item.name}
      onPress={() => setTransactionDetails(item as Transaction)}
      style={{ flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center', marginTop: 22, backgroundColor: 'white' }} className='rounded'>
      <View style={{ backgroundColor: '#f1f1f1', padding: 12, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name={item.category?.icon as keyof typeof Ionicons.glyphMap} size={20} color="black" />
      </View>

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: '#666' }}>
          {item.category?.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
      </View>

      <Text style={{ fontSize: 14, fontWeight: '600', color: item.type === 'Gasto' ? 'red' : 'green', textAlign: 'right' }}>
        {item.amount ? `${item.type === 'Gasto' ? '-' : '' } $ ${item.amount}` : 'Descripción'}
      </Text>
    </TouchableOpacity>
  );

  const renderReminderItem = (item: Transaction) => (
    <TouchableOpacity
      key={item.name}
      // onPress={() => setTransactionDetails(item)}
      style={{ flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center', marginTop: 22, backgroundColor: 'white' }} className='rounded'>
      <View style={{ backgroundColor: '#f1f1f1', padding: 12, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name='alarm' size={20} color="black" />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>

        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
      </View>

      <Text style={{ fontSize: 14, fontWeight: '600', color: 'blue', textAlign: 'right' }}>
        {`$${item?.amount}`}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = (item: Transaction | Transaction) => {
    if ('card' in item) {
      return renderTransactionItem(item as Transaction);
    } else {
      return renderReminderItem(item as Transaction);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <TransactionDetailsModal transaction={transactionDetails} onClose={() => setTransactionDetails(undefined)} visible={!!transactionDetails} />

      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        {showAgenda ? 'Agenda del Día' : 'Calendario'}
      </Text>

      {showAgenda ? (
        <ScrollView style={{ flex: 1 }}>
          <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={selectedDate}
            renderItem={renderItem}
            markedDates={{
              ...markedDates,
              [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
            }}
            theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'blue',
              agendaDayTextColor: 'gray',
              agendaKnobColor: '#d3d3d3',
              agendaItemTextColor: 'black',
              todayBackgroundColor: '#f8f8f8',
            }}
            customStyles={{
              dayContainer: {
                marginBottom: 10,
                marginTop: 10,
              },
              dayText: {
                fontSize: 16,
                color: '#000', // Asegurarse de que el texto del día sea visible
              },
              markedDates: {
                selected: {
                  backgroundColor: 'blue',
                },
                selectedColor: 'yellow',
                selectedTextColor: 'white',
                marked: {
                  backgroundColor: 'yellow', // Para círculos amarillos
                  borderRadius: 50, // Círculo
                  padding: 5, // Asegurarse de que el círculo no cubra el texto
                },
              },
            }}
          />
        </ScrollView>
      ) : (
        <CalendarList
          horizontal
          pagingEnabled
          onDayPress={onDayPress}
          markedDates={markedDates}  // Asegúrate de que este objeto contiene las fechas correctamente
          theme={{
            selectedDayBackgroundColor: 'blue',
            todayTextColor: 'blue',
            monthTextColor: 'blue',
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default CalendarScreen;
