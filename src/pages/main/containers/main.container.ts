import { connect } from 'react-redux'
import Main from '../components/main.component'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))


