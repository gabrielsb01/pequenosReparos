import { GET_REPORTS_REQUEST } from '@core/config/constants/actionType.constant'

export const getReports = (id: number) => ({ 
    type: GET_REPORTS_REQUEST,
    payload: id
})