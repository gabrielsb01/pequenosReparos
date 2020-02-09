import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const addManualService = (id:number, payload: any) => {
    return axios({
        method: 'POST',
        url: `${config.API.POST_MANUAL_SERVICE_URL}`,
        headers: {
            "content-type": "application/json"
        },
        params: {
            idOrcamento: id,
            idServico: payload
        }
    })
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

export default addManualService
