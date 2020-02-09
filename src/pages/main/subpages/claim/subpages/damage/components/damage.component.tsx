import * as React from 'react'
import {  Typography,  Grid, IconButton, Fab, Chip, Button, Divider, TextField, FormControlLabel, Switch, Slide, InputAdornment, Container, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { ThreeSixty, Done, Close, Build, LocalCarWash, Add } from '@material-ui/icons'

//Subcomponents
import SedanBack from '../subcomponents/sedan/back/back.component'

//css
import classNames from 'classnames/bind'
import SedanFront from '../subcomponents/sedan/front/front.component'
import Modal from '@components/modal/component/modal.component'
import manualServices from '@core/services/manualServices/manualServices.service'

const styl: any = require('./../css/damage.component.styl')
const cx = classNames.bind(styl)

const damageTypeList = [ 
    { id: 1, name: 'Risco' },
    { id: 2, name: 'Amassado' }, 
    { id: 3, name: 'Granizo' }
]

const intensityList = [
    { id: 1, name: 'Fraco' },
    { id: 2, name: 'Médio' }, 
    { id: 3, name: 'Forte' }
]
 

const initialState = {
    selected: false,
    damageTypeSelected: null,
    intensitySelected: 1,
    isPaint: true,
    unitValue: null,
    partsAdd: false,
    partName: null,
    partUnitValue: null,
    partQTD: 1,
    servicesAdd: false,
    serviceValue: null,
    servicesList: null
}

class Damage extends React.Component<any, any> {
    state = {
        ...initialState,
        front: true,
    }
    componentDidUpdate(prevProps) {
        const { partSelected } = this.props 
        if(prevProps.partSelected != partSelected && partSelected > 0){
            this.setState({ selected: true })
        }
    }

    componentDidMount() {
        manualServices()
        .then(item => this.setState({servicesList: item.data}))
    }

    closeParts = () => {
        this.setState(initialState)
        this.props.selectPart(0)
    }

    addDamage = () => {
        const { parts, partSelected, Id } = this.props
        const { isPaint, intensitySelected, damageTypeSelected, unitValue } = this.state
        const payload = {
            Codigo: partSelected, 
            Avaria: damageTypeSelected, 
            Gravidade: intensitySelected, 
            Pintura: isPaint,
            ValorUnitario: unitValue ? unitValue.replace('.', '').replace(',', '.') : 0,
            Quantidade: 1
        }
        this.closeParts()
        this.props.postDamage(Id, payload) 
    }

    addParts = () => {
        const { Id } = this.props
        const { 
            partName,
            partUnitValue,
            partQTD
        } = this.state
        const payload = {
            Nome: partName,
            ValorUnitario: partUnitValue.replace('.', '').replace(',', '.'),
            Quantidade: partQTD
        }
        this.props.postParts(Id, payload)
        this.setState({ 
            partsAdd: false, 
            partName: null,
            partUnitValue: null,
            partQTD: 1 
        })
    }

    addServices = () => {
        const { Id } = this.props
        const { serviceValue } = this.state
        this.props.postService(Id, serviceValue)
        this.setState({
            serviceValue: null,
            servicesAdd: false
        })
    }

    normalizeValue = (value) => {
        if(!value){
            return value
        }
        const onlyNums = value.replace(/[^\d]/g, '')
        if(onlyNums.length <= 2) {
            return onlyNums
        }
        if(onlyNums.length >= 3 && onlyNums.length <= 5 ){
            return `${onlyNums.slice(-onlyNums.length, -2)},${onlyNums.slice(-2, onlyNums.length)}`
        }
        if(onlyNums.length >= 6 && onlyNums.length <= 8 ){
            return `${onlyNums.slice(-onlyNums.length, -5)}.${onlyNums.slice(-5, -2)},${onlyNums.slice(-2, onlyNums.length)}`
        }
        if(onlyNums.length > 8) {
            return `${onlyNums.slice(-8, -5)}.${onlyNums.slice(-5, -2)},${onlyNums.slice(-2, onlyNums.length)}`
        }
    }

    getPartName = (id) => {
        switch (id){
            case 1: 
                return 'Pára-choque dianteiro'
                
            case 2: 
                return 'Painel Dianteiro'

            case 3: 
                return 'Capô'
                
            case 4: 
                return 'Pára-lama dianteiro direito'

            case 5: 
                return 'Pára-lama dianteiro esquerdo'
                
            case 6: 
                return 'Porta dianteira direita'

            case 7: 
                return 'Porta dianteira esquerda'
                
            case 8: 
                return 'Espelho retrovisor dianteiro direito'

            case 9: 
                return 'Espelho retrovisor dianteiro esquerdo'
                
            case 10: 
                return 'Porta traseira direita'

            case 11: 
                return 'Porta traseira esquerda'
                
            case 12: 
                return 'Lateral traseira direita'

            case 13: 
                return 'Lateral traseira esquerda'
                
            case 14: 
                return 'Tampa traseira'

             case 15: 
                return 'Painel traseiro'

            case 16: 
                return 'Pára-choque traseiro'

        }
    }

    render () {
        const { 
            selected, 
            front, 
            damageTypeSelected, 
            intensitySelected, 
            isPaint, 
            unitValue,
            partsAdd,
            partQTD,
            partUnitValue,
            partName,
            servicesAdd,
            serviceValue,
            servicesList
        } = this.state

        const { partSelected } = this.props
        return (
            <div className={cx('home')}>
                <Grid container spacing={2}>
                    <Grid item xs={2} className={cx('additionalColumn')}>
                        <Fab variant="extended" color={partsAdd ? "primary" : "default"} onClick={() => this.setState({ partsAdd: true })}>
                            <Build style={{ marginRight: '5px'}} />
                            Peças
                        </Fab>
                        <Fab variant="extended" color={servicesAdd ? "primary" : "default"} onClick={() => this.setState({ servicesAdd: true })}>
                            <LocalCarWash style={{ marginRight: '5px'}} />
                            Serviços
                        </Fab>
                        <Fab variant="extended" onClick={() => this.setState({ front: !front })}>
                            <ThreeSixty style={{ marginRight: '5px'}} />
                            Girar
                        </Fab>
                    </Grid>
                    <Grid item xs={10} className={cx('carView')}>
                        {
                            front ?
                            <SedanFront
                                {...this.props}
                            />
                            :
                            <SedanBack 
                                {...this.props} 
                            />
                        }
                    </Grid>
                </Grid>
                <Modal 
                    open={partsAdd}
                    title="Adicionar Peças"
                    maxWidth="sm"
                    actions={
                        <React.Fragment>
                            <Button variant="contained" onClick={() => this.setState({ partsAdd: false })}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.addParts}>
                                Adicionar Peças
                            </Button>
                        </React.Fragment>
                    }
                >
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField 
                                    label="Nome da Peça"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,              
                                    }}
                                    value={partName}
                                    onChange={ (event) => this.setState({partName: event.target.value })}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField 
                                    label="Valor"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (<InputAdornment  position="start">R$</InputAdornment>)
                                    }}
                                    value={partUnitValue}
                                    onChange={ (event) => this.setState({partUnitValue: this.normalizeValue(event.target.value) })}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField 
                                    label="Quantidade"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,              
                                    }}
                                    type="number"
                                    value={partQTD}
                                    onChange={ (event) => this.setState({partQTD: event.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Modal>
                <Modal 
                    open={servicesAdd}
                    title="Adicionar Serviços"
                    maxWidth="sm"
                    actions={
                        <React.Fragment>
                            <Button variant="contained" onClick={() => this.setState({ servicesAdd: false })}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.addServices}>
                                Adicionar Serviço
                            </Button>
                        </React.Fragment>
                    }
                >
                    <Container>
                        <Grid container spacing={2} style={{minWidth: '400px'}}>
                            <Grid item xs={12}>
                                <FormControl style={{width: '100%'}}>
                                    <InputLabel id="service">Selecione o serviço</InputLabel>
                                <Select
                                    labelId="service"
                                    value={serviceValue}
                                    onChange={(event) => this.setState({serviceValue: event.target.value })}
                                >
                                    {
                                        servicesList && servicesList.map(item => 
                                            <MenuItem value={`${item.Id}`}>{item.Descricao} - {item.Valor.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</MenuItem>
                                        )
                                    }
                                </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                </Modal>
                <Slide direction="left" in={selected} mountOnEnter unmountOnExit>
                    <div className={cx('damage')}>
                        <div className={cx('damageContainer')}>
                            <div className={cx('header')}>
                                <Typography variant="h5">
                                    {
                                       this.getPartName(partSelected)    
                                    }
                                    </Typography>
                                <IconButton onClick={this.closeParts}>
                                    <Close />
                                </IconButton>
                            </div>
                            <Divider />
                            <div className={cx('damageType')}>
                                <Typography className={cx('title')}>Selecione o tipo do dano:</Typography>
                                <div className={cx('damageSelectType')}>
                                    {
                                        damageTypeList.map(item => 
                                            <Chip label={item.name} color={damageTypeSelected == item.id ? 'primary' : 'default'} onClick={() => this.setState({ damageTypeSelected: item.id, intensitySelected: 1 })} className={cx('damageTypeButton')}/>   
                                        )
                                    }
                                </div>
                                {
                                    damageTypeSelected == 2 && 
                                        <React.Fragment>
                                            <FormControlLabel
                                                className={cx('isPaint')}
                                                control={
                                                <Switch checked={isPaint} onChange={() => this.setState({isPaint: !isPaint })}  color="primary" />
                                                }
                                                label="Deseja pintar a peça?"
                                            />
                                            {
                                                isPaint && 
                                                <React.Fragment>
                                                    <Typography className={cx('title')}>Selecione a intensidade do dano:</Typography>
                                                    <div className={cx('damageSelectType')}>
                                                        {
                                                            intensityList.map(item => 
                                                                <Chip label={item.name} color={intensitySelected == item.id ? 'primary' : 'default'} onClick={() => this.setState({ intensitySelected: item.id })}  className={cx('damageTypeButton')}/>   
                                                            )
                                                        }
                                                    </div>
                                                </React.Fragment>
                                            }
                                        </React.Fragment>
                                }

                                {
                                    damageTypeSelected == 3 && 
                                        <React.Fragment>
                                            <Typography className={cx('title')}>Digite o valor negociado:</Typography>
                                            <TextField 
                                                fullWidth 
                                                variant="outlined"
                                                InputProps={{
                                                    className: cx('textField'),
                                                    startAdornment: (<InputAdornment  position="start">R$</InputAdornment>)
                                                }}
                                                value={unitValue}
                                                onChange={ (event) => this.setState({unitValue: this.normalizeValue(event.target.value) })}
                                            />
                                        </React.Fragment>
                                }   
                            </div>
                            <Button className={cx('submitButton')} fullWidth color="primary" variant="contained" size="large" onClick={this.addDamage}>Adicionar</Button>
                        </div>
                        
                    </div>
                </Slide>
                
            </div>
        )
    }
}

export default Damage