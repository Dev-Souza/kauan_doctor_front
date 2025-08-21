export interface CadastroAgendaPayload {
    dataAgenda: string,
    horaInicio: string,
    horaFim: string,
    disponivel: boolean,
    statusAgenda: string,
    medico_id: number
}
