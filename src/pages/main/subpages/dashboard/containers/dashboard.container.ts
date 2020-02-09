import { connect } from 'react-redux'
import Dashboard from '../components/dashboard.component'
import { claimActions } from '@core/actions'

const mapStateToProps = (state: any) => {
    return {
        Amount: state.claim.assessment &&
                    state.claim.assessment.Total && 
                        state.claim.assessment.Total.toLocaleString("pt-br",{ style: "currency", currency: "BRL" }),
        Id: state.claim.assessment && 
                state.claim.assessment.Id
    }
}


const mapDispatchToProps = (dispatch: any) => {
  return {
      getClaim: (id: number) => {
            dispatch(claimActions.getClaim(id))
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


