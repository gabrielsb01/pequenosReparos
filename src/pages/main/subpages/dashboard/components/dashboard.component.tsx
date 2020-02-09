import * as React from 'react'

//Components
import PrivateRoute from '@core/secure/route.secure'

//Material.ui
import { Badge, Paper, Grid, Typography, IconButton, Tooltip, Container, AppBar, Toolbar, InputBase } from '@material-ui/core'
import {
    DescriptionOutlined,
    MoreVert,
    SearchOutlined,
    FindInPageOutlined,
    Search
  } from '@material-ui/icons'
  import SearchIcon from '@material-ui/icons/Search';

//css
import classNames from 'classnames/bind'
const styl: any = require('./../css/dashboard.component.styl')
const cx = classNames.bind(styl)

class Dashboard extends React.Component<any, any> {
    state = {
        selected: false,
        front: true,
        values: 1,
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getClaim(id)
    }

    render () {
        const { values } = this.state
        const { routes, Amount } = this.props
        return (
            <React.Fragment>
                <AppBar position="static" className={cx('appHeaders')}>
                    <Toolbar>
                    <Typography className={cx('titleApp')} variant="h6" noWrap>
                        Pequenos Reparos
                    </Typography>
                    <div className={cx('')}>
                        <div className={cx('')}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    </Toolbar>
                </AppBar>
                <Container>
                        <Badge
                            badgeContent={'teste'}
                            className={cx('cardContent')}
                            classes={{ badge: cx('cardContentBadge') }}
                            id={'idCards'}
                        >
                            <Paper className={cx('cardList')}>
                                <Grid container item xs={12}>
                                <Grid item xs={1} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleTipo'>
                                    TIPO
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleTipoInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={1} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleSinistro'>
                                    SINISTRO
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleSinistroInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={1} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleOrcamento'>
                                    ORÇAMENTO
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleOrcamentoInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={3} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleVeiculo'>
                                    VEÍCULO
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleVeiculoInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={1} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titlePlaca'>
                                    PLACA
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titlePlacaInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={1} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleAno'>
                                    ANO
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleAnoInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={2} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleSeguradora'>
                                    SEGURADORA
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleSeguradoraInfo'>
                                    teste
                                    </small>
                                </Grid>
                                <Grid item xs={2} className={cx('cardLine')}>
                                    <Typography className={cx('title-list')} variant="h6" id='titleAtribuido'>
                                    ATRIBUÍDO A
                                    </Typography>
                                    <small className={cx('sub-title-list')} id='titleAtribuidoInfo'>
                                    teste
                                    </small>
                                </Grid>
                                </Grid>
                            <Grid item xs={12} className={cx('list-icon')}>
                            <IconButton className={cx('cardBottomButton')} id={`iconCobertura`}>
                                <Tooltip title="Nota de cobertura">
                                <FindInPageOutlined className={cx('cardBottomIcon')} />
                                </Tooltip>
                            </IconButton>
                                <IconButton
                                className={cx('cardBottomButton')}
                                disableRipple id={`iconRelatorio`}
                                >
                                <Tooltip title="Relatório">
                                    <DescriptionOutlined className={cx('cardBottomIcon')} />
                                </Tooltip>
                                </IconButton>
                            </Grid>
                            </Paper>
                        </Badge>
                </Container>
            </React.Fragment>
        )
    }
}

export default Dashboard