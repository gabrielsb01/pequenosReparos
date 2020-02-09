import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm, change } from 'redux-form'

//CSS
import classNames from 'classnames/bind'
const styl: any = require('./../css/create.component.styl')
const cx = classNames.bind(styl)

// Components
import { normalizePlaca, currencyMask, kmMask } from '@components/mask'
import Input from '@components/input/input.component'

//Material.ui 
import { Grid, Paper, Button, Typography, Breadcrumbs, Chip, Card, CardHeader, CardContent, FormControlLabel, Switch } from '@material-ui/core'

//Services
import clientService from '@core/services/cliente/client.service'

//Helpers
import { normalizeEnum } from '@core/helpers/normalizeEnum' 

class Create extends React.Component<any, any> {
    state = {
        Fields: null
    }

    componentWillUnmount() {
        this.props.resetCreate()
    }

    handleSubmit = (values) => {
        const { Fields } = this.state
        const payload = {
            ...values,
            ValorPorServico: Fields.map(item => {
                return { Servico: item.Servico, Valor: values[`item-${item.Servico}`]}
            })
        }
        this.props.postCreate(payload)
    }

    

    extraValues = async () => {
        const response = await clientService(1)
        const Fields = response.data.ValorServico
        this.setState({ Fields: Fields })
        Fields.map(item => this.props.dispatch(change('Create', `item-${item.Servico}`, item.Valor)))
    }

    componentDidMount() {
        this.extraValues()
    }

    render (){
        const { success, id, handleSubmit } = this.props
        const { Fields } = this.state
        const style = {
            backgroundColor:  `#36aba6`
        }

        if(success){
            return (
                <Redirect to={`/main/claim/damage/${id}`} />
            )
        }else {
            return (
                <Grid item xs={12} className={cx('createGrid')}>
                            <form onSubmit={handleSubmit(this.handleSubmit)}>
                                <Card>
                                    <CardHeader title={'Novo Orçamento'} />
                                    <CardContent> 
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={4} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="Placa"
                                                        value="Placa"
                                                        component={Input}
                                                        required
                                                        label={'Placa do Veículo'}
                                                        type="text"
                                                        normalize={normalizePlaca}
                                                    />
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12} md={4} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="Modelo"
                                                        label={'Modelo do Veículo'}
                                                        component={Input}
                                                        type="text"
                                                    />
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12} md={4} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="Quilometragem"
                                                        component={Input}
                                                        required
                                                        label={'Quilometragem do Veículo'}
                                                        type="text"
                                                        {...kmMask}
                                                    />
                                                </Paper>
                                            </Grid>

                                            <Grid item xs={12} md={4} className={cx('input_area')}>
                                                <Paper elevation={0}>
                                                    <Field
                                                        name="Cliente"
                                                        component={Input}
                                                        label={'Cliente'}
                                                        type="text"
                                                    />
                                                </Paper>
                                            </Grid>
                                            {
                                                Fields && Fields.map((item, i) =>
                                                    <Grid item xs={12} md={4} className={cx('input_area')} key={i}>
                                                        <Paper elevation={0}>
                                                            <Field
                                                                name={`item-${item.Servico}`}
                                                                required
                                                                component={Input}
                                                                label={normalizeEnum(item.Descricao)}
                                                                type="text"
                                                                {...currencyMask}
                                                            />
                                                        </Paper>
                                                    </Grid>
                                                )
                                            }
                                        </Grid>

                                        <Grid className={cx('btnForm')} container direction="column" justify="flex-end" alignItems="flex-end" spacing={2}>
                                            <Grid item xs={2} md={2} className={cx('classBtn')}>
                                                <Button  className={cx('confirmButton')} color="primary" variant="contained" fullWidth type={'submit'} style={style}>
                                                    Criar Orçamento
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                
                            </form>
                        </Grid>
            )
        }
    }
}

export default reduxForm({
    form: 'Create',
})(Create)