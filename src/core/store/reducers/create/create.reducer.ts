
import { POST_CREATE_SUCCESS, POST_CREATE_RESET } from '@core/config/constants/actionType.constant'

const initialState = {
    error: false,
    success: false
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case POST_CREATE_SUCCESS: 
            return {
                ...state,
                error: false,
                success: true
            }

        case POST_CREATE_RESET:
            return {
                ...state,
                error: false,
                success: false
            }
        default:
            return state
    }
}
  