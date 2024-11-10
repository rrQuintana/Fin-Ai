export interface Reminder {
  name: string;
  date: string;
  time: string;
  ammount: number;
  description: string;
  card: {
    name: string;
  };
}

export const reminders_mock: Reminder[] = [
  {
    name: "Pago de alquiler",
    date: "2024-11-15",
    time: "14:00",
    ammount: 1500,
    description: "Pago mensual de alquiler de la oficina.",
    card: {
      name: "Alquiler de oficina"
    }
  },
  {
    name: "Factura de energía",
    date: "2024-11-20",
    time: "09:00",
    ammount: 300,
    description: "Pago de la factura mensual de electricidad.",
    card: {
      name: "Energía eléctrica"
    }
  },
  {
    name: "Pago de suscripción",
    date: "2024-11-18",
    time: "18:30",
    ammount: 29.99,
    description: "Renovación de la suscripción mensual del software.",
    card: {
      name: "Software Subscription"
    }
  },
  {
    name: "Pago de impuestos",
    date: "2024-11-25",
    time: "10:00",
    ammount: 1200,
    description: "Pago trimestral de impuestos sobre la renta.",
    card: {
      name: "Impuestos"
    }
  },
  {
    name: "Seguro del vehículo",
    date: "2024-11-22",
    time: "12:00",
    ammount: 500,
    description: "Renovación del seguro de automóvil.",
    card: {
      name: "Seguro"
    }
  }
];
