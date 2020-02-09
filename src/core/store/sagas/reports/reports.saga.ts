import { call, put, takeEvery, select } from 'redux-saga/effects'
import { GET_REPORTS_REQUEST, GET_REPORTS_SUCCESS } from '@core/config/constants/actionType.constant'
import reportsService from '@core/services/reports/reports.service'

function* getreportsSaga(action: any) {
    try {
        const REPORTS = yield call(reportsService, action.payload)
        yield put({ type: GET_REPORTS_SUCCESS, payload: REPORTS.data })
    }
    catch(err){

    }
}


function* reportsSaga() {
  yield takeEvery(GET_REPORTS_REQUEST, getreportsSaga)
}

export default reportsSaga
