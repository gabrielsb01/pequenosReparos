import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

export const partsService = (id:number, payload: any) => {
    return axios({
        method: 'POST',
        url: `${config.API.POST_PARTS_URL}${id}`,
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

export default partsService
