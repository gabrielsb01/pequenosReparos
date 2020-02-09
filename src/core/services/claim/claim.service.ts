import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const claimService = (id:number) => {
    return axios({
        method: 'GET',
        url: `${config.API.GET_CLAIM_URL}${id}`,
    })
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

export default claimService
