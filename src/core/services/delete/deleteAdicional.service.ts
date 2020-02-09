import axios from 'axios'
const config: any = require('@core/config/constants/general.constant')

const deleteAdicionalService = async (token: any, id: any) => {
  return axios({
    method: 'DELETE',
    url: `http://10.33.170.247:8082/api/Orcamento/Peca/ServicoAdicional?idOrcamento=${token}&idServico=${id}`,
    headers: {
        'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response
    })
    .catch(error => {
      throw error
    })
}

export default deleteAdicionalService
