import * as React from 'react'

//Components
import PrivateRoute from '@core/secure/route.secure'

//Material.ui
import { Typography, Paper, Tabs, Tab, Box } from '@material-ui/core'
import { Assessment, Assignment, DirectionsCar, Description } from '@material-ui/icons'

//css
import classNames from 'classnames/bind'
const styl: any = require('./../css/claim.component.styl')
const cx = classNames.bind(styl)


function TabPanel(props) {
    const { children, value, index, ...other} = props
    return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

class Claim extends React.Component<any, any> {
    state = {
        selected: false,
        front: true,
        values: 0,
    }

    handleChange = (values, val) => {
        const { Id } = this.props
        this.setState({ values: val })
        switch (val){
            case 0: 
                return this.props.history.push(`/main/claim/create/new`)
            case 1: 
                return this.props.history.push(`/main/claim/damage/${Id}`)
            case 2: 
                return this.props.history.push(`/main/claim/checklist/${Id}`)
            case 3: 
                return this.props.history.push(`/main/claim/report/${Id}`)
            default: 
                return this.props.history.push(`/main/claim/create/${Id}`)
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

    componentDidMount() {
        const id = this.props.match.params.id
        if(id != 'new'){
            this.props.getClaim(id)
        }
    }

    render () {
        const { values } = this.state
        const RouteWithSubRoutes = this.RouteWithSubRoutes
        const { routes, Amount } = this.props
        return (
            <React.Fragment>
                <Paper square>
                    <Tabs
                        value={values}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab value={0} icon={<Description />} label="Novo Orçamento"/>
                        <Tab value={1} icon={<DirectionsCar />} label="Captura de Danos" />
                        <Tab value={2} icon={<Assignment />} label="Checklist"/>
                        <Tab value={3} icon={<Assessment />} label="Relatório" />
                        <span className={cx('valueBox')}>{Amount}</span>
                    </Tabs>
                </Paper>
                {
                    routes.map((route: any, i: number) =>
                        <RouteWithSubRoutes key={i} {...route} />
                    )
                }
            </React.Fragment>
        )
    }
}

export default Claim