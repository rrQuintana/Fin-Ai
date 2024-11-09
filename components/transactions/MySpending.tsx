import { View, Text } from 'react-native';
import React from 'react';
import { ExpenseCategory, ExpenseCategoryInfo } from '@src/types/ExpenseCategory';
import { BarChart } from 'react-native-chart-kit';
import { generateChartDataFromGroupedTransactions, groupTransactionsByDate } from '@src/utils/groupTransactions';

const MySpending = ({ data }: {data: any}) => {
  // Agrupar las transacciones por fecha
  const normalizedData = groupTransactionsByDate(data);

  // Generar los datos para el gráfico a partir de las transacciones agrupadas
  const chartData = generateChartDataFromGroupedTransactions(normalizedData);

  console.log(chartData.datasets); // Verifica que el formato de los datos es correcto

  const screenWidth = 180;
  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForBackgroundLines: {
      stroke: '#fff',
    },
    decimalPlaces: 2, // Muestra dos decimales en las etiquetas
    yAxisLabel: '$',
    yAxisSuffix: '',
    // Aquí puedes ajustar la fuente
    propsForLabels: {
      fontSize: 8, // Tamaño más pequeño para las etiquetas
      fontWeight: 'normal', // Puedes cambiar el peso de la fuente
      padding: 5, // Ajusta el padding si lo deseas
    },
    xAxisLabel: false
  };

  return (
    <View className="shadow bg-white px-5 rounded-3xl mb-8 mt-3">
      <View className='flex flex-row justify-center items-center'>
        <View className='me-2'>
          <Text>Mis gastos del mes</Text>
          <Text className="text-3xl my-3">- $7,034.21</Text>
        </View>
        <View className="ms-2">
          <BarChart
            style={graphStyle}
            data={chartData}
            width={screenWidth}
            height={130}
            yAxisLabel="$"
            yAxisSuffix=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
        </View>
      </View>
    </View>
  );
};

export default MySpending;