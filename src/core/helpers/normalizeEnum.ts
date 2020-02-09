export const normalizeEnum = (text: string) => {
    switch (text){
        case 'Pintura': 
            return 'Pintura'
        case 'Recuperacao':
            return 'Recuperação'
        case 'Peças':
            return 'Peças'
        case 'Adicional': 
            return 'Adicionais'
        case 'Medio': 
            return 'Médio'
        default:
            return text
    }
}