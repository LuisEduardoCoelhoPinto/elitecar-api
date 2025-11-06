export interface PedidoVendaDTO{
    idPedido? :number,
    idCliente: number,
    idCarro: number,
    dataPedido: Date,
    valorPedido: number,
    nomeCliente: string,
    marcaCarro: string,
    modeloCarro: string,
    situacao? : boolean
}