
import { all } from 'redux-saga/effects'
import claimSaga from './claim/claim.saga'
import damageSaga from './damage/damage.saga'
import reportsSaga from './reports/reports.saga'
import createSaga from './create/create.saga'
import deleteSaga from './delete/delete.saga'

export default function* rootSaga() {
  yield all([
    claimSaga(),
    damageSaga(),
    reportsSaga(),
    createSaga(),
    deleteSaga()
  ])
}
