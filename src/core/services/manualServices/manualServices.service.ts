import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const manualServices = () => {
    return axios({
        method: 'GET',
        url: `${config.API.MANUAL_SERVICES_URL}/1`,
    })
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

export default manualServices
