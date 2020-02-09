import * as React from 'react'
import CheckList from './containers/checklist.container'

class CheckListMain extends React.Component<any, any> {
    render () {
        return <CheckList  {...this.props} />
    }
}

export default CheckListMain