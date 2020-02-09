import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    GET_CLAIM_REQUEST, GET_CLAIM_SUCCESS
} from '@core/config/constants/actionType.constant'
import claimService from '@core/services/claim/claim.service'

function* getclaimSaga(action: any) {
    try {
        const CLAIM = yield call(claimService, action.payload)
        yield put({ type: GET_CLAIM_SUCCESS, payload: CLAIM.data })
    }
    catch(err){

    }
}


function* claimSaga() {
  yield takeEvery(GET_CLAIM_REQUEST, getclaimSaga)
}

export default claimSaga
