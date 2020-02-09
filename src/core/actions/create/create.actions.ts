import { POST_CREATE_REQUEST, POST_CREATE_RESET } from '@core/config/constants/actionType.constant'

export const postCreate = ( payload: any ) => ({
    payload,
    type: POST_CREATE_REQUEST
})

export const resetCreate = () => ({
    type: POST_CREATE_RESET
})