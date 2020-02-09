import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { DELETE_PECAS_REQUEST, DELETE_PECAS_ERROR, GET_CLAIM_REQUEST, DELETE_ADICIONAL_REQUEST, DELETE_ADICIONAL_ERROR } from '@core/config/constants/actionType.constant'
import deletePecaService from '@core/services/delete/deletePeca.service'
import deleteAdicionalService from '@core/services/delete/deleteAdicional.service'

function* deletePecas(action: any) {
  try {
    yield call(deletePecaService, action.token, action.id)
    yield put({ type: GET_CLAIM_REQUEST, payload: action.token})
  }catch (error) {
    yield put({ type: DELETE_PECAS_ERROR})
  }
}

function* deleteAdicionais(action: any) {
    try {
      yield call(deleteAdicionalService, action.token, action.id)
      yield put({ type: GET_CLAIM_REQUEST, payload: action.token})
    }catch (error) {
      yield put({ type: DELETE_ADICIONAL_ERROR})
    }
  }

function* deleteSaga() {
  yield takeLatest(DELETE_PECAS_REQUEST, deletePecas),
  yield takeLatest(DELETE_ADICIONAL_REQUEST, deleteAdicionais)
}

export default deleteSaga
