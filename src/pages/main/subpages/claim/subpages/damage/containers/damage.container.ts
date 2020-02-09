import { connect } from 'react-redux'
import Damage from '../components/damage.component'
import { damageActions } from '@core/actions'

const mapStateToProps = (state: any) => {
  return {
    partSelected: state.damage.partSelected,
    parts:  state.claim &&
              state.claim.assessment &&
                state.claim.assessment.Pecas,
    Id: state.claim.assessment &&
          state.claim.assessment.Id
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectPart: (idPart: number) => {
      dispatch(damageActions.selectPart(idPart))
    },
    updateParts: (parts: any) => {
      dispatch(damageActions.selectPart(parts))
    },
    postDamage: (id: number, payload) => {
      dispatch(damageActions.postDamage(id, payload))
    },
    postParts: (id: number, payload) => {
      dispatch(damageActions.postParts(id, payload))
    },
    postService: (id: number, payload) => {
      dispatch(damageActions.postService(id, payload))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Damage)


