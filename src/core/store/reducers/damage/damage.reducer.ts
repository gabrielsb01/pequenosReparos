
import { SELECT_VEHICLE_PART, UPDATE_PARTS, POST_DAMAGE_SUCCESS, POST_DAMAGE_REQUEST, POST_DAMAGE_ERROR } from '@core/config/constants/actionType.constant'

const initialState = {
    partSelected: 0, 
    parts: [],
    damage: null,
    error: false,
    success: false
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case SELECT_VEHICLE_PART: 
            return {
                ...state,
                partSelected: action.payload
            }

        case UPDATE_PARTS: {
            return { 
                ...state,
                parts: action.payload
            }
        }

        case POST_DAMAGE_SUCCESS: 
            return {
                ...state,
                error: false,
                success: true,
                damage: action.payload
            }
            
        default:
            return state
    }
}
  