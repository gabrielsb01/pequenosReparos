import { DELETE_PECAS_REQUEST, DELETE_ADICIONAL_REQUEST } from '@core/config/constants/actionType.constant'

export const deletePecas = (token: string, id: string) => ({
    token,
    id,
    type: DELETE_PECAS_REQUEST
})

export const deleteAdicional = (token: string, id: string) => ({
    token,
    id,
    type: DELETE_ADICIONAL_REQUEST
})