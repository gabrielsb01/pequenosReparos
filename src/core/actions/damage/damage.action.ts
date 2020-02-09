import { SELECT_VEHICLE_PART, UPDATE_PARTS, POST_DAMAGE_REQUEST, POST_PARTS_REQUEST, POST_SERVICE_REQUEST } from '@core/config/constants/actionType.constant'

export const selectPart = (idPart: number) => ({
    type: SELECT_VEHICLE_PART,
    payload: idPart
})

export const updateParts = (parts: any) => ({ 
    type: UPDATE_PARTS,
    payload: parts
})

export const postDamage = (id: number, payload: any ) => ({
    id,
    payload,
    type: POST_DAMAGE_REQUEST
})

export const postParts = (id: number, payload: any) => ({
    id,
    payload,
    type: POST_PARTS_REQUEST
})

export const postService = (id: number, payload: any) => ({
    id,
    payload,
    type: POST_SERVICE_REQUEST
})