import * as React from 'react'

//css
import classNames from 'classnames/bind'
const styl: any = require('../css/checklist.component.styl')
const cx = classNames.bind(styl)

//Componnets
import { Scrollbars } from 'react-custom-scrollbars'

//Material.ui
import { Grid, Typography, Container, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

class CheckList extends React.Component<any, any> {

    deletePecas = (id) => {
        const { token } = this.props
        this.props.deletePecas(token, id)
    }

    deleteAdicional = (id) => {
        const { token } = this.props
        this.props.deleteAdicional(token, id)
    }

    render (){
        const { pecas, adicional } = this.props
        return(
            <Scrollbars autoHeight autoHeightMax={500} style={{ width: 1280 }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className={cx('gridCheck')}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                CHECKLIST PEÇAS
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Table className={cx('table')} aria-label="Table AUDATEX BR">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Código</TableCell>
                                        <TableCell align="left">Peça</TableCell>
                                        <TableCell align="left">Quantidade</TableCell>
                                        <TableCell align="left">Tipo de Avaria</TableCell>
                                        <TableCell align="right">Deletar Peça</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        pecas && pecas.map((item,i) =>
                                        <TableRow>
                                            <TableCell align="left">1</TableCell>
                                            <TableCell align="left">{item.Descricao}</TableCell>
                                            <TableCell align="left">1</TableCell>
                                            <TableCell align="left">Amassado</TableCell>
                                            <TableCell align="right">
                                                <IconButton className={cx('iconButton')} onClick={()=> this.deletePecas(item.Id)}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                        
                        {/* =========================== */}

                        <Grid item xs={12} className={cx('gridCheck')}>
                            <Typography className={cx('titleReports')} variant="h1" component="h2">
                                CHECKLIST ADICIONAIS
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Table className={cx('table')} aria-label="Table AUDATEX BR">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Código</TableCell>
                                        <TableCell align="left">Adicional</TableCell>
                                        <TableCell align="right">Deletar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        adicional && adicional.map((item,i) =>
                                        <TableRow>
                                            <TableCell align="left">1</TableCell>
                                            <TableCell align="left">{item.Descricao}</TableCell>
                                            <TableCell align="right">
                                                <IconButton className={cx('iconButton')} onClick={()=> this.deleteAdicional(item.Id)}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Container>
            </Scrollbars>
        )
    }
}

export default CheckList