import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    POST_CREATE_SUCCESS, POST_CREATE_REQUEST
} from '@core/config/constants/actionType.constant'
import createService from '@core/services/create/create.service'

function* postcreateSaga(action: any) {
    try {
        const CREATE = yield call(createService, action.payload)
        yield put({ type: POST_CREATE_SUCCESS, payload: CREATE.data })
    }
    catch(err){

    }
}


function* createSaga() {
  yield takeEvery(POST_CREATE_REQUEST, postcreateSaga)
}

export default createSaga
