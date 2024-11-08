// Definición de tipos
type EstatusPedido = "Pedido Cancelado" | "Pedido en Curso" | "Pedido Completado";
export interface PedidoCardInterface{
    id: string,
    capacidad: number,
    estatus: EstatusPedido,
    precio: number,
    fecha: string
}