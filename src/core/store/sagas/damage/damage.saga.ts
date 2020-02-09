import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    POST_DAMAGE_SUCCESS, POST_DAMAGE_REQUEST, POST_PARTS_REQUEST, POST_PARTS_SUCCESS, POST_SERVICE_REQUEST, POST_SERVICE_SUCCESS
} from '@core/config/constants/actionType.constant'
import damageService from '@core/services/damage/damage.service'
import partsService from '@core/services/parts/parts.service'
import addManualService from '@core/services/manualServices/addManualServices.service'

function* getdamageSaga(action: any) {
    try {
        const DAMAGE = yield call(damageService, action.id, action.payload)
        yield put({ type: POST_DAMAGE_SUCCESS, payload: DAMAGE.data })
    }
    catch(err){

    }
}

function* postPartsSaga(action: any) {
    try {
        const PARTS = yield call(partsService, action.id, action.payload)
        yield put({ type: POST_PARTS_SUCCESS, payload: PARTS.data})
    } catch (error) {
        
    }
}

function* postServicesSaga(action: any) {
    try {
        const SERVICES = yield call(addManualService, action.id, action.payload)
        yield put({ type: POST_SERVICE_SUCCESS, payload: SERVICES.data })
    } catch (error) {
        
    }
}

function* damageSaga() {
  yield takeEvery(POST_DAMAGE_REQUEST, getdamageSaga)
  yield takeEvery(POST_PARTS_REQUEST, postPartsSaga)
  yield takeEvery(POST_SERVICE_REQUEST, postServicesSaga)
}

export default damageSaga
