import { connect } from 'react-redux'
import CheckList from '../components/checklist.component'
import { deleteActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    pecas:  state.claim &&
                state.claim.assessment &&
                    state.claim.assessment.Pecas,
    token: state.claim &&
            state.claim.assessment &&
                state.claim.assessment.Id,
    
    adicional:  state.claim &&
                    state.claim.assessment &&
                        state.claim.assessment.Adicional,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deletePecas: (token: any, id: any) => {
        dispatch(deleteActions.deletePecas(token, id))
    },
    deleteAdicional: (token: any, id: any) => {
        dispatch(deleteActions.deleteAdicional(token, id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckList)


