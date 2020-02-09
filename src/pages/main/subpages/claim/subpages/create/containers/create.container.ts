import { connect } from 'react-redux'
import Create from '../components/create.component'
import { createActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    success: state.create &&
              state.create.success,
    id: state.claim && 
          state.claim.assessment &&
            state.claim.assessment.Id,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    postCreate: ( payload ) => {
      dispatch(createActions.postCreate(payload))
    },
    resetCreate: () => {
      dispatch(createActions.resetCreate())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Create)


