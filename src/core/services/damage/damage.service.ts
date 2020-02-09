import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const damageService = (id:number, payload: any) => {
    return axios({
        method: 'POST',
        url: `${config.API.POST_DAMAGE_URL}${id}`,
        headers: {
            "content-type": "application/json"
        },
        data: payload
    })
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

export default damageService
