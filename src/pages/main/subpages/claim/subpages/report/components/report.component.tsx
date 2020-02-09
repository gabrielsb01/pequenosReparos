import * as React from 'react'

//Componnets
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Grid, Table, TableHead, TableRow, TableBody, TableCell, Typography, IconButton, Card, CardContent, Chip } from '@material-ui/core'

import SedanFront from '../../damage/subcomponents/sedan/front/front.component'
import SedanBack from '../../damage/subcomponents/sedan/back/back.component'

//css
import classNames from 'classnames/bind'
const styl: any = require('../css/report.component.styl')
const cx = classNames.bind(styl)

import { Done, KeyboardArrowRight, KeyboardArrowDown } from '@material-ui/icons'
import { normalizeEnum } from '@core/helpers/normalizeEnum' 

class Report extends React.Component<any, any> {
    state = {
        openPanel: null
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getReports(id)
    }

    openPanel = () => {
        this.setState({openPanel: true})
    }

    

    render () {
        const { reports, client, resume } = this.props
        const { openPanel } = this.state
        return (
            <Scrollbars autoHeight autoHeightMax={500} style={{ width: 1280 }}>
                <Container>
                    <Grid container spacing={3}>

                        <Grid item xs={12} className={cx('panelHead')}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                DADOS DO ORÇAMENTO
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                <Typography className={cx('clientTitle')} variant="h2" component="h2">
                                        Cliente
                                    </Typography>
                                    <Typography className={cx('clientSub')} variant="body1" component="p">
                                        {client && client.Nome}
                                    </Typography>
                                    <Typography className={cx('clientTitle')} variant="h2" component="h2">
                                        Placa
                                    </Typography>
                                    <Typography className={cx('clientSub')} variant="body1" component="p">
                                        {reports && reports.Placa}
                                    </Typography>
                                    <Typography className={cx('clientTitle')} variant="h2" component="h2">
                                        Veículo
                                    </Typography>
                                    <Typography className={cx('clientSub')} variant="body1" component="p">
                                        {reports && reports.Modelo}
                                    </Typography>
                                </Grid>

                                <Grid item xs={4} className={cx('svgCar')}>
                                    <SedanFront
                                        {...this.props}
                                    />
                                </Grid>
                                <Grid item xs={4} className={cx('svgCar')}>
                                    <SedanBack
                                        {...this.props}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className={cx('panelHead')}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                RESUMO
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {
                                    resume && resume.map((item, i) => 
                                        <Grid item xs={3} key={i}>
                                            <Card>
                                                <CardContent>
                                                    <div className={cx('cardHeader')}>
                                                        <Typography>{normalizeEnum(item.Descricao)}</Typography>
                                                        {
                                                            item.ValorPorHora > 0 && 
                                                            <Chip label={`Preço: ${item.ValorPorHora.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}`}  size="small" />
                                                        }
                                                    </div>
                                                    <div className={cx('cardContent')}>
                                                        <div className={cx('itemCard')}>
                                                            <span>{ item.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" }) }</span>
                                                            <Typography className={cx('label')}>{`TOTAL ${normalizeEnum(item.Descricao)}`}</Typography>
                                                        </div>
                                                        {
                                                            item.QuantidadeHoras > 0 && 
                                                            <div className={cx('itemCard')}>
                                                                <span>{ item.QuantidadeHoras }</span>
                                                                <Typography className={cx('label')}>TOTAL DE HORAS</Typography>
                                                            </div>  
                                                        }
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                        

                        <Grid item xs={12}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                DANOS
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Table className={cx('table')} aria-label="Table AUDATEX BR">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Peça</TableCell>
                                        <TableCell align="center">Dano</TableCell>
                                        <TableCell align="left">Intensidade</TableCell>
                                        <TableCell align="center">Qtd.</TableCell>
                                        <TableCell align="center">Pintura</TableCell>
                                        <TableCell align="center">Serviços</TableCell>
                                        <TableCell align="center">Material</TableCell>
                                        <TableCell align="right">Valor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        reports && reports.Pecas.map((item,i) =>
                                        <React.Fragment>
                                            <TableRow>
                                                <TableCell align="left" onClick={this.openPanel}>
                                                    {item.Descricao}
                                                </TableCell>
                                                <TableCell align="center">{item.TipoAvaria}</TableCell>
                                                <TableCell align="left">{normalizeEnum(item.TipoGravidade)}</TableCell>
                                                <TableCell align="center">{item.Quantidade}</TableCell>
                                                <TableCell align="center">{item.Pintura ? 'Sim' : 'Não'}</TableCell>
                                                <TableCell align="center">
                                                    {item.TotalServico.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}
                                                    {
                                                        openPanel == item.Id ?
                                                        <IconButton size="small" style={{ marginLeft: '5px'}} onClick={() => this.setState({openPanel: null})}><KeyboardArrowDown /></IconButton>
                                                        :
                                                        <React.Fragment>
                                                            {
                                                                item.Servicos.length > 0 && 
                                                                <IconButton size="small" style={{ marginLeft: '5px'}} onClick={() => this.setState({openPanel: item.Id})}><KeyboardArrowRight /></IconButton>
                                                            }
                                                        </React.Fragment>
                                                    }
                                                </TableCell>
                                                <TableCell align="center">{item.TotalMaterial.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                <TableCell align="right">{item.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                
                                            </TableRow>
                                            {
                                                openPanel == item.Id &&
                                                    item.Servicos.length > 0 &&
                                                        <React.Fragment>
                                                            <Typography className={cx('titleServices')} variant="h1" component="h2">
                                                                Detalhes dos serviços
                                                            </Typography>
                                                            <TableRow>
                                                                <TableCell colSpan={8}>
                                                                    <Table className={cx('tableService')} aria-label="Table AUDATEX BR">
                                                                        <TableHead>
                                                                            <TableRow>
                                                                                <TableCell align="left">Tipo</TableCell>
                                                                                <TableCell align="center">Valor por Hora</TableCell>
                                                                                <TableCell align="center">Horas</TableCell>
                                                                                <TableCell align="center">Material</TableCell>
                                                                                <TableCell colSpan={6} align="right">Total</TableCell>
                                                                            </TableRow>
                                                                        </TableHead>

                                                                        <TableBody>
                                                                        {
                                                                            item.Servicos.map((data,i) =>
                                                                            <TableRow key={i}>
                                                                                <TableCell align="left" onClick={this.openPanel}>
                                                                                    {data.TipoServico}
                                                                                </TableCell>
                                                                                <TableCell align="center">{data.ValorPorHora.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                                                <TableCell align="center">{data.Horas}</TableCell>
                                                                                <TableCell align="center">{data.ValorMaterial.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                                                <TableCell align="right">{data.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                                            </TableRow>
                                                                            )
                                                                        }
                                                                        </TableBody>
                                                                    </Table>
                                                                </TableCell>
                                                            </TableRow>
                                                        </React.Fragment>
                                            }  
                                        </React.Fragment>
                                        )
                                    } 
                                </TableBody>
                            </Table>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                Adicionais
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Table className={cx('table')} aria-label="Table AUDATEX BR">
                                <TableHead>
                                    <TableCell align="left">Descrição</TableCell>
                                    <TableCell >Valor</TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        reports && 
                                            reports.Adicional && 
                                                reports.Adicional.map((item, i) => 
                                                    <TableRow>
                                                        <TableCell>{item.Descricao}</TableCell>
                                                        <TableCell>{item.Valor.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                    </TableRow>
                                                )
                                    } 
                                </TableBody>
                            </Table>   
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                Resumo
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Table className={cx('table')} aria-label="Table AUDATEX BR">
                                <TableHead>
                                    <TableCell align="left">Mão de Obra</TableCell>
                                    <TableCell >Preço</TableCell>
                                    <TableCell >Horas</TableCell>
                                    <TableCell >Valor do Serviço</TableCell>
                                    <TableCell >Valor do Material</TableCell>
                                    <TableCell >Valor</TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        resume && resume.map((item, i) => 
                                            <TableRow>
                                                <TableCell>{normalizeEnum(item.Descricao)}</TableCell>
                                                <TableCell>{item.ValorPorHora.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                <TableCell>{item.QuantidadeHoras}</TableCell>
                                                <TableCell>{item.TotalServico.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                <TableCell>{item.TotalMaterial.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                                <TableCell>{item.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</TableCell>
                                            </TableRow>
                                        )
                                    } 
                                    <TableRow>
                                        <TableCell colSpan={5}><b>Valor Total</b></TableCell>
                                        <TableCell><b>{reports && reports.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}</b></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>   
                        </Grid>
                    </Grid>
                </Container>
            </Scrollbars>
        )
    }
}

export default Report