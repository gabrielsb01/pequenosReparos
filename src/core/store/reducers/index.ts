import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import damage from './damage/damage.reducer'
import claim from './claim/claim.reducer'
import reports from './reports/reports.reducer'
import create from './create/create.reducer'

const reducers = combineReducers({
  damage,
  form,
  claim, 
  reports,
  create
})

export default reducers
