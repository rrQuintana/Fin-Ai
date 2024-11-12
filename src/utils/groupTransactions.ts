export type Transaction = {
    name: string;
    amount: number;
    type: string;
    date: string;
    category: { name: string; icon: string };
  };
  
  export type GroupedTransaction = {
    date: string;
    transactions: Transaction[];
  };
  
  type ChartData = {
    labels: string[];
    datasets: { data: number[] }[];
  };
  
  export const groupTransactionsByDate = (transactions: Transaction[]): GroupedTransaction[] => {
    const grouped: { [key: string]: Transaction[] } = {};
  
    transactions.forEach((transaction) => {
      if (!grouped[transaction.date]) {
        grouped[transaction.date] = [];
      }
      grouped[transaction.date].push(transaction);
    });
  
    return Object.keys(grouped).map((date) => ({
      date,
      transactions: grouped[date],
    }));
  };
  
  export const generateChartDataFromGroupedTransactions = (groupedTransactions: GroupedTransaction[]): ChartData => {
    // Filtrar las transacciones de tipo 'Gasto' y sumar el 'amount' por fecha
    const labels: string[] = [];
    const data: number[] = [];
  
    groupedTransactions.forEach(group => {
      const gastos = group.transactions.filter(transaction => transaction.type === 'Gasto');
      const totalGastos = gastos.reduce((sum, transaction) => sum + transaction.amount, 0);
  
      labels.push(group.date);
      data.push(totalGastos);
    });
  
    return {
      labels,
      datasets: [
        {
          data,
        },
      ],
    };
  };
  
  export const calculateBalance = (transactions: any) => {
    let balance = 0;
  
    transactions.forEach((transaction: any) => {
      if (transaction.type === 'Expense') {
        balance += transaction.amount;
      } else if (transaction.type === 'Income') {
        balance -= transaction.amount; 
      }
    });
  
    // Formatear el balance como moneda (ejemplo en pesos mexicanos)
    const formattedBalance = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(balance);
  
    return formattedBalance;
  };
  
  export const groupTransactionsByCategory = (transactions: Transaction[]): { categoryName: string, transactions: Transaction[] }[] => {
    const grouped: { [key: string]: Transaction[] } = {};
  
    transactions.forEach((transaction) => {
      const categoryName = transaction.category.name;
  
      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }
      grouped[categoryName].push(transaction);
    });
  
    return Object.keys(grouped).map((categoryName) => ({
      categoryName,
      transactions: grouped[categoryName],
    }));
  };
  
  export const groupExpencesByCategory = (transactions: Transaction[]): { categoryName: string, totalAmount: string, transactions: Transaction[] }[] => {
    const grouped: { [key: string]: Transaction[] } = {};
  
    transactions.forEach((transaction) => {
      if (transaction.type !== "Expense") return;  // Filtra solo transacciones de tipo "Gasto"
  
      const categoryName = transaction.category.name;
  
      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }
      grouped[categoryName].push(transaction);
    });
  
    // Formatear el totalAmount como moneda
    return Object.keys(grouped).map((categoryName) => {
      const transactions = grouped[categoryName];
      const totalAmount = transactions.reduce((sum, transaction) => sum + (transaction.amount || 0), 0);
  
      // Formatear totalAmount como moneda (en pesos mexicanos en este caso)
      const formattedTotalAmount = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
      }).format(totalAmount);
  
      return {
        categoryName,
        totalAmount: formattedTotalAmount,  // Gasto total por categoría con formato de dinero
        transactions,
      };
    });
  };