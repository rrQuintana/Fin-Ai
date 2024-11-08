import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageLayout from "@components/layout/PageLayout";
import PedidoEnCursoCard from "@components/pedidoscards/Pedido en Curso/PedidoEnCursoCard";
import PedidoCanceladoCard from "@components/pedidoscards/Pedido Cancelado/PedidoCanceladoCard";
import { PedidoCardInterface } from "@interfaces/pedidoCardInterface";
import { useMemo } from "react";
import PedidoCompletadoCard from "@components/pedidoscards/Pedido Completado/PedidoCompletadoCard";

export default function Maps() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const pedidos: PedidoCardInterface[] = [
    {
      id: "1",
      estatus: "Pedido en Curso",
      capacidad: 10000,
      precio: 986.53,
      fecha: "24/02/2024 8:03 PM",
    },
    {
      id: "2",
      estatus: "Pedido Completado",
      capacidad: 5000,
      precio: 643.39,
      fecha: "24/02/2024 8:03 PM",
    },
    {
      id: "3",
      estatus: "Pedido Cancelado",
      capacidad: 3500,
      precio: 442.28,
      fecha: "24/02/2024 8:03 PM",
    },
  ];

  const PedidoComponents = {
    "Pedido Cancelado": PedidoCanceladoCard,
    "Pedido en Curso": PedidoEnCursoCard,
    "Pedido Completado": PedidoCompletadoCard
  };

  const list = useMemo(() => {
    return pedidos?.map((pedido: PedidoCardInterface) => {
      const PedidoComponent = PedidoComponents[pedido.estatus];
      return (
        <PedidoComponent
          {...pedido}
          key={pedido.id}
        />
      );
    });
  }, [pedidos]);

  return (
    <PageLayout title="Mis Pedidos" location={false}>
      <ScrollView className=" mb-20">{list}</ScrollView>
    </PageLayout>
  );
}
