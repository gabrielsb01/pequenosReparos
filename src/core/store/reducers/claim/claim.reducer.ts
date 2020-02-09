
import { GET_CLAIM_SUCCESS, POST_DAMAGE_SUCCESS, POST_PARTS_SUCCESS, POST_SERVICE_SUCCESS, POST_CREATE_SUCCESS } from '@core/config/constants/actionType.constant'

const initialState = {
    assessment: null
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_CLAIM_SUCCESS: 
            return {
                ...state,
                assessment: action.payload
            }
        case POST_DAMAGE_SUCCESS: 
            return {
                ...state,
                assessment: action.payload
            }

        case POST_PARTS_SUCCESS: 
            return {
                ...state,
                assessment: action.payload
            }
        case POST_SERVICE_SUCCESS: 
            return {
                ...state,
                assessment: action.payload
            }
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                assessment: action.payload
            }
        default:
            return state
    }
}
  