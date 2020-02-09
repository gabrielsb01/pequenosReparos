import { GET_CLAIM_REQUEST } from '@core/config/constants/actionType.constant'

export const getClaim = (id: number) => ({ 
    type: GET_CLAIM_REQUEST,
    payload: id
})