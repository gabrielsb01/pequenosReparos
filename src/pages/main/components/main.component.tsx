// React Ecosystem
import * as React from 'react'
import { NavLink, Redirect, Route } from 'react-router-dom'

// material
import {
    AppBar,
    Drawer,
    Toolbar,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Tooltip
  } from '@material-ui/core'

  import {
    Menu as MenuIcon,
    Close,
    Assignment,
    AssignmentTurnedIn,
    Search,
    AddBox,
    Build,
    Settings,
    Dashboard,
    LocalShipping
  } from '@material-ui/icons'

//Components
import PrivateRoute from '@core/secure/route.secure'

//css
import classNames from 'classnames/bind'
const styl: any = require('../css/main.component.styl')
const cx = classNames.bind(styl)

class Main extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
    
        this.state = {
          anchorEl: false,
          open: false,
          left: false
        }
    }

    public RouteWithSubRoutes = (route: any) => {
        return (
          <PrivateRoute path={route.path} secure={route.secure}
            render={props => (
              <route.component {...props}  {...route} />
            )}
          />
        )
    }

    public toggleDrawer = (side, open) => event => {
   
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return
        }
    
        this.setState(prevState =>({
          left: !prevState.left
        }))
    }

    public handleDrawer = () => this.setState({ open: !this.state.open })

    render () {
        const RouteWithSubRoutes = this.RouteWithSubRoutes
        const { routes } = this.props
        const { anchorEl, open, left } = this.state
        const sideList = side => (
            <List className={cx('menuList')}>
                 <React.Fragment>
                    <Tooltip disableHoverListener={open} disableFocusListener={open} title='Dashboard' placement='right'>
                    <ListItem disabled button className={cx('menuListItem')} id="menu-list-orçamentos">
                        <ListItemIcon className={cx('menuListItemIcon')} >
                        <Assignment id="menu-icon-meus-trabalhos"/>
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} className={cx('menuListItemText')} id="menu-texto-meus-trabalhos"/>
                    </ListItem>
                    </Tooltip>
                    <Tooltip disableHoverListener={open} disableFocusListener={open} title='Novo Orçamento' placement='right'>
                    <ListItem disabled button className={cx('menuListItem')} id="menu-list-orcamento">
                        <ListItemIcon className={cx('menuListItemIcon')} >
                        <AddBox id="menu-icon-novo-orcamento"/>
                        </ListItemIcon>
                        <ListItemText primary={'Novo Orçamento'} className={cx('menuListItemText')} id="menu-texto-novo-orcamento"/>
                    </ListItem>
                    </Tooltip>
                </React.Fragment>
            </List>
        )

        return (
            <React.Fragment>
                <div className={cx('box')}>
                    <AppBar color={'secondary'} className={cx('appBar', { appBarShift: open })} position={'absolute'}>
                        <div className={cx('menuLogo')}>
                            PEQUENOS REPAROS
                        </div>
                        <Toolbar className={cx('appBarToolbar')}>
                        <NavLink to={'/main/search/view'}>
                            <IconButton className={cx('appBarToolbarIcon')} id="icon-pesquisa-topo">
                            <Tooltip title="Busca">
                                <Search />
                            </Tooltip>
                            </IconButton>
                        </NavLink>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant={'permanent'}
                        classes={{
                            paper: cx('drawerPaper', { drawerPaperClose: !open })
                        }}
                        open={open}
                    >
                            <div className={cx('toolbar')} onClick={this.handleDrawer}>
                                {open && <Typography className={cx('toolbarTitle')} noWrap title="title-menu" id="text-logo-menu">
                                    Pequenos Reparos
                                </Typography>}

                                <IconButton
                                    aria-label={'Abrir menu'}
                                    onClick={this.handleDrawer}
                                    className={cx('toolbarButton')}
                                    id="icon-abrir-menu"
                                >
                                    {!open && <MenuIcon id="icon-perfil-topo"/>}
                                    {open && <Close id="btn-icon-fechar" />}
                                </IconButton>
                            </div>
                        <List component={'nav'} className={cx('menuList')}>
                        <React.Fragment>
                  <NavLink to={`#`} activeClassName={cx('menuListItemActive')} id="link-menu-preview">
                    <Tooltip disableHoverListener={open} disableFocusListener={open} title='Dashboard' placement='right'>
                      <ListItem button className={cx('menuListItem')} id="menu-list-orçamentos">
                        <ListItemIcon className={cx('menuListItemIcon')} >
                          <Assignment id="menu-icon-meus-trabalhos"/>
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} className={cx('menuListItemText')} id="menu-texto-meus-trabalhos"/>
                      </ListItem>
                    </Tooltip>
                  </NavLink>
                  <NavLink to={'#'} activeClassName={cx('menuListItemActive')} id="link-menu-data-edit">
                    <Tooltip disableHoverListener={open} disableFocusListener={open} title='Novo Orçamento' placement='right'>
                      <ListItem button className={cx('menuListItem')} id="menu-list-orcamento">
                        <ListItemIcon className={cx('menuListItemIcon')} >
                          <AddBox id="menu-icon-novo-orcamento"/>
                        </ListItemIcon>
                        <ListItemText primary={'Novo Orçamento'} className={cx('menuListItemText')} id="menu-texto-novo-orcamento"/>
                      </ListItem>
                    </Tooltip>
                  </NavLink>
                  </React.Fragment>
                        </List>
                    </Drawer>
                    <main className={cx('content')}>
                        {
                            routes.map((route: any, i: number) =>
                                <RouteWithSubRoutes key={i} {...route} />
                            )
                        }
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default Main