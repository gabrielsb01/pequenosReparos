import { connect } from 'react-redux'
import Report from '../components/report.component'
import { reportsActions } from '@core/actions'

const mapStateToProps = (state: any) => {
    return {
        reports: state.reports &&
                    state.reports.data &&
                        state.reports.data.Orcamento,
        client: state.reports &&
                    state.reports.data &&
                        state.reports.data.Cliente,
        parts:  state.claim &&
                    state.claim.assessment &&
                        state.claim.assessment.Pecas,
        id: state.claim &&
                state.claim.assessment &&
                    state.claim.assessment.Id,
        resume: state.reports.data &&
                    state.reports.data.Sumario       
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        getReports: (id: number) => {
            dispatch(reportsActions.getReports(id))
        }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Report)


