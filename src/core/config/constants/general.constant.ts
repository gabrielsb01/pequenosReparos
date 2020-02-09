declare const config: any

module.exports = {
  API: {
    GET_CLAIM_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Buscar/`,
    POST_DAMAGE_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Peca/Catalogo/`,
    POST_PARTS_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Peca/Manual/`,
    MANUAL_SERVICES_URL: `${config["apiURL"]}:${config["PORT"]}/api/Cliente/ServicoAdicional`,
    POST_MANUAL_SERVICE_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Peca/ServicoAdicional`,
    GET_REPORTS_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Relatorio/`,
    POST_CREATE_URL: `${config["apiURL"]}:${config["PORT"]}/api/Orcamento/Criar`,
    GET_CLIENT_URL: `${config["apiURL"]}:${config["PORT"]}/api/Cliente/Buscar/`
  }
}
