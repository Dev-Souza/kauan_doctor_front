import { StatusConsulta } from "./enums/status-consulta-enum";

export interface CadastroConsultaPayload {
    medico_id: number,
    paciente_id: number,
    agenda_id: number,
    observacao: string,
    status: StatusConsulta
}
