
import { GET_REPORTS_SUCCESS } from '@core/config/constants/actionType.constant'

const initialState = {
    data: null
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_REPORTS_SUCCESS: 
            return {
                ...state,
                success: true,
                error: false,
                data: action.payload
            }
        default:
            return state
    }
}
  